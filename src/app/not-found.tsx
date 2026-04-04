import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-brand-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-700 mb-4">
          Pagina nao encontrada
        </h2>
        <p className="text-slate-500 mb-8 max-w-md">
          A pagina que procura nao existe ou foi movida.
        </p>
        <Link
          href="/"
          className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all inline-block"
        >
          Voltar ao Inicio
        </Link>
      </div>
    </div>
  );
}
