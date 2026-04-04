'use client';

import { services } from '@/data/services';
import ServiceCard from './ui/ServiceCard';
import LiquidWarning from './LiquidWarning';

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">
            Especializacoes
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
            Solucoes Completas de TI
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              details={service.details}
              index={index}
            />
          ))}
        </div>

        <LiquidWarning />
      </div>
    </section>
  );
}
