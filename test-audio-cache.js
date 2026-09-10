const crypto = require('crypto');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'db/database.sqlite');
const BASE_URL = 'http://localhost:3000';

async function testAudioCache() {
    console.log('--- Testing Audio Cache ---');

    const fakeVoiceId = 'voice_123';
    const fakeText = 'Senha teste cache';
    const textHash = crypto.createHash('md5').update(fakeText + fakeVoiceId).digest('hex');
    const fakeAudioData = Buffer.from('FAKE_AUDIO_DATA');

    console.log(`Injecting fake cache for: "${fakeText}" with VoiceID: ${fakeVoiceId}`);
    console.log(`Hash: ${textHash}`);

    // 1. Update settings
    console.log('Updating settings...');
    const putRes = await fetch(`${BASE_URL}/api/admin/settings`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            elevenlabs_voice_id: fakeVoiceId,
            elevenlabs_api_key: 'sk_fake_key'
        })
    });
    console.log('Update Status:', putRes.status);

    // 2. Verify settings
    const getRes = await fetch(`${BASE_URL}/api/admin/settings`);
    const settings = await getRes.json();
    console.log('Current Settings:', {
        key: settings.elevenlabs_api_key,
        voice: settings.elevenlabs_voice_id
    });

    if (settings.elevenlabs_voice_id !== fakeVoiceId) {
        console.error('❌ Settings update failed. Aborting.');
        return;
    }

    // 3. Insert into DB (Closing DB after)
    await new Promise((resolve, reject) => {
        const db = new sqlite3.Database(dbPath);
        db.serialize(() => {
            db.run(`CREATE TABLE IF NOT EXISTS audio_cache (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                text_hash TEXT UNIQUE NOT NULL,
                voice_id TEXT NOT NULL,
                audio_data BLOB NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`);

            const stmt = db.prepare('INSERT OR REPLACE INTO audio_cache (text_hash, voice_id, audio_data) VALUES (?, ?, ?)');
            stmt.run(textHash, fakeVoiceId, fakeAudioData, (err) => {
                if (err) {
                    console.error('DB Insert Error:', err);
                    reject(err);
                } else {
                    console.log('✅ Fake audio inserted into DB.');
                    resolve();
                }
            });
            stmt.finalize();
        });
        db.close();
    });

    // 4. Call API
    console.log('Calling API...');
    const res = await fetch(`${BASE_URL}/api/elevenlabs/generate?text=${encodeURIComponent(fakeText)}`);

    console.log('API Status:', res.status);
    const headers = res.headers;
    console.log('X-Cache Header:', headers.get('x-cache'));

    // We expect "FAKE_AUDIO_DATA" textual content if it's a HIT
    // But since it's octet-stream/audio, getting text might vary.
    const bodyText = await res.text();
    console.log('Body Preview:', bodyText.substring(0, 50));

    if (bodyText === 'FAKE_AUDIO_DATA' && headers.get('x-cache') === 'HIT') {
        console.log('✅ SUCCESS! API returned cached audio.');
    } else {
        console.log('❌ FAILURE! Did not return cached audio.');
    }
}

testAudioCache();
