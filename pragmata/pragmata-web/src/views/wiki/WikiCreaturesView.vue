<template>
  <div class="container prose-section">
    <header class="page-hero">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a class="crumb-link" href="/">Home</a>
        <span class="crumb-sep" aria-hidden="true">/</span>
        <a class="crumb-link" href="/wiki">Wiki</a>
        <span class="crumb-sep" aria-hidden="true">/</span>
        <span class="crumb-current">PRAGMATA — Creatures &amp; hostiles</span>
      </nav>
      <p class="page-kicker">Wiki</p>
      <h1 class="page-title">PRAGMATA — Creatures &amp; hostiles</h1>
      <p class="page-lead">Enemy archetypes in marketing footage — how they pressure the hack-and-shoot loop.</p>
    </header>
    <article class="prose-card">
      <h2>Field combat baseline</h2>
      <p class="prose-muted">
        Standard encounters mix armored humanoid walkers, heavier mech-like units, and aerial drones. The design goal is to force <strong>Diana</strong> hacks that expose armor, then
        <strong>Hugh</strong> follow-up shots on weak points — raw DPS alone is not the default answer.
      </p>
      <h2>Shield and missile pressure</h2>
      <p class="prose-muted">
        Red barrier-type enemies block hacking until <strong>Hugh</strong> strips the shield with gunfire. Missile patterns can interrupt grid solves; footage also shows hacks that send ordnance back at
        attackers — timing becomes part of mastery.
      </p>
      <h2>Boss-scale encounters</h2>
      <p class="prose-muted">
        Larger machines widen the arena and add area denial. The same duo loop applies at higher scale: survive pressure, complete hacks, convert openings into damage. Exact names and phases are best
        experienced in-game.
      </p>
      <figure class="img-inline">
        <img src="/images/wiki/basic-walker.webp" width="320" height="480" alt="Basic walker — wiki render" loading="lazy" />
        <figcaption>Example unit art (local copy from Pragmata Wiki CDN) — see the full roster with grids on the enemies list.</figcaption>
      </figure>
      <p>
        <a href="/wiki/enemies">Enemies list (illustrated) →</a>
        ·
        <a href="/wiki/delphi-corporation">Delphi Corporation →</a>
        ·
        <a href="/wiki/babel-industries">Babel Industries →</a>
        ·
        <a href="/gameplay">Combat mechanics →</a>
        ·
        <a href="/wiki">Wiki hub →</a>
      </p>
    </article>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 与站内其它插图一致：先占位再解码，降低 CLS */
.img-inline {
  margin: 1.25rem 0;
  max-width: min(100%, 360px);
}

.img-inline img {
  display: block;
  width: 100%;
  aspect-ratio: 320 / 480;
  object-fit: cover;
  border: 1px solid var(--color-border-strong);
  box-shadow: 0 0 20px rgba(57, 240, 255, 0.08);
}

.img-inline figcaption {
  font-size: 0.8rem;
  color: var(--color-dim);
  margin-top: 0.4rem;
}
</style>
