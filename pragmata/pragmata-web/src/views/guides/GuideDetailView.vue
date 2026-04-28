<template>
  <article v-if="guide" class="guide-article">
    <header class="guide-hero">
      <div class="container">
        <nav class="guide-bc" aria-label="Breadcrumb">
          <a class="guide-bc-a" href="/">Home</a>
          <span class="guide-bc-sep">/</span>
          <a class="guide-bc-a" href="/guides">Guides</a>
          <span class="guide-bc-sep">/</span>
          <span class="guide-bc-here">{{ guide.title }}</span>
        </nav>
        <p class="guide-hero-kicker">Guide</p>
        <h1 class="guide-hero-title">{{ guide.title }}</h1>
        <p class="guide-hero-lead">{{ guide.description }}</p>
      </div>
    </header>

    <div class="guide-split-wrap">
      <div class="container guide-split">
        <main class="guide-main">
          <div
            class="guide-body content-prose"
            v-html="guide.detailsHtml"
          />

          <nav class="guide-navfoot" aria-label="Related on site">
            <a href="/guides">All guides</a>
            <span aria-hidden="true">·</span>
            <a href="/wiki">Wiki</a>
            <span aria-hidden="true">·</span>
            <a href="/getting-started">Getting started</a>
          </nav>
        </main>

        <aside class="guide-aside" aria-label="Article meta">
          <div class="guide-aside-stack">
            <figure class="guide-cover">
              <img :src="guide.imageUrl" :alt="guide.imageAlt" width="640" height="360" loading="lazy" decoding="async" />
            </figure>

            <div class="guide-aside-block">
              <p class="guide-aside-label">Summary</p>
              <p class="guide-aside-summary">{{ summaryText }}</p>
            </div>

            <div class="guide-aside-meta">
              <div>
                <p class="guide-aside-meta-label">Updated</p>
                <time class="guide-aside-meta-value" :datetime="guide.publishDate">{{ guide.publishDate }}</time>
              </div>
              <div v-if="guide.tags?.length">
                <p class="guide-aside-meta-label">Tags</p>
                <ul class="guide-taglist">
                  <li v-for="t in guide.tags" :key="t">{{ t }}</li>
                </ul>
              </div>
            </div>

            <div v-if="asideGuides.length" class="guide-aside-more">
              <p class="guide-aside-more-label">More guides</p>
              <ul class="guide-aside-more-list">
                <li v-for="l in asideGuides" :key="l.addressBar">
                  <a :href="'/guides/' + l.addressBar">{{ l.title }}</a>
                </li>
              </ul>
              <a class="guide-aside-more-all" href="/guides">Browse all guides</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import guides from '@/data/guides.js'

const route = useRoute()
const router = useRouter()

const guide = computed(() => guides.find((g) => g.addressBar === route.params.slug))

const summaryText = computed(() => guide.value?.seo?.description || guide.value?.description || '')

const asideGuides = computed(() => {
  const cur = guide.value?.addressBar
  return guides.filter((g) => g.addressBar !== cur).slice(0, 6)
})

watch(
  guide,
  (g) => {
    if (!g && route.params.slug) {
      router.replace('/guides')
    }
  },
  { immediate: true },
)
</script>

<style scoped>
.guide-article {
  padding-bottom: 3rem;
}

.guide-hero {
  padding: 0.5rem 0 1.5rem;
  border-bottom: 1px solid rgba(57, 240, 255, 0.15);
  margin-bottom: 0;
  background: linear-gradient(180deg, rgba(10, 12, 26, 0.5) 0%, transparent 100%);
}

.guide-bc {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--color-muted);
  margin-bottom: 0.85rem;
}

.guide-bc-a {
  color: inherit;
  text-decoration: none;
}

.guide-bc-a:hover {
  color: var(--neon-cyan);
}

.guide-bc-sep {
  opacity: 0.45;
}

.guide-bc-here {
  color: var(--color-text);
  font-weight: 600;
  max-width: min(36ch, 100%);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.guide-hero-kicker {
  font-family: var(--font-display);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 140, 190, 0.95);
  margin: 0 0 0.4rem;
}

.guide-hero-title {
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 3.2vw, 2rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1.12;
  margin: 0 0 0.65rem;
  color: var(--color-text);
  text-shadow: var(--glow-heading-sm);
}

.guide-hero-lead {
  margin: 0;
  max-width: 62ch;
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.guide-split-wrap {
  padding: clamp(1.25rem, 3vw, 2rem) 0 0;
}

.guide-split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 360px);
  gap: 1.5rem 2.5rem;
  align-items: start;
}

.guide-main {
  min-width: 0;
}

.guide-body {
  padding: 1rem 1.05rem 1.15rem;
  border-radius: 4px;
  border: 1px solid rgba(70, 85, 120, 0.38);
  background: rgba(8, 10, 22, 0.75);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.guide-body :deep(p) {
  margin: 0 0 0.85rem;
  font-size: 0.92rem;
  line-height: 1.68;
  color: var(--color-muted);
  max-width: 68ch;
}

.guide-body :deep(p:last-child) {
  margin-bottom: 0;
}

.guide-body :deep(h2) {
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 1.35rem 0 0.65rem;
  color: #e8b0c8;
}

.guide-body :deep(h2:first-child) {
  margin-top: 0;
}

.guide-body :deep(ul),
.guide-body :deep(ol) {
  margin: 0 0 0.85rem;
  padding-left: 1.2rem;
  color: var(--color-muted);
  font-size: 0.92rem;
  line-height: 1.62;
  max-width: 68ch;
}

.guide-body :deep(li) {
  margin-bottom: 0.35rem;
}

.guide-body :deep(a) {
  color: var(--neon-cyan);
  font-weight: 600;
  text-decoration: none;
}

.guide-body :deep(a:hover) {
  color: var(--color-cta);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.guide-body :deep(strong) {
  color: rgba(220, 228, 245, 0.95);
}

.guide-body :deep(h3) {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 1rem 0 0.45rem;
  color: rgba(200, 215, 245, 0.92);
}

.guide-body :deep(figure.guide-embed-fig) {
  margin: 1.1rem 0 1.3rem;
  max-width: min(100%, 56rem);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(57, 240, 255, 0.22);
  background: #05060c;
}

.guide-body :deep(figure.guide-embed-fig img) {
  width: 100%;
  height: auto;
  display: block;
}

.guide-body :deep(figure.guide-embed-fig figcaption) {
  margin: 0;
  padding: 0.55rem 0.75rem 0.65rem;
  font-size: 0.78rem;
  line-height: 1.5;
  color: rgba(160, 175, 210, 0.95);
  background: rgba(5, 7, 16, 0.92);
  border-top: 1px solid rgba(70, 85, 120, 0.35);
}

.guide-navfoot {
  margin-top: 1.5rem;
  font-size: 0.86rem;
  color: var(--color-muted);
}

.guide-navfoot a {
  color: var(--neon-cyan);
  font-weight: 600;
  text-decoration: none;
}

.guide-navfoot a:hover {
  color: var(--color-cta);
}

.guide-aside {
  position: sticky;
  top: calc(var(--app-header-sticky-offset) + 0.75rem);
  max-height: calc(100vh - var(--app-header-sticky-offset) - 0.75rem - 1.25rem);
  overflow-y: auto;
  min-width: 0;
}

.guide-aside-stack {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.guide-cover {
  margin: 0;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(57, 240, 255, 0.22);
  aspect-ratio: 16 / 9;
  background: #05060c;
}

.guide-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.guide-aside-block {
  padding: 0.75rem 0.85rem;
  border: 1px solid rgba(80, 95, 130, 0.4);
  background: rgba(6, 8, 18, 0.85);
}

.guide-aside-label {
  margin: 0 0 0.4rem;
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(150, 165, 200, 0.9);
}

.guide-aside-summary {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.55;
  color: rgba(175, 188, 218, 0.95);
}

.guide-aside-meta {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: 0.65rem 0.85rem;
  border: 1px dashed rgba(100, 110, 150, 0.4);
  font-size: 0.78rem;
}

.guide-aside-meta-label {
  margin: 0 0 0.2rem;
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(140, 155, 190, 0.9);
}

.guide-aside-meta-value {
  color: var(--color-text);
  font-weight: 600;
}

.guide-taglist {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.guide-taglist li {
  padding: 0.1rem 0.4rem;
  border-radius: 2px;
  border: 1px solid rgba(120, 135, 170, 0.45);
  font-size: 0.68rem;
  color: rgba(170, 185, 215, 0.95);
}

.guide-aside-more {
  padding: 0.75rem 0.85rem 0.9rem;
  border: 1px solid rgba(57, 240, 255, 0.18);
  background: rgba(8, 12, 28, 0.6);
}

.guide-aside-more-label {
  margin: 0 0 0.5rem;
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(150, 165, 200, 0.9);
}

.guide-aside-more-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.guide-aside-more-list a {
  font-size: 0.78rem;
  line-height: 1.35;
  color: var(--neon-cyan);
  text-decoration: none;
  font-weight: 600;
}

.guide-aside-more-list a:hover {
  color: var(--color-cta);
}

.guide-aside-more-all {
  display: inline-block;
  margin-top: 0.65rem;
  font-family: var(--font-display);
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(160, 175, 210, 0.95);
  text-decoration: none;
}

.guide-aside-more-all:hover {
  color: var(--neon-cyan);
}

@media (max-width: 1024px) {
  .guide-split {
    grid-template-columns: 1fr;
  }

  .guide-aside {
    position: static;
    order: -1;
    max-height: none;
    overflow-y: visible;
  }
}
</style>
