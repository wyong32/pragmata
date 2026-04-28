<template>
  <div class="wiki-lore-page">
    <div class="container lore-inner">
      <nav class="breadcrumb lore-bc" aria-label="Breadcrumb">
        <a class="crumb-link" href="/">Home</a>
        <span class="crumb-sep" aria-hidden="true">/</span>
        <a class="crumb-link" href="/wiki">Wiki</a>
        <span class="crumb-sep" aria-hidden="true">/</span>
        <span class="crumb-current">Babel Industries</span>
      </nav>

      <header class="lore-hero lore-hero--babel">
        <p class="lore-kicker">Organization</p>
        <h1 class="lore-title">Babel Industries</h1>
        <p class="lore-deck">
          A corporation in the <strong>PRAGMATA</strong> universe whose full corporate role is still partly opaque — but its logo appears on gear, insurance-adjacent labeling, and heavy machinery tied to the
          lunar operation.
        </p>
      </header>

      <div class="lore-split">
        <figure class="lore-figure lore-figure--portrait">
          <img src="/images/wiki/diana-babel-context.jpg" width="800" height="1067" alt="Diana — promotional render (Fandom wiki asset)" loading="lazy" />
          <figcaption class="lore-cap">
            Community wiki notes: Diana’s jacket carried a visible “Babel Industries” label in early announcement material; later marketing sometimes omits it — treat on-screen builds as authoritative.
          </figcaption>
        </figure>
        <article class="lore-prose">
          <h2 class="lore-h2">What we know from trailers &amp; demo</h2>
          <ul class="lore-list">
            <li><strong>Equipment lineage:</strong> Hugh’s kit is described as tied to both “Lunar Life Insurance” and Babel Industries — a split branding that hints at layered contracts and sponsors on the mission.</li>
            <li><strong>Facility presence:</strong> Large machinery operated in-story bears the Babel Industries mark, implying fabrication or logistics partnerships inside the research complex.</li>
            <li><strong>Demo readability:</strong> Multiple Babel logos appear across the public Sketchbook build’s lunar facility — useful for screenshot hunters mapping who built what.</li>
          </ul>

          <h2 class="lore-h2">Name &amp; theme</h2>
          <p>
            “Babel” evokes confusion of voices and crossed signals — echoing the Tower of Babel narrative where shared language fractures. That thematic rhyme pairs naturally with a station that has gone silent
            and hostile.
          </p>

          <h2 class="lore-h2">See also</h2>
          <ul class="lore-list lore-list--inline">
            <li><a href="/wiki/delphi-corporation">Delphi Corporation</a> — Lunafilament R&amp;D and Bot manufacturing.</li>
            <li><a href="/characters/diana">Diana</a> · <a href="/characters/hugh">Hugh Williams</a></li>
            <li><a href="/wiki/enemies">Enemies index</a> — hostile units on station.</li>
            <li><a href="/wiki/factions">Factions &amp; systems</a></li>
          </ul>

          <p class="lore-source">
            Primary community write-up:
            <a :href="fandomUrl" target="_blank" rel="noopener noreferrer">Babel Industries — Pragmata Wiki (Fandom)</a>. Images on this page were downloaded from the same wiki CDN for local performance;
            CC-BY-SA may apply — verify license on Fandom before re-publishing elsewhere.
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const fandomUrl = 'https://pragmata.fandom.com/wiki/Babel_Industries'
</script>

<style scoped>
.lore-inner {
  padding-top: 0.75rem;
}

.lore-bc {
  font-size: 0.8rem;
  color: var(--color-muted);
  margin-bottom: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}

.lore-bc :deep(.crumb-link) {
  color: var(--color-muted);
  text-decoration: none;
}

.lore-bc :deep(.crumb-link:hover),
.lore-bc a.crumb-link:hover {
  color: var(--neon-cyan);
}

.lore-bc :deep(.crumb-sep) {
  opacity: 0.45;
}

.lore-bc :deep(.crumb-current) {
  color: var(--color-text);
  font-weight: 600;
}

.wiki-lore-page {
  padding-bottom: 3rem;
  min-height: 60vh;
  background:
    radial-gradient(ellipse 120% 80% at 12% 0%, rgba(180, 95, 40, 0.12), transparent 45%),
    linear-gradient(180deg, rgba(8, 10, 20, 0.97) 0%, rgba(4, 6, 14, 1) 100%);
}

.lore-hero {
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(220, 140, 80, 0.25);
}

.lore-kicker {
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(230, 160, 110, 0.95);
  margin: 0 0 0.5rem;
}

.lore-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.4rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  margin: 0 0 0.75rem;
  color: var(--color-text);
  line-height: 1.1;
}

.lore-deck {
  margin: 0;
  max-width: 62ch;
  font-size: 1.02rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.lore-split {
  display: grid;
  gap: clamp(1.25rem, 3vw, 2rem);
  align-items: start;
  grid-template-columns: minmax(240px, 34%) 1fr;
}

@media (max-width: 1024px) {
  .lore-split {
    grid-template-columns: 1fr;
  }
}

.lore-figure {
  margin: 0;
  position: relative;
}

.lore-figure img {
  width: 100%;
  height: auto;
  display: block;
  border: 1px solid rgba(220, 140, 80, 0.35);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}

.lore-figure--portrait {
  overflow: hidden;
  border-radius: 3px;
  aspect-ratio: 800 / 1067;
  align-self: start;
  border: 1px solid rgba(220, 140, 80, 0.35);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}

.lore-figure--portrait img {
  height: 100%;
  object-fit: cover;
  border: 0;
  box-shadow: none;
}

.lore-cap {
  margin: 0.6rem 0 0;
  font-size: 0.78rem;
  line-height: 1.5;
  color: rgba(160, 170, 195, 0.92);
}

.lore-prose {
  color: var(--color-muted);
  font-size: 0.95rem;
  line-height: 1.72;
}

.lore-h2 {
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(240, 200, 160, 0.95);
  margin: 1.5rem 0 0.65rem;
}

.lore-h2:first-of-type {
  margin-top: 0;
}

.lore-list {
  margin: 0 0 1rem;
  padding-left: 1.15rem;
}

.lore-list li {
  margin-bottom: 0.5rem;
}

.lore-list--inline a {
  color: var(--neon-cyan);
  font-weight: 600;
  text-decoration: none;
}

.lore-list--inline a:hover {
  color: var(--color-cta);
}

.lore-source {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px dashed rgba(120, 130, 160, 0.35);
  font-size: 0.82rem;
  color: rgba(140, 150, 175, 0.95);
}

.lore-source a {
  color: var(--neon-cyan);
}
</style>
