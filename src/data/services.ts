import { Monitor, Smartphone, Cloud, Network, ShieldCheck, Apple } from 'lucide-react';

export const services = [
  {
    title: "Suporte Tecnico",
    description: "Resolucao de problemas de hardware e software, manutencao preventiva e suporte remoto ou presencial.",
    icon: Monitor,
    details: ["Suporte Remoto", "Intervencao In-loco", "Substituicao de Ecras", "Software Troubleshooting"]
  },
  {
    title: "Reparacao & Emergencia",
    description: "Recuperacao de equipamentos danificados e intervencoes criticas de hardware.",
    icon: Smartphone,
    details: ["Substituicao de Ecras", "Danos por Liquidos", "Limpeza e Manutencao", "Upgrade de Hardware"]
  },
  {
    title: "Microsoft 365",
    description: "Administracao completa do ecossistema Microsoft para a sua empresa.",
    icon: Cloud,
    details: ["Gestao de Emails", "Seguranca e Permissoes", "Configuracao de Contas", "Suporte Office Apps"]
  },
  {
    title: "Infraestrutura de Redes",
    description: "Desenho e implementacao de redes robustas e seguras.",
    icon: Network,
    details: ["Wi-Fi Empresarial", "Redes Cabeadas", "Configuracao de Routers/Switches", "Organizacao de Bastidores"]
  },
  {
    title: "Backup e Seguranca",
    description: "Protecao total dos dados criticos do seu negocio.",
    icon: ShieldCheck,
    details: ["Backup Local e Cloud", "Monitorizacao 24/7", "Recuperacao de Dados", "Boas Praticas RGPD"]
  },
  {
    title: "Apple & Windows",
    description: "Especialista em ambientes mistos, garantindo integracao perfeita.",
    icon: Apple,
    details: ["Suporte macOS e Windows", "Configuracao de Dispositivos", "Integracao de Sistemas", "Suporte Mobile"]
  }
];
