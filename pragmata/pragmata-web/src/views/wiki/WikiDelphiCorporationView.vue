<template>
  <div class="wiki-lore-page wiki-lore-page--delphi">
    <div class="container lore-inner">
      <nav class="breadcrumb lore-bc" aria-label="Breadcrumb">
        <a class="crumb-link" href="/">Home</a>
        <span class="crumb-sep" aria-hidden="true">/</span>
        <a class="crumb-link" href="/wiki">Wiki</a>
        <span class="crumb-sep" aria-hidden="true">/</span>
        <span class="crumb-current">Delphi Corporation</span>
      </nav>

      <header class="lore-hero lore-hero--delphi">
        <div class="delphi-logo-wrap">
          <img
            class="delphi-logo"
            src="/images/wiki/delphi-corporation-logo.png"
            width="800"
            height="450"
            alt="Delphi Corporation logo (community reference)"
            loading="eager"
          />
        </div>
        <div class="delphi-hero-text">
          <p class="lore-kicker lore-kicker--cyan">Organization</p>
          <h1 class="lore-title">Delphi Corporation</h1>
          <p class="lore-deck">
            First Contact trailer framing positions Delphi at the intersection of <strong>Lunafilament</strong> science and advanced <strong>generative AI</strong> — the industrial backbone that produces the
            Bots Hugh shoots while Diana hacks their armor grids.
          </p>
        </div>
      </header>

      <article class="lore-prose lore-prose--wide">
        <h2 class="lore-h2 lore-h2--cyan">Products &amp; story pressure</h2>
        <p>
          Delphi manufactures the Walker-class units and heavier lines such as <a href="/wiki/enemies#sector-guard">SectorGuard</a> (military manufacturing division, per community sourcing on
          X). That ties corporate intent directly to the lethal automation filling the station.
        </p>

        <h2 class="lore-h2 lore-h2--cyan">Mythic name</h2>
        <p>
          “Delphi” recalls the Greek sanctuary and oracle — a place where cryptic pronouncements shaped politics. The in-fiction parallel: a corporation whose AI and materials science may be “speaking”
          through the station’s behavior faster than the crew can interpret.
        </p>

        <h2 class="lore-h2 lore-h2--cyan">Cross-links</h2>
        <ul class="lore-list lore-list--inline">
          <li><a href="/wiki/babel-industries">Babel Industries</a> — overlapping industrial branding.</li>
          <li><a href="/wiki/enemies">Enemies index</a> — Bot roster and hack grids.</li>
          <li><a href="/wiki/world">World &amp; premise</a> · <a href="/wiki/factions">Factions</a></li>
        </ul>

        <p class="lore-source">
          This page condenses themes from trailers and official messaging. Logo art is stored locally for performance — confirm final names and copy in-game.
        </p>
      </article>
    </div>
  </div>
</template>

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

.lore-bc :deep(.crumb-link:hover) {
  color: var(--neon-cyan);
}

.lore-bc :deep(.crumb-sep) {
  opacity: 0.45;
}

.lore-bc :deep(.crumb-current) {
  color: var(--color-text);
  font-weight: 600;
}

.wiki-lore-page--delphi {
  background:
    radial-gradient(ellipse 100% 60% at 100% 0%, rgba(57, 240, 255, 0.08), transparent 50%),
    linear-gradient(180deg, rgba(6, 10, 22, 1) 0%, rgba(3, 5, 12, 1) 100%);
}

.lore-hero--delphi {
  display: grid;
  gap: 1.25rem 2rem;
  align-items: center;
  border-bottom-color: rgba(57, 240, 255, 0.22);
  grid-template-columns: minmax(200px, 38%) 1fr;
}

@media (max-width: 768px) {
  .lore-hero--delphi {
    grid-template-columns: 1fr;
  }
}

.delphi-logo-wrap {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(57, 240, 255, 0.2);
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delphi-logo {
  width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.delphi-hero-text {
  min-width: 0;
}

.lore-kicker--cyan {
  color: var(--neon-cyan);
}

.lore-prose--wide {
  max-width: 72ch;
  color: var(--color-muted);
  font-size: 0.95rem;
  line-height: 1.72;
}

.lore-h2--cyan {
  color: var(--neon-cyan);
  margin-top: 1.75rem;
}

.lore-h2--cyan:first-of-type {
  margin-top: 0;
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
