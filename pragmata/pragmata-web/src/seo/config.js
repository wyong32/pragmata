/**
 * PRAGMATA Guide — SEO 站点配置（生产 canonical / OG 使用此域名）
 * @see https://pragmatagame.org
 */
export const seoConfig = {
  domain: 'pragmatagame.org',
  fullDomain: 'https://pragmatagame.org',
  siteName: 'PRAGMATA Guide',
  /** 默认分享图（站内相对路径，拼接为绝对 URL） */
  defaultOgImage: '/images/bg.webp',
  /** 默认 TDK（路由未写 meta 时的兜底） */
  defaults: {
    title: 'PRAGMATA game | Getting Started, Characters, Gameplay & Wiki',
    description:
      'PRAGMATA game hub: Getting Started, Characters (Diana & Hugh), Gameplay, Wiki, Guides, Media & FAQ—unofficial organized reference on pragmatagame.org.',
    keywords:
      'PRAGMATA game, Getting Started, Characters, Gameplay, Wiki, Guides, Media, FAQ, Diana, Hugh, PRAGMATA, pragmatagame.org',
    author: 'PRAGMATA Guide',
    type: 'website',
  },
  /** 社交媒体（无官方账号时可留空字符串，对应 meta 不会输出） */
  social: {
    twitterSite: '',
    twitterCreator: '',
  },
  /** 站点地图 priority（0.0–1.0），键与 generate-sitemap / 路由 name 对齐 */
  priorities: {
    home: 1.0,
    'getting-started': 0.95,
    gameplay: 0.9,
    wiki: 0.9,
    guides: 0.85,
    'guide-detail': 0.75,
    'character-diana': 0.85,
    'character-hugh': 0.85,
    media: 0.75,
    faq: 0.8,
    'legal-about': 0.4,
    'legal-contact': 0.4,
    'legal-privacy': 0.35,
    'legal-terms': 0.35,
    'legal-copyright': 0.35,
    'wiki-world': 0.75,
    'wiki-factions': 0.72,
    'wiki-creatures': 0.72,
    'wiki-babel-industries': 0.7,
    'wiki-delphi-corporation': 0.72,
    'wiki-enemies': 0.75,
  },
  changefreq: {
    home: 'weekly',
    'getting-started': 'weekly',
    gameplay: 'weekly',
    wiki: 'weekly',
    guides: 'weekly',
    'guide-detail': 'monthly',
    'character-diana': 'monthly',
    'character-hugh': 'monthly',
    media: 'weekly',
    faq: 'monthly',
    'legal-about': 'yearly',
    'legal-contact': 'yearly',
    'legal-privacy': 'yearly',
    'legal-terms': 'yearly',
    'legal-copyright': 'yearly',
    'wiki-world': 'monthly',
    'wiki-factions': 'monthly',
    'wiki-creatures': 'monthly',
    'wiki-babel-industries': 'monthly',
    'wiki-delphi-corporation': 'monthly',
    'wiki-enemies': 'monthly',
  },
}
