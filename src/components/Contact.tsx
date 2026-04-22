'use client';

import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    subject: 'Suporte Tecnico',
    message: '',
  });

  const handleSendMessage = () => {
    const body = `Nome: ${form.name}%0D%0AEmpresa: ${form.company}%0D%0AAssunto: ${form.subject}%0D%0AMensagem: ${form.message}`;
    window.location.href = `mailto:suporte@equipetec.pt?subject=${encodeURIComponent(form.subject || 'Contacto Web')}&body=${body}`;
  };

  return (
    <section
      id="contacto"
      className="section-padding bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-accent rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">
              Contacto
            </h2>
            <h3 className="text-5xl font-bold mb-8 leading-tight">
              Vamos falar sobre <br />o seu projeto?
            </h3>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Estamos prontos para ser o seu braco direito tecnológico. Entre em
              contacto para um orçamento gratuito ou para esclarecer qualquer
              dúvida.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:suporte@equipetec.pt"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">
                    Email Profissional
                  </p>
                  <p className="text-xl font-bold">suporte@equipetec.pt</p>
                </div>
              </a>
              <a
                href="tel:+351939799996"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">
                    Telefone / WhatsApp
                  </p>
                  <p className="text-xl font-bold">+351 939 799 996</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10">
            <h4 className="text-2xl font-bold mb-8">
              Envie uma Mensagem Rapida
            </h4>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="O seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Assunto
                </label>
                <select
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors appearance-none"
                >
                  <option className="bg-slate-900">Suporte Tecnico</option>
                  <option className="bg-slate-900">Microsoft 365</option>
                  <option className="bg-slate-900">
                    Redes / Infraestrutura
                  </option>
                  <option className="bg-slate-900">Contrato Mensal</option>
                  <option className="bg-slate-900">Outro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                onClick={handleSendMessage}
                className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
