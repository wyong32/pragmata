<template>
  <div class="container prose-section">
    <header class="page-hero">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a class="crumb-link" href="/">Home</a>
        <span class="crumb-sep" aria-hidden="true">/</span>
        <span class="crumb-current">PRAGMATA — FAQ</span>
      </nav>
      <p class="page-kicker">SEO-focused answers</p>
      <h1 class="page-title">PRAGMATA — FAQ</h1>
      <p class="page-lead">Targets high-volume questions (cancellation, PC specs, legacy consoles). Confirm every date and SKU on Capcom plus your storefront.</p>
    </header>

    <dl class="faq-list">
      <dt>Is Pragmata cancelled?</dt>
      <dd>
        Capcom continues to market a <strong>2026</strong> window — there is no widely cited official cancellation statement paired with that roadmap. Rumors spike after long gaps; trust
        <a href="https://www.capcom-games.com/pragmata/en-us/" target="_blank" rel="noopener noreferrer">Capcom’s PRAGMATA hub</a> and first-party stores, not anonymous posts.
      </dd>

      <dt>What are Pragmata system requirements?</dt>
      <dd>
        Use Steam’s published minimum and recommended blocks as canonical for <strong>Pragmata system requirements</strong>. Our
        <a href="/getting-started#gs-pc-specs">PC specs section</a> on getting started copies those numbers with context for ray tracing and RAM headroom.
      </dd>

      <dt>Will Pragmata be on PS4?</dt>
      <dd>
        Public platform lists emphasize <strong>PS5</strong>, <strong>Xbox Series X|S</strong>, <strong>Steam</strong>, and <strong>Nintendo Switch 2</strong>. Do not assume PS4 compatibility unless
        Capcom explicitly announces it — buying last-gen hardware for this title is risky without confirmation.
      </dd>

      <dt>What kind of game is PRAGMATA?</dt>
      <dd>Single-player science-fiction action-adventure: Hugh’s third-person combat plus Diana’s real-time hacking puzzles on a lunar station.</dd>

      <dt>Is there a demo?</dt>
      <dd>
        Yes — the free <a href="/getting-started#gs-sketchbook-demo">Pragmata Sketchbook</a> demo teaches the duo loop on supported platforms (availability may vary by region).
      </dd>

      <dt>Who is Diana?</dt>
      <dd>
        <strong>Diana</strong> (D-I-0336-7) is the Lunafilament android focused on hacking and story empathy beats — see <a href="/characters/diana">characters</a>.
      </dd>

      <dt>When does it release?</dt>
      <dd>
        Track the <a href="/getting-started">getting started</a> hub and its <a href="/getting-started#gs-release-deep">release date deep dive</a> — storefront strings differ by region.
      </dd>

      <dt>Which platforms?</dt>
      <dd>PS5, Xbox Series X|S, Steam (PC), Nintendo Switch 2 — verify each store’s regional timing.</dd>

      <dt>Deluxe vs Standard?</dt>
      <dd>
        <a href="/getting-started#gs-editions">Editions section</a> — Deluxe bundles the Shelter Variety Pack and may include timed bonuses depending on retailer.
      </dd>
    </dl>
  </div>
</template>

<style scoped>
.faq-list dt {
  font-weight: 700;
  margin-top: 1.15rem;
  color: var(--color-cta);
  font-size: 0.95rem;
  text-shadow: var(--glow-kicker);
}

@media (prefers-contrast: more) {
  .faq-list dt {
    text-shadow: none;
  }
}

.faq-list dt:first-of-type {
  margin-top: 0;
}

.faq-list dd {
  margin: 0.35rem 0 0;
  color: var(--color-muted);
  max-width: 68ch;
  line-height: 1.65;
}
</style>
