export const IFRAME_BLOCKED_BRANDS = ['faresonfleek', 'expedia', 'eDreams'];

export const isIframeBlockedBrand = (name: string) => {
  return IFRAME_BLOCKED_BRANDS.includes(name.toLowerCase());
};
