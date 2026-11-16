import type { Lang } from './content';

// Strings that only exist in this version of the site
export const v2 = {
  en: {
    lines: ['Marcos Ruiz-Flores', 'Backend Engineer'],
    rotating: ['Based in Barcelona', 'Backend Software Engineer', 'Building Torii on the side', 'Java and Spring Boot'],
    selected: 'Selected work',
    about: 'About',
    experience: 'Experience',
    sayHi: 'Say hi',
    cv: 'Download CV',
    basedIn: 'Based in',
    navigation: 'Navigation',
    elsewhere: 'Elsewhere',
    home: 'Home',
    work: 'Work',
    footerRole: 'Backend software engineer.',
    country: 'Spain',
    scroll: 'Scroll',
  },
  es: {
    lines: ['Marcos Ruiz-Flores', 'Ingeniero Backend'],
    rotating: ['Desde Barcelona', 'Backend Software Engineer', 'Construyendo Torii', 'Java y Spring Boot'],
    selected: 'Proyectos',
    about: 'Sobre mí',
    experience: 'Experiencia',
    sayHi: 'Escríbeme',
    cv: 'Descargar CV',
    basedIn: 'Vivo en',
    navigation: 'Navegación',
    elsewhere: 'En otros sitios',
    home: 'Inicio',
    work: 'Proyectos',
    footerRole: 'Ingeniero de software backend.',
    country: 'España',
    scroll: 'Scroll',
  },
} satisfies Record<Lang, Record<string, unknown>>;
