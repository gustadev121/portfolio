import type { AstroComponent } from '@tabler/icons-astro';

export interface TagType {
  icon?: AstroComponent;
  content: string;
  class?: string;
  iconClass?: string;
}

export interface ProjectCardType {
  img: ImageMetadata;
  title: string;
  tags: TagType[];
  description: string;
  github: string;
  preview?: string;
}

export interface TechType {
  icon: AstroComponent;
  content: string;
  class?: string;
  iconClass?: string;
}
