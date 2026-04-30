<template>
  <div class="guides-hub">
    <div class="guides-hub-bg" aria-hidden="true" />

    <div class="container guides-hub-inner">
      <nav class="guides-bc" aria-label="Breadcrumb">
        <a class="guides-bc-a" href="/">Home</a>
        <span class="guides-bc-sep">/</span>
        <span class="guides-bc-here">Guides</span>
      </nav>

      <header class="guides-hero">
        <p class="guides-hero-kicker">Player guides</p>
        <h1 class="guides-hero-title">PRAGMATA Guides</h1>
        <p class="guides-hero-lead">
          Practical articles — launch prep, demo goals, platforms, combat habits, editions, Shelter. Separate from the lore-focused
          <a class="guides-hero-a" href="/wiki">wiki</a>.
        </p>
      </header>

      <ul class="guides-mosaic" role="list">
        <li v-for="item in sortedGuides" :key="item.addressBar" class="guides-mosaic-item">
          <a class="guides-card" :href="'/guides/' + item.addressBar">
            <div class="guides-card-media">
              <img :src="item.imageUrl" :alt="item.imageAlt" width="640" height="360" loading="lazy" decoding="async" />
              <span class="guides-card-media-shade" aria-hidden="true" />
            </div>
            <div class="guides-card-body">
              <div class="guides-card-meta">
                <time class="guides-card-date" :datetime="item.publishDate">{{ item.publishDate }}</time>
                <span v-if="item.tags?.length" class="guides-card-tags">
                  <span v-for="t in item.tags" :key="t" class="guides-card-tag">{{ t }}</span>
                </span>
              </div>
              <h2 class="guides-card-title">{{ item.title }}</h2>
              <p class="guides-card-excerpt">{{ listExcerpt(item) }}</p>
              <span class="guides-card-cta" aria-hidden="true">Read →</span>
            </div>
          </a>
        </li>
      </ul>

      <footer class="guides-hub-foot">
        <a class="guides-foot-a" href="/wiki">Wiki index</a>
        <span class="guides-foot-dot" aria-hidden="true">·</span>
        <a class="guides-foot-a" href="/getting-started">Getting started</a>
        <span class="guides-foot-dot" aria-hidden="true">·</span>
        <a class="guides-foot-a" href="/gameplay">Gameplay</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import guides from '@/data/guides.js'

function listExcerpt(item) {
  return item?.seo?.description || item?.description || ''
}

const sortedGuides = computed(() => [...guides].sort((a, b) => String(b.publishDate).localeCompare(String(a.publishDate))))
</script>

<style scoped>
.guides-hub {
  position: relative;
  padding-bottom: 3rem;
  overflow: hidden;
}

.guides-hub-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(ellipse 70% 55% at 100% 0%, rgba(255, 42, 122, 0.1), transparent 50%),
    radial-gradient(ellipse 60% 50% at 0% 40%, rgba(57, 240, 255, 0.08), transparent 48%),
    linear-gradient(185deg, #070810 0%, #05060c 100%);
}

.guides-hub-inner {
  position: relative;
  z-index: 1;
  padding-top: 0.5rem;
}

.guides-bc {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--color-muted);
  margin-bottom: 1.15rem;
}

.guides-bc-a {
  color: inherit;
  text-decoration: none;
}

.guides-bc-a:hover {
  color: var(--neon-cyan);
}

.guides-bc-sep {
  opacity: 0.45;
}

.guides-bc-here {
  color: var(--color-text);
  font-weight: 600;
}

.guides-hero {
  margin-bottom: clamp(1.5rem, 3vw, 2.25rem);
  max-width: 58ch;
}

.guides-hero-kicker {
  font-family: var(--font-display);
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 140, 190, 0.95);
  margin: 0 0 0.45rem;
}

.guides-hero-title {
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4.2vw, 2.6rem);
  font-weight: 800;
  letter-spacing: 0.05em;
  margin: 0 0 0.65rem;
  color: var(--color-text);
  text-shadow: var(--glow-heading-sm);
}

.guides-hero-lead {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.guides-hero-a {
  color: var(--neon-cyan);
  font-weight: 600;
  text-decoration: none;
}

.guides-hero-a:hover {
  color: var(--color-cta);
}

.guides-mosaic {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 1024px) {
  .guides-mosaic {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .guides-mosaic {
    grid-template-columns: 1fr;
  }
}

.guides-mosaic-item {
  min-width: 0;
}

.guides-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none !important;
  color: inherit !important;
  border: 1px solid rgba(80, 95, 130, 0.4);
  border-radius: 4px;
  overflow: hidden;
  background: rgba(8, 10, 22, 0.82);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.25);
  transition:
    border-color 0.18s ease,
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.guides-card:hover {
  border-color: rgba(57, 240, 255, 0.45);
  transform: translateY(-3px);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.35);
}

.guides-card-media {
  position: relative;
  aspect-ratio: 16 / 9;
  background: #05060c;
  overflow: hidden;
}

.guides-card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.guides-card:hover .guides-card-media img {
  transform: scale(1.04);
}

.guides-card-media-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(4, 5, 12, 0.65) 100%);
  pointer-events: none;
}

.guides-card-body {
  padding: 0.75rem 0.9rem 0.95rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  flex: 1;
}

.guides-card-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.5rem;
}

.guides-card-date {
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(150, 165, 200, 0.9);
}

.guides-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.guides-card-tag {
  font-family: var(--font-display);
  font-size: 0.52rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.12rem 0.38rem;
  border-radius: 2px;
  border: 1px solid rgba(120, 135, 170, 0.45);
  color: rgba(170, 185, 215, 0.95);
}

.guides-card-title {
  margin: 0.15rem 0 0;
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.03em;
  color: var(--color-text);
}

.guides-card-excerpt {
  margin: 0;
  font-size: 0.76rem;
  line-height: 1.45;
  color: rgba(155, 168, 200, 0.92);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.guides-card-cta {
  margin-top: 0.35rem;
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--neon-cyan);
}

.guides-hub-foot {
  margin-top: 2.25rem;
  padding-top: 1.25rem;
  border-top: 1px dashed rgba(90, 100, 140, 0.45);
  font-size: 0.84rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.5rem;
}

.guides-foot-a {
  color: var(--neon-cyan);
  font-weight: 600;
  text-decoration: none;
}

.guides-foot-a:hover {
  color: var(--color-cta);
}

.guides-foot-dot {
  opacity: 0.35;
}

@media (prefers-reduced-motion: reduce) {
  .guides-card {
    transition: none;
  }

  .guides-card:hover {
    transform: none;
  }

  .guides-card:hover .guides-card-media img {
    transform: none;
  }
}
</style>
