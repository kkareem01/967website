/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.967coffeeco.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/menu': 0.9,
      '/about': 0.8,
      '/contact': 0.8,
      '/partnerships': 0.7,
      '/careers': 0.7,
      '/privacy-policy': 0.3,
    }
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: priorities[path] ?? 0.7,
      lastmod: new Date().toISOString(),
    }
  },
}
