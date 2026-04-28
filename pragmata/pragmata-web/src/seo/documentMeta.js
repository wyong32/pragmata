import { seoConfig } from './config.js'

/**
 * 开发环境用当前 origin，生产用固定 canonical 域名（避免错误收录 localhost）
 */
export function getCanonicalOrigin() {
  if (typeof window === 'undefined') {
    return seoConfig.fullDomain
  }
  if (import.meta.env.DEV) {
    return `${window.location.protocol}//${window.location.host}`
  }
  return seoConfig.fullDomain
}

export function toAbsoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return ''
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl
  const origin = getCanonicalOrigin()
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${origin}${path}`
}

function setMeta(attribute, name, content) {
  if (content === undefined || content === null || content === '') return
  let el = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attribute, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkRel(rel, href) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * 应用页面级 SEO：TDK、Canonical、OG、Twitter、JSON-LD（单页一条 WebPage）
 * @param {object} p
 * @param {string} p.path - 路由 path（不含 query/hash），如 /gameplay
 * @param {string} p.title
 * @param {string} p.description
 * @param {string} [p.keywords]
 * @param {string} [p.ogImage] - 绝对 URL 或站内路径
 * @param {string} [p.ogType] - og:type，文章页用 article
 * @param {object} [p.jsonLd] - 若传入则替换默认 WebPage；否则生成默认
 */
function applyDocumentSeoSync({ path, title, description, keywords, ogImage, ogType, jsonLd }) {
  const origin = getCanonicalOrigin()
  const pathname = path.startsWith('/') ? path : `/${path}`
  const canonicalUrl = `${origin}${pathname === '//' ? '/' : pathname}`

  document.title = title || seoConfig.defaults.title

  setMeta('name', 'description', description || seoConfig.defaults.description)
  if (keywords) setMeta('name', 'keywords', keywords)
  setMeta('name', 'author', seoConfig.defaults.author)
  setMeta('name', 'robots', 'index, follow')
  setMeta('name', 'googlebot', 'index, follow')

  const absImage = toAbsoluteUrl(ogImage || seoConfig.defaultOgImage)

  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:image', absImage)
  setMeta('property', 'og:url', canonicalUrl)
  setMeta('property', 'og:type', ogType || seoConfig.defaults.type || 'website')
  setMeta('property', 'og:site_name', seoConfig.siteName)
  setMeta('property', 'og:locale', 'en_US')

  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', description)
  setMeta('name', 'twitter:image', absImage)
  if (seoConfig.social.twitterSite) {
    setMeta('name', 'twitter:site', seoConfig.social.twitterSite)
  }
  if (seoConfig.social.twitterCreator) {
    setMeta('name', 'twitter:creator', seoConfig.social.twitterCreator)
  }

  setLinkRel('canonical', canonicalUrl)

  const ld =
    jsonLd ||
    buildDefaultWebPageJsonLd({
      name: title,
      description,
      url: canonicalUrl,
    })
  injectJsonLd(ld)
}

/**
 * 推迟到下一帧再写 head，避免与 Vue 路由/首屏 patch 同帧交错 querySelector/append，减轻强制重排与 TBT。
 */
export function applyDocumentSeo(params) {
  if (typeof document === 'undefined') return
  requestAnimationFrame(() => {
    applyDocumentSeoSync(params)
  })
}

export function buildDefaultWebPageJsonLd({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: seoConfig.siteName,
      url: seoConfig.fullDomain,
    },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      url: seoConfig.fullDomain,
      logo: {
        '@type': 'ImageObject',
        url: toAbsoluteUrl(seoConfig.defaultOgImage),
      },
    },
  }
}

/** 文章类 Guide 的 Article JSON-LD */
export function buildArticleJsonLd({ headline, description, url, datePublished, imageUrl }) {
  const img = imageUrl ? toAbsoluteUrl(imageUrl) : toAbsoluteUrl(seoConfig.defaultOgImage)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    inLanguage: 'en',
    datePublished: datePublished || undefined,
    dateModified: datePublished || undefined,
    image: img,
    author: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      url: seoConfig.fullDomain,
    },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      url: seoConfig.fullDomain,
      logo: {
        '@type': 'ImageObject',
        url: toAbsoluteUrl(seoConfig.defaultOgImage),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

export function injectJsonLd(data) {
  const existing = document.querySelector('script[data-seo-ld="1"]')
  if (existing) existing.remove()
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-seo-ld', '1')
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}
