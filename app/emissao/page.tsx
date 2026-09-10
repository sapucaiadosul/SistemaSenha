'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type TicketType = {
    id: number;
    code: string;
    description: string;
    priority: number;
    group_type: string; // e.g. "ESTADO", "MUNICIPIO", "FARMACIA"
};

export default function EmissaoPage() {
    const [user, setUser] = useState<{ name: string, username: string } | null>(null);
    const [types, setTypes] = useState<TicketType[]>([]);
    const [groupsConfig, setGroupsConfig] = useState<{ id: string, label: string, color: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [lastTicket, setLastTicket] = useState<{ code: string, type: string } | null>(null);
    const [printData, setPrintData] = useState<any>(null);

    const logout = () => {
        localStorage.removeItem('senhas_user');
        window.location.href = '/login?redirect=/emissao';
    };

    const fetchTypes = async () => {
        try {
            const res = await fetch(`/api/tickets/types?_t=${Date.now()}`, { cache: 'no-store' });
            const data = await res.json();
            if (Array.isArray(data)) setTypes(data);
        } catch (err) { console.error(err); }
        setLoading(false);
    };

    const fetchSettings = async () => {
        try {
            const res = await fetch('/api/admin/settings');
            const data = await res.json();
            if (data.ticket_groups) {
                setGroupsConfig(JSON.parse(data.ticket_groups));
            }
        } catch (err) { console.error("Error loading settings", err); }
    };

    useEffect(() => {
        // Auth Check & Initial Load
        const init = async () => {
            const userStr = localStorage.getItem('senhas_user');

            if (!userStr) {
                // Not logged in -> Redirect
                window.location.href = '/login?redirect=/emissao';
                return;
            }

            try {
                setUser(JSON.parse(userStr));
            } catch (e) { }

            // Logged in -> Load Data
            await fetchTypes();
            await fetchSettings();

            // Start Polling
            const interval = setInterval(() => {
                fetchTypes();
                fetchSettings();
            }, 30000);

            return () => clearInterval(interval);
        };

        init();
    }, []);

    // Auto Print Trigger
    useEffect(() => {
        if (printData) {
            // Check if network printing is enabled
            if (printData.printing_mode !== 'NETWORK') {
                // Browser Printing
                setTimeout(() => window.print(), 100);
            } else {
                // Network Printing (Success)
                console.log('Ticket sent to network printer');
            }
        }
    }, [printData]);

    const issueTicket = async (typeId: number) => {
        try {
            const res = await fetch('/api/tickets/issue', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ typeId })
            });
            const data = await res.json();

            if (data.success) {
                setLastTicket({
                    code: data.printData.code,
                    type: data.printData.type
                });
                setPrintData(data.printData);

                setTimeout(() => {
                    setLastTicket(null);
                    setPrintData(null);
                }, 5000);
            }
        } catch (err) {
            console.error('Failed to issue ticket', err);
            alert('Erro ao emitir senha');
        }
    };

    if (loading) return <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">Carregando...</div>;

    // Group types by group_type dynamically
    const groupedTypes = types.reduce((acc, t) => {
        const group = t.group_type || 'OUTROS';
        if (!acc[group]) acc[group] = [];
        acc[group].push(t);
        return acc;
    }, {} as Record<string, TicketType[]>);

    // Determine Groups to Show (Ordered by Config)
    const presentKeys = Object.keys(groupedTypes);
    const orderedGroups: { id: string, label: string, color: string }[] = [];

    // 1. Add Configured Groups (if present in types)
    if (groupsConfig.length > 0) {
        groupsConfig.forEach(g => {
            if (presentKeys.includes(g.id)) orderedGroups.push(g);
        });
        // 2. Add Leftovers (groups present but not in config)
        presentKeys.forEach(k => {
            if (!groupsConfig.find(g => g.id === k)) {
                orderedGroups.push({ id: k, label: k, color: 'blue' }); // Default
            }
        });
    } else {
        // Fallback: Just show keys
        presentKeys.forEach(k => orderedGroups.push({ id: k, label: k, color: 'blue' }));
    }

    // Grid cols
    const gridCols = orderedGroups.length === 1 ? 'grid-cols-1' : (orderedGroups.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3');

    // Safe Color Themes for Tailwind
    const colorThemes = [
        { name: 'blue', border: 'border-blue-500', text: 'text-blue-400', btnBg: 'bg-blue-600', btnHover: 'hover:bg-blue-500', btnActive: 'active:bg-blue-700' },
        { name: 'green', border: 'border-green-500', text: 'text-green-400', btnBg: 'bg-green-600', btnHover: 'hover:bg-green-500', btnActive: 'active:bg-green-700' },
        { name: 'purple', border: 'border-purple-500', text: 'text-purple-400', btnBg: 'bg-purple-600', btnHover: 'hover:bg-purple-500', btnActive: 'active:bg-purple-700' },
        { name: 'teal', border: 'border-teal-500', text: 'text-teal-400', btnBg: 'bg-teal-600', btnHover: 'hover:bg-teal-500', btnActive: 'active:bg-teal-700' },
        { name: 'red', border: 'border-red-500', text: 'text-red-400', btnBg: 'bg-red-600', btnHover: 'hover:bg-red-500', btnActive: 'active:bg-red-700' },
        { name: 'orange', border: 'border-orange-500', text: 'text-orange-400', btnBg: 'bg-orange-600', btnHover: 'hover:bg-orange-500', btnActive: 'active:bg-orange-700' },
        { name: 'pink', border: 'border-pink-500', text: 'text-pink-400', btnBg: 'bg-pink-600', btnHover: 'hover:bg-pink-500', btnActive: 'active:bg-pink-700' }
    ];

    // Color Helpers
    const getTheme = (colorName: string) => {
        return colorThemes.find(t => t.name === colorName) || colorThemes[0];
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white p-6 flex flex-col items-center">

            <div className="w-full max-w-7xl flex justify-between items-center mb-8">
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">← Voltar</Link>
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold">Emissão de Senhas</h1>
                    {user && <span className="text-xs text-slate-500 mt-1">Logado como: {user.name}</span>}
                </div>
                <div className="w-20 flex justify-end">
                    {user && (
                        <button
                            onClick={logout}
                            className="bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs px-3 py-1 rounded border border-red-500/30 transition-colors"
                        >
                            Sair
                        </button>
                    )}
                </div>
            </div>

            {/* Dynamic Grid */}
            <div className={`grid grid-cols-1 ${gridCols} gap-8 w-full max-w-7xl`}>

                {orderedGroups.map((group) => {
                    const theme = getTheme(group.color);

                    return (
                        <div key={group.id} className={`bg-slate-800 p-8 rounded-3xl border border-slate-700 h-full`}>
                            <h2 className={`text-2xl font-bold mb-6 text-center uppercase border-b border-slate-700 pb-4 ${theme.text} flex justify-between items-center`}>
                                <span>{group.label}</span>
                                <span className={`text-xs px-2 py-1 rounded bg-black/20 text-slate-400 opacity-50 hidden`}>{group.id}</span>
                            </h2>
                            <div className="flex flex-col gap-4">
                                {groupedTypes[group.id].map(type => (
                                    <button
                                        key={type.id}
                                        onClick={() => issueTicket(type.id)}
                                        className={`
                      py-6 px-6 rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-lg
                      flex justify-between items-center
                      ${theme.btnBg} ${theme.btnHover} ${theme.btnActive}
                    `}
                                    >
                                        <span>{type.description}</span>
                                        <span className="bg-black/20 py-1 px-3 rounded text-lg opacity-80">{type.code}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    );
                })}

            </div>

            {/* Overlay Success */}
            {lastTicket && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/85 backdrop-blur-sm z-50 animate-in fade-in duration-200">
                    <div className="bg-white text-black p-12 rounded-3xl text-center shadow-2xl transform scale-110 border-4 border-blue-500">
                        <h3 className="text-2xl font-bold mb-4 text-slate-600">Senha Emitida</h3>
                        <div className="text-8xl font-black mb-4 tracking-tighter text-blue-600">{lastTicket.code}</div>
                        <p className="text-xl text-slate-500 mb-8">{lastTicket.type}</p>
                        <div className="text-sm text-slate-400 font-mono">
                            {printData?.printing_mode === 'NETWORK' ? '🖨️ Enviando para impressora...' : 'Imprimindo ticket...'}
                        </div>
                    </div>
                </div>
            )}

            <footer className="mt-12 text-center text-slate-600 text-xs space-y-1 print:hidden">
                <div>SenhasPro • Desenvolvido por <span className="text-slate-500">Estou Apta Technology</span></div>
                <div>CNPJ 44.342.124/0001-20</div>
            </footer>

            {/* PRINT LAYOUT (Hidden on Screen, Visible on Print) */}
            {printData && (
                <div className="hidden print:block absolute top-0 left-0 w-full h-auto bg-white text-black p-0 m-0 z-[9999]">
                    <style jsx global>{`
                        @media print {
                            @page { margin: 0; size: auto; }
                            body * { visibility: hidden; }
                            .print-content, .print-content * { visibility: visible; }
                            .print-content { position: absolute; left: 0; top: 0; width: 100%; }
                        }
                    `}</style>
                    <div className="print-content flex flex-col items-center text-center p-4 max-w-[80mm] mx-auto">

                        {/* HEADER / LOGO */}
                        <div className={`w-full mb-4 flex flex-col ${printData.logoAlign === 'left' ? 'items-start' : printData.logoAlign === 'right' ? 'items-end' : 'items-center'}`}>
                            {printData.logoUrl && (
                                <img src={printData.logoUrl} alt="Logo" className="max-h-16 mb-2 object-contain" />
                            )}
                            {printData.title && (
                                <div className="font-bold text-xl uppercase leading-tight">{printData.title}</div>
                            )}
                        </div>

                        {/* TICKET INFO */}
                        <div className="w-full border-t-2 border-dashed border-black my-2"></div>

                        <div className="text-sm font-bold mt-2 uppercase">{printData.type}</div>
                        <div className="text-6xl font-black my-2 tracking-tighter">{printData.code}</div>

                        <div className="text-xs mb-4 uppercase">{printData.waitInfo}</div>

                        {/* DATE/TIME */}
                        {(printData.showDate || printData.showTime) && (
                            <div className="text-xs font-mono mb-4">
                                {printData.showDate && printData.date.split(',')[0]} {/* DD/MM/YYYY */}
                                {printData.showDate && printData.showTime && ' - '}
                                {printData.showTime && printData.date.split(',')[1]} {/* HH:MM:SS */}
                            </div>
                        )}

                        {/* SPONSORS / FOOTER */}
                        <div className="w-full border-t border-dashed border-gray-400 my-2"></div>

                        {printData.footer && (
                            <div className="text-sm font-semibold whitespace-pre-wrap mb-4">{printData.footer}</div>
                        )}

                        {printData.showSponsors && printData.sponsorsText && (
                            <div className="text-[10px] text-gray-600 mt-2">
                                {printData.sponsorsText}
                            </div>
                        )}

                        <div className="mt-4 text-[10px] text-gray-400">SenhasPro.com.br</div>
                    </div>
                </div>
            )}
        </div>
    );
}
