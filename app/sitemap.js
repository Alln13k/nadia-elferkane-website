const siteUrl = 'https://www.therapie-familiale-systemique.com';

export default function sitemap() {
  return ['', '/presentation', '/therapies', '/tarifs', '/contact'].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
