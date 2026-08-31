# AGENTS.md

Guidelines, conventions, and operational workflows for AI agents working in this repository.

---

## 📌 Project Overview

- **Framework**: [Astro 7](https://astro.build/) (Static Site Generation / Islands Architecture)
- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Iconography**: [@tabler/icons-astro](https://tabler.io/icons)
- **Linter & Formatter**: [Biome](https://biomejs.dev/) (`@biomejs/biome`)
- **Internationalization**: Custom i18n routing support (`es` / `en`)

---

## 🛠️ Package Manager & CLI Commands

**CRITICAL**: Always use `bun` and `bunx`. Never use `npm`, `pnpm`, or `yarn`.

### Common Commands

| Command | Description |
| :--- | :--- |
| `bun install` | Install all dependencies |
| `bun add <package>` | Add a production dependency |
| `bun add -d <package>` | Add a development dependency |
| `bun run dev` | Start local development server |
| `bun run build` | Build production static output to `./dist/` |
| `bun run preview` | Preview production build |
| `bun run lint` | Run Biome lint & format check |
| `bun run lint:fix` | Automatically fix linting and formatting issues |
| `bun run format` | Format files with Biome |
| `bun run astro check` | Run Astro & TypeScript type check diagnostics |

---

## 🎨 Iconography Standards

This project uses **Tabler Icons** through the official `@tabler/icons-astro` package.

### Rules:
1. **Never import local SVG files for icons** into `src/assets/icons/`.
2. Import icons directly as Astro components from `@tabler/icons-astro`:
   ```astro
   ---
   import { IconBrandGithub, IconCode, IconMoon, IconSun } from '@tabler/icons-astro';
   ---

   <IconCode class="size-5" />
   <IconBrandGithub size={20} class="stroke-button-foreground group-hover:stroke-accent" />
   ```
3. Tabler Icons use `stroke="currentColor"` and `fill="none"`. Use Tailwind stroke classes (`stroke-primary-foreground`, `stroke-accent`, etc.) or text color classes (`text-primary`, etc.) for styling.
4. When typing icon component props in TypeScript, use `typeof IconCode` or Astro component types:
   ```typescript
   import type { IconCode } from '@tabler/icons-astro';

   export interface TagType {
     icon?: typeof IconCode;
     content: string;
     class?: string;
     iconClass?: string;
   }
   ```

---

## 📁 Repository Structure

```text
├── .agents/skills/          # Installed agent skills
├── public/                  # Public static assets (favicon, etc.)
├── src/
│   ├── assets/              # Images and static media (e.g. project webp images)
│   ├── components/          # Reusable Astro components
│   │   ├── layout/          # Layout-specific components (navbar, theme, lang)
│   │   ├── pages/           # Page sections (Hero, About, Projects, StackTech)
│   │   └── ui/              # Primitive UI components (Button, Title, Section)
│   ├── config/              # Application configs (pages, themes)
│   ├── i18n/                # Translations, UI dictionaries, and routing helpers
│   ├── layouts/             # Astro base layouts
│   ├── lib/                 # Business logic, project metadata, utilities
│   ├── pages/               # Astro routes (localized dynamic routes: [locale]/...)
│   ├── styles/              # Global CSS & Tailwind styles
│   └── types.d.ts           # Global TypeScript type definitions
├── biome.json               # Biome linter & formatter configuration
├── astro.config.mjs         # Astro & Vite configuration
└── package.json             # Project dependencies and scripts
```

---

## 🔄 Agent Standard Workflow

Follow these steps for any modification or feature task:

### 1. Research & Inspect
- Inspect relevant components and configs before making changes.
- Check existing patterns in `src/components/`, `src/config/`, and `src/i18n/`.

### 2. Implementation
- Keep Astro components modular with typed props (`Astro.props`).
- Preserve internationalization support across both Spanish (`es`) and English (`en`).
- Adhere to the established styling patterns using Tailwind CSS utility classes and `cn()` utility.

### 3. Verification & Quality Assurance
Always execute verification checks prior to completing any task:

```bash
# 1. Typecheck Astro & TypeScript
bun run astro check

# 2. Check and fix formatting / linting
bun run lint:fix

# 3. Verify production build
bun run build
```

### 4. Conventional Commits
All commits must strictly follow the [Conventional Commits](https://www.conventionalcommits.org/) specification (`type(scope): description`):

- `feat(...)`: New features or capabilities
- `fix(...)`: Bug fixes
- `refactor(...)`: Code refactoring without behavioral change
- `style(...)`: Formatting or UI style tweaks
- `docs(...)`: Documentation updates
- `chore(...)`: Dependency updates or build tooling changes

Example:
```bash
git add <files>
git commit -m "feat(skills): add conventional-commit skill"
```

---

## 🧩 Agent Skills

The repository includes curated skills located under `.agents/skills/`:
- `accessibility`: WCAG 2.2 accessibility guidelines and checks.
- `astro`: Best practices and patterns for Astro components, SSG, and routing.
- `bun`: Bun runtime and package manager guidelines.
- `conventional-commit`: Commit message formatting rules.
- `find-skills`: Discovering and installing additional skills using `bunx skills`.
- `frontend-design`: Creating distinctive, polished UI designs.
- `seo`: Search engine optimization and structured metadata.
- `tailwind-css-patterns`: Tailwind utility patterns and responsive design.
- `typescript-advanced-types`: Advanced TypeScript typing patterns.
