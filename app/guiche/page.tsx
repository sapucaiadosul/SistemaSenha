'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { differenceInMinutes, parseISO } from 'date-fns';

type Ticket = {
    id: number;
    code: string;
    status: string;
};

type QueueStat = {
    description: string;
    code: string;
    count: number;
    group_type: string;
    oldest_ticket: string | null;
};

export default function GuichePage() {
    const [counterId, setCounterId] = useState<number | null>(null);
    const [currentTicket, setCurrentTicket] = useState<Ticket | null>(null);
    const [queueStats, setQueueStats] = useState<QueueStat[]>([]);
    const [loading, setLoading] = useState(false);

    // New state for Specific Call
    const [specificCode, setSpecificCode] = useState('');
    const [showSpecificInput, setShowSpecificInput] = useState(false);

    // Load Counter ID from localStorage or prompt
    const [user, setUser] = useState<any>(null);
    const [availableCounters, setAvailableCounters] = useState<any[]>([]);

    useEffect(() => {
        // Auth Check
        const userStr = localStorage.getItem('senhas_user');
        if (!userStr) {
            window.location.href = '/login';
            return;
        }
        setUser(JSON.parse(userStr));

        // Always load available counters for selection on page load
        fetch('/api/admin/counters')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) setAvailableCounters(data);
            });
    }, []);

    // Poll stats
    useEffect(() => {
        if (!counterId) return;
        const fetchStats = () => {
            fetch(`/api/stats/queue?counterId=${counterId}`)
                .then(res => res.json())
                .then(setQueueStats)
                .catch(console.error);
        };
        fetchStats();
        const interval = setInterval(fetchStats, 5000);
        return () => clearInterval(interval);
    }, [counterId]);

    const selectCounter = (id: number) => {
        setCounterId(id);
        // Don't save to localStorage - require selection each login
    };

    if (!user) return null; // Wait for redirect

    // If no counter selected, show selection screen
    if (!counterId) {
        return (
            <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
                <h1 className="text-3xl font-bold mb-8">Olá, {user.name}</h1>
                <p className="text-xl text-slate-400 mb-6">Selecione seu Guichê:</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
                    {availableCounters.map((c: any) => (
                        <button
                            key={c.id}
                            onClick={() => selectCounter(c.number)}
                            className="bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-xl p-6 transition-all group"
                        >
                            <div className="text-4xl font-bold mb-2 group-hover:text-white text-slate-300">{c.number}</div>
                            <div className="text-xs uppercase tracking-wider text-slate-500 group-hover:text-blue-200">{c.group_type}</div>
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => { localStorage.removeItem('senhas_user'); window.location.href = '/login'; }}
                    className="mt-12 text-slate-500 hover:text-red-400 underline"
                >
                    Sair / Trocar Usuário
                </button>
            </div>
        );
    }



    const callNext = async (strategy: string = 'PRIORITY', typeFilter?: number) => {
        if (!counterId) return;
        setLoading(true);

        try {
            const res = await fetch('/api/tickets/next', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    counterId,
                    userId: user?.id,
                    strategy,
                    typeFilter
                })
            });
            const data = await res.json();

            if (data.success && data.ticket) {
                setCurrentTicket(data.ticket);
                // Refresh stats immediately
                fetch(`/api/stats/queue?counterId=${counterId}`).then(res => res.json()).then(setQueueStats);
            } else {
                alert(data.message || 'Ninguém na fila.');
            }
        } catch (err) {
            console.error(err);
            alert('Erro ao chamar.');
        } finally {
            setLoading(false);
        }
    };

    const callSpecific = async () => {
        if (!counterId || !specificCode) return;
        setLoading(true);

        try {
            const res = await fetch('/api/tickets/call-specific', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    counterId,
                    userId: user?.id,
                    ticketCode: specificCode
                })
            });
            const data = await res.json();

            if (data.success && data.ticket) {
                setCurrentTicket(data.ticket);
                setSpecificCode(''); // Clear input
                setShowSpecificInput(false); // Hide input
                // Refresh stats
                fetch(`/api/stats/queue?counterId=${counterId}`).then(res => res.json()).then(setQueueStats);
            } else {
                alert(data.message || 'Erro ao chamar senha específica.');
            }
        } catch (err) {
            console.error(err);
            alert('Erro ao processar chamada específica.');
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (status: 'DONE' | 'NO_SHOW' | 'SERVING') => {
        if (!currentTicket) return;
        setLoading(true);

        try {
            const res = await fetch('/api/tickets/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ticketId: currentTicket.id, status })
            });

            if (res.ok) {
                if (status === 'SERVING') {
                    // Just update local state to show "Finalizar" button
                    setCurrentTicket({ ...currentTicket, status: 'SERVING' });
                } else {
                    // DONE or NO_SHOW -> Clear
                    setCurrentTicket(null);
                    // Refresh stats
                    fetch(`/api/stats/queue?counterId=${counterId}`).then(res => res.json()).then(setQueueStats);
                }
            } else {
                alert('Erro ao atualizar status');
            }
        } catch (err) {
            console.error(err);
            alert('Erro de conexão');
        } finally {
            setLoading(false);
        }
    };

    const recallTicket = async () => {
        if (!currentTicket) return;
        setLoading(true);
        try {
            await fetch('/api/tickets/recall', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ticketId: currentTicket.id })
            });
            // No need to update local state, just triggers server side
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('senhas_user');
        window.location.href = '/login';
    };

    const changeCounter = () => {
        setCounterId(null);
    };

    const getWaitTime = (isoDate: string | null) => {
        if (!isoDate) return null;
        try {
            // Need to handle Timezone offset if server is UTC but using local time logic
            // Assuming SQLite CURRENT_TIMESTAMP is UTC, we parseISO and compare
            // For simplicity, just showing minutes difference
            const diff = differenceInMinutes(new Date(), parseISO(isoDate + 'Z')); // Append Z if UTC
            return diff > 0 ? `${diff} min` : 'Agora';
        } catch (e) {
            return '';
        }
    };

    if (!counterId) return <div className="text-white p-10">Necessário Login do Guichê...</div>;

    return (
        <div className="min-h-screen bg-slate-900 text-white p-6">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-center mb-10 pb-6 border-b border-slate-700">
                    <div>
                        <h1 className="text-3xl font-bold">Guichê {counterId}</h1>
                        <p className="text-slate-400 text-sm">{user?.name}</p>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={changeCounter} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded text-sm">🔄 Trocar Guichê</button>
                        <button onClick={logout} className="px-4 py-2 bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white rounded text-sm">Sair</button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Left: Call Controls (2 Columns wide) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center relative overflow-hidden">
                            <div className={`absolute top-0 left-0 w-full h-2 ${currentTicket ? 'bg-blue-500 animate-pulse' : 'bg-slate-600'}`}></div>
                            <h2 className="text-xl text-slate-400 mb-4">
                                {currentTicket ? (currentTicket.status === 'CALLED' ? 'CHAMANDO...' : 'EM ATENDIMENTO') : 'AGUARDANDO'}
                            </h2>
                            <div className="text-8xl font-black tracking-tighter text-blue-400 mb-4">
                                {currentTicket ? currentTicket.code : '---'}
                            </div>
                            <div className="text-lg text-slate-500 font-medium uppercase tracking-widest mb-6">
                                {currentTicket ? currentTicket.status : 'LIVRE'}
                            </div>

                            {/* Action Buttons for Current Ticket */}
                            {currentTicket && (
                                <div className="flex gap-4 justify-center mt-6 border-t border-slate-700 pt-6">

                                    {/* State: CALLED (Customer hasn't arrived yet) */}
                                    {currentTicket.status === 'CALLED' && (
                                        <>
                                            <div className="flex flex-col gap-2 flex-1">
                                                <button
                                                    onClick={() => updateStatus('SERVING')}
                                                    disabled={loading}
                                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold shadow-lg transition-transform hover:scale-105 flex-1"
                                                >
                                                    ▶ Iniciar Atendimento
                                                </button>
                                                <button
                                                    onClick={() => recallTicket()}
                                                    disabled={loading}
                                                    className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 rounded-lg font-bold shadow-md transition-transform hover:scale-105 flex-1 text-sm"
                                                >
                                                    🔔 Repetir Chamada
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => updateStatus('NO_SHOW')}
                                                disabled={loading}
                                                className="px-6 py-3 bg-red-600/20 text-red-400 hover:bg-red-600/30 border border-red-600/50 rounded-lg font-bold transition-transform hover:scale-105"
                                            >
                                                🚫 Ausente
                                            </button>
                                        </>
                                    )}

                                    {/* State: SERVING (Customer is at the desk) */}
                                    {currentTicket.status === 'SERVING' && (
                                        <button
                                            onClick={() => updateStatus('DONE')}
                                            disabled={loading}
                                            className="px-8 py-4 bg-green-600 hover:bg-green-500 rounded-xl font-bold text-xl shadow-lg transition-transform hover:scale-105 w-full"
                                        >
                                            ✅ Finalizar (Atendido)
                                        </button>
                                    )}

                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => callNext('PRIORITY')}
                                disabled={loading || !!currentTicket}
                                className="col-span-2 py-8 bg-green-600 hover:bg-green-500 rounded-2xl font-bold text-2xl shadow-lg active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 disabled:bg-slate-700 disabled:text-slate-500"
                            >
                                <span>📞</span> {currentTicket ? 'Finalize para chamar' : 'Chamar Próximo (Automático)'}
                            </button>

                            <button
                                onClick={() => callNext('FIFO')}
                                disabled={loading}
                                className="py-6 bg-slate-700 hover:bg-slate-600 rounded-xl font-medium text-lg transition-colors border border-slate-600"
                            >
                                ⏱️ Ordem de Chegada
                            </button>

                            <button
                                onClick={() => setShowSpecificInput(!showSpecificInput)}
                                disabled={loading}
                                className={`py-6 rounded-xl font-medium text-lg transition-colors border border-slate-600 ${showSpecificInput ? 'bg-blue-600 text-white' : 'bg-slate-700 hover:bg-slate-600'}`}
                            >
                                🔍 Chamar Específico
                            </button>

                            {/* Specific Call Input Area */}
                            {showSpecificInput && (
                                <div className="col-span-2 bg-slate-800 p-4 rounded-xl border border-slate-600 flex gap-2 animate-in slide-in-from-top-2">
                                    <input
                                        type="text"
                                        placeholder="Ex: AE001"
                                        className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white uppercase"
                                        value={specificCode}
                                        onChange={(e) => setSpecificCode(e.target.value.toUpperCase())}
                                        onKeyDown={(e) => e.key === 'Enter' && callSpecific()}
                                    />
                                    <button
                                        onClick={callSpecific}
                                        className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg font-bold"
                                    >
                                        Chamar
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Queue Stats */}
                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 h-fit">
                        <h3 className="font-bold mb-6 text-slate-300 border-b border-slate-600 pb-2">FILA DE ESPERA</h3>
                        <div className="space-y-3">
                            {queueStats.length === 0 && <div className="text-slate-500 text-center">Fila vazia</div>}

                            {queueStats.map((stat, idx) => {
                                // Calculate simple wait time
                                // Note: In a real app we'd use better TZ handling
                                const waitText = getWaitTime(stat.oldest_ticket);

                                return (
                                    <div key={idx} className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-slate-200">{stat.description}</span>
                                            <span className="text-xs text-slate-500">{stat.group_type}</span>
                                            {stat.count > 0 && stat.oldest_ticket && (
                                                <span className="text-xs text-orange-400 mt-1">Espera: ~{waitText}</span>
                                            )}
                                        </div>
                                        <div className={`font-bold text-xl px-3 py-1 rounded ${stat.count > 0 ? 'bg-red-500/20 text-red-500' : 'bg-slate-600/20 text-slate-500'}`}>
                                            {stat.count}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-8 text-xs text-slate-500 text-center">
                            Atualizado automaticamente a cada 5s
                        </div>
                    </div>

                </div>

                <footer className="mt-8 text-center text-slate-600 text-xs space-y-1">
                    <div>SenhasPro • Desenvolvido por <span className="text-slate-500">Estou Apta Technology</span></div>
                    <div>CNPJ 44.342.124/0001-20</div>
                </footer>
            </div>
        </div>
    );
}
