<template>
  <footer class="app-footer" role="contentinfo">
    <div class="container">
      <div class="app-footer-content">
        <div class="app-footer-brand">
          <div class="app-footer-brand-row">
            <img class="app-footer-logo" src="/images/logo.png" width="40" height="40" alt="" decoding="async" />
            <p class="app-footer-title">PRAGMATA Guide</p>
          </div>
          <p class="app-footer-disclaimer">
            The most complete dedicated PRAGMATA guide hub we maintain — release tracking, wiki, characters, gameplay, and storefront-ready context. We refresh against Capcom and first-party stores as
            listings evolve.
          </p>
        </div>
        <div class="app-footer-columns">
          <div class="app-footer-col">
            <p class="app-footer-heading">Quick links</p>
            <ul class="app-footer-list">
              <li><a href="/" :class="{ 'router-link-active': route.path === '/' }">HOME</a></li>
              <li>
                <a
                  href="/getting-started"
                  :class="{ 'app-footer-link--active': isGettingStartedFooterActive }"
                  >GET STARTED</a>
              </li>
              <li>
                <a href="/characters" :class="{ 'router-link-active': route.path.startsWith('/characters') }">CHARACTERS</a>
              </li>
              <li>
                <a href="/gameplay" :class="{ 'router-link-active': route.path.startsWith('/gameplay') }">GAMEPLAY</a>
              </li>
              <li>
                <a href="/wiki" :class="{ 'router-link-active': route.path.startsWith('/wiki') }">WIKI</a>
              </li>
              <li>
                <a href="/guides" :class="{ 'router-link-active': route.path.startsWith('/guides') }">GUIDES</a>
              </li>
              <li>
                <a
                  href="/getting-started#gs-editions"
                  :class="{ 'app-footer-link--active': isEditionsFooterActive }"
                  >EDITIONS</a>
              </li>
            </ul>
          </div>
          <div class="app-footer-col">
            <p class="app-footer-heading">Legal</p>
            <ul class="app-footer-list">
              <li><a href="/about" rel="nofollow" :class="{ 'router-link-active': route.path === '/about' }">ABOUT</a></li>
              <li><a href="/contact" rel="nofollow" :class="{ 'router-link-active': route.path === '/contact' }">CONTACT</a></li>
              <li>
                <a href="/privacy-policy" rel="nofollow" :class="{ 'router-link-active': route.path === '/privacy-policy' }">PRIVACY POLICY</a>
              </li>
              <li>
                <a href="/terms-of-service" rel="nofollow" :class="{ 'router-link-active': route.path === '/terms-of-service' }">TERMS OF SERVICE</a>
              </li>
              <li><a href="/copyright" rel="nofollow" :class="{ 'router-link-active': route.path === '/copyright' }">COPYRIGHT</a></li>
            </ul>
          </div>
        </div>
        <div class="app-footer-meta">
          <p class="app-footer-copy">© {{ year }} pragmatagame.org. All trademarks belong to their respective owners.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const year = new Date().getFullYear()
const route = useRoute()

const isGettingStartedFooterActive = computed(
  () => route.path === '/getting-started' && route.hash !== '#gs-editions',
)
const isEditionsFooterActive = computed(
  () => route.path === '/getting-started' && route.hash === '#gs-editions',
)
</script>

<style scoped>
.app-footer {
  margin-top: 4rem;
  padding: 3rem 0;
  border-top: 1px solid rgba(57, 240, 255, 0.25);
  background:
    linear-gradient(180deg, rgba(255, 42, 122, 0.04) 0%, transparent 40%),
    linear-gradient(180deg, #080a14 0%, #05060c 100%);
  box-shadow: 0 -12px 40px rgba(0, 0, 0, 0.35);
}

.app-footer-content {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.4fr 1fr;
  align-items: start;
}

.app-footer-brand {
  max-width: 36rem;
}

.app-footer-brand-row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.75rem;
}

.app-footer-logo {
  display: block;
  width: 60px;
  height: 60px;
  object-fit: contain;
  flex-shrink: 0;
}

.app-footer-title {
  font-family: var(--font-display);
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0;
  color: var(--color-text);
  text-shadow: var(--glow-heading-sm);
}

.app-footer-disclaimer {
  color: var(--color-muted);
  font-size: 0.9rem;
  margin: 0;
}

.app-footer-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.app-footer-heading {
  font-family: var(--font-display);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--tech-blue);
  margin: 0 0 0.35rem;
  text-shadow: var(--glow-cyan-tight);
}

.app-footer-col .app-footer-heading:not(:first-child) {
  margin-top: 1rem;
}

.app-footer-list {
  list-style: none;
  padding: 0;
  margin: 0 0 0.5rem;
}

.app-footer-list li {
  margin-bottom: 0.35rem;
}

.app-footer-list a {
  font-size: 0.88rem;
  color: var(--color-muted);
  text-decoration: none;
}

.app-footer-list a:hover,
.app-footer-list a.router-link-active,
.app-footer-list a.app-footer-link--active {
  color: var(--color-cta);
}

.app-footer-meta {
  grid-column: 1 / -1;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(57, 240, 255, 0.12);
}

.app-footer-copy {
  margin: 0;
  font-size: 0.8rem;
  color: var(--color-dim);
}

@media (max-width: 768px) {
  .app-footer-content {
    grid-template-columns: 1fr;
  }

  .app-footer-columns {
    grid-template-columns: 1fr;
  }

  .app-footer-logo {
    width: 34px;
    height: 34px;
  }

  .app-footer-title {
    font-size: 0.82rem;
    letter-spacing: 0.12em;
  }
}

@media (prefers-contrast: more) {
  .app-footer-title,
  .app-footer-heading {
    text-shadow: none;
  }
}
</style>
