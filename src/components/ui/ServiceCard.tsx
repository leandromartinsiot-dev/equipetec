'use client';

import { motion } from 'motion/react';
import { CheckCircle2, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
  index: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  details,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
    >
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
        <Icon size={28} />
      </div>
      <h4 className="text-2xl font-bold text-slate-900 mb-4">{title}</h4>
      <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {details.map((detail) => (
          <li
            key={detail}
            className="flex items-center gap-3 text-sm text-slate-500 font-medium"
          >
            <CheckCircle2 size={16} className="text-brand-accent" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
