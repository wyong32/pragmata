<template>
  <div class="wiki-hub">
    <div class="wiki-hub-bg" aria-hidden="true" />

    <div class="container wiki-hub-inner">
      <nav class="wiki-bc" aria-label="Breadcrumb">
        <a class="wiki-bc-a" href="/">Home</a>
        <span class="wiki-bc-sep">/</span>
        <span class="wiki-bc-here">Wiki</span>
      </nav>

      <header class="wiki-hub-hero">
        <div class="wiki-hub-hero-copy">
          <p class="wiki-hub-label">Lore archive</p>
          <h1 class="wiki-hub-title">PRAGMATA <span class="wiki-hub-title-wiki">WIKI</span></h1>
          <p class="wiki-hub-lead">
            Setting-first articles and organization profiles — distinct from step-by-step <a class="wiki-inline" href="/guides">player guides</a>. Jump into characters, corporations, or
            the hostile roster below.
          </p>
        </div>
        <div class="wiki-hub-hero-index" aria-hidden="true">
          <span class="idx-line">VOL. 01</span>
          <span class="idx-line idx-line--muted">LUNAR FACILITY</span>
          <span class="idx-line idx-line--accent">NON-CANON UNAUTHORIZED</span>
        </div>
      </header>

      <section class="wiki-section" aria-labelledby="people-heading">
        <div class="wiki-section-head">
          <h2 id="people-heading" class="wiki-section-title">People</h2>
          <p class="wiki-section-sub">Playable leads — full mechanical profiles on dedicated pages.</p>
        </div>
        <div class="people-rail">
          <a v-for="p in wikiPeople" :key="p.id" class="people-tile" :href="p.path">
            <div class="people-tile-img-wrap">
              <img class="people-tile-img" :src="p.image" :alt="p.name" width="800" height="1000" loading="lazy" />
              <span class="people-tile-scan" aria-hidden="true" />
            </div>
            <div class="people-tile-copy">
              <span class="people-tile-name">{{ p.name }}</span>
              <span class="people-tile-sub">{{ p.subtitle }}</span>
              <span class="people-tile-blurb">{{ p.blurb }}</span>
              <span class="people-tile-cta">Open dossier →</span>
            </div>
          </a>
        </div>
      </section>

      <section class="wiki-section" aria-labelledby="org-heading">
        <div class="wiki-section-head">
          <h2 id="org-heading" class="wiki-section-title">Organizations</h2>
          <p class="wiki-section-sub">Corporate actors referenced on equipment, Bots, and facility signage.</p>
        </div>
        <div class="org-deck">
          <a v-for="o in wikiOrganizations" :key="o.id" class="org-card" :href="o.path">
            <span class="org-card-kicker">{{ o.id === 'babel' ? 'BRANDING' : 'ANTAGONIST LOGIC' }}</span>
            <span class="org-card-name">{{ o.name }}</span>
            <span class="org-card-blurb">{{ o.blurb }}</span>
          </a>
        </div>
      </section>

      <section class="wiki-section" aria-labelledby="hostiles-heading">
        <div class="wiki-section-head wiki-section-head--split">
          <div>
            <h2 id="hostiles-heading" class="wiki-section-title">Hostiles</h2>
            <p class="wiki-section-sub">Bots and bosses with local wiki art — cross-linked to Delphi.</p>
          </div>
          <a class="wiki-cta" href="/wiki/enemies">Open enemies list →</a>
        </div>
      </section>

      <section class="wiki-section wiki-section--topics" aria-labelledby="topics-heading">
        <h2 id="topics-heading" class="wiki-section-title wiki-section-title--sm">More topics</h2>
        <ul class="topic-rows" role="list">
          <li v-for="item in loreTopics" :key="item.path" class="topic-rows-li">
            <a class="topic-row" :href="item.path">
              <span class="topic-row-title">{{ item.title }}</span>
              <span class="topic-row-blurb">{{ item.blurb }}</span>
              <span class="topic-row-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </section>

      <footer class="wiki-hub-foot">
        <p>
          Lore text on organization pages summarizes the
          <a href="https://pragmata.fandom.com/wiki/Pragmata_Wiki" target="_blank" rel="noopener noreferrer">Pragmata Wiki (Fandom)</a> community articles; confirm details in-game and on Capcom’s official
          site.
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import wikiData from '@/data/wiki.js'
import { wikiPeople, wikiOrganizations } from '@/data/wikiLore.js'

const loreTopics = wikiData.loreTopics
</script>

<style scoped>
.wiki-hub {
  position: relative;
  padding-bottom: 3.5rem;
  overflow: hidden;
}

.wiki-hub-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 50% at 0% 0%, rgba(90, 40, 95, 0.18), transparent 55%),
    radial-gradient(ellipse 60% 45% at 100% 20%, rgba(40, 70, 120, 0.14), transparent 50%),
    linear-gradient(185deg, #07060f 0%, #030308 100%);
  pointer-events: none;
  z-index: 0;
}

.wiki-hub-inner {
  position: relative;
  z-index: 1;
  padding-top: 0.65rem;
}

.wiki-bc {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  color: rgba(160, 170, 200, 0.9);
  margin-bottom: 1.25rem;
}

.wiki-bc-a {
  color: inherit;
  text-decoration: none;
}

.wiki-bc-a:hover {
  color: #e8a0b8;
}

.wiki-bc-sep {
  opacity: 0.4;
}

.wiki-bc-here {
  color: var(--color-text);
  font-weight: 600;
}

.wiki-hub-hero {
  display: grid;
  gap: 1.5rem 2.5rem;
  margin-bottom: clamp(2rem, 5vw, 3rem);
  align-items: end;
  grid-template-columns: 1fr auto;
}

.wiki-hub-label {
  font-family: var(--font-display);
  font-size: 0.6rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #e090a8;
  margin: 0 0 0.5rem;
}

.wiki-hub-title {
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4.5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1.05;
  margin: 0 0 0.75rem;
  color: #f2f4fa;
}

.wiki-hub-title-wiki {
  font-weight: 800;
  letter-spacing: 0.12em;
  color: rgba(200, 210, 235, 0.92);
}

.wiki-hub-lead {
  margin: 0;
  max-width: 54ch;
  font-size: 0.98rem;
  line-height: 1.65;
  color: rgba(190, 198, 220, 0.88);
}

.wiki-inline {
  color: #7fd4e8;
  font-weight: 600;
  text-decoration: none;
}

.wiki-inline:hover {
  color: #ffb8d0;
}

.wiki-hub-hero-index {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
  font-family: var(--font-display);
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  color: rgba(140, 150, 180, 0.75);
  text-transform: uppercase;
  padding-bottom: 0.25rem;
}

.idx-line--muted {
  opacity: 0.55;
}

.idx-line--accent {
  color: #c45c7a;
  opacity: 0.95;
}

.wiki-section {
  margin-bottom: clamp(2rem, 4vw, 2.75rem);
}

.wiki-section-head {
  margin-bottom: 1rem;
}

.wiki-section-head--split {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
}

.wiki-section-title {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 0.35rem;
  color: #f0c8d8;
}

.wiki-section-title--sm {
  margin-bottom: 0.75rem;
  color: rgba(200, 210, 235, 0.85);
}

.wiki-section-sub {
  margin: 0;
  font-size: 0.88rem;
  color: rgba(150, 160, 190, 0.9);
  max-width: 52ch;
}

.wiki-cta {
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #7fd4e8 !important;
  text-decoration: none !important;
  white-space: nowrap;
}

.wiki-cta:hover {
  color: #ffb8d0 !important;
}

.people-rail {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
}

.people-tile {
  display: grid;
  grid-template-columns: minmax(0, 38%) 1fr;
  min-height: 200px;
  text-decoration: none !important;
  color: inherit !important;
  border: 1px solid rgba(120, 90, 110, 0.45);
  background: rgba(12, 10, 22, 0.75);
  overflow: hidden;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease;
}

.people-tile:hover {
  border-color: rgba(230, 150, 180, 0.55);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.people-tile-img-wrap {
  position: relative;
  align-self: stretch;
  width: 100%;
  aspect-ratio: 4 / 5;
  min-height: 0;
  background: #050308;
}

.people-tile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  filter: saturate(0.92) contrast(1.05);
}

.people-tile:hover .people-tile-img {
  filter: saturate(1.05) contrast(1.08);
}

.people-tile-scan {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(0, 0, 0, 0.06) 3px,
    rgba(0, 0, 0, 0.06) 4px
  );
  pointer-events: none;
}

.people-tile-copy {
  padding: 1rem 1.1rem 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.people-tile-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #faf8ff;
}

.people-tile-sub {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(180, 195, 225, 0.75);
}

.people-tile-blurb {
  font-size: 0.86rem;
  line-height: 1.55;
  color: rgba(170, 180, 205, 0.92);
  margin-top: 0.15rem;
}

.people-tile-cta {
  margin-top: auto;
  padding-top: 0.65rem;
  font-family: var(--font-display);
  font-size: 0.58rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #7fd4e8;
}

.org-deck {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 768px) {
  .wiki-hub-hero {
    grid-template-columns: 1fr;
  }

  .wiki-hub-hero-index {
    align-items: flex-start;
  }

  .people-rail {
    grid-template-columns: 1fr;
  }

  .people-tile {
    grid-template-columns: 1fr;
  }

  .org-deck {
    grid-template-columns: 1fr;
  }
}

.org-card {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.1rem 1.15rem 1.2rem;
  border: 1px solid rgba(70, 110, 140, 0.35);
  background: linear-gradient(145deg, rgba(14, 18, 36, 0.9) 0%, rgba(8, 10, 22, 0.95) 100%);
  text-decoration: none !important;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.org-card:hover {
  border-color: rgba(127, 212, 232, 0.55);
  transform: translateY(-2px);
}

.org-card-kicker {
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(130, 160, 190, 0.85);
}

.org-card-name {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #eef2ff;
}

.org-card-blurb {
  font-size: 0.84rem;
  line-height: 1.5;
  color: rgba(160, 170, 200, 0.9);
}

.topic-rows {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(80, 70, 100, 0.35);
}

.topic-rows-li {
  border-bottom: 1px solid rgba(80, 70, 100, 0.35);
}

.topic-row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.35rem 1rem;
  padding: 0.85rem 0.25rem 0.85rem 0.15rem;
  text-decoration: none !important;
  color: inherit !important;
  transition: background 0.12s ease;
}

.topic-row:hover {
  background: rgba(255, 255, 255, 0.03);
}

.topic-row-title {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #e8b0c8;
  flex: 0 0 auto;
}

.topic-row-blurb {
  flex: 1 1 220px;
  font-size: 0.84rem;
  color: rgba(155, 165, 195, 0.9);
  line-height: 1.45;
  min-width: 0;
}

.topic-row-arrow {
  font-size: 0.85rem;
  color: rgba(120, 200, 220, 0.55);
  margin-left: auto;
}

.wiki-hub-foot {
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 1px dashed rgba(100, 90, 120, 0.4);
  font-size: 0.8rem;
  line-height: 1.55;
  color: rgba(130, 138, 165, 0.92);
  max-width: 68ch;
}

.wiki-hub-foot a {
  color: #7fd4e8;
}
</style>
