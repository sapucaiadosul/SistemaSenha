'use client';

import { useState, useEffect } from 'react';

// --- Types ---
type TicketType = { id: number; code: string; description: string; priority: number; group_type: string; active: number; start_time?: string; end_time?: string; };
type Counter = { id: number; number: number; group_type: string; };
type User = { id: number; username: string; name: string; role: string; };
type Media = { id: number; type: string; content: string; duration: number; position: number; active: number; };
type ReportData = {
    period: string;
    startDate?: string;
    endDate?: string;
    summary: { issued: number; served: number; no_show: number; waiting: number; avg_wait: number; };
    counters: { number: number; group_type: string; served_count: number; }[];
    users: { id: number; name: string; served_count: number; avg_service_time: number; }[];
    history: { id: number; code: string; status: string; score_at_call?: number; issued_at: string; called_at: string; finished_at: string; counter_number: number; type_description: string; attendant_name: string; }[];
};

export default function AdminPage() {
    // Auth Check
    useEffect(() => {
        const userStr = localStorage.getItem('senhas_user');
        if (!userStr) { window.location.href = '/login'; return; }
        try {
            const user = JSON.parse(userStr);
            if (user.role !== 'ADMIN') { alert('Acesso negado.'); window.location.href = '/login'; }
        } catch (e) { window.location.href = '/login'; }
    }, []);

    const [activeTab, setActiveTab] = useState<'types' | 'counters' | 'users' | 'media' | 'voice' | 'config' | 'reports' | 'print'>('types');
    const [reportPeriod, setReportPeriod] = useState<'day' | 'month' | 'year' | 'custom'>('day');
    const [reportStartDate, setReportStartDate] = useState('');
    const [reportEndDate, setReportEndDate] = useState('');
    const [reportStatus, setReportStatus] = useState('all');

    // --- Config State ---
    const [priorityStrategy, setPriorityStrategy] = useState<'STRICT' | 'RATIO' | 'SMART'>('STRICT');
    const [priorityRatioNormal, setPriorityRatioNormal] = useState(3);
    const [priorityRatioPriority, setPriorityRatioPriority] = useState(1);

    // Dynamic Groups State
    const [groups, setGroups] = useState<{ id: string, label: string, color: string }[]>([
        { id: 'ESTADO', label: 'Estado', color: 'blue' },
        { id: 'MUNICIPIO', label: 'Município', color: 'green' },
        { id: 'ASSISTENCIA', label: 'Assistência', color: 'purple' }
    ]);
    const [newGroup, setNewGroup] = useState({ id: '', label: '', color: 'blue' });
    const [editingGroupId, setEditingGroupId] = useState<string | null>(null);

    // Print Config
    const [printConfig, setPrintConfig] = useState({
        header: 'SENHAS PRO',
        footer: 'Obrigado pela preferência!',
        logoUrl: '',
        logoAlign: 'center',
        showDate: true,
        showTime: true,
        showSponsors: false,
        sponsorsText: '',
        printing_mode: 'BROWSER',
        printer_ip: '',
        printer_port: 9100
    });


    const colorBgMap: Record<string, string> = {
        blue: 'bg-blue-500',
        green: 'bg-green-500',
        purple: 'bg-purple-500',
        red: 'bg-red-500',
        orange: 'bg-orange-500',
        teal: 'bg-teal-500',
        pink: 'bg-pink-500',
    };

    // --- Data State ---
    const [types, setTypes] = useState<TicketType[]>([]);
    const [counters, setCounters] = useState<Counter[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [media, setMedia] = useState<Media[]>([]);
    const [report, setReport] = useState<ReportData | null>(null);
    const [loading, setLoading] = useState(false);

    // --- Forms State ---
    const [typeForm, setTypeForm] = useState({ id: null as number | null, code: '', description: '', priority: 3, group_type: 'ESTADO', start_time: '' as string | undefined, end_time: '' as string | undefined });
    const [counterForm, setCounterForm] = useState({ id: null as number | null, number: 1, group_type: 'ESTADO' });
    const [userForm, setUserForm] = useState({ id: null as number | null, username: '', name: '', password: '', role: 'ATENDENTE' });
    const [mediaForm, setMediaForm] = useState({ id: null as number | null, type: 'NEWS', content: '', duration: 10 });

    // --- Fetchers ---
    const fetchTypes = async () => { const res = await fetch('/api/admin/ticket-types'); const data = await res.json(); if (Array.isArray(data)) setTypes(data.filter((t: any) => t.active !== 0)); };
    const fetchCounters = async () => { const res = await fetch('/api/admin/counters'); const data = await res.json(); if (Array.isArray(data)) setCounters(data); };
    const fetchUsers = async () => { const res = await fetch('/api/admin/users'); const data = await res.json(); if (Array.isArray(data)) setUsers(data); };
    const fetchMedia = async () => { const res = await fetch('/api/admin/media'); const data = await res.json(); if (Array.isArray(data)) setMedia(data); };


    const fetchReport = async (period: string, startDate?: string, endDate?: string, status?: string) => {
        let url = `/api/admin/reports?period=${period}`;
        if (startDate && endDate) url += `&startDate=${startDate}&endDate=${endDate}`;
        if (status && status !== 'all') url += `&status=${status}`;
        const res = await fetch(url);
        setReport(await res.json());
    };

    const exportReportCSV = () => {
        let url = `/api/admin/reports?format=csv&period=${reportPeriod}`;
        if (reportStartDate && reportEndDate) url += `&startDate=${reportStartDate}&endDate=${reportEndDate}`;
        if (reportStatus !== 'all') url += `&status=${reportStatus}`;
        window.open(url, '_blank');
    };

    useEffect(() => {
        if (activeTab === 'types') fetchTypes();
        if (activeTab === 'counters') fetchCounters();
        if (activeTab === 'users') fetchUsers();
        if (activeTab === 'media') fetchMedia();
        if (activeTab === 'reports') fetchReport(reportPeriod);
    }, [activeTab, reportPeriod]);

    // --- Handlers ---
    const saveType = async (e: React.FormEvent) => { e.preventDefault(); setLoading(true); await fetch('/api/admin/ticket-types', { method: typeForm.id ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(typeForm) }); setTypeForm({ id: null, code: '', description: '', priority: 3, group_type: 'ESTADO', start_time: '', end_time: '' }); fetchTypes(); setLoading(false); };
    const deleteType = async (id: number) => { if (!confirm('Desativar?')) return; await fetch(`/api/admin/ticket-types?id=${id}`, { method: 'DELETE' }); fetchTypes(); };

    const saveCounter = async (e: React.FormEvent) => { e.preventDefault(); setLoading(true); await fetch('/api/admin/counters', { method: counterForm.id ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(counterForm) }); setCounterForm({ id: null, number: counters.length + 1, group_type: 'ESTADO' }); fetchCounters(); setLoading(false); };
    const deleteCounter = async (id: number) => { if (!confirm('Remover?')) return; await fetch(`/api/admin/counters?id=${id}`, { method: 'DELETE' }); fetchCounters(); };

    const saveUser = async (e: React.FormEvent) => { e.preventDefault(); setLoading(true); await fetch('/api/admin/users', { method: userForm.id ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userForm) }); setUserForm({ id: null, username: '', name: '', password: '', role: 'ATENDENTE' }); fetchUsers(); setLoading(false); };
    const deleteUser = async (id: number) => { if (!confirm('Remover?')) return; await fetch(`/api/admin/users?id=${id}`, { method: 'DELETE' }); fetchUsers(); };

    const saveMedia = async (e: React.FormEvent) => { e.preventDefault(); setLoading(true); await fetch('/api/admin/media', { method: mediaForm.id ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...mediaForm, active: true }) }); setMediaForm({ id: null, type: 'NEWS', content: '', duration: 10 }); fetchMedia(); setLoading(false); };
    const deleteMedia = async (id: number) => { if (!confirm('Remover?')) return; await fetch(`/api/admin/media?id=${id}`, { method: 'DELETE' }); fetchMedia(); };

    // Settings
    const [tickerText, setTickerText] = useState('');
    const [elevenApiKey, setElevenApiKey] = useState('');
    const [elevenVoiceId, setElevenVoiceId] = useState('');
    const [openaiApiKey, setOpenaiApiKey] = useState('');
    const [voiceProvider, setVoiceProvider] = useState<'openai' | 'elevenlabs' | 'browser'>('browser');
    const [elevenVoices, setElevenVoices] = useState<{ voice_id: string; name: string }[]>([]);
    const [ticketResetTime, setTicketResetTime] = useState('00:00');

    const fetchSettings = async () => {
        const res = await fetch('/api/admin/settings');
        const data = await res.json();
        setTickerText(data.ticker_text || '');
        setElevenApiKey(data.elevenlabs_api_key || '');
        setElevenVoiceId(data.elevenlabs_voice_id || '');
        setOpenaiApiKey(data.openai_api_key || '');
        setVoiceProvider(data.voice_provider || 'browser');
        setTicketResetTime(data.ticket_reset_time || '00:00');
        setPriorityStrategy(data.priority_strategy || 'STRICT');
        setPriorityRatioNormal(parseInt(data.priority_ratio_normal) || 3);
        setPriorityRatioPriority(parseInt(data.priority_ratio_priority) || 1);

        if (data.print_config) {
            try {
                setPrintConfig(JSON.parse(data.print_config));
            } catch (e) {
                console.error("Error parsing print_config", e);
            }
        }

        if (data.ticket_groups) {
            try {
                setGroups(JSON.parse(data.ticket_groups));
            } catch (e) {
                console.error("Error parsing ticket_groups", e);
            }
        }
    };

    const saveSettings = async () => {
        const settingsToSave = {
            ticker_text: tickerText,
            elevenlabs_api_key: elevenApiKey,
            elevenlabs_voice_id: elevenVoiceId,
            openai_api_key: openaiApiKey,
            voice_provider: voiceProvider,
            ticket_reset_time: ticketResetTime,
            priority_strategy: priorityStrategy,
            priority_ratio_normal: priorityRatioNormal,
            priority_ratio_priority: priorityRatioPriority,
            ticket_groups: JSON.stringify(groups),
            print_config: JSON.stringify(printConfig)
        };
        console.log('Saving settings:', settingsToSave);

        setLoading(true);
        const res = await fetch('/api/admin/settings', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(settingsToSave)
        });
        const result = await res.json();
        console.log('Save result:', result);

        setLoading(false);
        alert('Configurações salvas!');
    };

    const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setLoading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/admin/upload', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();

            if (data.success) {
                setPrintConfig(prev => ({ ...prev, logoUrl: data.url }));
                alert('Logo enviado com sucesso!');
            } else {
                alert('Erro ao enviar logo: ' + data.error);
            }
        } catch (err) {
            console.error(err);
            alert('Falha no upload.');
        }
        setLoading(false);
    };

    const fetchElevenVoices = async () => {
        if (!elevenApiKey) {
            alert('Digite a API Key primeiro!');
            return;
        }
        setLoading(true);
        try {
            // Test with the typed API key (before saving)
            const res = await fetch(`/api/elevenlabs/voices?apiKey=${encodeURIComponent(elevenApiKey)}`);
            const data = await res.json();

            if (res.ok && Array.isArray(data)) {
                setElevenVoices(data);
                alert(`✅ Conexão OK! ${data.length} vozes encontradas.`);
            } else {
                alert(`❌ ${data.error || 'Erro ao conectar'}`);
            }
        } catch (e) {
            alert('❌ Erro de conexão com ElevenLabs');
        }
        setLoading(false);
    };

    // Fetch settings when on media or voice tab or config
    useEffect(() => { if (activeTab === 'media' || activeTab === 'voice' || activeTab === 'config') fetchSettings(); }, [activeTab]);

    const periodLabels: Record<string, string> = { day: 'Hoje', month: 'Este Mês', year: 'Este Ano' };

    return (
        <div className="min-h-screen bg-slate-900 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <header className="mb-10 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Painel Administrativo</h1>
                        <p className="text-slate-400">Configuração Global do Sistema</p>
                    </div>
                    <a href="/" className="px-4 py-2 bg-slate-800 rounded hover:bg-slate-700 transition">Voltar</a>
                </header>

                {/* Tabs */}
                <div className="flex gap-2 mb-8 border-b border-slate-700 pb-2 overflow-x-auto">
                    {(['types', 'counters', 'users', 'media', 'voice', 'config', 'reports', 'print'] as const).map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-t-lg font-bold whitespace-nowrap ${activeTab === tab ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700'}`}
                        >
                            {tab === 'types' && '📝 Tipos'}
                            {tab === 'counters' && '🖥️ Guichês'}
                            {tab === 'users' && '👥 Usuários'}
                            {tab === 'media' && '📺 Mídia'}
                            {tab === 'voice' && '🎙️ Voz'}
                            {tab === 'config' && '⚙️ Configurações'}
                            {tab === 'reports' && '📊 Relatórios'}
                            {tab === 'print' && '🖨️ Impressão'}
                        </button>
                    ))}
                </div>

                {/* TAB: TYPES */}
                {activeTab === 'types' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 h-fit">
                            <h2 className="text-xl font-bold mb-4">{typeForm.id ? 'Editar' : 'Novo'} Tipo</h2>
                            <form onSubmit={saveType} className="space-y-3">
                                <input className="w-full bg-slate-900 border border-slate-600 rounded p-2" placeholder="Código (Ex: AE)" value={typeForm.code} maxLength={3} required onChange={e => setTypeForm({ ...typeForm, code: e.target.value.toUpperCase() })} />
                                <input className="w-full bg-slate-900 border border-slate-600 rounded p-2" placeholder="Descrição" value={typeForm.description} required onChange={e => setTypeForm({ ...typeForm, description: e.target.value })} />
                                <select className="w-full bg-slate-900 border border-slate-600 rounded p-2" value={typeForm.priority} onChange={e => setTypeForm({ ...typeForm, priority: parseInt(e.target.value) })}>
                                    <option value={1}>1 - Alta</option><option value={2}>2 - Média</option><option value={3}>3 - Normal</option>
                                </select>

                                <select className="w-full bg-slate-900 border border-slate-600 rounded p-2" value={typeForm.group_type} onChange={e => setTypeForm({ ...typeForm, group_type: e.target.value })}>
                                    {groups.map(g => (
                                        <option key={g.id} value={g.id}>{g.label}</option>
                                    ))}
                                </select>
                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <label className="text-xs text-slate-400">Início Compulsório</label>
                                        <input type="time" className="w-full bg-slate-900 border border-slate-600 rounded p-2" value={typeForm.start_time || ''} onChange={e => setTypeForm({ ...typeForm, start_time: e.target.value })} />
                                    </div>
                                    <div className="flex-1">
                                        <label className="text-xs text-slate-400">Fim Compulsório</label>
                                        <input type="time" className="w-full bg-slate-900 border border-slate-600 rounded p-2" value={typeForm.end_time || ''} onChange={e => setTypeForm({ ...typeForm, end_time: e.target.value })} />
                                    </div>
                                </div>
                                <button className="w-full bg-green-600 py-2 rounded font-bold hover:bg-green-500">Salvar</button>
                                {typeForm.id && <button type="button" onClick={() => setTypeForm({ id: null, code: '', description: '', priority: 3, group_type: 'ESTADO', start_time: '', end_time: '' })} className="w-full bg-slate-700 py-1 rounded text-sm">Cancelar</button>}
                            </form>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            {types.map(t => {
                                const grp = groups.find(g => g.id === t.group_type);
                                return (
                                    <div key={t.id} className="flex justify-between bg-slate-800 p-4 rounded items-center border border-slate-700">
                                        <div>
                                            <span className="font-bold text-yellow-400 text-xl mr-4">{t.code}</span>
                                            <span>{t.description}</span>
                                            <div className="text-xs text-slate-500 mt-1">
                                                <span className={`font-bold uppercase text-${grp?.color || 'slate'}-400`}>{grp?.label || t.group_type}</span> • P{t.priority}
                                            </div>
                                        </div>
                                        <div className="space-x-2"><button onClick={() => setTypeForm({ id: t.id, code: t.code, description: t.description, priority: t.priority, group_type: t.group_type, start_time: t.start_time, end_time: t.end_time })} className="text-blue-400">✏️</button><button onClick={() => deleteType(t.id)} className="text-red-400">❌</button></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* TAB: COUNTERS */}
                {activeTab === 'counters' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 h-fit">
                            <h2 className="text-xl font-bold mb-4">{counterForm.id ? 'Editar' : 'Novo'} Guichê</h2>
                            <form onSubmit={saveCounter} className="space-y-3">
                                <label className="block text-sm text-slate-400">Número</label>
                                <input type="number" className="w-full bg-slate-900 border border-slate-600 rounded p-2" value={counterForm.number} required onChange={e => setCounterForm({ ...counterForm, number: parseInt(e.target.value) })} />
                                <label className="block text-sm text-slate-400">Grupo</label>
                                <select className="w-full bg-slate-900 border border-slate-600 rounded p-2" value={counterForm.group_type} onChange={e => setCounterForm({ ...counterForm, group_type: e.target.value })}>
                                    {groups.map(g => (
                                        <option key={g.id} value={g.id}>{g.label}</option>
                                    ))}
                                </select>
                                <button className="w-full bg-green-600 py-2 rounded font-bold hover:bg-green-500">Salvar</button>
                            </form>
                        </div>
                        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {counters.map(c => {
                                const grp = groups.find(g => g.id === c.group_type);
                                return (
                                    <div key={c.id} className="bg-slate-800 p-4 rounded text-center border border-slate-700 relative group">
                                        <div className="text-4xl font-bold mb-2">#{c.number}</div>
                                        <span className={`px-2 py-1 rounded text-xs font-bold bg-${grp?.color || 'slate'}-500/20 text-${grp?.color || 'slate'}-400`}>
                                            {grp?.label || c.group_type}
                                        </span>
                                        <div className="absolute top-2 right-2 hidden group-hover:flex gap-1">
                                            <button onClick={() => deleteCounter(c.id)} className="text-red-400 text-xs bg-slate-900 p-1 rounded">❌</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* TAB: USERS */}
                {activeTab === 'users' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 h-fit">
                            <h2 className="text-xl font-bold mb-4">{userForm.id ? 'Editar' : 'Novo'} Usuário</h2>
                            <form onSubmit={saveUser} className="space-y-3">
                                <input className="w-full bg-slate-900 border border-slate-600 rounded p-2" placeholder="Nome Completo" value={userForm.name} required onChange={e => setUserForm({ ...userForm, name: e.target.value })} />
                                <input className="w-full bg-slate-900 border border-slate-600 rounded p-2" placeholder="Usuário (Login)" value={userForm.username} required onChange={e => setUserForm({ ...userForm, username: e.target.value })} />
                                <input type="password" className="w-full bg-slate-900 border border-slate-600 rounded p-2" placeholder={userForm.id ? "Nova Senha (opcional)" : "Senha"} value={userForm.password} required={!userForm.id} onChange={e => setUserForm({ ...userForm, password: e.target.value })} />
                                <select className="w-full bg-slate-900 border border-slate-600 rounded p-2" value={userForm.role} onChange={e => setUserForm({ ...userForm, role: e.target.value })}>
                                    <option value="ATENDENTE">Atendente</option>
                                    <option value="ADMIN">Administrador</option>
                                    <option value="TOTEM">Totem (Emissor)</option>
                                </select>
                                <button className="w-full bg-green-600 py-2 rounded font-bold hover:bg-green-500">Salvar</button>
                                {userForm.id && <button type="button" onClick={() => setUserForm({ id: null, username: '', name: '', password: '', role: 'ATENDENTE' })} className="w-full bg-slate-700 py-1 rounded text-sm">Cancelar</button>}
                            </form>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            {users.map(u => (
                                <div key={u.id} className="flex justify-between bg-slate-800 p-4 rounded items-center border border-slate-700">
                                    <div><div className="font-bold text-lg">{u.name}</div><div className="text-slate-400 text-sm">@{u.username} • <span className="text-blue-400 text-xs border border-blue-900 bg-blue-900/30 px-1 rounded">{u.role}</span></div></div>
                                    <div className="space-x-2"><button onClick={() => setUserForm({ id: u.id, name: u.name, username: u.username, password: '', role: u.role })} className="text-blue-400">✏️</button><button onClick={() => deleteUser(u.id)} className="text-red-400">❌</button></div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* TAB: MEDIA */}
                {activeTab === 'media' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 h-fit">
                            <h2 className="text-xl font-bold mb-4">{mediaForm.id ? 'Editar' : 'Nova'} Mídia</h2>
                            <form onSubmit={saveMedia} className="space-y-3">
                                <label className="block text-sm text-slate-400">Tipo</label>
                                <select className="w-full bg-slate-900 border border-slate-600 rounded p-2" value={mediaForm.type} onChange={e => setMediaForm({ ...mediaForm, type: e.target.value })}>
                                    <option value="NEWS">📰 Notícia/Aviso</option>
                                    <option value="IMAGE">🖼️ Imagem</option>
                                    <option value="VIDEO">🎬 Vídeo</option>
                                </select>

                                {mediaForm.type === 'NEWS' ? (
                                    <>
                                        <label className="block text-sm text-slate-400">Texto da Notícia</label>
                                        <textarea
                                            className="w-full bg-slate-900 border border-slate-600 rounded p-2 h-24"
                                            placeholder="Digite o aviso ou notícia..."
                                            value={mediaForm.content}
                                            required
                                            onChange={e => setMediaForm({ ...mediaForm, content: e.target.value })}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <label className="block text-sm text-slate-400">
                                            Upload de {mediaForm.type === 'IMAGE' ? 'Imagem' : 'Vídeo'}
                                        </label>
                                        <div className="bg-slate-900 border border-slate-600 border-dashed rounded p-4 text-center">
                                            <input
                                                type="file"
                                                accept={mediaForm.type === 'IMAGE' ? 'image/png,image/jpeg,image/gif,image/webp' : 'video/mp4'}
                                                className="hidden"
                                                id="media-upload"
                                                onChange={async (e) => {
                                                    const file = e.target.files?.[0];
                                                    if (!file) return;
                                                    setLoading(true);
                                                    const formData = new FormData();
                                                    formData.append('file', file);
                                                    const res = await fetch('/api/admin/upload', {
                                                        method: 'POST',
                                                        body: formData
                                                    });
                                                    const data = await res.json();
                                                    if (data.url) {
                                                        setMediaForm({ ...mediaForm, content: data.url });
                                                    } else {
                                                        alert(data.error || 'Erro no upload');
                                                    }
                                                    setLoading(false);
                                                }}
                                            />
                                            <label htmlFor="media-upload" className="cursor-pointer block">
                                                {mediaForm.content ? (
                                                    <div className="text-green-400">✅ Arquivo carregado</div>
                                                ) : (
                                                    <>
                                                        <div className="text-2xl mb-2">📁</div>
                                                        <div className="text-slate-400 text-sm">Clique para selecionar</div>
                                                    </>
                                                )}
                                            </label>
                                        </div>
                                        <div className="text-xs text-slate-500 mt-1">
                                            {mediaForm.type === 'IMAGE'
                                                ? '📐 Recomendado: 1920x1080px (16:9) • Máx: 10MB • PNG, JPG, GIF, WEBP'
                                                : '📐 Recomendado: 1920x1080px (16:9) • Máx: 10MB • MP4'}
                                        </div>
                                        {mediaForm.content && (
                                            <input
                                                type="text"
                                                className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-xs"
                                                value={mediaForm.content}
                                                readOnly
                                            />
                                        )}
                                    </>
                                )}

                                <label className="block text-sm text-slate-400">Duração (segundos)</label>
                                <input type="number" className="w-full bg-slate-900 border border-slate-600 rounded p-2" value={mediaForm.duration} min={5} max={120} onChange={e => setMediaForm({ ...mediaForm, duration: parseInt(e.target.value) })} />
                                <button className="w-full bg-green-600 py-2 rounded font-bold hover:bg-green-500">Salvar</button>
                                {mediaForm.id && <button type="button" onClick={() => setMediaForm({ id: null, type: 'NEWS', content: '', duration: 10 })} className="w-full bg-slate-700 py-1 rounded text-sm">Cancelar</button>}
                            </form>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            {media.length === 0 && <div className="text-slate-500 text-center py-8">Nenhuma mídia cadastrada. Adicione avisos, imagens ou vídeos para exibir no Painel TV.</div>}
                            {media.map(m => (
                                <div key={m.id} className="flex justify-between bg-slate-800 p-4 rounded items-center border border-slate-700">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${m.type === 'NEWS' ? 'bg-yellow-500/20 text-yellow-400' : m.type === 'IMAGE' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                                                {m.type === 'NEWS' ? '📰 Notícia' : m.type === 'IMAGE' ? '🖼️ Imagem' : '🎬 Vídeo'}
                                            </span>
                                            <span className="text-slate-500 text-xs">{m.duration}s</span>
                                        </div>
                                        <div className="text-sm text-slate-300 truncate">{m.content}</div>
                                    </div>
                                    <div className="space-x-2 ml-4">
                                        <button onClick={() => setMediaForm({ id: m.id, type: m.type, content: m.content, duration: m.duration })} className="text-blue-400">✏️</button>
                                        <button onClick={() => deleteMedia(m.id)} className="text-red-400">❌</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Ticker Text + Save Button */}
                        <div className="md:col-span-3 bg-slate-800 p-6 rounded-xl border border-slate-700 mt-6">
                            <h3 className="text-xl font-bold mb-4">📜 Texto do Rodapé (TV)</h3>
                            <p className="text-slate-400 text-sm mb-4">Este texto aparece rolando no rodapé do Painel TV.</p>
                            <textarea
                                className="w-full bg-slate-900 border border-slate-600 rounded p-3 h-20 text-sm"
                                placeholder="Bem-vindo! Aguarde sua senha..."
                                value={tickerText}
                                onChange={e => setTickerText(e.target.value)}
                            />
                            <button
                                onClick={() => {
                                    fetch('/api/admin/settings', {
                                        method: 'PUT',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({ ticker_text: tickerText })
                                    }).then(() => alert('Texto salvo!'));
                                }}
                                className="mt-3 px-6 py-2 bg-green-600 rounded font-bold hover:bg-green-500"
                            >
                                💾 Salvar Texto
                            </button>
                        </div>
                    </div>
                )}

                {/* TAB: VOICE */}
                {activeTab === 'voice' && (
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                            <h2 className="text-2xl font-bold mb-2">🎙️ Configuração de Voz (v2.0)</h2>
                            <p className="text-slate-400 mb-6">Escolha o provedor de inteligência artificial para as chamadas de senha.</p>

                            {/* Provider Selection */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <button
                                    onClick={() => setVoiceProvider('openai')}
                                    className={`p-4 rounded-xl border-2 text-center transition-all ${voiceProvider === 'openai' ? 'border-green-500 bg-green-500/10' : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'}`}
                                >
                                    <div className="text-2xl mb-2">🤖</div>
                                    <div className="font-bold text-lg mb-1">OpenAI</div>
                                    <div className="text-xs text-slate-400">Rápido e Econômico</div>
                                    {voiceProvider === 'openai' && <div className="text-green-400 text-xs mt-2">✓ Selecionado</div>}
                                </button>
                                <button
                                    onClick={() => setVoiceProvider('elevenlabs')}
                                    className={`p-4 rounded-xl border-2 text-center transition-all ${voiceProvider === 'elevenlabs' ? 'border-blue-500 bg-blue-500/10' : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'}`}
                                >
                                    <div className="text-2xl mb-2">🎙️</div>
                                    <div className="font-bold text-lg mb-1">ElevenLabs</div>
                                    <div className="text-xs text-slate-400">Vozes Ultra-Realistas</div>
                                    {voiceProvider === 'elevenlabs' && <div className="text-blue-400 text-xs mt-2">✓ Selecionado</div>}
                                </button>
                                <button
                                    onClick={() => setVoiceProvider('browser')}
                                    className={`p-4 rounded-xl border-2 text-center transition-all ${voiceProvider === 'browser' ? 'border-yellow-500 bg-yellow-500/10' : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'}`}
                                >
                                    <div className="text-2xl mb-2">🌐</div>
                                    <div className="font-bold text-lg mb-1">Navegador</div>
                                    <div className="text-xs text-slate-400">Gratuito (Qualidade Básica)</div>
                                    {voiceProvider === 'browser' && <div className="text-yellow-400 text-xs mt-2">✓ Selecionado</div>}
                                </button>
                            </div>

                            {/* OpenAI Section */}
                            <div className="space-y-6 border-t border-slate-700 pt-6">
                                <h3 className="font-bold text-green-400">OpenAI (Whisper/TTS)</h3>
                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">API Key da OpenAI</label>
                                    <input
                                        type="password"
                                        className="w-full bg-slate-900 border border-slate-600 rounded p-3"
                                        placeholder="sk-proj-..."
                                        value={openaiApiKey}
                                        onChange={e => setOpenaiApiKey(e.target.value)}
                                    />
                                    <p className="text-xs text-slate-500 mt-2">
                                        Use chaves que começam com <code>sk-proj...</code> ou <code>sk-...</code>.
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex py-5 items-center">
                                <div className="flex-grow border-t border-slate-700"></div>
                                <span className="flex-shrink-0 mx-4 text-slate-600">OU (ElevenLabs Antigo)</span>
                                <div className="flex-grow border-t border-slate-700"></div>
                            </div>

                            <div className="space-y-6 opacity-75">
                                <div>
                                    <h3 className="font-bold text-blue-400 mb-4">ElevenLabs</h3>
                                    <label className="block text-sm text-slate-400 mb-2">API Key do ElevenLabs</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="password"
                                            className="flex-1 bg-slate-900 border border-slate-600 rounded p-3"
                                            placeholder="sk_..."
                                            value={elevenApiKey}
                                            onChange={e => setElevenApiKey(e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            onClick={fetchElevenVoices}
                                            className="px-6 py-3 bg-blue-600 rounded font-bold hover:bg-blue-500"
                                        >
                                            🔄 Buscar Vozes
                                        </button>
                                    </div>
                                </div>

                                {elevenVoices.length > 0 && (
                                    <div>
                                        <label className="block text-sm text-slate-400 mb-2">Selecione a Voz</label>
                                        <select
                                            className="w-full bg-slate-900 border border-slate-600 rounded p-3"
                                            value={elevenVoiceId}
                                            onChange={e => setElevenVoiceId(e.target.value)}
                                        >
                                            <option value="">-- Selecione uma voz --</option>
                                            {elevenVoices.map(v => (
                                                <option key={v.voice_id} value={v.voice_id}>{v.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                <button
                                    onClick={() => {
                                        // Save logic handles saving elevenApiKey to 'elevenlabs_api_key' in DB
                                        // But wait, if we want to save OpenAI key, we should allow a NEW field 'openai_api_key'.
                                        // The current code reuses 'elevenApiKey' state variable.
                                        // We need to ADD a new state variable for OpenAI Key to avoid conflict.
                                    }}
                                    className="hidden" // Hiding this button, using main save
                                >
                                </button>

                                <button
                                    onClick={saveSettings}
                                    className="w-full py-3 bg-green-600 rounded-xl font-bold hover:bg-green-500 text-lg"
                                >
                                    💾 Salvar Configurações
                                </button>

                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 mt-6">
                                    <h4 className="font-bold mb-2">💡 Dica</h4>
                                    <p className="text-sm text-slate-400">
                                        Se preencher a chave da OpenAI, o sistema dará preferência a ela (mais rápido).
                                        Se deixar OpenAI em branco, usará ElevenLabs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB: CONFIG */}
                {activeTab === 'config' && (
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Priority Strategy */}


                        {/* General Settings (Time & Reset) */}
                        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                            <h2 className="text-2xl font-bold mb-6">🕒 Controle de Tempo</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">Horário de Reinício Automático</label>
                                    <p className="text-xs text-slate-500 mb-3">Define quando o contador diário de senhas volta para 1. (Padrão: 00:00)</p>
                                    <input
                                        type="time"
                                        className="w-full bg-slate-900 border border-slate-600 rounded p-3"
                                        value={ticketResetTime}
                                        onChange={e => setTicketResetTime(e.target.value)}
                                    />
                                    <button
                                        onClick={saveSettings}
                                        className="mt-3 text-green-400 text-sm hover:underline"
                                    >
                                        Salvar Horário
                                    </button>
                                </div>

                                <div className="border-l border-slate-700 pl-8">
                                    <label className="block text-sm text-slate-400 mb-2">Reinício Manual</label>
                                    <p className="text-xs text-slate-500 mb-3">Zera a contagem de hoje imediatamente.</p>

                                    <button
                                        onClick={async () => {
                                            if (confirm('Tem certeza? Todas as senhas emitidas hoje voltarão a contar do 1.')) {
                                                setLoading(true);
                                                try {
                                                    await fetch('/api/admin/reset-counts', { method: 'POST' });
                                                    alert('Contadores zerados com sucesso!');
                                                } catch (e) {
                                                    alert('Erro ao zerar contadores.');
                                                }
                                                setLoading(false);
                                            }
                                        }}
                                        className="w-full py-3 bg-red-900/50 border border-red-500 text-red-400 rounded-xl font-bold hover:bg-red-900 transition-colors"
                                    >
                                        ⚠️ ZERAR SENHAS AGORA
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                            <h2 className="text-2xl font-bold mb-6">⚙️ Estratégia de Chamada</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <button
                                    onClick={() => setPriorityStrategy('STRICT')}
                                    className={`p-6 rounded-xl border-2 text-left h-full flex flex-col transition-all ${priorityStrategy === 'STRICT' ? 'border-blue-500 bg-blue-500/10' : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'}`}
                                >
                                    <div className="text-2xl mb-2">🔒 Prioridade Absoluta</div>
                                    <p className="text-slate-400 text-sm flex-grow">
                                        Chama <strong>todas</strong> as senhas preferenciais antes de chamar qualquer senha normal.
                                        <br /><br />
                                        <em>Ex: Se tiver 100 preferenciais, as normais esperam todas serem atendidas.</em>
                                    </p>
                                    {priorityStrategy === 'STRICT' && <div className="text-blue-400 font-bold mt-4">✓ Selecionado</div>}
                                </button>

                                <button
                                    onClick={() => setPriorityStrategy('RATIO')}
                                    className={`p-6 rounded-xl border-2 text-left h-full flex flex-col transition-all ${priorityStrategy === 'RATIO' ? 'border-green-500 bg-green-500/10' : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'}`}
                                >
                                    <div className="text-2xl mb-2">⚖️ Proporcional (Pesos)</div>
                                    <p className="text-slate-400 text-sm flex-grow">
                                        Intercala senhas normais e preferenciais conforme uma proporção definida.
                                        <br /><br />
                                        <em>Ex: A cada 3 normais, chama 1 preferencial (ou vice-versa).</em>
                                    </p>
                                    {priorityStrategy === 'RATIO' && <div className="text-green-400 font-bold mt-4">✓ Selecionado</div>}
                                </button>

                                <button
                                    onClick={() => setPriorityStrategy('SMART')}
                                    className={`p-6 rounded-xl border-2 text-left h-full flex flex-col transition-all ${priorityStrategy === 'SMART' ? 'border-purple-500 bg-purple-500/10' : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'}`}
                                >
                                    <div className="text-2xl mb-2">🧠 Inteligente (Dinâmico)</div>
                                    <p className="text-slate-400 text-sm flex-grow">
                                        Analisa o <strong>tempo de espera</strong> para evitar bloqueios.
                                        <br /><br />
                                        <em>Se uma Senha Normal esperar muito tempo (ex: 20min), ela ganha prioridade automática sobre as novas Preferenciais.</em>
                                    </p>
                                    {priorityStrategy === 'SMART' && <div className="text-purple-400 font-bold mt-4">✓ Selecionado</div>}
                                </button>
                            </div>

                            {priorityStrategy === 'RATIO' && (
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-600 animate-in fade-in slide-in-from-top-4">
                                    <h3 className="font-bold text-lg mb-4 text-slate-300">Configurar Proporção</h3>
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <div>
                                            <label className="block text-xs text-slate-400 mb-1 font-bold uppercase">Senhas Normais</label>
                                            <input
                                                type="number"
                                                min={1}
                                                className="w-24 bg-slate-800 border-2 border-slate-600 rounded p-3 text-center text-xl font-bold"
                                                value={priorityRatioNormal}
                                                onChange={e => setPriorityRatioNormal(Math.max(1, parseInt(e.target.value)))}
                                            />
                                        </div>
                                        <div className="text-2xl text-slate-500 pt-5">:</div>
                                        <div>
                                            <label className="block text-xs text-slate-400 mb-1 font-bold uppercase">Preferenciais</label>
                                            <input
                                                type="number"
                                                min={1}
                                                className="w-24 bg-slate-800 border-2 border-slate-600 rounded p-3 text-center text-xl font-bold"
                                                value={priorityRatioPriority}
                                                onChange={e => setPriorityRatioPriority(Math.max(1, parseInt(e.target.value)))}
                                            />
                                        </div>
                                        <div className="flex-1 text-sm text-slate-400 ml-4 border-l border-slate-700 pl-4">
                                            Para cada <strong>{priorityRatioNormal}</strong> senhas normais chamadas, o sistema chamará <strong>{priorityRatioPriority}</strong> preferencial(is).
                                        </div>
                                    </div>
                                </div>
                            )}

                            {priorityStrategy === 'SMART' && (
                                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-600 animate-in fade-in slide-in-from-top-4">
                                    <h3 className="font-bold text-lg mb-4 text-slate-300">Como funciona?</h3>
                                    <div className="text-slate-400 leading-relaxed text-sm">
                                        O sistema cria um <strong>Score (Pontuação)</strong> para cada senha na fila:<br />
                                        <ul className="list-disc ml-5 mt-2 space-y-1 mb-4">
                                            <li><span className="text-red-400 font-bold">Alta Prioridade</span>: Começa com 2000 pontos.</li>
                                            <li><span className="text-yellow-400 font-bold">Média Prioridade</span>: Começa com 1000 pontos.</li>
                                            <li><span className="text-blue-400 font-bold">Normal</span>: Começa com 500 pontos.</li>
                                        </ul>
                                        A cada <strong>1 segundo de espera</strong>, a senha ganha +1 ponto.<br />
                                        Assim, se uma senha Normal esperar <strong>~25 minutos</strong> (1500 segundos), ela empata com uma Alta Prioridade que acabou de chegar.
                                    </div>
                                </div>
                            )}

                            <div className="mt-8 flex justify-end">
                                <button
                                    onClick={saveSettings}
                                    className="px-8 py-3 bg-green-600 rounded-xl font-bold hover:bg-green-500 text-lg shadow-lg shadow-green-900/20"
                                >
                                    💾 Salvar Alterações
                                </button>
                            </div>
                        </div>

                        {/* Groups Configuration */}
                        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                            <h2 className="text-2xl font-bold mb-6">🗂️ Grupos de Senhas</h2>
                            <p className="text-slate-400 mb-6">Configure os blocos que aparecem na tela de emissão (ex: Estado, Município). O sistema cria uma coluna para cada grupo cadastrado.</p>

                            <div className="space-y-4 mb-8">
                                {groups.map((g, idx) => (
                                    <div key={idx} className="flex gap-4 items-center bg-slate-900 p-4 rounded-lg border border-slate-600">
                                        <div className={`w-8 h-8 rounded-full ${colorBgMap[g.color] || 'bg-slate-500'} border-2 border-slate-400 shadow`}></div>
                                        <div className="flex-1">
                                            <div className="font-bold text-lg">{g.label}</div>
                                            <div className="text-xs text-slate-500 font-mono">ID: {g.id}</div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => {
                                                    setNewGroup(g);
                                                    setEditingGroupId(g.id);
                                                }}
                                                className="text-blue-400 hover:bg-slate-800 p-2 rounded"
                                                title="Editar Grupo"
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                onClick={() => {
                                                    if (confirm('Tem certeza? Isso pode afetar senhas existentes.')) {
                                                        setGroups(groups.filter(item => item.id !== g.id));
                                                        if (editingGroupId === g.id) {
                                                            setEditingGroupId(null);
                                                            setNewGroup({ id: '', label: '', color: 'blue' });
                                                        }
                                                    }
                                                }}
                                                className="text-red-400 hover:bg-slate-800 p-2 rounded"
                                                title="Remover Grupo"
                                            >
                                                ❌
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={`p-6 rounded-xl border transition-colors ${editingGroupId ? 'bg-blue-900/20 border-blue-500/50' : 'bg-slate-900/50 border-slate-600'}`}>
                                <h3 className="font-bold text-lg mb-4 text-slate-300">{editingGroupId ? '✏️ Editar Grupo' : '+ Adicionar Novo Grupo'}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                                    <div>
                                        <label className="block text-xs text-slate-400 mb-1">ID (Código)</label>
                                        <input
                                            className={`w-full bg-slate-800 border border-slate-600 rounded p-2 uppercase font-mono ${editingGroupId ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            placeholder="EX: FARMACIA"
                                            value={newGroup.id}
                                            readOnly={!!editingGroupId}
                                            onChange={e => setNewGroup({ ...newGroup, id: e.target.value.toUpperCase().replace(/[^A-Z0-9_]/g, '') })}
                                        />
                                    </div>
                                    <div className="md:col-span-1">
                                        <label className="block text-xs text-slate-400 mb-1">Nome Visível</label>
                                        <input
                                            className="w-full bg-slate-800 border border-slate-600 rounded p-2"
                                            placeholder="Ex: Farmácia"
                                            value={newGroup.label}
                                            onChange={e => setNewGroup({ ...newGroup, label: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-slate-400 mb-1">Cor do Bloco</label>
                                        <select
                                            className="w-full bg-slate-800 border border-slate-600 rounded p-2"
                                            value={newGroup.color}
                                            onChange={e => setNewGroup({ ...newGroup, color: e.target.value })}
                                        >
                                            <option value="blue">🔵 Azul</option>
                                            <option value="green">🟢 Verde</option>
                                            <option value="purple">🟣 Roxo</option>
                                            <option value="red">🔴 Vermelho</option>
                                            <option value="orange">🟠 Laranja</option>
                                            <option value="teal">💠 Turquesa</option>
                                            <option value="pink">🌸 Rosa</option>
                                        </select>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => {
                                                if (!newGroup.id || !newGroup.label) return alert("Preencha ID e Nome");

                                                if (editingGroupId) {
                                                    // Update existing
                                                    setGroups(groups.map(g => g.id === editingGroupId ? newGroup : g));
                                                    setEditingGroupId(null);
                                                    setNewGroup({ id: '', label: '', color: 'blue' });
                                                } else {
                                                    // Create new
                                                    if (groups.find(g => g.id === newGroup.id)) return alert("ID já existe");
                                                    setGroups([...groups, newGroup]);
                                                    setNewGroup({ id: '', label: '', color: 'blue' });
                                                }
                                            }}
                                            className={`flex-1 py-2 rounded font-bold text-white ${editingGroupId ? 'bg-blue-600 hover:bg-blue-500' : 'bg-green-600 hover:bg-green-500'}`}
                                        >
                                            {editingGroupId ? 'Salvar' : 'Adicionar'}
                                        </button>
                                        {editingGroupId && (
                                            <button
                                                onClick={() => {
                                                    setEditingGroupId(null);
                                                    setNewGroup({ id: '', label: '', color: 'blue' });
                                                }}
                                                className="px-3 bg-slate-700 hover:bg-slate-600 rounded"
                                                title="Cancelar Edição"
                                            >
                                                ❌
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <button
                                    onClick={saveSettings}
                                    className="px-8 py-3 bg-green-600 rounded-xl font-bold hover:bg-green-500 text-lg shadow-lg shadow-green-900/20"
                                >
                                    💾 Salvar Todas Configurações
                                </button>
                            </div>
                        </div>

                    </div >
                )
                }

                {
                    activeTab === 'reports' && (
                        <div className="space-y-8">
                            {/* Filters */}
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                <h3 className="text-lg font-bold mb-4">🔍 Filtros</h3>
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                    {/* Period Selector */}
                                    <div>
                                        <label className="block text-sm text-slate-400 mb-1">Período</label>
                                        <select
                                            className="w-full bg-slate-900 border border-slate-600 rounded p-2"
                                            value={reportPeriod}
                                            onChange={(e) => setReportPeriod(e.target.value as any)}
                                        >
                                            <option value="day">Hoje</option>
                                            <option value="month">Este Mês</option>
                                            <option value="year">Este Ano</option>
                                            <option value="custom">Personalizado</option>
                                        </select>
                                    </div>

                                    {/* Custom Date Range */}
                                    {reportPeriod === 'custom' && (
                                        <>
                                            <div>
                                                <label className="block text-sm text-slate-400 mb-1">Data Início</label>
                                                <input
                                                    type="date"
                                                    className="w-full bg-slate-900 border border-slate-600 rounded p-2"
                                                    value={reportStartDate}
                                                    onChange={(e) => setReportStartDate(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-slate-400 mb-1">Data Fim</label>
                                                <input
                                                    type="date"
                                                    className="w-full bg-slate-900 border border-slate-600 rounded p-2"
                                                    value={reportEndDate}
                                                    onChange={(e) => setReportEndDate(e.target.value)}
                                                />
                                            </div>
                                        </>
                                    )}

                                    {/* Status Filter */}
                                    <div>
                                        <label className="block text-sm text-slate-400 mb-1">Status</label>
                                        <select
                                            className="w-full bg-slate-900 border border-slate-600 rounded p-2"
                                            value={reportStatus}
                                            onChange={(e) => setReportStatus(e.target.value)}
                                        >
                                            <option value="all">Todos</option>
                                            <option value="DONE">Atendidos</option>
                                            <option value="NO_SHOW">Não Compareceu</option>
                                            <option value="WAITING">Aguardando</option>
                                            <option value="CALLED">Chamados</option>
                                        </select>
                                    </div>



                                    {/* Action Buttons */}
                                    <div className="flex items-end gap-2">
                                        <button
                                            onClick={() => fetchReport(reportPeriod, reportStartDate, reportEndDate, reportStatus)}
                                            className="flex-1 bg-blue-600 hover:bg-blue-500 rounded p-2 font-bold"
                                        >
                                            🔄 Atualizar
                                        </button>
                                        <button
                                            onClick={exportReportCSV}
                                            className="bg-green-600 hover:bg-green-500 rounded p-2 font-bold"
                                            title="Exportar CSV"
                                        >
                                            📥 CSV
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {report && report.summary && (
                                <>
                                    {/* Summary Cards */}
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
                                            <h3 className="text-slate-400 mb-2">Total Emitidas</h3>
                                            <div className="text-4xl font-bold text-blue-400">{report.summary.issued}</div>
                                        </div>
                                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
                                            <h3 className="text-slate-400 mb-2">Total Atendidas</h3>
                                            <div className="text-4xl font-bold text-green-400">{report.summary.served}</div>
                                        </div>
                                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
                                            <h3 className="text-slate-400 mb-2">Tempo Médio Espera</h3>
                                            <div className="text-4xl font-bold text-orange-400">{report.summary.avg_wait} <span className="text-lg">min</span></div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* By Counter */}
                                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                            <h3 className="text-xl font-bold mb-4">📊 Por Guichê</h3>
                                            <table className="w-full text-left">
                                                <thead><tr className="text-slate-400 border-b border-slate-600"><th className="pb-2">Guichê</th><th className="pb-2">Grupo</th><th className="pb-2 text-right">Atend.</th></tr></thead>
                                                <tbody>
                                                    {report.counters.map((c, idx) => (
                                                        <tr key={idx} className="border-b border-slate-700/50">
                                                            <td className="py-2 font-bold">#{c.number}</td>
                                                            <td className="py-2 text-sm text-slate-400">{c.group_type}</td>
                                                            <td className="py-2 text-right font-mono text-lg">{c.served_count}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* By User */}
                                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                            <h3 className="text-xl font-bold mb-4">👤 Por Atendente</h3>
                                            {report.users && report.users.length > 0 ? (
                                                <table className="w-full text-left">
                                                    <thead><tr className="text-slate-400 border-b border-slate-600"><th className="pb-2">Nome</th><th className="pb-2 text-right">Atend.</th><th className="pb-2 text-right">T. Médio</th></tr></thead>
                                                    <tbody>
                                                        {report.users.map((u, idx) => (
                                                            <tr key={idx} className="border-b border-slate-700/50">
                                                                <td className="py-2 font-bold">{u.name}</td>
                                                                <td className="py-2 text-right font-mono text-lg text-green-400">{u.served_count}</td>
                                                                <td className="py-2 text-right text-slate-400">{u.avg_service_time || 0} min</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            ) : (
                                                <div className="text-slate-500 text-center py-4">Nenhum atendimento registrado para este período.</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Ticket History */}
                                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mt-8">
                                        <h3 className="text-xl font-bold mb-4">📋 Histórico de Senhas</h3>
                                        {report.history && report.history.length > 0 ? (
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left text-sm">
                                                    <thead>
                                                        <tr className="text-slate-400 border-b border-slate-600">
                                                            <th className="pb-2">Senha</th>
                                                            <th className="pb-2">Tipo</th>
                                                            <th className="pb-2">Status</th>
                                                            <th className="pb-2">Guichê</th>
                                                            <th className="pb-2">Atendente</th>
                                                            <th className="pb-2">Emitida</th>
                                                            <th className="pb-2" title="Pontuação SMART no momento da chamada">🏆 Score</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {report.history.map((t: any, idx: number) => (
                                                            <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                                                                <td className="py-2 font-mono font-bold text-blue-400">{t.code}</td>
                                                                <td className="py-2 text-slate-300">{t.type_description || '-'}</td>
                                                                <td className="py-2">
                                                                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${t.status === 'DONE' ? 'bg-green-600/30 text-green-400' :
                                                                        t.status === 'CALLED' ? 'bg-yellow-600/30 text-yellow-400' :
                                                                            t.status === 'NO_SHOW' ? 'bg-red-600/30 text-red-400' :
                                                                                'bg-slate-600/30 text-slate-400'
                                                                        }`}>
                                                                        {t.status === 'DONE' ? 'Atendido' :
                                                                            t.status === 'CALLED' ? 'Chamado' :
                                                                                t.status === 'NO_SHOW' ? 'Não Compareceu' :
                                                                                    t.status === 'WAITING' ? 'Aguardando' : t.status}
                                                                    </span>
                                                                </td>
                                                                <td className="py-2 text-slate-300">{t.counter_number || '-'}</td>
                                                                <td className="py-2 text-slate-300">{t.attendant_name || '-'}</td>
                                                                <td className="py-2 text-slate-500">{t.issued_at?.replace('T', ' ')?.substring(0, 16) || '-'}</td>
                                                                <td className="py-2 text-right">
                                                                    {t.score_at_call != null ? (
                                                                        <span
                                                                            className={`px-2 py-0.5 rounded text-xs font-bold font-mono ${t.score_at_call >= 2000 ? 'bg-red-500/20 text-red-400' :
                                                                                    t.score_at_call >= 1000 ? 'bg-yellow-500/20 text-yellow-400' :
                                                                                        'bg-slate-600/30 text-slate-400'
                                                                                }`}
                                                                            title={`Pontuação SMART: ${t.score_at_call} pts`}
                                                                        >
                                                                            {t.score_at_call.toLocaleString()} pts
                                                                        </span>
                                                                    ) : (
                                                                        <span className="text-slate-600 text-xs">—</span>
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        ) : (
                                            <div className="text-slate-500 text-center py-4">Nenhuma senha emitida neste período.</div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    )
                }

                {/* TAB: PRINT CONFIG */}
                {
                    activeTab === 'print' && (
                        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-xl">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">🖨️ Personalização do Ticket</h2>
                                <p className="text-slate-400 mb-8">Configure como o ticket será impresso no totem ou impressora térmica.</p>

                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 mb-6">
                                    <label className="block text-sm text-slate-400 mb-2">Modo de Impressão</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            onClick={() => setPrintConfig({ ...printConfig, printing_mode: 'BROWSER' })}
                                            className={`p-3 rounded border text-sm font-bold ${printConfig.printing_mode !== 'NETWORK' ? 'bg-blue-600 border-blue-500' : 'bg-slate-800 border-slate-600 hover:bg-slate-700'}`}
                                        >
                                            🖥️ Padrão (Navegador)
                                        </button>
                                        <button
                                            onClick={() => setPrintConfig({ ...printConfig, printing_mode: 'NETWORK' })}
                                            className={`p-3 rounded border text-sm font-bold ${printConfig.printing_mode === 'NETWORK' ? 'bg-blue-600 border-blue-500' : 'bg-slate-800 border-slate-600 hover:bg-slate-700'}`}
                                        >
                                            🖨️ Rede (IP Direto)
                                        </button>
                                    </div>
                                    {printConfig.printing_mode === 'NETWORK' && (
                                        <div className="mt-4 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
                                            <div>
                                                <label className="block text-xs text-slate-400 mb-1">IP da Impressora</label>
                                                <input
                                                    className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-sm font-mono"
                                                    placeholder="192.168.0.x"
                                                    value={printConfig.printer_ip || ''}
                                                    onChange={e => setPrintConfig({ ...printConfig, printer_ip: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs text-slate-400 mb-1">Porta (Padrão 9100)</label>
                                                <input
                                                    type="number"
                                                    className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-sm font-mono"
                                                    placeholder="9100"
                                                    value={printConfig.printer_port || 9100}
                                                    onChange={e => setPrintConfig({ ...printConfig, printer_port: parseInt(e.target.value) })}
                                                />
                                            </div>
                                            <div className="col-span-2 flex gap-4 items-center">
                                                <button
                                                    onClick={async () => {
                                                        if (!printConfig.printer_ip) return alert('Digite o IP primeiro');
                                                        const btn = document.getElementById('btn-test-print');
                                                        if (btn) btn.innerText = '⏳ Testando...';
                                                        try {
                                                            const res = await fetch('/api/admin/printer/test', {
                                                                method: 'POST',
                                                                headers: { 'Content-Type': 'application/json' },
                                                                body: JSON.stringify({ ip: printConfig.printer_ip, port: printConfig.printer_port })
                                                            });
                                                            const data = await res.json();
                                                            alert(data.success ? '✅ ' + data.message : '❌ ' + data.error);
                                                        } catch (e) { alert('Erro ao testar'); }
                                                        if (btn) btn.innerText = '🛠️ Testar Conexão';
                                                    }}
                                                    id="btn-test-print"
                                                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-xs font-bold border border-slate-500 transition-colors"
                                                >
                                                    🛠️ Testar Conexão
                                                </button>
                                                <p className="text-xs text-yellow-500">
                                                    ⚠️ A impressora deve estar na mesma rede que este computador.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-1">Cabeçalho (Nome da Empresa)</label>
                                            <input
                                                className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-lg font-bold"
                                                value={printConfig.header}
                                                onChange={e => setPrintConfig({ ...printConfig, header: e.target.value })}
                                                placeholder="Ex: CLÍNICA SAÚDE"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-slate-400 mb-1">Rodapé (Mensagem Final)</label>
                                            <textarea
                                                className="w-full bg-slate-900 border border-slate-600 rounded p-3 h-24 resize-none"
                                                value={printConfig.footer}
                                                onChange={e => setPrintConfig({ ...printConfig, footer: e.target.value })}
                                                placeholder="Ex: Obrigado pela preferência!"
                                            />
                                        </div>

                                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                                            <label className="block text-sm text-slate-400 mb-3">Opções de Exibição</label>
                                            <div className="flex gap-6">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={printConfig.showDate}
                                                        onChange={e => setPrintConfig({ ...printConfig, showDate: e.target.checked })}
                                                        className="w-5 h-5 rounded bg-slate-700 border-slate-500 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900"
                                                    />
                                                    <span>Data (Dia/Mês/Ano)</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={printConfig.showTime}
                                                        onChange={e => setPrintConfig({ ...printConfig, showTime: e.target.checked })}
                                                        className="w-5 h-5 rounded bg-slate-700 border-slate-500 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900"
                                                    />
                                                    <span>Hora (HH:MM)</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-1">Logo da Empresa</label>
                                            <div className="flex gap-2">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleLogoUpload}
                                                    className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                                                />
                                            </div>
                                            {printConfig.logoUrl && (
                                                <div className="mt-4 p-3 bg-slate-900/50 border border-slate-700 rounded flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-white p-1 rounded">
                                                            <img src={printConfig.logoUrl} className="h-8 we-auto object-contain" alt="Preview" />
                                                        </div>
                                                        <div className="text-xs text-slate-400 truncate max-w-[150px]">{printConfig.logoUrl.split('/').pop()}</div>
                                                    </div>
                                                    <button
                                                        onClick={() => setPrintConfig({ ...printConfig, logoUrl: '' })}
                                                        className="text-red-400 hover:text-red-300 text-xs font-bold uppercase tracking-wider"
                                                    >
                                                        Remover
                                                    </button>
                                                </div>
                                            )}
                                            <p className="text-xs text-slate-500 mt-2">Formatos: PNG, JPG (Max 10MB)</p>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">Posição do Logo/Cabeçalho</label>
                                            <div className="flex gap-2">
                                                {['left', 'center', 'right'].map(align => (
                                                    <button
                                                        key={align}
                                                        onClick={() => setPrintConfig({ ...printConfig, logoAlign: align })}
                                                        className={`flex-1 py-2 rounded capitalize border ${printConfig.logoAlign === align ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-900 border-slate-600 text-slate-400 hover:bg-slate-800'}`}
                                                    >
                                                        {align === 'left' ? 'Esquerda' : align === 'center' ? 'Centro' : 'Direita'}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Preview */}
                                        <div className="mt-8 bg-white text-black p-4 w-64 mx-auto rounded shadow-lg font-mono text-sm relative">
                                            <div className={`text-xs absolute top-[-10px] left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-2 rounded font-bold uppercase`}>Preview</div>

                                            <div className={`text-${printConfig.logoAlign} mb-2 border-b pb-2 border-dashed border-gray-300`}>
                                                {printConfig.logoUrl ? (
                                                    <img src={printConfig.logoUrl} className="h-8 inline-block" alt="Logo" />
                                                ) : null}
                                                <div className="font-bold text-lg leading-tight mt-1">{printConfig.header}</div>
                                            </div>

                                            <div className="text-center py-4">
                                                <div className="text-xs text-gray-500 uppercase mb-1">Senha</div>
                                                <div className="text-4xl font-bold my-2">A-001</div>
                                                <div className="text-sm">Preferencial</div>
                                            </div>

                                            <div className="border-t border-dashed border-gray-300 pt-2 text-center text-xs space-y-1">
                                                {(printConfig.showDate || printConfig.showTime) && (
                                                    <div>
                                                        {printConfig.showDate && <span>03/02/2026</span>}
                                                        {printConfig.showDate && printConfig.showTime && <span> - </span>}
                                                        {printConfig.showTime && <span>16:45</span>}
                                                    </div>
                                                )}
                                                <div className="mt-2 whitespace-pre-wrap">{printConfig.footer}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <button
                                        onClick={saveSettings}
                                        className="px-8 py-3 bg-green-600 rounded-xl font-bold hover:bg-green-500 text-lg shadow-lg shadow-green-900/20 flex items-center gap-2"
                                    >
                                        💾 Salvar Configurações
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }


                <footer className="mt-12 text-center text-slate-600 text-xs space-y-1 pt-8 border-t border-slate-800">
                    <div>SenhasPro • Desenvolvido por <span className="text-slate-500">Estou Apta Technology</span></div>
                    <div>CNPJ 44.342.124/0001-20 • Todos os direitos reservados</div>
                </footer>
            </div >
        </div >
    );
}
