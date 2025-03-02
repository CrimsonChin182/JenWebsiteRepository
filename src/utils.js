export const getImageUrl = (Path) => {
    return new URL('/assets/${path}', import.meta.url).href;
};