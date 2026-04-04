# Leandro Martins — Servicos Informaticos (Website)

Website profissional migrado para **Next.js 15** com App Router, otimizado para SEO.

---

## O que foi feito (resumo da migracao)

- **Antes:** React SPA (Vite) sem SEO, sem metadata, titulo generico "My Google AI Studio App"
- **Depois:** Next.js 15 com SSR/SSG, metadata completa, Schema.org, sitemap e robots.txt

### Melhorias implementadas

| Area | Antes | Depois |
|------|-------|--------|
| Renderizacao | SPA client-side (invisivel ao Google) | SSR/SSG (indexavel) |
| Titulo | "My Google AI Studio App" | "Leandro Martins — Servicos Informaticos" |
| Meta description | Inexistente | Completa e otimizada |
| Open Graph | Inexistente | Titulo, descricao, imagem |
| Twitter Card | Inexistente | summary_large_image |
| Canonical URL | Inexistente | Configurado |
| Schema.org JSON-LD | Inexistente | LocalBusiness + 6 Services |
| sitemap.xml | Inexistente | Dinamico (auto-gerado) |
| robots.txt | Inexistente | Dinamico (auto-gerado) |
| HTML lang | "en" | "pt" |
| Pagina 404 | Generica | Customizada em portugues |
| Componentizacao | 1 ficheiro (545 linhas) | 11 componentes organizados |
| Dependencias | 10 (com 4 nao usadas) | 5 (apenas as necessarias) |

---

## Requisitos

- **Node.js** 18.17 ou superior
- **npm** 9+

---

## Instalacao e desenvolvimento local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Abrir no browser
# http://localhost:3000
```

---

## Build de producao

```bash
# Gerar build otimizado
npm run build

# Testar build localmente
npm start
```

---

## Deploy

### Opcao 1 — Vercel (recomendado)

1. Criar conta em https://vercel.com
2. Importar este repositorio (ou fazer upload da pasta)
3. O Vercel deteta Next.js automaticamente
4. Clicar "Deploy"
5. Configurar dominio customizado nas definicoes do projeto

### Opcao 2 — Qualquer servidor Node.js

```bash
npm install
npm run build
npm start
# O servidor inicia na porta 3000
```

### Opcao 3 — Export estatico (sem servidor)

Adicionar ao `next.config.mjs`:
```js
const nextConfig = {
  output: 'export',
  // ... resto da config
};
```

Depois:
```bash
npm run build
# Os ficheiros estaticos ficam na pasta /out
# Fazer upload dessa pasta para qualquer hosting (Netlify, cPanel, etc.)
```

---

## Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz (metadata SEO, Schema.org, fonts)
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Gera /sitemap.xml automaticamente
│   ├── robots.ts           # Gera /robots.txt automaticamente
│   └── not-found.tsx       # Pagina 404 customizada
│
├── components/
│   ├── Header.tsx          # Barra de navegacao
│   ├── Hero.tsx            # Seccao principal (hero)
│   ├── Services.tsx        # Grid de 6 servicos
│   ├── LiquidWarning.tsx   # Alerta de emergencia com liquidos
│   ├── About.tsx           # Seccao "Porque Escolher-nos"
│   ├── Testimonials.tsx    # Testemunhos de clientes
│   ├── Contact.tsx         # Formulario de contacto
│   ├── Footer.tsx          # Rodape
│   ├── WhatsAppButton.tsx  # Botao flutuante WhatsApp
│   └── ui/
│       ├── AnimatedSection.tsx  # Wrapper de animacao
│       └── ServiceCard.tsx      # Card individual de servico
│
├── data/
│   ├── services.ts         # Dados dos 6 servicos
│   ├── testimonials.ts     # Dados dos testemunhos
│   └── stats.ts            # Dados das estatisticas
│
├── lib/
│   └── schema.ts           # Schema.org JSON-LD (LocalBusiness + Service)
│
└── styles/
    └── globals.css         # Tailwind CSS + estilos globais
```

---

## Tarefas pendentes (recomendadas)

- [ ] Adicionar favicon em `public/favicon.ico`
- [ ] Criar imagem Open Graph em `public/og-image.jpg` (1200x630 px)
- [ ] Substituir imagens Unsplash por fotografias proprias
- [ ] Instalar Google Analytics ou Tag Manager
- [ ] Configurar dominio definitivo (atualizar URL em `layout.tsx`, `sitemap.ts` e `robots.ts`)
- [ ] Submeter sitemap na Google Search Console

---

## Dominio

O dominio esta configurado como `https://leandromartins.pt` nos ficheiros de SEO.
Se o dominio final for diferente, atualizar em:

1. `src/app/layout.tsx` — campo `metadataBase` e `alternates.canonical`
2. `src/app/sitemap.ts` — campo `url`
3. `src/app/robots.ts` — campo `sitemap`
4. `src/lib/schema.ts` — campo `url`

---

## Stack tecnologica

- **Next.js** 15 (App Router)
- **React** 19
- **TypeScript**
- **Tailwind CSS** 4
- **Motion** (Framer Motion) — animacoes
- **Lucide React** — icones
# equipetec
