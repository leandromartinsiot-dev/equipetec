import { services } from '@/data/services';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Leandro Martins — Servicos Informaticos',
    description: 'Suporte técnico especializado para PMEs em Portugal. Reparacao, Microsoft 365, redes, backup e seguranca.',
    telephone: '+351939799996',
    email: 'leandromartins.iot@gmail.com',
    url: 'https://leandromartins.pt',
    areaServed: {
      '@type': 'Country',
      name: 'Portugal',
    },
    priceRange: '$$',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+351939799996',
      contactType: 'customer service',
      availableLanguage: ['Portuguese', 'English'],
    },
  };
}

export function getServicesSchema() {
  return services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Leandro Martins — Servicos Informaticos',
    },
    name: service.title,
    description: service.description,
  }));
}
