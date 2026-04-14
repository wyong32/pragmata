<template>
  <div class="container prose-section">
    <header class="page-hero">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a class="crumb-link" href="/">Home</a>
        <span class="crumb-sep" aria-hidden="true">/</span>
        <span class="crumb-current">PRAGMATA — Trailers &amp; news</span>
      </nav>
      <p class="page-kicker">Media</p>
      <h1 class="page-title">PRAGMATA — Trailers &amp; news</h1>
      <p class="page-lead">
        Major official beats that shaped what players know about PRAGMATA — reintroduction, pre-orders, the refreshed Main Trailer, and the April 2026 launch window. Prefer Capcom channels for titles and
        dates.
      </p>
    </header>

    <article class="prose-card">
      <h2>Official trailer timeline (summary)</h2>
      <ol class="media-timeline prose-muted">
        <li v-for="(beat, i) in trailerBeats" :key="i">
          <strong>{{ beat.period }} — {{ beat.title }}</strong>
          <br />
          {{ beat.detail }}
        </li>
      </ol>
    </article>

    <article class="prose-card">
      <h2>Where to watch</h2>
      <ul class="prose-muted">
        <li>
          <a href="https://www.youtube.com/results?search_query=PRAGMATA+Capcom+trailer" target="_blank" rel="noopener noreferrer">YouTube search: PRAGMATA Capcom trailer</a>
        </li>
        <li>
          <a href="https://www.capcom-games.com/pragmata/en-us/" target="_blank" rel="noopener noreferrer">Official PRAGMATA news list</a>
        </li>
      </ul>
    </article>

    <article class="prose-card">
      <h2>Wallpapers &amp; assets</h2>
      <p class="prose-muted">
        For <strong>Pragmata wallpaper</strong> searches: use Capcom press kits, official social posts, or storefront hero art so you get clean resolution and legitimate licensing. Avoid unrelated
        downloads that only share the name “Pragmata.”
      </p>
    </article>

    <p><a href="/faq">FAQ →</a> · <a href="/wiki">Wiki index →</a></p>
  </div>
</template>

<script setup>
const trailerBeats = [
  {
    period: 'June 2025',
    title: 'Reintroduction beat',
    detail:
      'Capcom reintroduced PRAGMATA with a clearer look at Hugh, Diana, the lunar station, and the dual action pitch, narrowing the window toward 2026.',
  },
  {
    period: 'December 2025',
    title: 'Pre-order wave',
    detail: 'Pre-orders opened with a public April 2026 date (later adjusted) and broader Sketchbook demo messaging.',
  },
  {
    period: 'March 2026',
    title: 'Main Trailer refresh',
    detail:
      'New footage of enemies, station areas, Shelter, and support bot Cabin; launch messaging moved earlier (April 24 → April 17 on many listings).',
  },
  {
    period: 'April 2026',
    title: 'Launch window',
    detail:
      'Capcom and first-party stores highlight April 17, 2026 in many regions; Steam can display April 16 depending on locale — trust your checkout page.',
  },
]
</script>

<style scoped>
.media-timeline {
  padding-left: 1.25rem;
  max-width: 68ch;
}

.media-timeline li {
  margin-bottom: 1rem;
  line-height: 1.6;
}
</style>
