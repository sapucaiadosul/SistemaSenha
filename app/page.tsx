import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center font-sans">
      <h1 className="text-6xl font-bold mb-8 text-blue-500 tracking-tighter">SenhasPro</h1>
      <p className="text-xl text-slate-400 mb-12">Eficiência Total na Gestão de Filas</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-6">
        {/* 1. Ticket Issuance */}
        <Link
          href="/emissao"
          className="group block p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500 hover:bg-slate-750 transition-all"
        >
          <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400">🎫 Emitir Senha</h2>
          <p className="text-slate-400">Terminal de auto-atendimento.</p>
        </Link>

        {/* 2. TV Panel - Public */}
        <Link
          href="/tv"
          className="group block p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-purple-500 hover:bg-slate-750 transition-all"
        >
          <h2 className="text-2xl font-bold mb-2 group-hover:text-purple-400">📺 Painel TV</h2>
          <p className="text-slate-400">Exibição de senhas e mídia.</p>
        </Link>

        {/* 3. Counter - Attendants */}
        <Link
          href="/login"
          className="group block p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-green-500 hover:bg-slate-750 transition-all"
        >
          <h2 className="text-2xl font-bold mb-2 group-hover:text-green-400">👨‍💻 Atendentes</h2>
          <p className="text-slate-400">Acesso ao guichê de atendimento.</p>
        </Link>

        {/* 4. Admin */}
        <Link
          href="/login"
          className="group block p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-orange-500 hover:bg-slate-750 transition-all"
        >
          <h2 className="text-2xl font-bold mb-2 group-hover:text-orange-400">⚙️ Administração</h2>
          <p className="text-slate-400">Configurar sistema e relatórios.</p>
        </Link>
      </div>

      <footer className="mt-12 text-center text-slate-500 text-sm space-y-1">
        <div>SenhasPro • Desenvolvido por <span className="text-slate-400">Estou Apta Technology</span></div>
        <div>CNPJ 44.342.124/0001-20 • Todos os direitos reservados</div>
      </footer>
    </div>
  );
}
