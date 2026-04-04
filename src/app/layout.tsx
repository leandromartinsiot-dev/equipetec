import type { Metadata } from 'next';
import { getLocalBusinessSchema, getServicesSchema } from '@/lib/schema';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://leandromartins.pt'),
  title: {
    default: 'Leandro Martins — Servicos Informaticos | Suporte TI para PMEs',
    template: '%s | Leandro Martins',
  },
  description:
    'Suporte tecnico especializado para PMEs em Portugal. Reparacao, Microsoft 365, redes, backup e seguranca. Atendimento remoto e presencial.',
  keywords: [
    'suporte informatico',
    'reparacao computadores',
    'Microsoft 365',
    'redes empresariais',
    'backup',
    'seguranca informatica',
    'PME',
    'Portugal',
    'suporte tecnico Porto',
  ],
  authors: [{ name: 'Leandro Martins' }],
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    siteName: 'Leandro Martins — Servicos Informaticos',
    title: 'Leandro Martins — O seu parceiro tecnologico de confianca',
    description:
      'Suporte tecnico especializado para PMEs em Portugal. Reparacao, Microsoft 365, redes, backup e seguranca.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leandro Martins — Servicos Informaticos',
    description: 'Suporte tecnico especializado para PMEs em Portugal.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://leandromartins.pt',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = getLocalBusinessSchema();
  const servicesSchema = getServicesSchema();

  return (
    <html lang="pt">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
