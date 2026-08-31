import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-astro';

export const themes = {
  dark: {
    value: 'dark',
    icon: IconMoon,
  },
  light: {
    value: 'light',
    icon: IconSun,
  },
  system: {
    icon: IconDeviceDesktop,
    value: 'system',
  },
};

export const themeUIConfig = {
  label: 'change-theme',
  options: Object.values(themes),
};
