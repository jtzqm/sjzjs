import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sjzjs.pages.dev'
  const now = new Date()
  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/escort/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/account-booster/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/items/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/department-tasks/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/rent/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/rent/acc-1/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/rent/acc-2/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/rent/acc-3/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
