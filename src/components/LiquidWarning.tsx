'use client';

import { ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function LiquidWarning() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-amber-50 border border-amber-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm"
    >
      <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0">
        <ShieldCheck size={32} />
      </div>
      <div className="text-center md:text-left">
        <h4 className="text-xl font-bold text-amber-900 mb-2">
          Emergência com Liquidos?
        </h4>
        <p className="text-amber-800 leading-relaxed">
          Se o seu portátil teve contacto com água ou outro líquido,{' '}
          <span className="font-bold underline">não tente ligá-lo</span>. Entre
          em contacto imediato para tentarmos recuperar o seu equipamento e
          dados.
        </p>
      </div>
      <a
        href="#contacto"
        className="bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-700 transition-all whitespace-nowrap"
      >
        Pedir Ajuda Agora
      </a>
    </motion.div>
  );
}
