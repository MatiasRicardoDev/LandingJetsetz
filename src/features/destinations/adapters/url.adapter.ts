const DEFAULT_IMAGE = 'https://via.placeholder.com/280';

export const generateUrlAdapter = (url: any, slug = null) => {
  if (!url) {
    return DEFAULT_IMAGE;
  }

  if (slug) {
    return `/${slug}/${url}`;
  }

  return `/${url}`;
};

export const generateBackgroundUrlAdapter = (url: any) => {
  if (!url) {
    return DEFAULT_IMAGE;
  }

  return `https://jetsetz.com/uploads/profiles/${url}`;
};
