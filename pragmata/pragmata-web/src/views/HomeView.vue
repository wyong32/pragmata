<template>
  <div class="home-page">
    <a class="skip-link" href="#main-content">Skip to content</a>

    <section class="hero hero--cinematic" aria-labelledby="hero-heading">
      <div class="hero-bg" aria-hidden="true" />
      <span class="hero-slant" aria-hidden="true">GUIDE</span>
      <div class="container hero-container">
        <div class="hero-inner">
          <div class="hero-copy hero-content-panel">
            <p class="hud-tag">
              <span class="hud-tag-dot" aria-hidden="true" />
              PRAGMATA GAME · GETTING STARTED · CHARACTERS · GAMEPLAY · WIKI · GUIDES
            </p>
            <h1 id="hero-heading" class="hero-title">PRAGMATA game — Getting Started, Characters, Gameplay &amp; Wiki</h1>
            <p class="hero-lead">
              Unofficial <strong>PRAGMATA</strong> game reference built around how you actually browse: start with
              <a href="/getting-started">Getting started</a> for editions, demo and specs, meet
              <a href="/characters">Diana &amp; Hugh</a> on Characters, read systems on
              <a href="/gameplay">Gameplay</a>, explore lore on the <a href="/wiki">Wiki</a>, and follow
              <a href="/guides">Guides</a> plus <a href="/media">Media</a> and <a href="/faq">FAQ</a>. Launch windows and storefront checks live in Getting started when you need them.
            </p>
            <div class="hero-actions" role="navigation" aria-label="Guide quick links">
              <a class="btn-hud-primary" href="/getting-started"> Getting started </a>
              <a class="btn-hud-secondary" href="/characters"> Characters </a>
              <a class="btn-hud-secondary" href="/gameplay"> Gameplay </a>
              <a class="btn-hud-secondary" href="/wiki"> Wiki </a>
              <a class="btn-hud-secondary" href="/guides"> Guides </a>
              <a class="btn-hud-secondary" href="/media"> Media </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="band-telemetry" aria-labelledby="release-tracker-heading">
      <div class="container">
        <h2 id="release-tracker-heading" class="section-heading">
          <span class="section-heading-kicker">Launch</span>
          <span class="section-heading-main">
            <span class="section-heading-mark" aria-hidden="true">///</span> Pragmata release date &amp; where to buy
          </span>
        </h2>
        <p class="tracker-intro">
          {{ releaseLine }}
        </p>
        <div class="telemetry-inner">
          <div class="telemetry-item">
            <span class="telemetry-k">STEAM (PC)</span>
            <span class="telemetry-v">APR 16–17, 2026 · TRUST YOUR COUNTDOWN</span>
          </div>
          <div class="telemetry-item">
            <span class="telemetry-k">PLATFORMS</span>
            <span class="telemetry-v">PS5 · XSX|S · STEAM · SWITCH 2</span>
          </div>
          <div class="telemetry-item">
            <span class="telemetry-k">DEMO</span>
            <span class="telemetry-v">PRAGMATA SKETCHBOOK</span>
          </div>
          <div class="telemetry-item">
            <span class="telemetry-k">NEXT</span>
            <span class="telemetry-v"><a class="text-link" href="/getting-started">Full getting started →</a></span>
          </div>
        </div>
      </div>
    </section>

    <section class="band-trailers" aria-labelledby="trailers-heading">
      <div class="container trailers-section">
        <h2 id="trailers-heading" class="section-heading trailers-heading-block">
          <span class="section-heading-kicker">Watch</span>
          <span class="section-heading-main">
            <span class="section-heading-mark" aria-hidden="true">///</span> Pragmata trailer &amp; gameplay footage
          </span>
        </h2>
        <div class="trailers-grid">
          <div class="trailers-embed-wrap">
            <div class="embed-responsive">
              <iframe
                v-if="trailerPlaying"
                :src="trailerEmbedSrc"
                title="PRAGMATA — Main Trailer (Capcom)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <button
                v-else
                type="button"
                class="trailer-facade"
                aria-label="Load and play PRAGMATA main trailer from YouTube"
                @click="trailerPlaying = true"
              >
                <span class="trailer-facade-scrim" aria-hidden="true" />
                <svg class="trailer-play-icon" viewBox="0 0 80 80" width="80" height="80" aria-hidden="true" focusable="false">
                  <circle class="trailer-play-ring" cx="40" cy="40" r="36" />
                  <path class="trailer-play-triangle" d="M34 26 L58 40 34 54 Z" />
                </svg>
              </button>
            </div>
            <p class="trailers-caption tech-mono">
              <a href="/media">More trailers &amp; media on-site →</a>
            </p>
          </div>
          <div class="trailers-copy">
            <h3 class="trailers-subh">Trailer read — gameplay &amp; reviews</h3>
            <p class="prose-muted">
              <strong>Pragmata gameplay</strong> in marketing footage: Hugh’s EVA-style movement and gunplay paired with Diana’s hack beats — we break weak-point timing and node pressure so you’re not
              guessing on day one. Full systems write-up:
              <a href="/gameplay">gameplay hub</a>.
            </p>
            <p class="prose-muted">
              Hunting <strong>Pragmata wallpaper</strong>-quality stills? Our <a href="/media">media hub</a> collects on-site references and official sources you can safely use.
            </p>
            <p class="prose-muted">
              <strong>Pragmata review</strong> roundups and <strong>Metacritic</strong> aggregation matter once embargoes lift — we’ll expand the <a href="/faq">FAQ</a> and guides with
              post-launch difficulty and build advice.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="band-wiki" aria-labelledby="wiki-quick-heading">
      <div class="container">
        <h2 id="wiki-quick-heading" class="section-heading">
          <span class="section-heading-kicker">Explore</span>
          <span class="section-heading-main">
            <span class="section-heading-mark" aria-hidden="true">///</span> World, lore &amp; systems
          </span>
        </h2>
        <p class="section-intro">Dig into the setting, mechanics, and curated guides — everything you need between missions, not a wall of marketing copy.</p>
        <div class="wiki-tiles">
          <a class="wiki-tile" href="/wiki">
            <span class="wiki-tile-icon" aria-hidden="true">◇</span>
            <span class="wiki-tile-title">Wiki hub</span>
            <span class="wiki-tile-desc">Worldview, Lunafilament, Shelter systems</span>
          </a>
          <a class="wiki-tile" href="/gameplay">
            <span class="wiki-tile-icon" aria-hidden="true">+</span>
            <span class="wiki-tile-title">Item &amp; loadout primer</span>
            <span class="wiki-tile-desc">Weapon roles, hacking nodes, upgrades (overview)</span>
          </a>
          <a class="wiki-tile" href="/wiki/world">
            <span class="wiki-tile-icon" aria-hidden="true">◎</span>
            <span class="wiki-tile-title">Stage &amp; setting</span>
            <span class="wiki-tile-desc">Lunar facility, atmosphere, story setup</span>
          </a>
          <a class="wiki-tile" href="/guides">
            <span class="wiki-tile-icon" aria-hidden="true">*</span>
            <span class="wiki-tile-title">Guides list</span>
            <span class="wiki-tile-desc">Curated topic list for buyers &amp; players</span>
          </a>
        </div>
      </div>
    </section>

    <section class="band-characters" aria-labelledby="chars-home-heading">
      <div class="container">
        <h2 id="chars-home-heading" class="section-heading">
          <span class="section-heading-kicker">Party</span>
          <span class="section-heading-main">
            <span class="section-heading-mark" aria-hidden="true">///</span> <strong class="seo-em">Diana</strong>, Hugh &amp; the duo loop
          </span>
        </h2>
        <p class="section-intro section-intro--wide">
          Capcom sells <strong>PRAGMATA</strong> on the idea of <em>two brains, one fight</em>: <strong class="seo-em">Diana Pragmata</strong> searches cluster on her because she owns the puzzle layer —
          breaking shields, rerouting machines, and story-critical hacks — while Hugh sells the survival fantasy (aiming, spacing, resource pressure). This hub tracks both roles so you can prep combos,
          not just lore dumps. Deep dives: <a href="/characters">characters</a> · <a href="/getting-started#gs-sketchbook-demo">Sketchbook demo</a> · <a href="/gameplay">gameplay</a>.
        </p>
        <div class="char-compare">
          <MechanicalFrame class="char-panel char-panel--feature" :padded="false">
            <div class="char-visual">
              <img class="char-photo" src="/images/Diana.webp" width="960" height="540" alt="Diana — Pragmata-class android" loading="lazy" />
            </div>
            <div class="char-panel-body">
              <p class="hud-label">ANDROID · HACKER</p>
              <h3 class="card-h"><strong class="seo-em">Diana</strong> (D-I-0336-7)</h3>
              <p class="card-p">
                Diana is your <strong>Pragmata</strong> tech win condition: timed hacks, armor strips, and breach points that turn Hugh’s DPS windows real. We map her kit to demo and launch missions so
                “grid” sections feel like strategy, not trial-and-error.
              </p>
              <a class="text-link char-link" href="/characters/diana">Full Diana profile →</a>
            </div>
          </MechanicalFrame>
          <MechanicalFrame class="char-panel char-panel--feature" :padded="false">
            <div class="char-visual">
              <img class="char-photo" src="/images/Hugh.webp" width="960" height="540" alt="Hugh Williams — security specialist" loading="lazy" />
            </div>
            <div class="char-panel-body">
              <p class="hud-label">FIELD · RESPONDER</p>
              <h3 class="card-h">Hugh Williams</h3>
              <p class="card-p">
                Hugh is the body in the suit: thruster bursts, weapon swaps, and spacing under AI pressure. Guides here focus on loadouts, weak-point shooting after Diana exposes a core, and shelter
                upgrades that keep both characters alive.
              </p>
              <a class="text-link char-link" href="/gameplay">Loadouts &amp; combat →</a>
            </div>
          </MechanicalFrame>
        </div>
        <p class="sketchbook-note">
          Hands-on loop: <strong class="seo-em">Pragmata Sketchbook</strong> —
          <a href="/getting-started#gs-sketchbook-demo">demo walkthrough →</a>
        </p>
      </div>
    </section>

    <section id="platforms-specs" class="band-platforms" aria-labelledby="platforms-heading">
      <div class="container">
        <h2 id="platforms-heading" class="section-heading">
          <span class="section-heading-kicker">Specs</span>
          <span class="section-heading-main">
            <span class="section-heading-mark" aria-hidden="true">///</span> Platforms &amp; system requirements
          </span>
        </h2>
        <p class="section-intro">
          Concrete facts first: where the game is sold, what Steam says about <strong>Pragmata PC</strong> hardware, and how consoles fit in. Numbers below mirror the
          <a :href="steamUrl" target="_blank" rel="noopener noreferrer">Steam store page</a> — re-open it before you buy.
        </p>
        <div class="specs-table-wrap">
          <table class="specs-table">
            <caption class="specs-caption">
              Where to play — summary (Capcom / storefront messaging)
            </caption>
            <thead>
              <tr>
                <th scope="col">Platform</th>
                <th scope="col">What you need to know</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Steam (PC)</th>
                <td>
                  Store header shows <strong>April 16, 2026</strong>; Capcom’s Early Bird block on the same page cites <strong>April 17, 2026</strong> for many Steam regions (vs. an earlier April 24 plan) —
                  trust your local countdown and cart text, not re-posts. Standard and <strong>Deluxe edition</strong> SKUs, <strong>Pragmata Steam</strong> wishlist, and <strong>Steam key</strong> redemption all go through this store page. Third-party
                  DRM on the listing includes <strong>Denuvo Anti-tamper</strong>.
                </td>
              </tr>
              <tr>
                <th scope="row">PS5</th>
                <td>
                  <strong>Pragmata PS5</strong> listings use the same launch window as other SKUs; check the PlayStation Store in your account region for price, pre-load, and any DualSense features
                  Capcom advertises.
                </td>
              </tr>
              <tr>
                <th scope="row">Xbox Series X|S</th>
                <td>Buy on the Microsoft Store; Smart Delivery / Series console labels should match Capcom’s packaging — confirm file size and cross-gen policies on the store screen.</td>
              </tr>
              <tr>
                <th scope="row">Nintendo Switch 2</th>
                <td>
                  <strong>Pragmata Switch 2</strong> is part of Capcom’s platform list — resolution, performance modes, and cartridge vs digital details will land on the eShop near launch. Treat
                  handheld dock behavior as TBD until Nintendo and Capcom publish specs.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 class="specs-subtitle">PC (Steam) — minimum vs recommended</h3>
        <div class="specs-table-wrap">
          <table class="specs-table specs-table--pc">
            <thead>
              <tr>
                <th scope="col">Component</th>
                <th scope="col">Minimum</th>
                <th scope="col">Recommended</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">OS</th>
                <td>{{ pcMin.os }}</td>
                <td>{{ pcRec.os }}</td>
              </tr>
              <tr>
                <th scope="row">Processor</th>
                <td>{{ pcMin.processor }}</td>
                <td>{{ pcRec.processor }}</td>
              </tr>
              <tr>
                <th scope="row">Memory</th>
                <td>{{ pcMin.memory }}</td>
                <td>{{ pcRec.memory }}</td>
              </tr>
              <tr>
                <th scope="row">Graphics</th>
                <td>{{ pcMin.graphics }}</td>
                <td>{{ pcRec.graphics }}</td>
              </tr>
              <tr>
                <th scope="row">DirectX</th>
                <td>{{ pcMin.directx }}</td>
                <td>{{ pcRec.directx }}</td>
              </tr>
              <tr>
                <th scope="row">Network</th>
                <td>{{ pcMin.network }}</td>
                <td>{{ pcRec.network }}</td>
              </tr>
              <tr>
                <th scope="row">Storage</th>
                <td>{{ pcMin.storage }}</td>
                <td>{{ pcRec.storage }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="prose-muted specs-footnote"><strong>Steam footnotes:</strong> {{ pcMin.notes }}</p>
        <p class="prose-muted specs-footnote"><strong>Recommended footnotes:</strong> {{ pcRec.notes }}</p>
        <aside class="rumor-callout" aria-label="Switch 2">
          <h3 class="rumor-title">Switch 2 performance</h3>
          <p class="prose-muted">
            Capcom lists Switch 2 alongside PS5, Xbox Series X|S, and Steam. We won’t invent FPS or resolution targets here — watch the eShop page and patch notes once the port is live.
          </p>
        </aside>
        <p class="specs-more">
          <a class="text-link" href="/getting-started#gs-pc-specs">Full PC specs on getting started →</a>
          ·
          <a class="text-link" href="/getting-started">Getting started checklist →</a>
        </p>
      </div>
    </section>

    <section class="faq-preview band-faq" aria-labelledby="faq-preview-heading">
      <div class="container">
        <h2 id="faq-preview-heading" class="section-heading">
          <span class="section-heading-kicker">FAQ</span>
          <span class="section-heading-main">
            <span class="section-heading-mark" aria-hidden="true">///</span> Keyword answers — launch, platforms, demo
          </span>
        </h2>
        <p class="faq-deck">
          Short answers tied to common searches (<em>Pragmata release date</em>, <em>Pragmata Steam</em>, <em>Pragmata PS5</em>, <em>demo</em>, <em>Deluxe</em>, <em>Switch 2</em>,
          <em>system requirements</em>). For the full list see <a href="/faq">FAQ</a>.
        </p>
        <div class="faq-grid">
          <MechanicalFrame class="faq-card">
            <h3 class="faq-card-q">When is the Pragmata release date?</h3>
            <p class="faq-card-a">
              Steam shows an April 2026 launch with copy that can read as the 16th or 17th depending on region and Capcom’s Early Bird messaging. We keep a living snapshot on
              <a href="/getting-started">getting started</a> and <a href="/getting-started#gs-release-deep">release timeline</a> — your store countdown wins.
            </p>
          </MechanicalFrame>
          <MechanicalFrame class="faq-card">
            <h3 class="faq-card-q">Is Pragmata on Steam, PS5, or Switch 2?</h3>
            <p class="faq-card-a">
              Yes — Capcom lists <strong>Pragmata Steam</strong> (PC), <strong>Pragmata PS5</strong>, Xbox Series X|S, and Switch 2. Platform table above; edition notes on
              <a href="/getting-started#gs-editions">editions</a>.
            </p>
          </MechanicalFrame>
          <MechanicalFrame class="faq-card">
            <h3 class="faq-card-q">What is the Pragmata Sketchbook demo?</h3>
            <p class="faq-card-a">
              <strong>Pragmata demo</strong> / Sketchbook is the playable sample of the duo combat loop. Route, tips, and install notes:
              <a href="/getting-started#gs-sketchbook-demo">demo hub</a>.
            </p>
          </MechanicalFrame>
          <MechanicalFrame class="faq-card">
            <h3 class="faq-card-q">Pragmata Deluxe edition vs Standard?</h3>
            <p class="faq-card-a">
              Deluxe bundles extra outfits, Shelter BGM, gestures, and the data library versus Standard. Side-by-side:
              <a href="/getting-started#gs-editions">Deluxe vs Standard</a>.
            </p>
          </MechanicalFrame>
          <MechanicalFrame class="faq-card">
            <h3 class="faq-card-q">What are Pragmata system requirements on PC?</h3>
            <p class="faq-card-a">
              Steam asks for Windows 11 64-bit, 16 GB RAM, 40 GB storage, and GTX 1660 / RX 5500 XT class GPUs at minimum, scaling up for recommended and RT. Full tables:
              <a href="/getting-started#gs-pc-specs">PC specs</a> and the home specs band above.
            </p>
          </MechanicalFrame>
          <MechanicalFrame class="faq-card">
            <h3 class="faq-card-q">Who is Diana in Pragmata?</h3>
            <p class="faq-card-a">
              <strong>Pragmata Diana</strong> is the android partner handling hacks while Hugh shoots and moves. Role breakdown and story hooks:
              <a href="/characters">characters</a>.
            </p>
          </MechanicalFrame>
        </div>
        <p class="faq-more"><a class="text-link" href="/faq">Browse full FAQ →</a></p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MechanicalFrame from '@/components/MechanicalFrame.vue'
import storefrontFacts from '@/data/storefrontFacts.js'

const MAIN_TRAILER_EMBED = 'https://www.youtube.com/embed/1zZry-G6adI'
const trailerEmbedSrc = `${MAIN_TRAILER_EMBED}?rel=0`
const trailerPlaying = ref(false)

const steamUrl = storefrontFacts.STEAM_PRAGMATA_URL
const releaseLine = storefrontFacts.PRAGMATA_RELEASE_STEAM_LINE
const pcMin = storefrontFacts.PC_SPECS_STEAM.minimum
const pcRec = storefrontFacts.PC_SPECS_STEAM.recommended
</script>

<style scoped>
.home-page {
  padding-bottom: 0;
  overflow-x: hidden;
}

[class^='band-'],
[class*=' band-'] {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

.skip-link {
  position: absolute;
  left: -999px;
  top: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--color-surface-dark);
  color: var(--neon-cyan);
  z-index: 100;
  font-weight: 600;
  border: 1px solid var(--color-border-strong);
}

.skip-link:focus {
  left: 0.5rem;
  outline: 2px solid var(--neon-magenta);
  box-shadow: 0 0 16px rgba(255, 42, 122, 0.5);
}

.hero--cinematic {
  position: relative;
  isolation: isolate;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  display: flex;
  align-items: center;
  padding: clamp(2.75rem, 7vw, 5rem) 0 clamp(3.25rem, 10vw, 6rem);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 44px) 100%, 0 100%);
  border-bottom: 2px solid rgba(57, 240, 255, 0.55);
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.65),
    0 0 48px rgba(57, 240, 255, 0.15);
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-color: #050812;
  background-image: url('/images/bg.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

/* Cinematic letterbox + vignette + readable lower third（单层 ::after，少一层 DOM） */
.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, transparent 28%, transparent 62%, rgba(1, 2, 8, 0.92) 100%),
    linear-gradient(90deg, rgba(0, 0, 0, 0.42) 0%, transparent 18%, transparent 82%, rgba(0, 0, 0, 0.42) 100%),
    radial-gradient(ellipse 95% 70% at 50% 38%, rgba(80, 20, 90, 0.12) 0%, transparent 55%),
    radial-gradient(ellipse 80% 55% at 50% 50%, transparent 0%, rgba(2, 4, 14, 0.5) 100%);
  box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.45);
}

.hero-slant {
  position: absolute;
  top: 1.5rem;
  right: min(10vw, 4.5rem);
  z-index: 3;
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.42em;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  color: var(--neon-magenta);
  text-shadow: 0 0 16px rgba(255, 42, 122, 0.7);
  pointer-events: none;
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-content-panel {
  /* Opaque panel: backdrop-filter on a full-width hero image is very expensive while scrolling */
  background: rgba(3, 6, 16, 0.88);
  border: 1px solid rgba(57, 240, 255, 0.35);
  border-left: 3px solid var(--neon-magenta);
  padding: clamp(1.35rem, 3.5vw, 2.15rem) clamp(1.25rem, 3vw, 2rem);
  box-shadow:
    0 0 0 1px rgba(255, 42, 122, 0.08),
    0 28px 80px rgba(0, 0, 0, 0.55),
    0 0 40px rgba(57, 240, 255, 0.08);
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-copy {
  width: 100%;
  max-width: min(58rem, 100%);
  margin: 0 auto;
  text-align: center;
}

.hud-tag {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.65rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin: 0 0 1rem;
}

.hud-tag-dot {
  width: 6px;
  height: 6px;
  background: var(--neon-cyan);
  flex-shrink: 0;
  box-shadow: 0 0 10px var(--neon-cyan);
  border-radius: 1px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 4.2vw, 2.35rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 1rem;
  line-height: 1.12;
  color: #f0f4ff;
  text-shadow: var(--glow-hero-title);
}

.hero-lead {
  color: var(--color-text-muted);
  max-width: 68ch;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.05rem;
  margin-bottom: 1rem;
  line-height: 1.65;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-bottom: 1rem;
  justify-content: center;
}

.btn-hud-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.15rem;
  background: var(--color-cta);
  color: var(--color-cta-text) !important;
  text-decoration: none !important;
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 24px rgba(255, 42, 122, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
}

.btn-hud-primary:hover {
  background: var(--color-cta-hover);
  transform: translateY(-1px);
  box-shadow: 0 0 32px rgba(255, 42, 122, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.btn-hud-secondary {
  display: inline-flex;
  align-items: center;
  padding: 0.55rem 1rem;
  border: 1px solid rgba(57, 240, 255, 0.55);
  color: var(--neon-cyan) !important;
  text-decoration: none !important;
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: rgba(6, 10, 24, 0.92);
  transition: border-color 0.15s ease, color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
}

.btn-hud-secondary:hover {
  border-color: var(--neon-magenta);
  color: #ffb8d9 !important;
  transform: translate(-2px, -2px);
  box-shadow: 0 0 20px rgba(255, 42, 122, 0.35), 4px 4px 0 rgba(57, 240, 255, 0.25);
}

.tracker-intro {
  color: var(--color-muted);
  font-size: 0.92rem;
  margin: 0 0 1rem;
  max-width: 72ch;
}

.band-telemetry {
  padding: 1.35rem 0;
  border-block: 1px solid rgba(57, 240, 255, 0.25);
  background:
    linear-gradient(90deg, rgba(57, 240, 255, 0.06) 0%, transparent 35%),
    linear-gradient(115deg, #0a0e1c 0%, #120a1a 40%, #0a1422 70%, #140818 100%);
  box-shadow: inset 0 1px 0 rgba(57, 240, 255, 0.08);
}

.telemetry-inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  padding: 0.15rem 0;
}

.telemetry-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.5rem 0.65rem;
  border-left: 3px solid var(--neon-magenta);
  background: rgba(4, 8, 20, 0.55);
  box-shadow: 0 0 16px rgba(57, 240, 255, 0.04);
}

.telemetry-k {
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  color: var(--neon-cyan);
}

.telemetry-v {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-text);
}

.section-heading {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin: 0 0 1.1rem;
  padding-bottom: 0.85rem;
  border-bottom: 2px solid rgba(57, 240, 255, 0.38);
}

.section-heading-kicker {
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--neon-magenta);
}

.section-heading-main {
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 3.2vw, 2rem);
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  line-height: 1.18;
  color: var(--color-text);
  text-shadow: var(--glow-heading-sm);
}

.section-heading-mark {
  color: var(--color-cta);
  margin-right: 0.35rem;
  text-shadow: var(--glow-kicker);
}

.section-intro {
  color: var(--color-muted);
  max-width: 72ch;
  font-size: 0.92rem;
  margin-bottom: 1.25rem;
}

.section-intro--wide {
  max-width: min(88ch, 100%);
  font-size: 0.95rem;
  line-height: 1.65;
}

.band-trailers {
  padding: 3rem 0 3.25rem;
  background:
    radial-gradient(ellipse 80% 60% at 20% 30%, rgba(57, 240, 255, 0.08) 0%, transparent 50%),
    linear-gradient(185deg, #0a0c16 0%, #0e0818 35%, #080c14 100%);
  border-bottom: 1px solid rgba(57, 240, 255, 0.15);
}

.trailers-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.trailers-heading-block {
  width: 100%;
  margin-bottom: 0;
}

.trailers-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
  align-items: start;
  width: 100%;
}

.embed-responsive {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border: 1px solid var(--color-border-strong);
  box-shadow: 0 0 28px rgba(57, 240, 255, 0.1);
}

.embed-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.trailer-facade {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
  background: transparent;
  color: var(--neon-cyan);
}

.trailer-facade:focus {
  outline: none;
}

.trailer-facade:focus-visible {
  outline: 2px solid var(--neon-magenta);
  outline-offset: 3px;
}

.trailer-facade-scrim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(2, 4, 12, 0.55) 0%, rgba(4, 8, 20, 0.78) 50%, rgba(2, 4, 12, 0.88) 100%),
    radial-gradient(ellipse 90% 70% at 50% 45%, rgba(57, 240, 255, 0.08) 0%, transparent 60%);
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.trailer-facade:hover .trailer-facade-scrim {
  opacity: 0.92;
}

.trailer-play-icon {
  position: relative;
  z-index: 1;
  width: clamp(3.25rem, 9vw, 4.5rem);
  height: auto;
  filter: drop-shadow(0 0 14px rgba(57, 240, 255, 0.55)) drop-shadow(0 0 28px rgba(255, 42, 122, 0.2));
  transition: transform 0.2s ease, filter 0.2s ease;
}

.trailer-facade:hover .trailer-play-icon {
  transform: scale(1.06);
  filter: drop-shadow(0 0 20px rgba(57, 240, 255, 0.75)) drop-shadow(0 0 36px rgba(255, 42, 122, 0.28));
}

.trailer-play-ring {
  fill: rgba(6, 10, 24, 0.65);
  stroke: currentColor;
  stroke-width: 2;
}

.trailer-play-triangle {
  fill: currentColor;
}

.trailers-caption {
  margin: 0.65rem 0 0;
  font-size: 0.8rem;
}

.trailers-subh {
  font-family: var(--font-display);
  font-size: 1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0 0 0.75rem;
  color: var(--color-text);
  text-shadow: var(--glow-heading-sm);
}

.band-wiki {
  padding: 3rem 0 3.25rem;
  background:
    radial-gradient(ellipse 120% 80% at 10% 20%, rgba(255, 42, 122, 0.12) 0%, transparent 55%),
    linear-gradient(160deg, #0c0a14 0%, #080a12 100%);
  border-block: 1px solid rgba(255, 42, 122, 0.15);
}

.wiki-tiles {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.wiki-tile {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1.1rem 1.15rem;
  border: 1px solid rgba(57, 240, 255, 0.35);
  background: rgba(8, 10, 22, 0.75);
  text-decoration: none !important;
  color: var(--color-text) !important;
  transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
}

.wiki-tile:hover {
  border-color: var(--neon-magenta);
  box-shadow: 0 0 24px rgba(255, 42, 122, 0.2);
  transform: translate(-2px, -2px);
}

.wiki-tile-icon {
  font-size: 1.25rem;
  color: var(--neon-cyan);
  line-height: 1;
}

.wiki-tile-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.wiki-tile-desc {
  font-size: 0.82rem;
  color: var(--color-muted);
  line-height: 1.45;
}

.band-characters {
  padding: 3rem 0 3.25rem;
  background: linear-gradient(90deg, #060810 0%, #0a1420 45%, #100818 100%);
  border-top: 2px dashed rgba(57, 240, 255, 0.22);
}

.char-compare {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .char-compare {
    grid-template-columns: 1fr;
  }
}

.char-panel {
  --mf-bg: rgba(10, 14, 30, 0.88);
}

.char-panel--feature :deep(.mf-body) {
  padding: 0;
  display: flex;
  flex-direction: column;
}

.char-visual {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(57, 240, 255, 0.28);
  background: linear-gradient(180deg, #0a0e1c 0%, #060810 100%);
}

.char-photo {
  display: block;
  width: 100%;
  height: clamp(200px, 28vw, 340px);
  object-fit: cover;
  object-position: center 20%;
}

.char-panel-body {
  padding: 1.15rem 1.25rem 1.35rem;
}

.char-link {
  font-size: 0.88rem;
}

.hud-label {
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--tech-blue);
  margin: 0 0 0.35rem;
}

.card-h {
  font-size: 1rem;
  margin: 0.35rem 0 0.5rem;
  letter-spacing: 0.04em;
  text-shadow: var(--glow-heading-sm);
}

.card-p {
  font-size: 0.9rem;
  color: var(--color-muted);
  margin-bottom: 0.65rem;
  line-height: 1.6;
}

.seo-em {
  color: var(--neon-cyan);
  font-weight: 700;
}

.sketchbook-note {
  font-size: 0.92rem;
  color: var(--color-text-muted);
  margin: 0;
}

.text-link {
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.band-platforms {
  padding: 3rem 0 3.5rem;
  background:
    linear-gradient(180deg, rgba(255, 42, 122, 0.06) 0%, transparent 45%),
    linear-gradient(125deg, #120818 0%, #0a1018 40%, #081420 100%);
  border-block: 1px solid rgba(255, 42, 122, 0.12);
}

.specs-table-wrap {
  overflow-x: auto;
  margin-bottom: 1.25rem;
}

.specs-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.specs-table th,
.specs-table td {
  border: 1px solid var(--color-border);
  padding: 0.65rem 0.85rem;
  text-align: left;
}

.specs-table thead th {
  background: linear-gradient(90deg, rgba(8, 12, 28, 0.95) 0%, rgba(18, 8, 28, 0.92) 100%);
  color: var(--neon-cyan);
  font-family: var(--font-display);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.specs-caption {
  caption-side: top;
  text-align: left;
  font-size: 0.78rem;
  color: var(--color-muted);
  padding: 0 0 0.65rem;
}

.specs-table th[scope='row'] {
  font-weight: 700;
  color: var(--tech-blue);
  white-space: nowrap;
  width: 7.5rem;
}

.specs-table--pc {
  font-size: 0.82rem;
}

.specs-subtitle {
  font-family: var(--font-display);
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 1.5rem 0 0.65rem;
  color: var(--neon-cyan);
}

.specs-footnote {
  font-size: 0.86rem;
  margin: 0.35rem 0;
  max-width: 72ch;
}

.rumor-callout {
  padding: 1rem 1.15rem;
  margin-bottom: 1.25rem;
  border: 1px dashed rgba(57, 240, 255, 0.35);
  background: rgba(4, 8, 20, 0.45);
  border-radius: 2px;
}

.rumor-title {
  font-family: var(--font-display);
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin: 0 0 0.5rem;
  color: var(--color-cta);
}

.specs-more {
  margin: 0;
  font-size: 0.9rem;
}

.band-faq {
  padding: 3rem 0 3.5rem;
  background-color: #06060c;
  background-image: repeating-linear-gradient(
    -12deg,
    transparent,
    transparent 10px,
    rgba(57, 240, 255, 0.04) 10px,
    rgba(57, 240, 255, 0.04) 11px
  );
  border-top: 2px solid rgba(57, 240, 255, 0.45);
  box-shadow: inset 0 1px 0 rgba(255, 42, 122, 0.08);
}

.faq-deck {
  color: var(--color-muted);
  font-size: 0.92rem;
  max-width: min(85ch, 100%);
  line-height: 1.6;
  margin: 0 0 1.35rem;
}

.faq-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
}

.faq-card :deep(.mf-body) {
  padding: 1.1rem 1.2rem 1.2rem;
}

.faq-card-q {
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--neon-cyan);
  margin: 0 0 0.55rem;
  line-height: 1.35;
  text-shadow: var(--glow-cyan-tight);
}

.faq-card-a {
  margin: 0;
  font-size: 0.88rem;
  color: var(--color-muted);
  line-height: 1.55;
}

.faq-more {
  margin: 1.25rem 0 0;
}

@media (prefers-contrast: more) {
  .hero-title,
  .section-heading,
  .section-heading-main,
  .section-heading-kicker,
  .section-heading-mark,
  .trailers-subh,
  .card-h,
  .faq-card-q {
    text-shadow: none !important;
  }
}

@media (max-width: 1024px) {
  .trailers-grid {
    grid-template-columns: 1fr;
  }
}
</style>
