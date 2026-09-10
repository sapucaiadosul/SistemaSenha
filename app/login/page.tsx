'use client';

import { useState } from 'react';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (res.ok) {
                const data = await res.json();

                // Store minimal "auth" in localStorage for this simple app
                localStorage.setItem('senhas_user', JSON.stringify(data.user));

                // Check for redirect param
                const urlParams = new URLSearchParams(window.location.search);
                const redirect = urlParams.get('redirect');

                if (redirect) {
                    window.location.href = redirect;
                    return;
                }

                // Redirect based on role
                if (data.user.role === 'ADMIN') {
                    window.location.href = '/admin';
                } else if (data.user.role === 'TOTEM') {
                    window.location.href = '/emissao';
                } else {
                    window.location.href = '/guiche';
                }
            } else {
                setError('Usuário ou senha incorretos');
            }
        } catch (err) {
            setError('Erro ao tentar login');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-white mb-8">
                    SENHAS PRO
                </h1>

                {error && <div className="bg-red-500/20 text-red-400 p-3 rounded mb-4 text-center">{error}</div>}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-slate-400 mb-1">Usuário</label>
                        <input
                            type="text"
                            className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-slate-400 mb-1">Senha</label>
                        <input
                            type="password"
                            className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-transform active:scale-95"
                    >
                        Entrar
                    </button>
                </form>
            </div>

            <footer className="mt-8 text-center text-slate-600 text-xs space-y-1">
                <div>SenhasPro • Desenvolvido por <span className="text-slate-500">Estou Apta Technology</span></div>
                <div>CNPJ 44.342.124/0001-20</div>
            </footer>
        </div>
    );
}
