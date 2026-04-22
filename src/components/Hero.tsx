'use client';

import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { stats } from '@/data/stats';

export default function Hero() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Disponível para Suporte Remoto e Presencial
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            O seu parceiro <br />
            <span className="text-brand-accent">tecnológico</span> de confiança
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            Suporte técnico especializado para PMEs em Portugal. Administração
            de redes, Microsoft 365 e soluções de backup para garantir a
            continuidade do seu negócio.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#serviços"
              className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-200"
            >
              Ver Serviços
              <ArrowRight size={20} />
            </a>
            <a
              href="tel:+351939799996"
              className="bg-slate-100 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2"
            >
              <Phone size={20} />
              +351 939 799 996
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
            <Image
              src="https://69d0f7f51362132535da4311.imgix.net/foto-home.png?auto=format&fit=fill&w=640"
              alt="Paisagem de confianca e seguranca"
              width={800}
              height={1000}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          {/* Floating Stats Card */}
          <div className="absolute -bottom-6 -left-6 z-20 glass-card p-6 rounded-2xl border border-slate-200 hidden md:block">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                    {stat.label}
                  </p>
                  <p className="text-lg font-bold text-slate-900">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-brand-primary/5 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
