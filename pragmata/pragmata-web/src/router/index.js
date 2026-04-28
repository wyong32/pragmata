import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import { seoConfig } from '@/seo/config.js'
import { applyDocumentSeo, buildArticleJsonLd, getCanonicalOrigin } from '@/seo/documentMeta.js'

const routes = [
  {
    path: '/',
    name: 'home',
    /* 与 App 同步加载：避免主区域先空后满造成高 CLS（PSI 常见） */
    component: HomeView,
    meta: {
      title: 'PRAGMATA game | Getting Started, Characters, Gameplay & Wiki',
      description:
        'PRAGMATA game hub: Getting Started, Characters (Diana & Hugh), Gameplay, Wiki, Guides, Media & FAQ—unofficial organized reference on pragmatagame.org.',
      keywords:
        'PRAGMATA game, Getting Started, Characters, Gameplay, Wiki, Guides, Media, FAQ, Diana, Hugh, PRAGMATA, pragmatagame.org',
    },
  },
  {
    path: '/getting-started',
    name: 'getting-started',
    component: () => import('@/views/GettingStartedView.vue'),
    meta: {
      title: 'PRAGMATA game | Getting Started — Editions, demo & PC checklist',
      description:
        'PRAGMATA game onboarding hub: editions, Sketchbook demo, PC checklist and launch anchors—then open Characters, Gameplay, Wiki, Guides, Media or FAQ from the same site map.',
      keywords:
        'PRAGMATA game, Getting Started, Characters, Gameplay, Wiki, Guides, Media, FAQ, editions, demo, PC specs, pragmatagame.org',
    },
  },
  {
    path: '/wiki',
    name: 'wiki',
    component: () => import('@/views/wiki/WikiIndexView.vue'),
    meta: {
      title: 'PRAGMATA game | Wiki — Lore, world & enemies index',
      description:
        'PRAGMATA game lore hub: world premise, factions, creatures and enemies—cross-link to Gameplay for systems, Getting Started for editions, and Guides for how-to articles.',
      keywords:
        'PRAGMATA game, Wiki, Getting Started, Characters, Gameplay, Guides, Media, FAQ, world, factions, enemies, Lunafilament, pragmatagame.org',
    },
  },
  {
    path: '/wiki/world',
    name: 'wiki-world',
    component: () => import('@/views/wiki/WikiWorldView.vue'),
    meta: {
      title: 'PRAGMATA game | Wiki — World & Lunafilament',
      description:
        'PRAGMATA game world primer: Lunafilament, lunar station, Hugh and Diana setup—spoiler-light. Continue to Wiki factions or Characters, and Gameplay for systems context.',
      keywords:
        'PRAGMATA game, Wiki, world, Lunafilament, lunar station, premise, Characters, Gameplay, Getting Started, Guides, pragmatagame.org',
    },
  },
  {
    path: '/wiki/factions',
    name: 'wiki-factions',
    component: () => import('@/views/wiki/WikiFactionsView.vue'),
    meta: {
      title: 'PRAGMATA game | Wiki — Factions & hostile systems',
      description:
        'PRAGMATA game corporate and AI framing: station automation, hostile systems—light on spoilers. Links onward to world, enemies wiki and Gameplay for encounter rhythm.',
      keywords:
        'PRAGMATA game, Wiki, factions, corporate AI, hostile systems, world, enemies, Gameplay, Characters, pragmatagame.org',
    },
  },
  {
    path: '/wiki/creatures',
    name: 'wiki-creatures',
    component: () => import('@/views/wiki/WikiCreaturesView.vue'),
    meta: {
      title: 'PRAGMATA game | Wiki — Creatures & hostiles',
      description:
        'PRAGMATA game creature and hostile archetypes from marketing beats—wiki context. Pair with Gameplay for hack-and-shoot detail and Characters for Diana and Hugh roles.',
      keywords:
        'PRAGMATA game, Wiki, creatures, enemies, hostiles, combat, Diana, Hugh, Gameplay, Guides, pragmatagame.org',
    },
  },
  {
    path: '/wiki/babel-industries',
    name: 'wiki-babel-industries',
    component: () => import('@/views/wiki/WikiBabelIndustriesView.vue'),
    meta: {
      title: 'PRAGMATA game | Wiki — Babel Industries',
      description:
        'PRAGMATA game lore: Babel Industries branding, lunar signage and themes—short wiki entry with paths to factions, world and the main Wiki index on pragmatagame.org.',
      keywords:
        'PRAGMATA game, Wiki, Babel Industries, lore, equipment, factions, world, Gameplay, Guides, pragmatagame.org',
    },
  },
  {
    path: '/wiki/delphi-corporation',
    name: 'wiki-delphi-corporation',
    component: () => import('@/views/wiki/WikiDelphiCorporationView.vue'),
    meta: {
      title: 'PRAGMATA game | Wiki — Delphi Corporation',
      description:
        'PRAGMATA game Delphi Corporation recap: Lunafilament, bots and AI—wiki summary with enemies index cross-links and Gameplay for encounter vocabulary and loop notes.',
      keywords:
        'PRAGMATA game, Wiki, Delphi Corporation, Lunafilament, Walker, SectorGuard, enemies, Gameplay, Characters, pragmatagame.org',
    },
  },
  {
    path: '/wiki/enemies',
    name: 'wiki-enemies',
    component: () => import('@/views/wiki/WikiEnemiesIndexView.vue'),
    meta: {
      title: 'PRAGMATA game | Wiki — Enemies & bots',
      description:
        'PRAGMATA game enemies list: Walkers, turrets, crawlers, SectorGuard—tie-in to Gameplay for intrusion grids and Wiki Delphi for corporate framing and lore depth.',
      keywords:
        'PRAGMATA game, Wiki, enemies, Walkers, SectorGuard, turrets, Gameplay, Delphi Corporation, Characters, pragmatagame.org',
    },
  },
  {
    path: '/guides',
    name: 'guides',
    component: () => import('@/views/guides/GuidesListView.vue'),
    meta: {
      title: 'PRAGMATA game | Guides — How-to articles hub',
      description:
        'PRAGMATA game written guides: beginner sessions, duo loop habits—sit alongside Getting Started, Gameplay systems, Wiki lore and Characters for Hugh and Diana coverage.',
      keywords:
        'PRAGMATA game, Guides, Getting Started, Characters, Gameplay, Wiki, Media, FAQ, how-to, beginner, pragmatagame.org',
    },
  },
  {
    path: '/guides/:slug',
    name: 'guide-detail',
    component: () => import('@/views/guides/GuideDetailView.vue'),
  },
  {
    path: '/gameplay',
    name: 'gameplay',
    component: () => import('@/views/GameplayView.vue'),
    meta: {
      title: 'PRAGMATA game | Gameplay — Combat, hacking & gear',
      description:
        'PRAGMATA game systems overview: intrusion, weapons, Shelter and trailer-informed beats—read with Characters, Wiki and Getting Started; unofficial orientation copy.',
      keywords:
        'PRAGMATA game, Gameplay, Characters, Wiki, Getting Started, Guides, Media, FAQ, combat, hacking, Shelter, weapons, pragmatagame.org',
    },
  },
  {
    path: '/characters',
    redirect: '/characters/diana',
  },
  {
    path: '/characters/diana',
    name: 'character-diana',
    component: () => import('@/views/characters/DianaCharacterView.vue'),
    meta: {
      title: 'PRAGMATA game | Characters — Diana (hacking & Lunafilament)',
      description:
        'PRAGMATA game Diana D-I-0336-7: Lunafilament android, intrusion grid, Decode and Multihack, Shelter—pair with Hugh on Characters, Gameplay and Wiki for a full picture.',
      keywords:
        'PRAGMATA game, Characters, Diana, D-I-0336-7, Lunafilament, hacking, Decode, Multihack, Gameplay, Wiki, Getting Started, Guides, pragmatagame.org',
    },
  },
  {
    path: '/characters/hugh',
    name: 'character-hugh',
    component: () => import('@/views/characters/HughCharacterView.vue'),
    meta: {
      title: 'PRAGMATA game | Characters — Hugh (EVA, weapons & mobility)',
      description:
        'PRAGMATA game Hugh Williams: EVA suit, thrusters, PATD weapons and Grip Gun—co-protagonist with Diana; see Characters hub, Gameplay and Guides for co-op flow and tips.',
      keywords:
        'PRAGMATA game, Characters, Hugh Williams, EVA suit, thrusters, Grip Gun, Gameplay, Wiki, Getting Started, Guides, pragmatagame.org',
    },
  },
  {
    path: '/media',
    name: 'media',
    component: () => import('@/views/MediaView.vue'),
    meta: {
      title: 'PRAGMATA game | Media — Trailers & official video hub',
      description:
        'PRAGMATA game trailer index: Main Trailer, World View, State of Play—use with Gameplay analysis, Wiki context and Getting Started when you revisit footage and news.',
      keywords:
        'PRAGMATA game, Media, trailers, Gameplay, Wiki, Getting Started, Guides, Characters, FAQ, Capcom news, pragmatagame.org',
    },
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/FaqView.vue'),
    meta: {
      title: 'PRAGMATA game | FAQ — Common questions',
      description:
        'PRAGMATA game FAQ: cancel rumours, specs, demo, editions and platforms—short answers with pointers back to Getting Started, Gameplay and Wiki for deeper reading.',
      keywords:
        'PRAGMATA game, FAQ, Getting Started, Gameplay, Wiki, Guides, Characters, Media, demo, Deluxe edition, pragmatagame.org',
    },
  },
  {
    path: '/about',
    name: 'legal-about',
    component: () => import('@/views/legal/LegalAboutView.vue'),
    meta: {
      title: 'PRAGMATA game | Site — About this guide',
      description:
        'PRAGMATA game fan guide: what we publish on Getting Started, Characters, Gameplay, Wiki and Guides—not Capcom-official; how we cite sources and mark spoilers sitewide.',
      keywords:
        'PRAGMATA game, Site, About, Getting Started, Characters, Gameplay, Wiki, Guides, fan site, pragmatagame.org',
    },
  },
  {
    path: '/contact',
    name: 'legal-contact',
    component: () => import('@/views/legal/LegalContactView.vue'),
    meta: {
      title: 'PRAGMATA game | Site — Contact',
      description:
        'PRAGMATA game site contact for corrections and questions—best-effort replies; not Capcom support. Scope notes live on About alongside the main game hubs listed above.',
      keywords:
        'PRAGMATA game, Site, Contact, About, Getting Started, Characters, Gameplay, Wiki, Guides, pragmatagame.org',
    },
  },
  {
    path: '/privacy-policy',
    name: 'legal-privacy',
    component: () => import('@/views/legal/LegalPrivacyPolicyView.vue'),
    meta: {
      title: 'PRAGMATA game | Site — Privacy policy',
      description:
        'PRAGMATA game site privacy: static structure, minimal data assumptions, embeds—read before other legal pages; same hub family covers Getting Started through FAQ sitewide.',
      keywords:
        'PRAGMATA game, Site, privacy policy, Getting Started, Wiki, Guides, cookies, pragmatagame.org',
    },
  },
  {
    path: '/terms-of-service',
    name: 'legal-terms',
    component: () => import('@/views/legal/LegalTermsOfServiceView.vue'),
    meta: {
      title: 'PRAGMATA game | Site — Terms of service',
      description:
        'PRAGMATA game site terms: acceptable use, disclaimers, IP respect—read before reusing text from Getting Started, Wiki, Guides or other sections in your own projects.',
      keywords:
        'PRAGMATA game, Site, terms of service, About, Guides, Wiki, disclaimers, pragmatagame.org',
    },
  },
  {
    path: '/copyright',
    name: 'legal-copyright',
    component: () => import('@/views/legal/LegalCopyrightView.vue'),
    meta: {
      title: 'PRAGMATA game | Site — Copyright notice',
      description:
        'PRAGMATA game IP notice: PRAGMATA and CAPCOM marks belong to their owners—unofficial fan hub; About explains attribution across Guides, Wiki and Media references.',
      keywords:
        'PRAGMATA game, Site, copyright, trademark, Capcom, About, Guides, Wiki, Media, pragmatagame.org',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'auto' }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (to.name === 'guide-detail') {
    const slug = to.params.slug
    void import('@/data/guides.js').then((mod) => {
      if (router.currentRoute.value.name !== 'guide-detail' || router.currentRoute.value.params.slug !== slug) {
        return
      }
      const guides = mod.default
      const g = Array.isArray(guides) ? guides.find((x) => x.addressBar === slug) : null
      if (!g) return
      const path = `/guides/${g.addressBar}`
      const chapter = String(g.seo?.title || g.title).replace(/\s*\|\s*/g, ' · ')
      const title = `PRAGMATA game | Guides — ${chapter}`
      const description = g.seo?.description || g.description || seoConfig.defaults.description
      const keywords = g.seo?.keywords || seoConfig.defaults.keywords
      const origin = getCanonicalOrigin()
      applyDocumentSeo({
        path,
        title,
        description,
        keywords,
        ogImage: g.imageUrl,
        ogType: 'article',
        jsonLd: buildArticleJsonLd({
          headline: g.seo?.title || g.title,
          description,
          url: `${origin}${path}`,
          datePublished: g.publishDate,
          imageUrl: g.imageUrl,
        }),
      })
    })
    return
  }

  const title = to.meta?.title || seoConfig.defaults.title
  const description = to.meta?.description || seoConfig.defaults.description
  const keywords = to.meta?.keywords || seoConfig.defaults.keywords
  const ogImage = to.meta?.ogImage
  applyDocumentSeo({
    path: to.path,
    title,
    description,
    keywords,
    ogImage,
  })
})

export default router
