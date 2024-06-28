export default function sitemap() {
  return [
    {
      url: 'https://quantumshadow.com',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
    {
      url: 'https://quantumshadow.com/authentication/reset',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: 'https://quantumshadow.com/authentication/forgot',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: 'https://quantumshadow.com/authentication/signin/user',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },    {
      url: 'https://quantumshadow.com/page/Dashboard',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },


    {
      url: 'https://quantumshadow.com/not-found',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
  ]
}