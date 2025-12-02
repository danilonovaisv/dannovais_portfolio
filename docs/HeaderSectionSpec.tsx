// HeaderSectionSpec.tsx
// Especificação oficial da seção HEADER (SiteHeader) da Home
// Projeto: Portfólio Institucional de Danilo Novais

export const headerSectionSpec = `
SECTION NAME:
Header (SiteHeader)

SECTION PURPOSE (what this section must achieve):
- Fornecer navegação global clara e consistente para as páginas principais do site.
- Reforçar a identidade visual da marca em todas as páginas.
- Permanecer visível durante a navegação (header fixo) para facilitar o acesso a Home, Sobre, Portfólio e Contato.
- Servir como elemento de estrutura e ancoragem visual para o restante da interface, sem competir com o Hero.

PRIMARY MESSAGE / HEADLINE:
- N/A (o Header contém apenas logo/marca e links de navegação; não há headline textual principal).

SECONDARY MESSAGE / SUPPORT TEXT:
- Conjunto de links de navegação para as páginas/seções principais:
  - "Home"
  - "Sobre"
  - "Portfólio"
  - "Contato"

KEY CONTENT ELEMENTS (bullets, stats, quotes, etc.):
- Favicon / logo de marca exibido à esquerda (versão apropriada para o contexto claro).
- Conjunto de 4 links de navegação:
  - Home
  - Sobre
  - Portfólio
  - Contato
- Comportamento fixo (sticky/fixed) no topo em todas as páginas principais.
- Variação visual leve ao rolar a página (header condensado com fundo mais opaco e leve blur).
- Microinterações de hover nos links (cor + sublinhado animado).

CALL TO ACTION (if any):
- Os próprios links de navegação são os CTAs:
  - "Home": leva para a seção Hero da Home.
  - "Sobre": leva para a página /sobre.
  - "Portfólio": leva para a página /portfolio.
  - "Contato": na Home, faz scroll até a seção Contato; em outras páginas, leva para /#contact.

LINKS GLOBAIS:
- Home:
  - Em Home: href="#hero" ou "/#hero" (decisão exata de rota interna/externa: TBD).
  - Em outras páginas: href="/#hero".
- Sobre:
  - href="/sobre"
- Portfólio:
  - href="/portfolio"
- Contato:
  - Em Home: href="#contact"
  - Em outras páginas: href="/#contact"

LAYOUT TYPE (hero, grid, list, carousel, form, etc.):
- Barra de navegação fixa no topo (top navigation bar).
- Layout horizontal simples:
  - Logo/Favicon à esquerda.
  - Itens de menu à direita, em linha única.

ALIGNMENT (left/center/right, vertical alignment):
- Horizontal:
  - Logo/Favicon: alinhado à esquerda.
  - Menu de navegação: alinhado à direita, em linha com o logo.
- Vertical:
  - Conteúdo (logo + links) centralizado verticalmente dentro da altura do header.
- Espaçamento equilibrado entre logo e navegação, com alinhamento visual limpo e minimalista (inspirado em visionary-design.co.jp).

SPACING (top/bottom padding, breathing room):
- Padding horizontal interno:
  - Esquerda/Direita: \`px-4\` em base; variações responsivas podem ser \`md:px-8\` ou \`lg:px-10\` (detalhe \`TBD\`).
- Padding vertical interno (estado padrão, topo da página):
  - \`py-2\` → Header fino e leve.
- Espaçamento entre itens do menu:
  - \`space-x-6\` entre os links de navegação.
- Em estado condensado (após determinado scroll, ex.: > 40px):
  - Redução sutil de padding vertical (ex.: de \`py-4\` para \`py-2\`, se houver estado inicial mais alto; valor exato pode ser refinado em dev → \`TBD\`).

BACKGROUND (color, gradient, image, video):
- Estado inicial (no topo da página):
  - Fundo branco com baixa opacidade para sensação de leveza sobre o conteúdo:
    - Exemplo Tailwind: \`bg-white/20\`.
- Estado após scroll (header condensado):
  - Fundo branco mais opaco, com leve blur para destacar a navegação quando há conteúdo atrás:
    - Exemplo: \`bg-white/95 backdrop-blur\`.
- Sem imagens, gradientes ou vídeos de fundo no header (minimalismo).

SECTION COLORS (overrides or specific tokens):
- Fundo:
  - Primário do header: branco \`#FFFFFF\`, com variação de opacidade (\`bg-white/20\` → \`bg-white/95\`).
- Texto dos links:
  - Estado normal: \`text-gray-700\` (ou token equivalente, ex.: \`text-neutral-700\`).
  - Hover/Active: \`text-[#0057FF]\` (cor de destaque da marca).
- Ícones (se houver, ex.: ícone de menu mobile):
  - Cor alinhada ao texto (\`gray-700\` / azul no hover).

TYPOGRAPHY (any overrides for headings/body in this section):
- Fonte:
  - Inter (ou similar sans-serif neo-grotesca).
- Peso:
  - Regular (400) para itens de menu.
- Tamanho:
  - Desktop: \`text-base\`.
  - Mobile: \`text-sm\` a \`text-base\`, dependendo do espaço (\`TBD\` no ajuste fino).
- Transformação de texto:
  - Normal case (sem uppercase forçado), rótulos curtos e legíveis.

IMAGERY (what to show: photos, illustrations, icons, logos):
- Logos/ícones:
  - Logo Light:
    - URL: https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/logo_site/faivcon-02.svg
  - Logo Dark:
    - URL: https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/logo_site/faivcon.svg
  - Favicon (logo Header):
    - URL: https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/logo_site/logo.svg
- Uso:
  - No Header principal, usar o ícone/logo que funcione melhor sobre fundo claro (\`TBD\` se será sempre a mesma versão ou se haverá alternância light/dark).
- Não há fotos, ilustrações ou banners no header.

MEDIA (video, animation, Lottie, 3D, etc.):
- Nenhuma mídia pesada (vídeo, Lottie, 3D) no Header.
- Animações limitadas a transições CSS/Framer Motion em transform/opacity dos próprios elementos de texto.

COMPONENTS USED (buttons, cards, tabs, accordions, sliders, etc.):
- Estrutura HTML/JSX:
  - \`<header>\`
  - \`<nav>\`
  - \`<div>\` wrapper para logo.
  - \`<ul>\` + \`<li>\` para lista de links.
  - \`<Link>\` (Next.js) ou \`<a>\` para navegação.
- Integração com Framer Motion:
  - \`motion.header\`, \`motion.nav\`, \`motion.span\` (underline animado nos links).
- Em mobile (\`TBD\` em detalhe):
  - Possível uso de um botão/menu hambúrguer e menu colapsável (não detalhado ainda).

STATE VARIANTS (hover, active, focus, disabled, selected):
- Links de navegação:
  - Hover:
    - Cor do texto muda de \`text-gray-700\` para \`text-[#0057FF]\`.
    - Sublinhado animado (linha sob o texto crescendo de 0 a 100% de largura com Framer Motion).
  - Active (página atual):
    - Texto pode permanecer azul (\`text-[#0057FF]\`).
    - Sublinhado ativo permanente ou estado específico (\`TBD\`).
  - Focus (acessibilidade):
    - Outline ou \`ring\` visível (ex.: \`focus-visible:ring-2 ring-[#0057FF] ring-offset-2\`).
- Estado do Header em função do scroll:
  - Estado 1 (topo):
    - Fundo \`bg-white/20\`, sem blur ou com blur leve.
    - Padding vertical "normal".
  - Estado 2 (scroll > ~40px):
    - Fundo mais opaco \`bg-white/95\`, com \`backdrop-blur\`.
    - Padding vertical levemente reduzido para sensação de header condensado.
- Estados disabled/selected:
  - Não aplicáveis no menu principal (somente active já cobre seleção da página atual).

INTERACTIONS (click, hover, tap, drag, scroll-trigger, etc.):
- Interações principais:
  - Click:
    - Em cada item do menu, navega para a rota ou âncora correspondente.
  - Hover:
    - Muda cor do texto para azul.
    - Mostra sublinhado animado com Framer Motion.
  - Tap (em mobile):
    - Equivalente ao click; pode incluir leve animação de escala (\`TBD\`).
- Não há drag ou interações complexas no header.

SCROLL BEHAVIOUR (sticky, parallax, reveal on scroll):
- Header:
  - Comportamento fixo:
    - \`fixed top-0 left-0 right-0 z-50\` (ou similar).
  - Ao rolar a página:
    - Transição suave de fundo (\`bg-white/20\` → \`bg-white/95\`) e de padding vertical (header “condensa” levemente).
- Não há parallax ou reveal-on-scroll no header em si; ele já inicia visível.

ANIMATIONS (what moves, when, duration, easing):
- Animação de entrada do Header na primeira renderização:
  - \`initial={{ y: -24, opacity: 0 }}\`
  - \`animate={{ y: 0, opacity: 1 }}\`
  - Duração: ~0.6s
  - Easing: \`easeOut\` (ou curva similar).
- Animação de condensing on scroll:
  - Transições suaves em:
    - Padding vertical.
    - Opacidade e intensidade do background.
    - Blur (\`backdrop-blur\`).
  - Controladas por um listener de scroll ou por um hook (ex.: mudança de classe ao passar de um threshold de scroll).
- Animação de hover nos links:
  - Sublinhado animado:
    - \`motion.span\` com \`scaleX\` indo de 0 a 1 no hover, ancorado à esquerda.
  - Mudança suave de cor:
    - \`transition-colors duration-200\`.

MICRO-INTERACTIONS (small feedback, e.g. button press, icon change):
- Links de navegação:
  - Transição suave de cor no hover.
  - Sublinhado com animação leve.
  - Possível leve \`translate-y-0.5\` ou \`scale\` sutil em tap (mobile).
- Header condensando no scroll:
  - Feedback visual sutil que comunica que o usuário “entrou” no conteúdo da página, mantendo a navegação clara.

TEXT LIMITS (max characters for headline, body, CTA):
- Itens de menu:
  - Devem ser curtos, de 1 a 2 palavras (como já definidos: Home, Sobre, Portfólio, Contato).
  - Tamanho máximo recomendado: ~20 caracteres por item.
- Não há headlines ou textos longos no header.

CONTENT PRIORITY (what must be seen first):
1. Logo/Favicon (identidade da marca).
2. Itens de navegação (Home, Sobre, Portfólio, Contato).
3. Em menor grau, qualquer indicação visual de estado (página atual, hover).

ALTERNATIVE CONTENT (fallback if image/video not available):
- Se o logo/Favicon não carregar:
  - Mostrar texto simples "Danilo Novais" ou "DN" no lugar do logo.
- Se fontes customizadas não estiverem disponíveis:
  - Fallback para fontes do sistema (ex.: system-ui, -apple-system, sans-serif).

LINKS / DESTINATIONS (where CTAs point):
- Home:
  - Na própria Home: \`/#hero\` ou \`#hero\` (decisão técnica final: \`TBD\`).
  - Em outras páginas: \`/#
hero\`.
- Sobre:
  - \`/sobre\`
- Portfólio:
  - \`/portfolio\`
- Contato:
  - Na Home: \`/#contact\` ou \`#contact\`.
  - Em outras páginas: \`/#
contact\`.

DATA HOOKS / TRACKING (events to track in analytics):
- Eventos de clique nos links do header:
  - \`header_nav_click\` com propriedades:
    - \`label\`: "home" | "sobre" | "portfolio" | "contato"
    - \`location\`: "header"
- Opcional:
  - \`header_condensed\`: evento disparado uma vez ao condensar o header no scroll (\`TBD\` se será usado).

DEPENDENCIES (APIs, forms, integrations for this section):
- Dependências de conteúdo:
  - Objeto/config com rotas principais (ex.: \`MAIN_ROUTES\`).
  - Objeto de assets de marca:
    - \`BRAND_ASSETS.logo.light\`
    - \`BRAND_ASSETS.logo.dark\`
    - \`BRAND_ASSETS.logo.favicon\`
- Dependências técnicas:
  - Next.js (\`Link\` para navegação interna).
  - Framer Motion (para animação de entrada e underline animado, se adotado).
- Não há APIs externas ou formulários ligados diretamente ao header.

ACCESSIBILITY NOTES (alt text, motion reduction, ARIA if needed):
- Acessibilidade de teclado:
  - Todos os links navegáveis por \`Tab\`.
  - Ordem lógica de foco (logo → links da esquerda para a direita).
- Alt text:
  - Logo/Favicon:
    - \`alt="Logo de Danilo Novais"\` (ou similar).
- ARIA:
  - \`<nav aria-label="Navegação principal">\` envolvendo a lista de links.
- Prefers-reduced-motion:
  - Manter apenas transições simples de opacidade/cor.
  - Evitar animações demasiadamente chamativas na entrada (\`initial/animate\` podem ser reduzidos a um fade simples).
  - Sublinhado animado pode continuar, desde que discreto (ou ficar estático em usuários com \`prefers-reduced-motion: reduce\` → \`TBD\` na decisão final).

SPECIAL STATES (empty state, error state, loading state):
- Empty state:
  - Não aplicável (header sempre renderiza com logo e links).
- Error state:
  - Falha no carregamento da logo → fallback com texto (“Danilo Novais”).
- Loading state:
  - Não há loading específico de header além do carregamento inicial da página (sem skeleton dedicado).

NOTES / INSPIRATION (links, references, moodboards):
- Referências visuais e de comportamento:
  - https://visionary-design.co.jp — inspiração de header minimalista, leve, com foco em tipografia e clareza.
  - Linguagem visual minimalista de estúdios contemporâneos.
- Integração com o restante do site:
  - O header deve complementar, e não competir com:
    - Hero 3D + vídeo manifesto.
    - Seções de Portfólio Showcase e Featured Projects.

REFERENCES:
- Documento de briefing e especificação técnica do site (PROMPT DE ANALISE DE SITE IMPLEMENTADO - versão atualizada).
- Diretrizes globais de animação (Framer Motion) definidas no projeto:
  - Reveal no scroll, microinterações, respeito ao \`prefers-reduced-motion\`.

“NON-NEGOTIABLES” (things that cannot change in this section):
- Header fixo no topo em todas as páginas principais.
- Presença de logo/Favicon da marca no lado esquerdo.
- Itens obrigatórios no menu:
  - Home
  - Sobre
  - Portfólio
  - Contato
- Comportamento do link "Contato":
  - Deve levar à seção de contato da Home (scroll/âncora).
- Estética minimalista:
  - Fundo branco (ou branco translúcido), tipografia limpa, ausência de elementos visuais pesados.
- Uso da cor de destaque \`#0057FF\` no hover e estados ativos dos links.
`;

export default function HeaderSectionSpec() {
    return null;
}