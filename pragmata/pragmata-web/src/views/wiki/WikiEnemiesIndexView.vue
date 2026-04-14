<template>
  <div class="enemies-page">
    <div class="container enemies-inner">
      <nav class="enemies-bc breadcrumb" aria-label="Breadcrumb">
        <a class="crumb-link" href="/">Home</a>
        <span class="crumb-sep" aria-hidden="true">/</span>
        <a class="crumb-link" href="/wiki">Wiki</a>
        <span class="crumb-sep" aria-hidden="true">/</span>
        <span class="crumb-current">Enemies</span>
      </nav>

      <header class="enemies-hero">
        <p class="enemies-hero-tag">Hostile systems</p>
        <h1 class="enemies-hero-title">Enemies &amp; Bots</h1>
        <p class="enemies-hero-lead">
          Station automata built and deployed in <a href="/wiki/delphi-corporation">Delphi Corporation</a> marketing lines — each entry below maps to how
          <a href="/characters/hugh">Hugh</a> and <a href="/characters/diana">Diana</a> dismantle them: gunfire, spacing, and timed grid routes.
        </p>
      </header>

      <section class="enemies-strip" aria-label="Quick jump">
        <a v-for="e in entries" :key="e.id" class="strip-chip" :href="'#' + e.id">{{ e.title }}</a>
      </section>

      <ul class="enemies-card-grid" role="list">
        <li v-for="e in entries" :key="'card-' + e.id" class="enemies-card-li">
          <a :href="'#' + e.id" class="enemies-card">
            <div class="enemies-card-visual">
              <img :src="e.image" :alt="e.title" width="640" height="640" loading="lazy" />
            </div>
            <div class="enemies-card-body">
              <span class="enemies-card-role">{{ e.role }}</span>
              <span class="enemies-card-name">{{ e.title }}</span>
              <span class="enemies-card-gridtag">{{ e.grid }}</span>
            </div>
          </a>
        </li>
      </ul>

      <article v-for="e in entries" :key="'detail-' + e.id" :id="e.id" class="enemy-block" tabindex="-1">
        <div class="enemy-block-head">
          <img class="enemy-block-img" :src="e.image" :alt="e.title" width="320" height="320" loading="lazy" />
          <div>
            <h2 class="enemy-block-title">{{ e.title }}</h2>
            <p class="enemy-block-meta">{{ e.role }} · {{ e.grid }}</p>
            <p class="enemy-block-text">{{ e.summary }}</p>
            <p class="enemy-block-links">
              <a class="ext" :href="fandomBase + e.wikiPath" target="_blank" rel="noopener noreferrer">Fandom article ↗</a>
              <span class="dot" aria-hidden="true">·</span>
              <a href="/wiki/delphi-corporation">Delphi Corporation</a>
              <span class="dot" aria-hidden="true">·</span>
              <a href="/wiki/babel-industries">Babel Industries</a>
            </p>
          </div>
        </div>
      </article>

      <footer class="enemies-foot">
        <p>
          Category mirror:
          <a href="https://pragmata.fandom.com/wiki/Category:Enemies" target="_blank" rel="noopener noreferrer">Category:Enemies — Pragmata Wiki</a>. Thumbnails stored locally from wiki CDN.
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { wikiEnemyEntries, fandomBase } from '@/data/wikiLore.js'

const entries = wikiEnemyEntries
</script>

<style scoped>
.enemies-page {
  padding-bottom: 3rem;
  background: linear-gradient(165deg, rgba(10, 8, 22, 1) 0%, rgba(4, 5, 14, 1) 55%);
}

.enemies-inner {
  padding-top: 0.5rem;
}

.enemies-bc {
  font-size: 0.8rem;
  color: var(--color-muted);
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}

.enemies-bc .crumb-link {
  color: var(--color-muted);
  text-decoration: none;
}

.enemies-bc .crumb-link:hover {
  color: var(--neon-cyan);
}

.enemies-bc .crumb-sep {
  opacity: 0.45;
}

.enemies-bc .crumb-current {
  color: var(--color-text);
  font-weight: 600;
}

.enemies-hero {
  margin-bottom: 1.5rem;
  max-width: 70ch;
}

.enemies-hero-tag {
  font-family: var(--font-display);
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #c45c7a;
  margin: 0 0 0.5rem;
}

.enemies-hero-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3.8vw, 2.35rem);
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0 0 0.65rem;
  color: var(--color-text);
}

.enemies-hero-lead {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.65;
  font-size: 0.98rem;
}

.enemies-hero-lead :deep(a) {
  color: var(--neon-cyan);
  font-weight: 600;
  text-decoration: none;
}

.enemies-hero-lead :deep(a:hover) {
  color: var(--color-cta);
}

.enemies-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.strip-chip {
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.35rem 0.65rem;
  border: 1px solid rgba(196, 92, 122, 0.45);
  color: var(--color-text) !important;
  text-decoration: none !important;
  background: rgba(20, 8, 18, 0.6);
  transition: border-color 0.15s ease, color 0.15s ease;
}

.strip-chip:hover {
  border-color: var(--neon-cyan);
  color: var(--neon-cyan) !important;
}

.enemies-card-grid {
  list-style: none;
  margin: 0 0 2.5rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 0.65rem;
}

.enemies-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none !important;
  color: inherit !important;
  border: 1px solid rgba(80, 90, 120, 0.35);
  background: rgba(8, 10, 20, 0.85);
  overflow: hidden;
  transition:
    border-color 0.15s ease,
    transform 0.15s ease;
}

.enemies-card:hover {
  border-color: rgba(196, 92, 122, 0.65);
  transform: translateY(-2px);
}

.enemies-card-visual {
  aspect-ratio: 1;
  background: #05060c;
}

.enemies-card-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.enemies-card-body {
  padding: 0.5rem 0.55rem 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.enemies-card-role {
  font-size: 0.58rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(160, 170, 200, 0.85);
}

.enemies-card-name {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--color-text);
}

.enemies-card-gridtag {
  font-size: 0.65rem;
  color: rgba(120, 200, 220, 0.85);
  line-height: 1.3;
}

.enemy-block {
  scroll-margin-top: 5rem;
  margin-bottom: 2.25rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(60, 70, 100, 0.35);
}

.enemy-block:last-of-type {
  border-bottom: none;
}

.enemy-block-head {
  display: grid;
  gap: 1rem 1.5rem;
  align-items: start;
  grid-template-columns: 200px 1fr;
}

@media (max-width: 768px) {
  .enemies-card-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }

  .enemy-block-head {
    grid-template-columns: 1fr;
  }
}

.enemy-block-img {
  width: 100%;
  max-width: 220px;
  height: auto;
  border: 1px solid rgba(57, 240, 255, 0.2);
}

.enemy-block-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 0.25rem;
  color: var(--color-text);
}

.enemy-block-meta {
  margin: 0 0 0.75rem;
  font-size: 0.82rem;
  color: rgba(180, 190, 215, 0.9);
}

.enemy-block-text {
  margin: 0 0 0.85rem;
  color: var(--color-muted);
  line-height: 1.68;
  max-width: 65ch;
}

.enemy-block-links {
  margin: 0;
  font-size: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}

.enemy-block-links a {
  color: var(--neon-cyan);
  font-weight: 600;
  text-decoration: none;
}

.enemy-block-links a.ext {
  color: rgba(200, 210, 235, 0.95);
  border-bottom: 1px solid rgba(120, 140, 180, 0.5);
}

.enemy-block-links a:hover {
  color: var(--color-cta);
}

.dot {
  opacity: 0.45;
}

.enemies-foot {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: rgba(130, 140, 165, 0.95);
  max-width: 70ch;
}

.enemies-foot a {
  color: var(--neon-cyan);
}
</style>
