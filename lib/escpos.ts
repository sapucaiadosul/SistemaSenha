import net from 'net';
import iconv from 'iconv-lite';
// @ts-ignore
const Jimp = require('jimp');

export class EscPos {
    private buffer: Buffer;

    constructor() {
        this.buffer = Buffer.alloc(0);
    }

    private add(data: Buffer | number[]) {
        if (Array.isArray(data)) {
            this.buffer = Buffer.concat([this.buffer, Buffer.from(data)]);
        } else {
            this.buffer = Buffer.concat([this.buffer, data]);
        }
    }

    init() {
        this.add([0x1B, 0x40]); // ESC @ (Initialize)
        this.add([0x1C, 0x2E]); // FS . (Cancel Kanji Character Mode) - Fix for "Chinese characters"
        // Set Codepage to PC850 (Multilingual)
        // ESC t n. n=2 is usually PC850.
        this.add([0x1B, 0x74, 0x02]);
        return this;
    }

    align(align: 'left' | 'center' | 'right') {
        const value = align === 'center' ? 1 : align === 'right' ? 2 : 0;
        this.add([0x1B, 0x61, value]);
        return this;
    }

    text(text: string) {
        // Encode text to PC850 to support Portuguese accents
        const encoded = iconv.encode(text, 'cp850');
        this.add(encoded);
        return this;
    }

    textLine(text: string) {
        this.text(text);
        this.add([0x0A]); // LF
        return this;
    }

    bold(enable: boolean) {
        this.add([0x1B, 0x45, enable ? 1 : 0]);
        return this;
    }

    size(width: number, height: number) {
        // GS ! n
        // 0-7, standard is 0 (normal)
        // width 0-7, height 0-7. Combined byte: (width << 4) | height
        const n = ((width & 0x7) << 4) | (height & 0x7);
        this.add([0x1D, 0x21, n]);
        return this;
    }

    feed(lines: number = 1) {
        this.add([0x1B, 0x64, lines]);
        return this;
    }

    cut() {
        this.add([0x1D, 0x56, 0x41, 0x10]); // GS V m n (Cut full + feed)
        return this;
    }

    /**
     * Print an image from a URL or Base64 string
     */
    async image(source: string, maxWidth: number = 380) {
        try {
            const image = await Jimp.read(source);

            // Resize if too wide (standard 58mm ~384px, 80mm ~576px)
            if (image.bitmap.width > maxWidth) {
                // Calculate new height manually to preserve aspect ratio
                const newHeight = Math.floor(image.bitmap.height * (maxWidth / image.bitmap.width));
                // @ts-ignore
                image.resize(maxWidth, newHeight);
            }

            // Convert to monochrome (black & white) for ESC/POS
            image.greyscale().contrast(1);
            // dither565 removed as it might be missing in v1

            // Raster Bit Image Algorithm (GS v 0)
            const width = image.bitmap.width;
            const height = image.bitmap.height;
            const bytesPerLine = Math.ceil(width / 8);

            const buffer = Buffer.alloc(bytesPerLine * height + 8);

            // Command header: GS v 0 m xL xH yL yH
            buffer.writeUInt8(0x1D, 0);
            buffer.writeUInt8(0x76, 1);
            buffer.writeUInt8(0x30, 2); // mode 0 (normal)
            buffer.writeUInt8(0x00, 3); // m=0

            // xL, xH (width in bytes)
            buffer.writeUInt16LE(bytesPerLine, 4);
            // yL, yH (height in dots)
            buffer.writeUInt16LE(height, 6);

            let offset = 8;
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < bytesPerLine; x++) {
                    let byte = 0;
                    for (let bit = 0; bit < 8; bit++) {
                        const pixelX = x * 8 + bit;
                        if (pixelX < width) {
                            const idx = image.getPixelIndex(pixelX, y);
                            // Simple thresholding: if dark, set bit to 1 (print black)
                            // Jimp bitmap data is RGBA. greyscale() makes R=G=B.
                            const r = image.bitmap.data[idx];
                            if (r < 128) {
                                byte |= (1 << (7 - bit));
                            }
                        }
                    }
                    buffer.writeUInt8(byte, offset++);
                }
            }

            this.add(buffer);
        } catch (e) {
            console.error('Failed to process image:', e);
        }
        return this;
    }

    async print(host: string, port: number = 9100, timeout = 5000): Promise<void> {
        return new Promise((resolve, reject) => {
            const socket = new net.Socket();
            let isConnected = false;

            socket.setTimeout(timeout);

            socket.connect(port, host, () => {
                isConnected = true;
                socket.write(this.buffer, () => {
                    socket.end(); // close logic
                });
            });

            socket.on('close', () => {
                if (isConnected) resolve();
            });

            socket.on('error', (err) => {
                socket.destroy();
                reject(err);
            });

            socket.on('timeout', () => {
                socket.destroy();
                reject(new Error('Printer connection timed out'));
            });
        });
    }

    getBuffer() {
        return this.buffer;
    }
}
