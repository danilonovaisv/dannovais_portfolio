// HeroSectionSpec.tsx
// Especificação oficial da seção HERO (Bola de Vidro Líquido + entrada da thumb do vídeo)
// Projeto: Portfólio Institucional de Danilo Novais

export const heroSectionSpec = `
SECTION NAME:
Hero — Bola de Vidro Líquido Interativa

SECTION PURPOSE (what this section must achieve):
- Introduzir a proposta de valor de Danilo com alto impacto visual e conceitual.
- Comunicar que “Design, não é só estética.”, mas também intenção, estratégia e experiência.
- Apresentar a bola/torus de vidro líquido 3D como símbolo central de marca e domínio técnico em WebGL/R3F.
- Conectar o início da experiência do vídeo manifesto ao fluxo de scroll, inspirando-se na interação de loandbehold.studio.
- Conduzir o usuário naturalmente para explorar mais sobre Danilo (CTA para /sobre) e para a próxima seção (Vídeo Manifesto).

PRIMARY MESSAGE / HEADLINE:
- Texto principal:
  - "Design, não é só estética."
- Composição visual (3 linhas):
  - Linha 1 (azul): "Design,"
  - Linha 2: "não é só"
  - Linha 3: "estética."

SECONDARY MESSAGE / SUPPORT TEXT:
- Statement de apoio, destacado em bloco leve:
  - "[É intenção, é estratégia, é experiência.]"
- Deve reforçar que o trabalho vai além da forma, integrando intenção, estratégia e experiência do usuário.

KEY CONTENT ELEMENTS (bullets, stats, quotes, etc.):
- Tag de contexto:
  - "[BRAND AWARENESS]" alinhada ao bloco tipográfico principal.
- Headline principal em 3 linhas, com efeito de entrada “3D flip”.
- Texto secundário:
  - "[É intenção, é estratégia, é experiência.]" em destaque leve (pill/bloco).
- CTA principal:
  - Label: "get to know me better →"
  - Destino: "/sobre"
- Hero 3D:
  - Arquivo 3D: "/media/torus_dan.glb"
  - Forma: bola/torus com estética de vidro líquido / gel derretido.
  - Material: MeshTransmissionMaterial (ou equivalente) configurado para efeito de vidro líquido (transmissão, refração, distorção).
  - Interações:
    - Rotação reagindo ao scroll.
    - Parallax suave com o mouse.
- Thumb do vídeo manifesto:
  - Estado inicial: pequena, à direita, com bordas arredondadas.
  - Comportamento na Hero: cresce, se desloca e perde borderRadius enquanto o usuário rola, preparando a transição para a seção Vídeo Manifesto.
- Indicador sutil de scroll (opcional):
  - Pequena seta/label sugerindo que há mais conteúdo ao rolar.

CALL TO ACTION (if any):
- CTA principal:
  - Texto: "get to know me better →"
  - Ação: Navegar para a página /sobre.
- O CTA deve ser claramente percebido como botão/link clicável, com microinterações de hover/tap.

LINKS GLOBAIS:
- Âncora da seção Hero:
  - id="hero"
- Navegação vinda do Header/Footer:
  - Na Home: href="#hero"
  - Em outras páginas: href="/#hero"
- Conexão lógica com a próxima seção:
  - O fim da Hero conduz visualmente para a seção "Vídeo Manifesto" (id="manifesto"), onde o vídeo já assume papel principal.

LAYOUT TYPE (hero, grid, list, carousel, form, etc.):
- Hero imersivo com altura estendida e animações guiadas por scroll.
- Layout responsivo:
  - Desktop: 2 colunas.
    - Esquerda: texto (tag, headline, secundário, CTA).
    - Direita: bola de vidro 3D + thumb do vídeo manifesto.
  - Mobile: 1 coluna empilhada.
    - Primeiro texto, depois 3D, depois thumb do vídeo.
- Altura externa da seção:
  - Aproximadamente 200vh, permitindo hero sticky + transformação do vídeo.

ALIGNMENT (left/center/right, vertical alignment):
- Desktop:
  - Esquerda:
    - Conteúdo textual alinhado à esquerda.
  - Direita:
    - Canvas 3D e thumb do vídeo ocupando o lado direito, com posicionamento equilibrado.
- Mobile:
  - Elementos centralizados horizontalmente, com margens laterais respeitando o grid da página.
- Vertical:
  - Conteúdo interno da Hero (texto + 3D + thumb) mantido centralizado verticalmente dentro do viewport quando sticky.

SPACING (top/bottom padding, breathing room):
- Seção externa:
  - Altura mínima: min-h-[200vh] (ou token equivalente).
- Wrapper interno (hero sticky):
  - position: sticky;
  - top: 0;
  - min-height: 100vh;
- Padding horizontal:
  - Mobile: px-6
  - Desktop: md:px-12 (ou tokens equivalentes).
- Espaçamento entre elementos:
  - Espaço generoso entre:
    - Tag, headline, texto secundário e CTA.
    - Canvas 3D e thumb do vídeo.
  - Evitar aproximação excessiva com as bordas da viewport em telas pequenas.

BACKGROUND (color, gradient, image, video):
- Fundo da Hero:
  - Cor sólida neutra clara: #F4F5F7 (ou token neutro equivalente).
- Canvas 3D:
  - Pode ter background interno mais escuro ou deixar o fundo transparente para integrar com o background CSS da seção (decisão visual: TBD).
- Não há imagens de fundo, gradientes ou vídeos ocupando o background da seção; o foco é a combinação 3D + texto + vídeo.

SECTION COLORS (overrides or specific tokens):
- Fundo:
  - #F4F5F7 (neutro claro).
- Cor de destaque (brand):
  - #0057FF.
- Headline:
  - “Design,” em azul #0057FF.
  - “não é só” e “estética.” em #111111.
- Texto secundário:
  - Em azul #0057FF ou em pill com essa cor de acento.
- Tag "[BRAND AWARENESS]":
  - Texto em cinza médio ou azul leve, com borda/pill discreta.
- CTA:
  - Texto em azul (#0057FF), fundo neutro ou transparente (estilo link-button minimalista).
- Corpo de texto:
  - Tons escuros: #111111 / #222222.

TYPOGRAPHY (any overrides for headings/body in this section):
- Fonte:
  - Inter (ou similar neo-grotesca).
- Headline:
  - Peso: Bold (700/800).
  - Tamanho:
    - Desktop: text-5xl a text-6xl.
    - Mobile: text-3xl a text-4xl.
  - Letter-spacing levemente ajustado para legibilidade em telas grandes.
- Texto secundário:
  - Peso: Medium (500) ou Semi-bold (600).
  - Tamanho: text-base a text-lg.
- Tag:
  - Peso: Medium (500).
  - Tamanho: text-xs / text-sm.
  - Pode ser uppercase.
- CTA:
  - Peso: Medium (500–600).
  - Tamanho: text-sm / text-base.

IMAGERY (what to show: photos, illustrations, icons, logos):
- Elemento visual principal:
  - Bola/torus 3D de vidro líquido (torus_dan.glb).
- Vídeo manifesto:
  - Thumb usa o próprio vídeo em miniatura como imagem dinâmica.
- Ícones:
  - Seta "→" no CTA (parte do texto).
  - Opcional: ícone pequeno de "play" ou indicador de vídeo na thumb (TBD, se necessário para clareza).

MEDIA (video, animation, Lottie, 3D, etc.):
- 3D:
  - GLB: /media/torus_dan.glb
  - Renderização:
    - React Three Fiber + @react-three/drei.
  - Material:
    - MeshTransmissionMaterial com foco em transmissão, refração e distorção líquida.
  - Iluminação:
    - Environment HDRI (ex.: preset "city") para highlights.
    - AmbientLight suave + 1–2 DirectionalLights para rim light e leitura da forma.
- Vídeo Manifesto:
  - URL oficial:
    - (usado tanto na Hero quanto na seção Vídeo Manifesto)
  - Na Hero:
    - Renderizado como thumb em motion.div/motion.video com transformações de escala, x, y e borderRadius guiadas por scroll.

COMPONENTS USED (buttons, cards, tabs, accordions, sliders, etc.):
- Estrutura semântica:
  - <section id="hero">
  - Container sticky interno para conteúdo.
- Bloco de texto:
  - Tag, headline, texto secundário, CTA.
- Bloco visual:
  - Container para <Canvas> (R3F) com torus de vidro.
  - Container para <motion.div>/<motion.video> (thumb do vídeo manifesto).
- Componentes React / libs:
  - Framer Motion: motion.div, motion.span, motion.a, useScroll, useTransform, useInView.
  - R3F/drei: Canvas, useGLTF, MeshTransmissionMaterial, Environment, luzes.

STATE VARIANTS (hover, active, focus, disabled, selected):
- CTA "get to know me better →":
  - Hover:
    - Leve aumento de escala (~1.03).
    - Pequeno deslocamento vertical para cima (~-2px).
  - Tap/Active:
    - Leve compressão de escala (~0.97).
  - Focus:
    - Outline/ring visível (ex.: focus-visible:ring-2 ring-[#0057FF] ring-offset-2).
- Bola 3D:
  - Estado interativo padrão (movimento com scroll e mouse).
  - Estado de motion-reduced (sem rotação/parallax).
- Thumb do vídeo:
  - Sem estados de hover obrigatórios (pode haver leve aumento de brilho ou overlay sutil; detalhe: TBD).

INTERACTIONS (click, hover, tap, drag, scroll-trigger, etc.):
- Scroll:
  - A Hero fica sticky enquanto o usuário percorre a altura de ~200vh.
  - Thumb do vídeo:
    - Entra pequena, "colada" à lateral direita, com bordas arredondadas.
    - Cresce, desloca-se em direção ao centro, perde borderRadius, aproximando-se de um estado quase full-width (estágio que se conecta à seção Vídeo Manifesto).
  - Conteúdo textual:
    - Mantém opacidade total no início.
    - Vai perdendo opacidade à medida que o vídeo cresce.
- Mouse:
  - Bola 3D:
    - Parallax leve: segue sutilmente o cursor em eixos X/Z, via useFrame + state.mouse.
- Click:
  - CTA:
    - Navega para /sobre.
- Hover:
  - CTA:
    - Microinterações de escala e posição.
  - Opcional: indicadores visuais de interatividade na thumb do vídeo (TBD).

SCROLL BEHAVIOUR (sticky, parallax, reveal on scroll):
- Comportamento geral:
  - Wrapper externo da Hero:
    - min-h-[200vh].
  - Conteúdo interno:
    - sticky top-0 min-h-screen.
- Mapeamento de scroll (via useScroll + useTransform):
  - scale da thumb do vídeo:
    - Evoluindo de ~0.35 → 0.9 → 1.1/1.2.
  - x/y da thumb:
    - x: de deslocamento lateral (tipo "18vw") até "0vw".
    - y: de levemente acima para posição mais central.
  - borderRadius:
    - Começa alto (28px), reduz intermediário (18px), chega perto de 0 (vídeo retangular).
  - Opacidades:
    - textOpacity: [1 → 1 → 0] em faixas de scroll.
    - brandOpacity (tag/elements): [1 → 1 → 0] em faixas de scroll.
- Comportamento inspirado diretamente em loandbehold.studio, mas aplicado ao contexto e conteúdo de Danilo.

ANIMATIONS (what moves, when, duration, easing):
- Headline (efeito “3D flip”):
  - Cada palavra/linha em motion.span:
    - initial: { rotateX: -80, y: 40, opacity: 0 }
    - animate: { rotateX: 0, y: 0, opacity: 1 }
    - transition: { duration: 0.7, ease: 'easeOut' }
  - Container com staggerChildren: ~0.06.
- Versão reduced motion:
  - initial: { opacity: 0, y: 10 }
  - animate: { opacity: 1, y: 0 }
- CTA:
  - whileHover: { scale: 1.03, y: -2 }
  - whileTap: { scale: 0.97 }
  - transition: { type: 'spring', stiffness: 260, damping: 18 }
- Vídeo (thumb) na Hero:
  - initial: { scale: 1.06 }
  - animate: { scale: 1 }
  - scale/x/y/borderRadius animados conforme scroll.
- Bola 3D:
  - useFrame:
    - Rotação Y baseada em scroll.offset (ex.: até 2–4 voltas ao longo da seção).
    - Rotação X/Z com MathUtils.damp mirando posição derivada de state.mouse.

MICRO-INTERACTIONS (small feedback, e.g. button press, icon change):
- CTA:
  - Micro "bounce" em hover/tap.
- Bola 3D:
  - Pequenas respostas à movimentação de mouse, com inércia suave.
- Thumb do vídeo:
  - Pequenas variações de escala/blur ao entrar em view (via useInView), sem exageros.

TEXT LIMITS (max characters for headline, body, CTA):
- Headline:
  - Fixa: "Design, não é só estética." (sem variação).
- Texto secundário:
  - Fixo: "[É intenção, é estratégia, é experiência.]".
- CTA:
  - Fixo: "get to know me better →".
- Não há variações dinâmicas de copy previstas; os limites formais são irrelevantes na v1 (TBD se for parametrizado no futuro).

CONTENT PRIORITY (what must be seen first):
1. Headline "Design, não é só estética.".
2. Bola/torus de vidro 3D (como elemento de marca).
3. Texto secundário e tag [BRAND AWARENESS].
4. CTA "get to know me better →".
5. Evolução da thumb do vídeo manifesto durante o scroll (preparando a próxima seção).

ALTERNATIVE CONTENT (fallback if image/video not available):
- 3D:
  - Se o modelo /media/torus_dan.glb não carregar:
    - Fallback para imagem estática do torus renderizada previamente (TBD).
- Vídeo:
  - Se o vídeo não carregar ou estiver indisponível:
    - Fallback para thumb estática com mensagem (ex.: "Vídeo manifesto indisponível no momento") e, opcionalmente, link para abertura em nova aba, se houver host alternativo (TBD).

LINKS / DESTINATIONS (where CTAs point):
- CTA principal:
  - "get to know me better →" → "/sobre".
- Âncora da Hero:
  - "#hero" (usado pelo Header/Footer).
- Navegação visual para a próxima seção:
  - A transição visual leva para a seção "Vídeo Manifesto" (id="manifesto"), que continua a experiência do vídeo.

DATA HOOKS / TRACKING (events to track in analytics):
- hero_cta_click:
  - Disparado ao clicar no CTA "get to know me better →".
  - Propriedades:
    - label: "hero_cta_sobre"
    - location: "hero"
- hero_video_thumb_scroll_reached (opcional):
  - Evento ao alcançar certo threshold de scroll em que o vídeo já está grande (TBD).
- hero_section_view:
  - Evento de visualização da Hero (TBD se será disparado ao entrar totalmente em viewport, via IntersectionObserver ou similar).

DEPENDENCIES (APIs, forms, integrations for this section):
- Ativos:
  - HERO_3D_MODEL_PATH = "/media/torus_dan.glb"
  - MANIFESTO_VIDEO_URL (mesmo URL usado na seção de Vídeo Manifesto).
- Tecnologias:
  - React Three Fiber (@react-three/fiber)
  - @react-three/drei (MeshTransmissionMaterial, useGLTF, Environment, etc.)
  - Framer Motion (motion, useScroll, useTransform, useInView)
- Guias técnicos:
  - Tutorial de glass effect de Olivier Larose.
  - Documentação MeshRefractionMaterial / MeshTransmissionMaterial.
  - Documentação R3F/drei.

ACCESSIBILITY NOTES (alt text, motion reduction, ARIA if needed):
- Prefers-reduced-motion:
  - Respeitar \`prefers-reduced-motion: reduce\`:
    - Desativar rotação contínua e parallax do torus.
    - Simplificar animações de scroll da thumb (posicionamento mais estático, apenas fades suaves).
    - Manter apenas transições de opacidade/escala leves.
- 3D:
  - Conteúdo decorativo/branding (não essencial para entender o serviço).
  - Mensagem da Hero deve ser compreensível pelo texto sozinho.
- Vídeo:
  - Na Hero, o vídeo é thumb animada; a experiência principal de vídeo e legendas será detalhada na seção Vídeo Manifesto.
- CTA:
  - Link acessível via teclado com foco visível.
  - Texto suficientemente descritivo; aria-label pode replicar o texto do link.
- ARIA:
  - A seção pode ter \`aria-labelledby\` apontando para o heading principal da Hero.

SPECIAL STATES (empty state, error state, loading state):
- Loading (3D):
  - Placeholder leve (ex.: gradient estático, skeleton) enquanto o GLB carrega (TBD).
- Loading (vídeo thumb):
  - Placeholder com cor neutra/gradiente e aspecto de “card” de vídeo enquanto a thumb carrega (TBD).
- Error (3D):
  - Mostrar fallback estático (imagem ou bloco com texto “visual 3D indisponível atualmente”).
- Error (vídeo):
  - Mensagem sutil indicando indisponibilidade do vídeo, sem quebrar a composição geral.

NOTES / INSPIRATION (links, references, moodboards):
- Referência central para movimento e scroll:
  - https://loandbehold.studio/
- Referências técnicas para vidro líquido:
  - Tutorial Olivier Larose: 3D glass effect.
  - Documentação MeshRefractionMaterial / MeshTransmissionMaterial em @react-three/drei.
  - Documentação R3F: padrões de cena, performance e hooks.
- Mockups internos:
  - HOME-PORTFOLIO-LAYOUYT_ESPERADO.jpg (para estrutura de layout e tipografia).

REFERENCES:
- Documento de briefing e especificação técnica da Home (versão atualizada).
- Anexo técnico:
  - Implementação de Estética de Vidro Líquido Interativo de Alta Fidelidade em Ambientes Web (Análise técnica R3F).
- Padrões globais de animação e acessibilidade definidos para o projeto (Framer Motion + prefers-reduced-motion).

“NON-NEGOTIABLES” (things that cannot change in this section):
- Headline exata: "Design, não é só estética." como mensagem principal.
- Uso da bola/torus de vidro líquido 3D como elemento central da Hero (não substituir por imagem 2D simples).
- Uso de MeshTransmissionMaterial (ou equivalente) para efeito de vidro líquido (não virar apenas um material opaco genérico).
- Integração da Hero com o início da animação do vídeo manifesto:
  - Thumb que cresce, se desloca e perde bordas conforme o scroll.
  - Texto da Hero que se desvanece quando o vídeo assume mais espaço.
- CTA "get to know me better →" apontando para "/sobre".
- Respeito explícito a prefers-reduced-motion (redução de movimentos fortes).
- Hero como seção inicial de conteúdo da Home, imediatamente após o Header.
`;

export default function HeroSectionSpec() {
    return null;
}