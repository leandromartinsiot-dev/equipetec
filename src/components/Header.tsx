'use client';

import { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = ['Serviços', 'Sobre', 'Testemunhos', 'Contacto'];

const navHrefs: Record<string, string> = {
  'Serviços': '#servicos',
  'Sobre': '#sobre',
  'Testemunhos': '#testemunhos',
  'Contacto': '#contacto',
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt="Equipetec" className="w-10 h-10 rounded-lg object-contain" />
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 leading-tight">EQUIPETEC</span>
            <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">Serviços Informaticos</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            
              key={item}
              href={navHrefs[item]}
              className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors"
            >
              {item}
            </a>
          ))}
          
            href="/portal.html"
            className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-200 transition-all flex items-center gap-2"
          >
            🔧 Área Técnica
          </a>
          
            href="https://wa.me/351939799996"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm flex items-center gap-2"
          >
            <MessageSquare size={16} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navItems.map((item) => (
              
                key={item}
                href={navHrefs[item]}
                onClick={() => setIsMenuOpen(false)}
                className="text-left py-2 text-lg font-medium text-slate-700"
              >
                {item}
              </a>
            ))}
            
              href="/portal.html"
              onClick={() => setIsMenuOpen(false)}
              className="bg-slate-100 text-slate-700 p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
            >
              🔧 Área Técnica
            </a>
            
              href="https://wa.me/351939799996"
              className="bg-brand-primary text-white p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
            >
              <MessageSquare size={20} />
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
