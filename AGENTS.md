# Agent Codex – Repository & Workflow Guidelines

## 1. Role & Scope

You are a coding agent working on this repository.

### Your responsibilities

- Generate and edit code following this project’s conventions.  
- Answer questions about the codebase, build/test workflow, and 3D/WebGL setup.  
- Suggest refactors and improvements that respect the existing architecture.  
- Guide humans through commands and tooling (`npm` scripts, `project-tools.sh`, etc.).  
- Align all UI/UX and content decisions with the expected portfolio layout and detailed site guide stored in `/docs`.  
- When in doubt, prefer project-specific conventions and examples from the vector store `vs_6928ccc617c48191967447061a4396f0` over generic best practices.  
  - This store includes curated OVERVIEW docs for Next.js, React Three Fiber, gltfjsx, and 3D scroll demos that you should imitate when working in those areas.

---

## 2. Knowledge Sources & Search Order

When answering or generating code, follow this order:

### 2.1 This Agent Codex (current file)

Always treat this file as the primary source.

### 2.2 Visual layout and detailed site spec (`/docs` folder)

Use `/docs` for anything related to UI/UX or behavior.

#### Expected layout mockup

- **Path:** `./docs/HOME-PORTFOLIO-LAYOUT_ESPERADO.jpg`  
- Use this image as the primary visual reference for:
  - Layout structure (sections, grids, spacing).  
  - Visual hierarchy (hero, projects, about, contact, etc.).  
  - Placement and approximate scale of 3D elements and key UI components.

#### Detailed site guide (requirements & behavior)

- **Path:** `./docs/PROMPT DE ANALISE DE SITE IMPLEMENTADO-ATUALIZADO.md`  
- Treat this as the canonical functional spec of the site.  
- It should drive your decisions regarding:
  - Sections and their purpose.  
  - Component breakdown for each section.  
  - Behavioral requirements (animations, interactions, states).  
  - Text content and tone (copies, headings, CTAs).  
  - Edge cases and state handling (loading, empty, error, hover/focus, mobile vs desktop).

### 2.3 Project vector store `vs_6928ccc617c48191967447061a4396f0`

Use this vector store for project-specific conventions.

- **Next.js conventions and patterns**  
  - Use the `next.js (fork) – Overview` folder as the source of truth for:
    - How this project expects Next.js to be used.  
    - Which examples to imitate.

- **React Three Fiber & Three.js**  
  - Use the `react-three-fiber – Overview` docs and examples for:
    - Canvas setup.  
    - Camera, controls, and lighting patterns.

- **GLTF/GLB handling (gltfjsx)**  
  - Use the `gltfjsx – Overview` docs for:
    - How to import, structure, and reuse model components.  
    - How to separate model, lights, and controls.

- **Scroll-based 3D animation**  
  - Use the `threejs-scroll-animation-demo – Overview` for:
    - Patterns that connect scroll position to camera/objects.  
    - Parallax effects.

### 2.4 Runtime & project metadata via MCP (when available)

When MCP tools are available:

- Use Next.js MCP tools (e.g. `get_project_metadata`, `get_page_metadata`, `get_errors`, `get_logs`, `get_server_action_by_id`) to:
  - Inspect the running app.  
  - Check current errors.  
  - Understand project structure in real time.

### 2.5 External documentation

Only when the above sources don’t cover the case:

- Use official docs for:
  - Next.js  
  - React  
  - React Three Fiber  
  - Three.js  
  - Tailwind CSS

### 2.6 Conflict resolution between docs and code

If a conflict arises between:

- The visual layout (`HOME-PORTFOLIO-LAYOUT_ESPERADO.jpg`),  
- The detailed guide (`PROMPT DE ANALISE DE SITE IMPLEMENTADO-ATUALIZADO.md`), and  
- The existing code,

you must:

1. Treat `/docs` as the design/requirements **source of truth**.  
2. Propose code changes to move the implementation towards the documented layout and behavior.

---

## 3. Development Workflow with the Agent

Follow this workflow when assisting development (compatible with MCP/Next tooling):

### 3.1 Ensure the dev server is running

Ask the user to run:

1. `npm install` (once, to install dependencies).  
2. `npm run dev` (to start the local dev server with HMR / live preview).

### 3.2 Leverage MCP / devtools (when configured)

Assume `next-devtools-mcp` (or equivalent MCP server) is configured.

Use its tools to:

- Inspect current build/runtime/type errors.  
- Access development logs.  
- Query page metadata (routes, components, rendering mode).  
- Fetch project metadata (structure, dev server URL).  
- Locate Server Actions by ID.

### 3.3 Diagnostics & guidance

When the user reports an error:

1. First query errors/logs via MCP (when available).  
2. Then propose fixes based on:
   - The reported error.  
   - Project structure.  
   - `/docs` requirements.

When asked where to implement a new feature:

1. Inspect project metadata and structure.  
2. Suggest appropriate locations, always cross-checking with:
   - `./docs/HOME-PORTFOLIO-LAYOUT_ESPERADO.jpg`  
   - `./docs/PROMPT DE ANALISE DE SITE IMPLEMENTADO-ATUALIZADO.md`

---

## 4. Repository Structure & Module Organization

When proposing or writing code, respect the existing organization:

### 4.1 Entry points & layout

- Keep the 3D portfolio entry point under `src/app/`.  
- Reuse `src/components/` for:
  - Layout primitives.  
  - Section components.  
  - Canvas/Three.js helpers.

### 4.2 Configuration & content

- Centralize content/brand copy in `src/config/`.  
- Treat `src/dataconnect-generated/` as machine-generated Firebase material (**não editar manualmente**).

### 4.3 Backend & infra

- Use `functions/` for Firebase Cloud Functions.

### 4.4 Assets & build outputs

- Place static assets in `public/`, preferably:
  - `public/assets/` or equivalent as defined by the config.  
- **Never** edit `dist/` directly (build output only).

### 4.5 New components/layouts

When creating new components or layouts:

1. Always check the expected layout image (`./docs/HOME-PORTFOLIO-LAYOUT_ESPERADO.jpg`).  
2. Use the functional guide (`./docs/PROMPT DE ANALISE DE SITE IMPLEMENTADO-ATUALIZADO.md`) to decide:
   - Section structure.  
   - Props.  
   - States.  
   - Text content.

---

## 5. Build, Test, and Development Commands

*(sem alteração; manter conforme versão anterior)*

Use and respect the following commands:

- `npm install`  
- `npm run dev`  
- `npm run build`  
- `npm run preview`  
- `npm run lint`  
- `npm run test`  
- `npm run lighthouse`  
- `./project-tools.sh full`  
- `./project-tools.sh report`

---

## 6. Coding Style & Naming Conventions

*(sem alteração estrutural; apenas lembrete adicional)*

Whenever you generate components or hooks for site sections, align:

- **Name, props, and behavior** with:
  - Requirements described in `./docs/PROMPT DE ANALISE DE SITE IMPLEMENTADO-ATUALIZADO.md`.  
  - Visual hierarchy in `./docs/HOME-PORTFOLIO-LAYOUT_ESPERADO.jpg`.

Additional rules:

- Indentation: 4 spaces.  
- Components: `PascalCase`.  
- Hooks: `use*` naming convention.  
- Tailwind: utility-first usage.  
- Config objects and variables: `camelCase`.  
- Environment variables: `UPPER_SNAKE_CASE` via `import.meta.env`.

---

## 7. Testing Guidelines

*(igual ao código anterior, com Vitest + React Testing Library, arquivos `.test.tsx` espelhando componentes, mocks de Firebase/Three.js etc.)*

When generating tests for specific sections:

- Use `./docs/PROMPT DE ANALISE DE SITE IMPLEMENTADO-ATUALIZADO.md` as reference for:
  - Expected states.  
  - Interaction flows.  
  - Error cases / edge cases.

---

## 8. Commit & Pull Request Guidelines

*(igual ao código anterior)*

Whenever PRs alter layout or UX sections:

- Explicitly reference:
  - The section(s) changed relative to `HOME-PORTFOLIO-LAYOUT_ESPERADO.jpg`.  
  - The requirements addressed or adjusted in `PROMPT DE ANALISE DE SITE IMPLEMENTADO-ATUALIZADO.md`.

---

## 9. Configuration & Environment Management

*(igual ao código anterior)*

- Use `.env.exemplo` → `.env` as the base.  
- Never commit secrets.  
- Keep Firebase/Supabase keys and other sensitive values only in `.env`.

---

## 10. Behavior When Uncertain or When Conventions Clash

When there is a conflict between:

- Current code,  
- Layout from `./docs/HOME-PORTFOLIO-LAYOUT_ESPERADO.jpg`, and  
- Detailed spec in `./docs/PROMPT DE ANALISE DE SITE IMPLEMENTADO-ATUALIZADO.md`,

you must:

1. Treat the files in `./docs` as the **source of truth** for product/UX.  
2. Clearly inform the user what deviation exists between current implementation and spec.  
3. Propose an incremental correction plan, prioritizing:
- The most critical changes to align the experience with the layout and functional guide.

---

## Repository Guidelines

### Project Structure & Module Organization

- Keep the application shell under `src/app/` and treat `src/components/` as the reusable layout, section, and canvas helper library.
- Store textual content, arrays of projects/clients, and branding constants inside `src/config/` so UI logic stays separate from copy.
- Treat `src/dataconnect-generated/` as Firebase-managed output and avoid manual edits; reference its exports only when integrating Data Connect models.
- Reserve `functions/` for Firebase Cloud Functions, `public/` for static media (prefer `public/assets/`), and leave `dist/` untouched as build output.
- For new helpers, follow existing groupings: use `src/lib/` or `src/utils/` and co-locate 3D-specific utilities under `src/components/canvas/`.

### Build, Test, and Development Commands

- `npm install` (or `./project-tools.sh install`): bring dependencies up to date before any work.
- `npm run dev`: launch the Vite dev server with hot reload for rapid UI iteration.
- `npm run build`: create a production bundle under `dist/` and ensure there are no TypeScript errors.
- `npm run preview`: serve the production build locally to validate asset loading and routing.
- `npm run lint`: run ESLint across the workspace (Tailwind, React Three Fiber, TypeScript rules enforced).
- `npm run test`: execute Vitest suites; use `vitest run src/components/Feature.test.tsx` when targeting a specific file.
- `npm run lighthouse`: gather performance audits for manually tracked pages.
- `./project-tools.sh full`: lint + test + outdated dependencies; `./project-tools.sh report` generates a health report.

### Coding Style & Naming Conventions

- Use four-space indentation in `.ts`/`.tsx` files and keep exported component names aligned with filenames (e.g., `HeroSection.tsx`).
- Components should be `PascalCase`, hooks follow the `use*` pattern, and utilities/config keys remain `camelCase` unless representing constants.
- Rely on Tailwind utility classes for styling (`className="flex flex-col gap-4"`); avoid custom CSS unless Canvas rendering requires overrides.
- Keep environment-specific values in `import.meta.env` and reference them via a single helper module (e.g., `src/config/env.ts`).
- Run `npm run lint` before committing to enforce spacing, import ordering, and React Three Fiber best practices.

### Testing Guidelines

- Vitest powers this project’s suite, and React Testing Library should cover interaction-heavy sections (hero, portfolio, contact).
- Name spec files as `<Component>.test.tsx` and place them alongside the component under test (e.g., `src/components/Portfolio/PortfolioShowcase.test.tsx`).
- Mock Firebase/Supabase and Three.js dependencies with lightweight stubs next to tests; prefer `vi.mock` to keep suites fast.
- Run `npm run test` locally before submitting changes and document any targeted `vitest run` commands in the PR body.

### Commit & Pull Request Guidelines

- Keep commits short, imperative, and descriptive (e.g., “Polish hero glass animation”).
- Reference issue numbers or tickets when available (`feat: rework project filter (#34)`).
- PR descriptions should explain the user-facing change, note commands run (`lint`, `test`), and include screenshots or GIFs for UI updates.
- Assign frontend and Firebase reviewers when modifications span `src/` and `functions/`, and resolve merge conflicts before requesting approval.

### Configuration & Environment Tips

- Copy `.env.exemplo` to `.env`, fill required Firebase/Supabase keys, and never commit secrets.
- Reuse `npm run lint` and `npm run test` in the same terminal so `import.meta.env` is consistently populated.
- Update `./project-tools.sh` aliases only if you understand their bundler and maintenance checks.
