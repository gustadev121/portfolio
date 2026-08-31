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
    class: 'bg-[#003159]',
    icon: IconBrandTailwind,
  },
  nextjs: {
    content: 'Next JS',
    class: 'bg-black',
    icon: IconBrandNextjs,
  },
  react: {
    content: 'React',
    class: 'bg-[#23272F]',
    icon: IconBrandReact,
  },
  motion: {
    content: 'Motion',
    class: 'bg-[#1A202C]',
    icon: IconBrandFramerMotion,
  },
  unity: {
    content: 'Unity',
    class: 'bg-black',
    icon: IconBrandUnity,
  },
  supabase: {
    content: 'Supabase',
    class: 'bg-[#1A202C]',
    icon: IconBrandSupabase,
  },
  vercel: {
    content: 'Vercel',
    class: 'bg-black',
    icon: IconBrandVercel,
  },
  frontend: {
    content: i18n.PROJECTS.CARD.TAGS.FRONTEND,
  },
  backend: {
    content: i18n.PROJECTS.CARD.TAGS.BACKEND,
  },
  trabajoEnEquipo: {
    content: i18n.PROJECTS.CARD.TAGS.TEAM_WORK,
  },
});
