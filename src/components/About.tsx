'use client';

import { Smartphone, Network, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400&h=500"
                  className="rounded-2xl shadow-lg object-cover w-full h-64"
                  alt="Tecnologia e Seguranca"
                  width={400}
                  height={500}
                />
                <div className="bg-brand-accent p-6 rounded-2xl text-white text-center">
                  <p className="text-3xl font-bold mb-1">100%</p>
                  <p className="text-xs font-medium uppercase tracking-wider opacity-80">
                    Foco no Cliente
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-brand-primary p-6 rounded-2xl text-white text-center flex flex-col justify-center min-h-[120px]">
                  <p className="text-xl font-bold mb-1">Monitorizacao</p>
                  <p className="text-xs font-medium uppercase tracking-wider opacity-80">
                    Sistemas & Redes
                  </p>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=500"
                  className="rounded-2xl shadow-lg object-cover w-full h-64"
                  alt="Confianca Tecnologica"
                  width={400}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">
              Porque Escolher-nos?
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Atendimento Personalizado e Direto com o Especialista
            </h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-brand-accent">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Comunicacao Direta
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Fale diretamente com o responsavel tecnico via WhatsApp,
                    Telefone ou Email. Sem intermediarios ou esperas longas.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-brand-accent">
                  <Network size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Flexibilidade Total
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Suporte remoto rapido para o dia-a-dia e intervencoes
                    presenciais para infraestrutura e problemas complexos.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-brand-accent">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Seguranca Garantida
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Implementamos as melhores praticas de seguranca e backup,
                    garantindo que os seus dados estao sempre protegidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
