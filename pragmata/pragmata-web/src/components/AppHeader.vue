<template>
  <header class="app-header" role="banner">
    <div class="container app-header-inner">
      <a class="app-logo" href="/" aria-label="PRAGMATA game guide home">
        <img class="app-logo-mark" src="/images/logo.png" width="36" height="36" alt="" decoding="async" />
        <span class="app-logo-text">PRAGMATA Guide</span>
      </a>

      <button
        v-show="navCompact"
        type="button"
        class="nav-link nav-details-summary"
        aria-label="Open or close menu"
        :aria-expanded="burgerOpen"
        aria-controls="app-site-nav"
        @click="burgerOpen = !burgerOpen"
      >
        <span class="nav-details-summary-text" aria-hidden="true">☰</span>
      </button>

      <nav
        v-show="!navCompact || burgerOpen"
        id="app-site-nav"
        ref="appNavWrapRef"
        class="app-nav-wrap"
        :class="{ 'nav-details-panel': navCompact }"
        aria-label="Site"
      >
        <ul class="app-nav-list" @click.capture="onNavListClick">
          <li>
            <a
              class="nav-link"
              href="/"
              title="Home"
              :class="{ 'router-link-active': route.path === '/' }"
              >HOME</a>
          </li>
          <li class="nav-sep" aria-hidden="true" />
          <li>
            <a
              href="/getting-started"
              class="nav-link"
              :class="{ 'nav-link--active': isGettingStartedNavActive }"
              title="Getting Started — editions, demo, PC specs"
              >GET STARTED</a>
          </li>
          <li class="nav-dropdown-li">
            <details
              ref="charactersDetailsRef"
              class="nav-details"
              :class="{ 'nav-details--open-section': isCharactersSection }"
              @toggle="onCharactersDetailsToggle"
            >
              <summary
                ref="charactersSummaryRef"
                class="nav-link nav-details-summary"
                title="Characters — Diana, Hugh"
                aria-haspopup="menu"
                :aria-expanded="charactersMenuOpen"
                aria-controls="characters-nav-panel"
              >
                <span class="nav-details-summary-text">CHARACTERS</span>
                <span class="nav-details-chevron" aria-hidden="true" />
              </summary>
            </details>
          </li>
          <li>
            <a
              class="nav-link"
              href="/gameplay"
              title="Gameplay — combat, equipment"
              :class="{ 'router-link-active': route.path.startsWith('/gameplay') }"
              >GAMEPLAY</a>
          </li>
          <li>
            <a
              class="nav-link"
              href="/wiki"
              title="Wiki — world, lore"
              :class="{ 'router-link-active': route.path.startsWith('/wiki') }"
              >WIKI</a>
          </li>
          <li>
            <a
              class="nav-link"
              href="/guides"
              title="Guides — topic list"
              :class="{ 'router-link-active': route.path.startsWith('/guides') }"
              >GUIDES</a>
          </li>
          <li>
            <a
              href="/getting-started#gs-editions"
              class="nav-link"
              :class="{ 'nav-link--active': isEditionsNavActive }"
              title="Editions — Deluxe vs Standard (on Getting started)"
              >EDITIONS</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- 挂到 #app 内、与 header/main 同级堆叠：z 低于 .app-header(200)、高于 #main-content(1)，避免盖住侧栏 -->
    <Teleport to="#app">
      <div
        v-show="navCompact && burgerOpen"
        role="presentation"
        aria-hidden="true"
        style="position: fixed; inset: 0; z-index: 50; background: rgba(4, 6, 16, 0.72); pointer-events: auto"
        @click="burgerOpen = false"
      />
    </Teleport>

    <!-- Portal: avoids nav mask + overflow stacking; no window capture scroll (prevents jitter) -->
    <Teleport to="body">
      <ul
        v-show="charactersMenuOpen"
        id="characters-nav-panel"
        class="nav-details-panel nav-details-panel--portal"
        role="list"
        :style="charactersPanelStyle"
      >
        <li>
          <a
            class="nav-details-link"
            href="/characters/diana"
            title="Diana — D-I-0336-7 profile"
            :class="{ 'router-link-active': route.path === '/characters/diana' }"
            >Diana</a>
        </li>
        <li>
          <a
            class="nav-details-link"
            href="/characters/hugh"
            title="Hugh Williams — EVA profile"
            :class="{ 'router-link-active': route.path === '/characters/hugh' }"
            >Hugh</a>
        </li>
      </ul>
    </Teleport>
  </header>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const winW = ref(typeof window !== 'undefined' ? window.innerWidth : 1600)
const navCompact = computed(() => winW.value <= 1024)
const burgerOpen = ref(false)

function handleWinResize() {
  winW.value = window.innerWidth
}

function onDocKeydown(ev) {
  if (ev.key === 'Escape' && navCompact.value && burgerOpen.value) {
    burgerOpen.value = false
  }
}

function onNavListClick(ev) {
  if (!navCompact.value || !burgerOpen.value) return
  const el = ev.target
  if (!(el instanceof HTMLElement)) return
  if (el.closest('a[href]')) burgerOpen.value = false
}

const appNavWrapRef = ref(null)
const charactersDetailsRef = ref(null)
const charactersSummaryRef = ref(null)
const charactersMenuOpen = ref(false)
const charactersPanelStyle = ref({})
const isCharactersSection = computed(() => route.path.startsWith('/characters'))

/** Same path `/getting-started` matches both links in vue-router; split by hash so only one is “current”. */
const isGettingStartedNavActive = computed(
  () => route.path === '/getting-started' && route.hash !== '#gs-editions',
)
const isEditionsNavActive = computed(
  () => route.path === '/getting-started' && route.hash === '#gs-editions',
)

const PANEL_MIN_PX = 176
const VIEWPORT_PAD = 8

let panelRaf = 0

function updateCharactersPanelPosition() {
  const details = charactersDetailsRef.value
  const summary = charactersSummaryRef.value
  if (!charactersMenuOpen.value || !details?.open || !summary) {
    charactersPanelStyle.value = {}
    return
  }
  const r = summary.getBoundingClientRect()
  const vw = window.innerWidth
  const panelW = Math.max(PANEL_MIN_PX, r.width + 96)
  let left = r.right - panelW
  if (left < VIEWPORT_PAD) left = VIEWPORT_PAD
  if (left + panelW > vw - VIEWPORT_PAD) {
    left = Math.max(VIEWPORT_PAD, vw - VIEWPORT_PAD - panelW)
  }
  charactersPanelStyle.value = {
    position: 'fixed',
    top: `${Math.round(r.bottom + 6)}px`,
    left: `${Math.round(left)}px`,
    width: `${Math.round(panelW)}px`,
    right: 'auto',
    zIndex: '10000',
  }
}

function schedulePanelPosition() {
  cancelAnimationFrame(panelRaf)
  panelRaf = requestAnimationFrame(() => {
    panelRaf = 0
    updateCharactersPanelPosition()
  })
}

function teardownCharactersPanelListeners() {
  window.removeEventListener('resize', schedulePanelPosition)
  appNavWrapRef.value?.removeEventListener('scroll', schedulePanelPosition)
  cancelAnimationFrame(panelRaf)
  panelRaf = 0
}

function onCharactersDetailsToggle(ev) {
  const d = ev.target
  if (!(d instanceof HTMLDetailsElement)) return
  charactersMenuOpen.value = d.open
  if (d.open) {
    teardownCharactersPanelListeners()
    nextTick(() => {
      schedulePanelPosition()
      window.addEventListener('resize', schedulePanelPosition)
      appNavWrapRef.value?.addEventListener('scroll', schedulePanelPosition, { passive: true })
    })
  } else {
    teardownCharactersPanelListeners()
    charactersPanelStyle.value = {}
  }
}

watch(
  () => route.fullPath,
  () => {
    teardownCharactersPanelListeners()
    charactersPanelStyle.value = {}
    charactersMenuOpen.value = false
    const el = charactersDetailsRef.value
    if (el && 'open' in el) {
      el.open = false
    }
    burgerOpen.value = false
  },
)

watch(navCompact, (compact) => {
  if (!compact) burgerOpen.value = false
})

watch([burgerOpen, navCompact], () => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = navCompact.value && burgerOpen.value ? 'hidden' : ''
})

watch(burgerOpen, (open) => {
  if (open) return
  const el = charactersDetailsRef.value
  if (el && 'open' in el) el.open = false
  charactersMenuOpen.value = false
  charactersPanelStyle.value = {}
  teardownCharactersPanelListeners()
})

onMounted(() => {
  handleWinResize()
  window.addEventListener('resize', handleWinResize)
  window.addEventListener('keydown', onDocKeydown)
})

onUnmounted(() => {
  teardownCharactersPanelListeners()
  window.removeEventListener('resize', handleWinResize)
  window.removeEventListener('keydown', onDocKeydown)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 200;
  /* Solid bar: sticky + backdrop-blur forces costly full-layer reads on every scroll frame */
  background: linear-gradient(180deg, rgba(6, 8, 16, 0.97) 0%, rgba(6, 8, 16, 0.94) 100%);
  border-bottom: 1px solid rgba(57, 240, 255, 0.28);
  box-shadow:
    0 0 24px rgba(57, 240, 255, 0.08),
    0 1px 0 rgba(255, 42, 122, 0.12);
}

.app-header-inner {
  display: flex;
  align-items: center;
  gap: 0.75rem 1rem;
  min-height: 4.35rem;
  flex-wrap: nowrap;
}

.app-logo {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
  flex-shrink: 0;
  text-decoration: none !important;
  line-height: 1.15;
}

.app-logo-mark {
  display: block;
  width: 60px;
  height: 60px;
  object-fit: contain;
  flex-shrink: 0;
}

.app-logo-text {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-text);
  text-shadow: var(--glow-heading-sm);
  white-space: nowrap;
}

.app-nav-wrap {
  flex: 1;
  min-width: 0;
  display: flex;
  justify-content: flex-end;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
  scrollbar-color: var(--neon-magenta) rgba(57, 240, 255, 0.08);
  /* Fade only under the logo (left); full opacity on the right so the last tab’s border/glow isn’t clipped */
  mask-image: linear-gradient(90deg, transparent, #000 16px, #000 100%);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 16px, #000 100%);
}

/* Fade mask can affect painting of in-flow descendants; not needed while menu is open */
.app-nav-wrap:has(.nav-details[open]) {
  mask-image: none;
  -webkit-mask-image: none;
}

.app-nav-wrap::-webkit-scrollbar {
  height: 4px;
}

.app-nav-wrap::-webkit-scrollbar-thumb {
  background: var(--color-cta);
  border-radius: 2px;
}

.app-nav-list {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0 0.2rem;
  list-style: none;
  margin: 0;
  padding: 0.15rem 10px 0.15rem 0;
  width: max-content;
}

.nav-sep {
  width: 1px;
  height: 14px;
  background: linear-gradient(180deg, transparent, var(--neon-cyan), transparent);
  margin: 0 0.35rem;
  flex-shrink: 0;
  opacity: 0.6;
}

.nav-link {
  flex-shrink: 0;
  padding: 0.45rem 0.5rem;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text) !important;
  text-decoration: none !important;
  border: 1px solid transparent;
  line-height: 1.2;
  transition:
    color 0.12s ease,
    border-color 0.12s ease;
}

.nav-link--utility {
  color: var(--color-muted) !important;
}

.nav-link:hover,
.nav-link.router-link-active,
.nav-link.nav-link--active {
  color: var(--color-cta) !important;
}

.nav-link.router-link-active,
.nav-link.nav-link--active {
  border-color: rgba(57, 240, 255, 0.45);
  background: rgba(57, 240, 255, 0.08);
  box-shadow: 0 0 12px rgba(57, 240, 255, 0.15);
}

.nav-dropdown-li {
  position: relative;
  flex-shrink: 0;
}

.nav-details {
  position: relative;
}

/* summary 有 UA 默认粗体/字号；显式对齐其它 .nav-link */
.nav-details-summary.nav-link {
  list-style: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex-shrink: 0;
  text-align: start;
  -webkit-tap-highlight-color: transparent;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.2;
}

.nav-details-summary-text {
  white-space: nowrap;
}

.nav-details-chevron {
  flex-shrink: 0;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid currentColor;
  opacity: 0.72;
  margin-top: 1px;
  transition: transform 0.18s ease, opacity 0.15s ease;
}

.nav-details[open] .nav-details-chevron {
  transform: rotate(180deg);
  opacity: 0.95;
}

.nav-details-summary::-webkit-details-marker {
  display: none;
}

.nav-details-summary::marker {
  content: '';
}

.nav-details-summary:hover,
.nav-details[open] .nav-details-summary {
  color: var(--color-cta) !important;
}

.nav-details--open-section .nav-details-summary {
  border-color: rgba(57, 240, 255, 0.45);
  background: rgba(57, 240, 255, 0.08);
  box-shadow: 0 0 12px rgba(57, 240, 255, 0.15);
  color: var(--color-cta) !important;
}

.nav-details-panel {
  margin: 0;
  padding: 0.35rem 0;
  list-style: none;
  background: linear-gradient(165deg, rgba(10, 14, 28, 0.98) 0%, rgba(5, 7, 16, 0.99) 100%);
  border: 1px solid rgba(57, 240, 255, 0.35);
  box-shadow:
    0 12px 36px rgba(0, 0, 0, 0.45),
    0 0 20px rgba(57, 240, 255, 0.12);
}

.nav-details-panel--portal {
  z-index: 10000;
}

.nav-details-link {
  display: block;
  padding: 0.55rem 1rem;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text) !important;
  text-decoration: none !important;
  border-left: 3px solid transparent;
  transition:
    color 0.12s ease,
    border-color 0.12s ease,
    background 0.12s ease;
}

.nav-details-link:hover {
  color: var(--color-cta) !important;
  background: rgba(57, 240, 255, 0.06);
}

.nav-details-link.router-link-active {
  color: var(--color-cta) !important;
  border-left-color: var(--neon-magenta);
  background: rgba(57, 240, 255, 0.08);
}

@media (max-width: 1024px) {
  /* <button> 否则会用系统浅色底（尤其 iOS / Windows），与深色顶栏冲突 */
  .app-header-inner > button.nav-details-summary {
    margin-left: auto;
    flex-shrink: 0;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    font: inherit;
    margin-block: 0;
    margin-inline-start: auto;
    margin-inline-end: 0;
    color: var(--color-text) !important;
    background: rgba(6, 8, 16, 0.55);
    border: 1px solid rgba(57, 240, 255, 0.38);
    border-radius: 2px;
    padding: 0.45rem 0.55rem;
    box-shadow: none;
  }

  .app-header-inner > button.nav-details-summary:hover {
    color: var(--color-cta) !important;
    background: rgba(57, 240, 255, 0.1);
    border-color: rgba(57, 240, 255, 0.55);
  }

  .app-header-inner > button.nav-details-summary[aria-expanded='true'] {
    color: var(--color-cta) !important;
    background: rgba(57, 240, 255, 0.12);
    border-color: rgba(57, 240, 255, 0.5);
    box-shadow: 0 0 12px rgba(57, 240, 255, 0.12);
  }

  .app-header-inner > button.nav-details-summary:focus-visible {
    outline: 2px solid rgba(57, 240, 255, 0.65);
    outline-offset: 2px;
  }

  /* 部分环境按钮内文字/符号会落成深色，与顶栏对比不足 */
  .app-header-inner > button.nav-details-summary .nav-details-summary-text {
    color: rgba(240, 244, 255, 0.92);
  }

  .app-header-inner .app-nav-wrap {
    position: fixed;
    top: 4.35rem;
    right: 0;
    bottom: 0;
    width: min(20.5rem, 100vw);
    max-width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0;
    flex: none;
    mask-image: none;
    -webkit-mask-image: none;
    z-index: 250;
    box-shadow: -10px 0 36px rgba(0, 0, 0, 0.5);
    justify-content: flex-start;
  }

  .app-nav-wrap .app-nav-list {
    flex-direction: column;
    align-items: stretch;
    flex-wrap: nowrap;
    width: 100%;
    max-width: 100%;
    padding: 0.75rem 0.5rem 1.25rem;
    gap: 0.1rem 0;
  }

  .app-nav-wrap .nav-sep {
    display: none;
  }

  .app-nav-wrap .nav-dropdown-li {
    width: 100%;
  }

  .app-nav-wrap .nav-details {
    width: 100%;
  }

  .app-nav-wrap .nav-details-summary.nav-link {
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
  }

  .app-nav-wrap a.nav-link:not(.nav-details-summary) {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  .app-logo-text {
    font-size: 0.72rem;
    letter-spacing: 0.1em;
  }

  .app-logo-mark {
    width: 32px;
    height: 32px;
  }

  .app-header-inner .app-nav-wrap {
    width: min(100vw, 22rem);
  }

  .app-nav-wrap .nav-link,
  .app-nav-wrap .nav-details-summary.nav-link {
    font-size: 0.72rem;
    padding: 0.55rem 0.6rem;
  }
}

@media (prefers-contrast: more) {
  .app-logo-text {
    text-shadow: none;
  }
}
</style>
