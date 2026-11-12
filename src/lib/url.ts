// The site lives under /portfolio-v2/ on GitHub Pages, so internal links need the base
export const url = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
