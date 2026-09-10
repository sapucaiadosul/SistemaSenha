'use client';

import { useState, useEffect, useRef } from 'react';

type Ticket = {
    id: number;
    code: string;
    type_description: string;
    counter_number: number;
    called_at: string;
    recall_count: number;
    status: string;
};

// Client-side only clock to prevent hydration mismatch
function Clock() {
    const [time, setTime] = useState('');
    useEffect(() => {
        const update = () => setTime(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
        update();
        const i = setInterval(update, 1000);
        return () => clearInterval(i);
    }, []);
    return <span className="text-2xl font-mono text-slate-400">{time}</span>;
}

export default function TVPage() {
    const [current, setCurrent] = useState<Ticket | null>(null);
    const [history, setHistory] = useState<Ticket[]>([]);
    const [tickerText, setTickerText] = useState('Bem-vindo! Aguarde sua senha ser chamada no painel.');

    // Ad State
    const [ads, setAds] = useState<any[]>([]);
    const [currentAdIndex, setCurrentAdIndex] = useState(0);

    const [useElevenLabs, setUseElevenLabs] = useState(false);
    const [audioEnabled, setAudioEnabled] = useState(false);
    const [audioStatus, setAudioStatus] = useState(''); // '', 'generating', 'playing', 'error', 'fallback'

    // Use ref to access current audioEnabled value in useEffect callbacks
    const audioEnabledRef = useRef(audioEnabled);
    useEffect(() => {
        audioEnabledRef.current = audioEnabled;
    }, [audioEnabled]);

    // Audio queue system - play one ticket at a time
    const audioQueueRef = useRef<Ticket[]>([]);
    const isPlayingRef = useRef(false);

    // Check if ElevenLabs is configured
    useEffect(() => {
        fetch('/api/admin/settings')
            .then(res => res.json())
            .then(data => {
                console.log('TV Settings loaded:', {
                    hasApiKey: !!data.elevenlabs_api_key,
                    hasOpenAI: !!data.openai_api_key,
                    voiceId: data.elevenlabs_voice_id
                });
                if (data.elevenlabs_api_key || data.openai_api_key) {
                    setUseElevenLabs(true); // Keeping state name but means "Use AI"
                    console.log('AI Audio ENABLED');
                } else {
                    console.log('AI Audio DISABLED');
                }
            })
            .catch((e) => {
                console.error('Failed to load settings:', e);
            });
    }, []);

    // Play chime sound
    const playChime = () => {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();

        const playTone = (freq: number, startTime: number, duration: number) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);

            gain.gain.setValueAtTime(0, ctx.currentTime + startTime);
            gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + startTime + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + startTime + duration);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + startTime);
            osc.stop(ctx.currentTime + startTime + duration);
        };

        playTone(523.25, 0, 1.2);
        playTone(659.25, 0.4, 1.2);
        playTone(783.99, 0.8, 1.8);
    };

    // Play speech (based on voice_provider setting)
    const playSpeech = async (ticket: Ticket) => {
        const text = `Senha ${ticket.code}. Guichê ${ticket.counter_number}`;
        setAudioStatus('Verificando voz...');

        // Always check fresh settings
        try {
            const settingsRes = await fetch('/api/admin/settings');
            const settings = await settingsRes.json();
            const voiceProvider = settings.voice_provider || 'browser';
            const hasOpenAI = !!settings.openai_api_key;
            const hasElevenLabs = settings.elevenlabs_api_key && settings.elevenlabs_voice_id;

            console.log('Voice provider:', voiceProvider, 'OpenAI:', hasOpenAI, 'ElevenLabs:', hasElevenLabs);

            // Use the configured provider
            if (voiceProvider === 'openai' && hasOpenAI) {
                setAudioStatus('Gerando voz (OpenAI)...');
                console.log('Using OpenAI TTS...');

                const response = await fetch(`/api/openai/tts?text=${encodeURIComponent(text)}`);

                if (response.ok) {
                    const contentType = response.headers.get('Content-Type');
                    if (contentType?.includes('audio')) {
                        const blob = await response.blob();
                        const audio = new Audio(URL.createObjectURL(blob));

                        try {
                            setAudioStatus('Falando (OpenAI)...');
                            await audio.play();
                            audio.onended = () => {
                                setAudioStatus('');
                                processNextInQueue();
                            };
                            console.log('OpenAI Audio playing');
                            return; // SUCCESS
                        } catch (playError) {
                            console.error('OpenAI Play failed:', playError);
                            setAudioStatus('Erro player OpenAI');
                        }
                    }
                } else {
                    console.error('OpenAI TTS response not ok:', response.status);
                }
            } else if (voiceProvider === 'elevenlabs' && hasElevenLabs) {
                setAudioStatus('Gerando voz (ElevenLabs)...');
                console.log('Using ElevenLabs TTS...');

                const response = await fetch(`/api/elevenlabs/generate?text=${encodeURIComponent(text)}`);

                if (response.ok) {
                    const contentType = response.headers.get('Content-Type');
                    if (contentType?.includes('audio')) {
                        const blob = await response.blob();
                        const audio = new Audio(URL.createObjectURL(blob));

                        try {
                            setAudioStatus('Falando (ElevenLabs)...');
                            await audio.play();
                            audio.onended = () => {
                                setAudioStatus('');
                                processNextInQueue();
                            };
                            console.log('ElevenLabs Audio playing');
                            return; // SUCCESS
                        } catch (playError) {
                            console.error('ElevenLabs Play failed:', playError);
                            setAudioStatus('Erro player ElevenLabs');
                        }
                    }
                } else {
                    console.error('ElevenLabs TTS response not ok:', response.status);
                }
            }
            // Provider is 'browser' or AI failed - use fallback
        } catch (e) {
            console.error('Error checking/playing Audio:', e);
        }

        // Fallback: Browser Speech Synthesis
        setAudioStatus('Voz local...');
        console.log('Using browser fallback TTS');
        // Improve local spacing
        const spokenCode = ticket.code.replace(/(\d)/g, ' $1 ');
        const browserText = `Senha, ${spokenCode}, Guichê ${ticket.counter_number}`;
        const u = new SpeechSynthesisUtterance(browserText);
        u.lang = 'pt-BR';
        u.rate = 0.8;
        u.pitch = 1.0;
        u.onend = () => {
            setAudioStatus('');
            // Signal that audio is done - process next in queue
            processNextInQueue();
        };
        window.speechSynthesis.speak(u);
    };

    const processedSignatures = useRef<Set<string>>(new Set());
    const isFirstLoad = useRef(true);

    // Process next ticket in the audio queue
    const processNextInQueue = () => {
        if (audioQueueRef.current.length === 0) {
            isPlayingRef.current = false;
            return;
        }

        const nextTicket = audioQueueRef.current.shift()!;
        console.log('Processing next in queue:', nextTicket.code);

        // SYNC DISPLAY WITH AUDIO
        setCurrent(nextTicket);

        // Play chime then speech
        isPlayingRef.current = true;
        playChime();
        setTimeout(() => playSpeech(nextTicket), 1800);
    };

    // Helper to queue
    const addToQueue = (ticket: Ticket) => {
        audioQueueRef.current.push(ticket);
        if (!isPlayingRef.current) {
            processNextInQueue();
        }
    };

    // Enable audio on user interaction
    const enableAudio = () => {
        setAudioEnabled(true);
        // Play a silent sound to unlock audio
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        gain.gain.value = 0.001;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    };

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const res = await fetch('/api/tickets/called?limit=10'); // Fetch slightly more to ensure continuity
                const data = await res.json();

                if (Array.isArray(data) && data.length > 0) {
                    // Update History (Show all except the one currently on Screen/Queue if any?)
                    // For simplicity, History shows data excluding the very top one if it's currently active.
                    // Actually, standard behavior: History is the list. Main is the Highlight.
                    setHistory(data.slice(0, 5));

                    // Sort by time ASC (Older -> Newer) to process in order
                    const sortedData = [...data].reverse();

                    if (isFirstLoad.current) {
                        // First load: Don't queue audio, just show the latest active one
                        const active = data.find((t: any) => t.status === 'CALLED');
                        if (active) setCurrent(active);

                        // Mark all as processed so we don't re-announce old ones
                        sortedData.forEach((t: any) => {
                            processedSignatures.current.add(`${t.id}-${t.called_at}-${t.recall_count}`);
                        });
                        isFirstLoad.current = false;
                    } else {
                        // Subsequent loads: Check for NEW calls
                        sortedData.forEach((t: any) => {
                            if (t.status === 'CALLED') {
                                const sig = `${t.id}-${t.called_at}-${t.recall_count}`;
                                if (!processedSignatures.current.has(sig)) {
                                    // New Call!
                                    processedSignatures.current.add(sig);
                                    if (audioEnabledRef.current) {
                                        addToQueue(t);
                                    } else {
                                        setCurrent(t);
                                    }
                                }
                            }
                        });
                    }
                } else {
                    if (isFirstLoad.current) {
                        setCurrent(null);
                        setHistory([]);
                        isFirstLoad.current = false;
                    }
                }
            } catch (e) {
                console.error(e);
            }
        };

        fetchTickets();
        const interval = setInterval(fetchTickets, 1000);
        return () => clearInterval(interval);
    }, []);

    // Fetch ticker text from settings
    useEffect(() => {
        fetch('/api/admin/settings')
            .then(res => res.json())
            .then(data => {
                if (data.ticker_text) setTickerText(data.ticker_text);
            })
            .catch(() => { });
    }, []);

    // Fetch Ads - with auto-refresh every 10 seconds
    useEffect(() => {
        const fetchAds = () => {
            fetch('/api/admin/media')
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        const active = data.filter((m: any) => m.active);
                        setAds(prevAds => {
                            // Deep compare to avoid unnecessary updates/re-renders
                            if (JSON.stringify(active) === JSON.stringify(prevAds)) {
                                return prevAds;
                            }
                            console.log('Ads updated:', active.length);
                            return active;
                        });
                    }
                })
                .catch(err => console.error('Failed to load ads:', err));
        };

        fetchAds(); // Initial fetch
        const interval = setInterval(fetchAds, 10000); // Refresh every 10 seconds
        return () => clearInterval(interval);
    }, []);

    // Adjust index if ads change (e.g. keep current if possible, or reset)
    useEffect(() => {
        setCurrentAdIndex(prev => {
            if (prev >= ads.length) return 0;
            return prev;
        });
    }, [ads]);

    // Rotate Ads
    useEffect(() => {
        if (ads.length === 0) return;
        const currentAd = ads[currentAdIndex];
        const duration = (currentAd.duration || 10) * 1000;

        const timer = setTimeout(() => {
            setCurrentAdIndex((prev) => (prev + 1) % ads.length);
        }, duration);

        return () => clearTimeout(timer);
    }, [ads, currentAdIndex]);

    return (
        <div className="h-screen w-screen bg-black text-white flex flex-col overflow-hidden">

            {/* Audio Unlock Overlay - only shows if audio not enabled */}
            {!audioEnabled && (
                <div
                    className="absolute inset-0 bg-black/95 z-50 flex items-center justify-center cursor-pointer"
                    onClick={enableAudio}
                >
                    <div className="text-center animate-pulse">
                        <div className="text-9xl mb-6">🔊</div>
                        <div className="text-4xl font-bold mb-4">CLIQUE PARA ATIVAR O SOM</div>
                        <div className="text-xl text-slate-400">Necessário apenas uma vez</div>
                    </div>
                </div>
            )}

            {/* Main Content - Fill screen */}
            <div className="flex flex-1 gap-4 p-4 h-full">

                {/* Left: Main Big Display (Current) */}
                <div
                    key={`${current?.id}-${current?.called_at}-${current?.recall_count}`}
                    className="flex-[2] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700 flex flex-col items-center justify-center relative overflow-hidden animate-in zoom-in-95 duration-300"
                >
                    <div className="absolute inset-0 bg-blue-500/5 animate-pulse"></div>

                    <h2 className="text-4xl text-slate-400 font-medium uppercase tracking-widest mb-8 z-10">Senha Atual</h2>

                    <div className="text-[12rem] leading-none font-black text-white z-10 drop-shadow-[0_0_50px_rgba(59,130,246,0.5)] whitespace-nowrap">
                        {current ? current.code : '---'}
                    </div>

                    <div className="flex flex-col items-center z-10 mt-8">
                        <span className="text-3xl text-slate-400 mb-2">Dirija-se ao</span>
                        <div className="text-7xl font-bold text-yellow-400 bg-black/30 px-10 py-3 rounded-2xl">
                            GUICHÊ {current ? current.counter_number : '--'}
                        </div>
                    </div>

                    <div className="absolute bottom-8 text-2xl text-slate-500 z-10">
                        {current ? current.type_description : ''}
                    </div>
                </div>

                {/* Right: History & Ads */}
                <div className="flex-1 flex flex-col gap-4 min-w-0">

                    {/* Recent History - With Clock in header */}
                    <div className="bg-slate-800 rounded-3xl border border-slate-700 p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-center mb-4 border-b border-slate-600 pb-3">
                            <h3 className="text-2xl font-bold text-slate-300">Últimas Chamadas</h3>
                            <Clock />
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            {history.map(ticket => {
                                const isAbsent = ticket.status === 'NO_SHOW';
                                const isDone = ticket.status === 'DONE' || ticket.status === 'SERVING';
                                return (
                                    <div key={ticket.id} className="flex justify-between items-center bg-slate-700/50 p-4 rounded-xl flex-1 relative overflow-hidden">
                                        {/* Status Strip */}
                                        <div className={`absolute left-0 top-0 bottom-0 w-2 ${isAbsent ? 'bg-red-500' : (isDone ? 'bg-green-500' : 'bg-transparent')}`}></div>

                                        <div className="pl-4">
                                            <span className="text-4xl font-bold text-slate-200 block leading-none">{ticket.code}</span>
                                            {/* Status Badge */}
                                            {isAbsent && <span className="text-xs font-bold text-red-400 uppercase tracking-wider mt-1 block">Ausente</span>}
                                            {isDone && <span className="text-xs font-bold text-green-400 uppercase tracking-wider mt-1 block">Atendida</span>}
                                        </div>

                                        <div className="text-right">
                                            <span className="block text-sm text-slate-400">Guichê</span>
                                            <span className="text-3xl font-bold text-yellow-500">{ticket.counter_number}</span>
                                        </div>
                                    </div>
                                );
                            })}
                            {history.length === 0 && (
                                <div className="flex-1 flex items-center justify-center text-slate-600 text-xl">
                                    Aguardando chamadas...
                                </div>
                            )}
                        </div>
                    </div>


                    {/* Ad Space */}
                    <div className="h-48 bg-slate-800 rounded-3xl border border-slate-700 flex items-center justify-center overflow-hidden relative w-full">
                        {ads.length > 0 ? (
                            (() => {
                                const ad = ads[currentAdIndex];
                                if (!ad) return null; // Safety check
                                const adType = ad.type?.toUpperCase();

                                if (adType === 'VIDEO') {
                                    return (
                                        <video
                                            src={ad.content}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                        />
                                    );
                                } else if (adType === 'NEWS' || adType === 'TEXT') {
                                    const isLongText = ad.content.length > 50;
                                    return (
                                        <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-blue-900 to-slate-800 animate-news-attention overflow-hidden">
                                            {isLongText ? (
                                                <p className="text-2xl text-white font-bold whitespace-nowrap animate-news-scroll">
                                                    {ad.content}
                                                </p>
                                            ) : (
                                                <p className="text-2xl text-white font-bold text-center animate-pulse">
                                                    {ad.content}
                                                </p>
                                            )}
                                        </div>
                                    );
                                } else {
                                    // Default: IMAGE
                                    return (
                                        <img
                                            src={ad.content}
                                            alt="Publicidade"
                                            className="w-full h-full object-cover"
                                        />
                                    );
                                }
                            })()
                        ) : (
                            <span className="text-slate-600 text-xl">Espaço Publicitário</span>
                        )}
                        {/* Ad Debug Info (Optional, small) */}
                        {ads.length > 0 && <div className="absolute bottom-1 right-1 text-[10px] text-white/50">{currentAdIndex + 1}/{ads.length}</div>}
                    </div>
                </div>

            </div>

            {/* Audio Status */}
            {audioStatus && (
                <div className="absolute bottom-16 right-4 z-50 bg-black/60 px-3 py-1 rounded text-xs text-slate-300 pointer-events-none">
                    🔊 {audioStatus}
                </div>
            )}

            {/* Scrolling Ticker Footer */}
            <div className="bg-blue-900/50 py-3 px-4">
                <div className="whitespace-nowrap overflow-hidden">
                    <p className="animate-marquee inline-block text-xl">
                        {tickerText}
                    </p>
                </div>
            </div>

            <style jsx>{`
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                .animate-news-attention {
                    animation: attention-pulse 2s ease-in-out infinite;
                }
                @keyframes attention-pulse {
                    0%, 100% { box-shadow: inset 0 0 0 0 rgba(234, 179, 8, 0); }
                    50% { box-shadow: inset 0 0 30px 5px rgba(234, 179, 8, 0.3); }
                }
                .animate-news-scroll {
                    animation: news-scroll 15s linear infinite;
                }
                @keyframes news-scroll {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
            `}</style>
        </div>
    );
}
