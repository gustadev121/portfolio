import {
  IconBrandFramerMotion,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandUnity,
  IconBrandVercel,
} from '@tabler/icons-astro';
import type { getI18n } from '@/i18n/index';

export const genTags = (i18n: ReturnType<typeof getI18n>) => ({
  tailwind: {
    content: 'Tailwind CSS',
    class: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/25',
    icon: IconBrandTailwind,
  },
  nextjs: {
    content: 'Next JS',
    class: 'bg-slate-500/10 text-slate-800 dark:text-slate-200 border-slate-500/25',
    icon: IconBrandNextjs,
  },
  react: {
    content: 'React',
    class: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/25',
    icon: IconBrandReact,
  },
  motion: {
    content: 'Motion',
    class: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/25',
    icon: IconBrandFramerMotion,
  },
  unity: {
    content: 'Unity',
    class: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/25',
    icon: IconBrandUnity,
  },
  supabase: {
    content: 'Supabase',
    class: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
    icon: IconBrandSupabase,
  },
  vercel: {
    content: 'Vercel',
    class: 'bg-zinc-800/10 text-zinc-900 dark:text-zinc-100 border-zinc-500/25',
    icon: IconBrandVercel,
  },
  frontend: {
    content: i18n.PROJECTS.CARD.TAGS.FRONTEND,
    class: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25',
  },
  backend: {
    content: i18n.PROJECTS.CARD.TAGS.BACKEND,
    class: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
  },
  trabajoEnEquipo: {
    content: i18n.PROJECTS.CARD.TAGS.TEAM_WORK,
    class: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/25',
  },
});
