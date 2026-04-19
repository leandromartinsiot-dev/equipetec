export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white font-bold text-sm">
            LM
          </div>
          <span className="font-bold text-white">EQUIPETEC</span>
        </div>

        <div className="flex gap-8 text-sm font-medium">
          <a href="#servicos" className="hover:text-white transition-colors">
            Servicos
          </a>
          <a href="#sobre" className="hover:text-white transition-colors">
            Sobre
          </a>
          <a href="#contacto" className="hover:text-white transition-colors">
            Contacto
          </a>
        </div>

        <div className="text-xs font-mono uppercase tracking-widest">
          &copy; 2026 &bull; Portugal &bull; Suporte Remoto & Presencial
        </div>
      </div>
    </footer>
  );
}
