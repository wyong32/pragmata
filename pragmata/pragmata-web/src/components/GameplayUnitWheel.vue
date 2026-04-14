<template>
  <div class="unit-widget">
    <p class="unit-widget-intro">
      On Capcom’s English gameplay hub, the four <strong>weapon units</strong> sit on a circular dial next to the preview: the page ships
      <strong>vector hit-zones</strong> plus layered WebP art. Below uses the same <strong>SVG geometry</strong> and the same
      <strong>official wheel images</strong> from
      <a href="https://www.capcom-games.com/pragmata/en-us/gameplay/" rel="noopener noreferrer" target="_blank">capcom-games.com/pragmata/…/gameplay</a>
      (English selector art + active overlay). Tap a quadrant to swap the WebM.
    </p>
    <div class="unit-widget-main">
      <div class="unit-widget-video-col">
        <p class="unit-widget-eyebrow">Preview</p>
        <video
          :key="activeId"
          class="unit-widget-video"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          :poster="active.poster"
          :aria-label="active.aria"
        >
          <source :src="active.src" type="video/webm" />
        </video>
        <p class="unit-widget-blurb">{{ active.blurb }}</p>
      </div>

      <div class="unit-wheel-shell" role="radiogroup" aria-label="Weapon unit wheel">
        <!--
          Matches Capcom gameplay bundle: viewBox 0 0 200 200, quarter path
          M100,100 L100,0 A100,100 0 0,1 200,100 Z with rotate(315|45|135|225) about 100,100.
          Base + active art: /pragmata/assets/images/gameplay/video_selector/button_weapons_en.webp
          and button_weapons_active.webp (mirrored under public/).
        -->
        <div class="unit-wheel-frame">
          <div class="unit-wheel-active-layer" :class="activeClipClass" aria-hidden="true" />
          <svg
            class="unit-wheel-svg"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="unitWheelTitle"
          >
            <title id="unitWheelTitle">Weapon units — Primary, Tactical, Defense, Attack</title>
            <g>
              <path
                class="unit-wedge-hit"
                d="M100,100 L100,0 A100,100 0 0,1 200,100 Z"
                transform="rotate(315 100 100)"
                role="radio"
                :aria-checked="activeId === 'primary'"
                tabindex="0"
                @click="activeId = 'primary'"
                @keydown.enter.prevent="activeId = 'primary'"
                @keydown.space.prevent="activeId = 'primary'"
              />
              <path
                class="unit-wedge-hit"
                d="M100,100 L100,0 A100,100 0 0,1 200,100 Z"
                transform="rotate(45 100 100)"
                role="radio"
                :aria-checked="activeId === 'tactical'"
                tabindex="0"
                @click="activeId = 'tactical'"
                @keydown.enter.prevent="activeId = 'tactical'"
                @keydown.space.prevent="activeId = 'tactical'"
              />
              <path
                class="unit-wedge-hit"
                d="M100,100 L100,0 A100,100 0 0,1 200,100 Z"
                transform="rotate(135 100 100)"
                role="radio"
                :aria-checked="activeId === 'defense'"
                tabindex="0"
                @click="activeId = 'defense'"
                @keydown.enter.prevent="activeId = 'defense'"
                @keydown.space.prevent="activeId = 'defense'"
              />
              <path
                class="unit-wedge-hit"
                d="M100,100 L100,0 A100,100 0 0,1 200,100 Z"
                transform="rotate(225 100 100)"
                role="radio"
                :aria-checked="activeId === 'attack'"
                tabindex="0"
                @click="activeId = 'attack'"
                @keydown.enter.prevent="activeId = 'attack'"
                @keydown.space.prevent="activeId = 'attack'"
              />
            </g>
          </svg>
        </div>
        <p class="unit-wheel-hint">Selected: <strong>{{ active.label }}</strong> unit</p>
      </div>
    </div>
    <p class="unit-widget-foot">
      Wheel bitmaps are Capcom’s <code>button_weapons_en.webp</code> + <code>button_weapons_active.webp</code>; interaction paths match their shipped SVG. Preview loops autoplay muted without a control bar.
    </p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const UNITS = [
  {
    id: 'primary',
    label: 'Primary',
    sub: 'Unit',
    src: '/media/gameplay/unit_primari.webm',
    poster: '/images/gameplay/combat_bg_s_en.webp',
    aria: 'Primary weapon unit — combat loop from Capcom English gameplay page',
    blurb: 'Fallback firearm: lighter output, but the kit that refills ammo over time in marketing copy.',
  },
  {
    id: 'attack',
    label: 'Attack',
    sub: 'Unit',
    src: '/media/gameplay/unit_attack.webm',
    poster: '/images/gameplay/combat_bg_s_en.webp',
    aria: 'Attack weapon unit — burst damage loop from Capcom English gameplay page',
    blurb: 'Heavy hitters for the window after Diana exposes a weak point — watch ammo burn before the Shelter refresh.',
  },
  {
    id: 'tactical',
    label: 'Tactical',
    sub: 'Unit',
    src: '/media/gameplay/unit_tactical.webm',
    poster: '/images/gameplay/combat_bg_s_en.webp',
    aria: 'Tactical weapon unit — control loop from Capcom English gameplay page',
    blurb: 'Crowd pins, slows, and spacing tools that buy grid time without ending the fight alone.',
  },
  {
    id: 'defense',
    label: 'Defense',
    sub: 'Unit',
    src: '/media/gameplay/unit_defense.webm',
    poster: '/images/gameplay/combat_bg_s_en.webp',
    aria: 'Defense weapon unit — survival loop from Capcom English gameplay page',
    blurb: 'Decoys, shields, or aggro tricks so Hugh survives while Diana finishes the intrusion line.',
  },
]

const activeId = ref('primary')

const active = computed(() => UNITS.find((u) => u.id === activeId.value) || UNITS[0])

/** Same clip polygons as `.video_selector_controler.active-*` in Capcom CSS (up = primary, etc.). */
const activeClipClass = computed(() => {
  switch (activeId.value) {
    case 'primary':
      return 'unit-wheel-active-layer--up'
    case 'tactical':
      return 'unit-wheel-active-layer--right'
    case 'defense':
      return 'unit-wheel-active-layer--down'
    case 'attack':
      return 'unit-wheel-active-layer--left'
    default:
      return 'unit-wheel-active-layer--up'
  }
})
</script>

<style scoped>
.unit-widget {
  margin-top: 1rem;
}

.unit-widget-intro {
  margin: 0 0 1rem;
  max-width: 72ch;
  font-size: 0.88rem;
  line-height: 1.65;
  color: rgba(175, 188, 218, 0.96);
}

.unit-widget-intro strong {
  color: rgba(230, 236, 252, 0.98);
}

.unit-widget-intro a {
  color: rgba(120, 210, 255, 0.95);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.unit-widget-intro a:hover {
  color: rgba(180, 235, 255, 1);
}

.unit-widget-main {
  display: grid;
  gap: 1.25rem;
  align-items: center;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 340px);
}

@media (max-width: 1024px) {
  .unit-widget-main {
    grid-template-columns: 1fr;
    align-items: start;
  }
}

.unit-widget-video-col {
  border-radius: 4px;
  border: 1px solid rgba(57, 240, 255, 0.22);
  background: rgba(4, 6, 16, 0.92);
  padding: 0.65rem 0.75rem 0.8rem;
}

.unit-widget-eyebrow {
  font-family: var(--font-display);
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 140, 190, 0.95);
  margin: 0 0 0.45rem;
}

.unit-widget-video {
  display: block;
  width: 100%;
  max-height: min(68vh, 480px);
  height: auto;
  border-radius: 3px;
  background: #02040a;
}

.unit-widget-blurb {
  margin: 0.55rem 0 0;
  font-size: 0.78rem;
  line-height: 1.55;
  color: rgba(155, 170, 205, 0.95);
}

/* —— Official wheel: EN WebP + active overlay + Capcom SVG hit paths —— */
.unit-wheel-shell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;
}

.unit-wheel-frame {
  position: relative;
  width: min(100%, 320px);
  max-width: 320px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    url('/images/gameplay/video_selector/button_weapons_en.webp') center / 100% 100% no-repeat;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
  overflow: hidden;
}

.unit-wheel-active-layer {
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: 50%;
  background: url('/images/gameplay/video_selector/button_weapons_active.webp') center / 100% 100%
    no-repeat;
  pointer-events: none;
  animation: unitWheelActiveFlicker 0.1s infinite;
}

@media (prefers-reduced-motion: reduce) {
  .unit-wheel-active-layer {
    animation: none;
  }
}

@keyframes unitWheelActiveFlicker {
  0%,
  100% {
    opacity: 0.95;
  }
  50% {
    opacity: 1;
  }
}

.unit-wheel-active-layer--up {
  clip-path: polygon(50% 50%, 0 0, 100% 0);
}

.unit-wheel-active-layer--right {
  clip-path: polygon(50% 50%, 100% 0, 100% 100%);
}

.unit-wheel-active-layer--down {
  clip-path: polygon(50% 50%, 100% 100%, 0 100%);
}

.unit-wheel-active-layer--left {
  clip-path: polygon(50% 50%, 0 100%, 0 0);
}

.unit-wheel-svg {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.unit-wedge-hit {
  fill: rgba(0, 0, 0, 0);
  cursor: pointer;
}

.unit-wedge-hit:focus {
  outline: none;
}

.unit-wedge-hit:focus-visible {
  stroke: rgba(57, 240, 255, 0.85);
  stroke-width: 3;
}

.unit-wheel-hint {
  margin: 0;
  font-size: 0.72rem;
  color: rgba(160, 175, 210, 0.95);
  text-align: center;
}

.unit-wheel-hint strong {
  color: rgba(230, 236, 252, 0.98);
}

.unit-widget-foot {
  margin: 0.75rem 0 0;
  font-size: 0.7rem;
  line-height: 1.45;
  color: rgba(130, 145, 180, 0.88);
  max-width: 72ch;
}

.unit-widget-foot code {
  font-size: 0.85em;
  color: rgba(160, 175, 210, 0.95);
}
</style>
