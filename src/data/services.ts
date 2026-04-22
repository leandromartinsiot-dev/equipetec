import { Monitor, Smartphone, Cloud, Network, ShieldCheck, Apple } from 'lucide-react';

export const services = [
  {
    title: "Suporte Técnico",
    description: "Resolução de problemas de hardware e software, manutencao preventiva e suporte remoto ou presencial.",
    icon: Monitor,
    details: ["Suporte Remoto", "Intervencao In-loco", "Substituicao de Ecras", "Software Troubleshooting"]
  },
  {
    title: "Reparação & Emergencia",
    description: "Recuperacao de equipamentos danificados e intervenções críticas de hardware.",
    icon: Smartphone,
    details: ["Substituição de Ecras", "Danos por Liquidos", "Limpeza e Manutenção", "Upgrade de Hardware"]
  },
  {
    title: "Microsoft 365",
    description: "Administração completa do ecossistema Microsoft para a sua empresa.",
    icon: Cloud,
    details: ["Gestão de Emails", "Segurança e Permissões", "Configuração de Contas", "Suporte Office Apps"]
  },
  {
    title: "Infraestrutura de Redes",
    description: "Desenho e implementação de redes robustas e seguras.",
    icon: Network,
    details: ["Wi-Fi Empresarial", "Redes Cabeadas", "Configuração de Routers/Switches", "Organização de Bastidores"]
  },
  {
    title: "Backup e Segurança",
    description: "Proteção total dos dados críticos do seu negócio.",
    icon: ShieldCheck,
    details: ["Backup Local e Cloud", "Monitorização 24/7", "Recuperação de Dados", "Boas Práticas RGPD"]
  },
  {
    title: "Apple & Windows",
    description: "Especialista em ambientes mistos, garantindo integração perfeita.",
    icon: Apple,
    details: ["Suporte macOS e Windows", "Configuração de Dispositivos", "Integração de Sistemas", "Suporte Mobile"]
  }
];
