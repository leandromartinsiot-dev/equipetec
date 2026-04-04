'use client';

import { testimonials } from '@/data/testimonials';
import { Quote, CheckCircle2 } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

export default function Testimonials() {
  return (
    <section id="testemunhos" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">
            Feedback
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
            O que dizem os nossos clientes
          </h3>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="break-inside-avoid bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <div className="absolute top-6 right-8 text-slate-100 group-hover:text-brand-accent/10 transition-colors">
                <Quote size={48} />
              </div>
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-slate-400 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
