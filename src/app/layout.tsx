import type { Metadata } from 'next';
import { getLocalBusinessSchema, getServicesSchema } from '@/lib/schema';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://equipetec.pt'),
  title: {
    default: 'Serviços Informáticos Porto | Suporte TI para PMEs',
    template: '%s | Equipetec',
  },
  description:
    'Suporte técnico especializado para PMEs em Portugal. Reparação, Microsoft 365, redes, backup e segurança. Atendimento remoto e presencial.',
  keywords: [
    'suporte informático',
    'reparação computadores',
    'Microsoft 365',
    'redes empresariais',
    'backup',
    'segurança informática',
    'PME',
    'Portugal',
    'Porto',
    'suporte técnico Porto',
  ],
  authors: [{ name: 'Equipetec' }],
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    siteName: 'Serviços Informáticos',
    title: 'Equipetec — O seu parceiro tecnologico de confianca',
    description:
      'Suporte técnico especializado para PMEs em Porto - Portugal. Reparação, Microsoft 365, redes, backup e segurança.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serviços Informáticos',
    description: 'Suporte técnico especializado para PMEs em Porto - Portugal.',
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
    canonical: 'https://equipetec.pt',
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
