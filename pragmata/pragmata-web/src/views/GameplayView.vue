<template>
  <div class="gp-page">
    <div class="container gp-inner">
      <header class="gp-header">
        <nav class="gp-bc" aria-label="Breadcrumb">
          <a class="gp-bc-a" href="/">Home</a>
          <span class="gp-bc-sep" aria-hidden="true">/</span>
          <span class="gp-bc-here">Gameplay</span>
        </nav>
        <p class="gp-kicker">PRAGMATA · sci-fi action adventure</p>
        <h1 class="gp-title">PRAGMATA gameplay — combat, hacking &amp; exploration</h1>
        <p class="gp-lead">
          This guide explains how <strong>PRAGMATA</strong> plays as a third-person <strong>sci-fi action adventure</strong> built around two protagonists:
          <a class="gp-inline-a" href="/characters/hugh">Hugh Williams</a> (EVA specialist, gunplay, thrusters) and
          <a class="gp-inline-a" href="/characters/diana">Diana</a> (<strong>D-I-0336-7</strong>, Pragmata-class android,
          <strong>Lunafilament</strong>-style <strong>hacking</strong> and <strong>intrusion</strong> puzzles). You clear a hostile <strong>lunar research base</strong> by alternating
          <strong>shooting</strong>, <strong>decode</strong>-style grid routes, and <strong>exploration</strong> beats — then return to the <strong>Shelter</strong> hub to upgrade gear.
        </p>
        <p class="gp-lead">
          Marketing and the <a class="gp-inline-a" href="/getting-started#gs-sketchbook-demo">Sketchbook demo</a> established the core fantasy:
          <strong>Hugh and Diana</strong> are stronger together — one opens defenses, the other converts openings into damage or progress. Final names, node rules, and tuning belong to the shipping build on
          <strong>PlayStation 5</strong>, <strong>Xbox Series X|S</strong>, <strong>Steam</strong>, and <strong>Nintendo Switch 2</strong>. For storefront noise, editions, and the demo path, pair this page with
          <a class="gp-inline-a" href="/getting-started">getting started</a>; for topic-style how-tos, see <a class="gp-inline-a" href="/guides">guides</a>.
        </p>

        <div class="gp-top-figures" aria-label="Gameplay stills">
          <figure class="gp-figure">
            <img src="/images/gameplay/combat_bg_s_en.webp" width="800" height="450" alt="PRAGMATA — combat scene still (EN)" loading="eager" decoding="async" />
            <figcaption>Hacking and action — combat still (EN promotional art).</figcaption>
          </figure>
          <figure class="gp-figure">
            <img src="/images/gameplay/exploration_bg_s_en.webp" width="800" height="450" alt="PRAGMATA — lunar base exploration still (EN)" loading="eager" decoding="async" />
            <figcaption>Exploration and traversal — environment still (EN promotional art).</figcaption>
          </figure>
        </div>
      </header>

      <section class="gp-panel" aria-labelledby="gp-overview">
        <h2 id="gp-overview">How the gameplay loop fits together</h2>
        <p>
          At a high level, <strong>PRAGMATA gameplay</strong> is a repeating loop: read the room as Hugh, stabilize space with aim and movement, let Diana start or finish an
          <strong>intrusion</strong>, then cash in with the right firearm or traversal tool. Outside fights you still solve station security — the same characters, different puzzle grammar — so
          <strong>exploration</strong> never fully disconnects from <strong>combat design</strong>. When you want lore next to systems, the <a class="gp-inline-a" href="/wiki">wiki index</a>
          branches into world, factions, and hostiles without duplicating every mechanic paragraph here.
        </p>
        <ol class="gp-steps">
          <li>
            <strong>Establish control.</strong> Hugh’s <strong>third-person</strong> camera, dodge spacing, and <strong>thrusters</strong> set whether you can safely open a hack panel or need to kite
            first.
          </li>
          <li>
            <strong>Break armor with Diana.</strong> Many <strong>robot enemies</strong> wear reinforced plating. Diana’s <strong>hacking panel</strong> asks for a continuous path across the grid to a
            <strong>green end node</strong>; completing that pattern forces armor off and reveals a <strong>weak point</strong> window for Hugh.
          </li>
          <li>
            <strong>Spend the opening.</strong> While the target is exposed, Hugh’s <strong>weapon loadout</strong> delivers burst damage. Some encounters invert the order — e.g. red shielding that must be
            stripped by sustained fire before a hack can land — so the loop is “shoot ↔ hack,” not always “hack first.”
          </li>
          <li>
            <strong>Reset at the Shelter.</strong> The <strong>Shelter</strong> is your breathing hub: heal, craft or print options where the game allows, swap <strong>attack / tactical / defense</strong>
            tools, and pick your next route via <strong>escape hatches</strong> and fast travel spines such as the <strong>tram</strong> shown in previews.
          </li>
        </ol>
      </section>

      <section class="gp-panel" aria-labelledby="gp-combat">
        <h2 id="gp-combat">Combat system — Hacking and Action</h2>
        <p>
          Official messaging frames combat as two synchronized layers: <strong>Hacking</strong> (<a class="gp-inline-a" href="/characters/diana">Diana</a> reads and rewrites machine logic)
          and <strong>Action</strong> (<a class="gp-inline-a" href="/characters/hugh">Hugh</a> answers threats with firearms and suit mobility). When bullets alone stall,
          <strong>Diana’s intrusion</strong> is how you turn a stalemate into a damage phase — especially against <strong>armored</strong> units that ignore chip damage until their grid puzzle is solved.
        </p>
        <h3>Intrusion matrix and nodes</h3>
        <p>
          The <strong>intrusion matrix</strong> behaves like a stylus-friendly path puzzle: you drag a single stroke through valid tiles toward a <strong>green goal node</strong>. Trail quality matters
          because <strong>blue nodes</strong> along the route can amplify intrusion payoff — higher <strong>intrusion damage</strong>, longer lock duration, or stronger debuffs — without forcing you to
          collect every optional tile. Under pressure, the skill is judging how greedy the path can be while Hugh survives incoming fire, grabs aggro, or clears adds. If you want a browser-side line-drawing
          toy to rehearse the gesture (not the shipped minigame), Capcom’s
          <a
            class="gp-inline-a"
            href="https://www.capcom-games.com/pragmata/en-us/gameplay/"
            rel="noopener noreferrer"
            target="_blank"
            >English gameplay hub</a>
          hosts the official Hacking Minigame demo in the browser.
        </p>
        <p class="gp-callout">
          <strong>Player tip:</strong> Treat blue detours as risk/reward branches. If an elite is winding up a punish, a shorter safe line that still reaches green may beat a maximal blue sweep.
        </p>
        <figure class="gp-figure gp-figure--center gp-figure--minigame">
          <img
            src="/images/gameplay/hacking-minigame-en.png"
            width="1200"
            height="675"
            alt="PRAGMATA website — Hacking Minigame: PLAY with sound on or off, grid puzzle, and D-pad controls (English UI)"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Hacking Minigame as shown on the English gameplay page — “Get a feel for the Hacking mechanics ahead of playing the game.” Retail UI may differ.
          </figcaption>
        </figure>
        <h3>Yellow hacking nodes and buildcraft</h3>
        <p>
          <strong>Yellow intrusion nodes</strong> are modifier hooks: connect them during a hack to trigger swing effects such as defense down, spread hacks to multiple targets, or setup for follow-up
          knockdowns — wording varies by trailer and region. As the campaign advances, you unlock more <strong>weapon varieties</strong> and more node types, which pushes <strong>PRAGMATA</strong> toward
          honest buildcraft rather than a single optimal route every fight.
        </p>
        <figure class="gp-figure gp-figure--center gp-figure--video-narrow">
          <video
            class="gp-video"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
            poster="/images/gameplay/combat_bg_s_en.webp"
            aria-label="Yellow hacking node — looping clip from Capcom English gameplay page"
          >
            <source src="/media/gameplay/haking_node.webm" type="video/webm" />
          </video>
          <figcaption>Motion reference for yellow hacking nodes — short loop mirrored from the English gameplay page (local file).</figcaption>
        </figure>
        <h3>Weapon varieties Hugh can carry</h3>
        <p>
          Hugh’s kit is organized into four practical families (labels differ slightly between English and Japanese materials): a always-available <strong>primary</strong> style firearm, a heavier
          <strong>attack</strong> option for burst windows, a <strong>tactical</strong> tool for control, and a <strong>defense</strong> or survival trick that buys Diana time on the grid. High-impact
          guns can <strong>break or exhaust</strong> once their ammo pool empties, so pacing bursts around Diana’s openings is part of mastery — the basic weapon remains the fallback that can recover
          ammunition on its own in marketing descriptions.
        </p>
        <GameplayUnitWheel />
        <h3>Environmental pressure — barriers and missiles</h3>
        <p>
          Pre-release footage also highlights interaction puzzles beyond bots: <strong>red barriers</strong> that gate hacks until Hugh shreds them, and projectile threats (including missiles) that
          reward either perfect spacing or a timely redirect if the narrative systems allow Diana to flip a round mid-flight. Treat those beats as punctuation on the core <strong>hack-then-shoot</strong>
          cadence rather than separate mini-games.
        </p>
      </section>

      <section class="gp-panel" aria-labelledby="gp-explore">
        <h2 id="gp-explore">Exploration — thrusters, station hacks, escape hatches</h2>
        <p>
          <strong>Lunar base exploration</strong> leans on the same partnership: Hugh’s <strong>thrusters</strong> handle verticality, long jumps, and micro repositioning across gantries and broken
          corridors, while Diana performs <strong>hack the station</strong> interactions to unlock doors, reroute power, or open maintenance shortcuts. Watch the <strong>thruster gauge</strong> so you do
          not stall mid-gap — previews emphasize readable UI for fuel because air control is part of puzzle solving, not just combat flair. The <a class="gp-inline-a" href="/wiki/world">world primer</a>
          spells out the station fantasy if you prefer setting before route optimization.
        </p>
        <p>
          <strong>Hack the station</strong> puzzles intentionally diverge from combat boards: slower reads, different failure rules, and less constant gunfire. They exist to sell Diana as a living
          interface to the facility, not only a combat debuff bot.
        </p>
        <div class="gp-pair-figures" aria-label="Station exploration art">
          <figure class="gp-figure">
            <img src="/images/gameplay/topic_hacking_facility.webp" width="640" height="400" alt="Diana hacking facility systems — promotional art" loading="lazy" decoding="async" />
            <figcaption>Hack the station — facility systems (promotional art).</figcaption>
          </figure>
          <figure class="gp-figure">
            <img src="/images/gameplay/topic_escape_hatch.webp" width="640" height="400" alt="Escape hatch — promotional art" loading="lazy" decoding="async" />
            <figcaption>Escape hatches and return routes (promotional art).</figcaption>
          </figure>
        </div>
        <div class="gp-showcase gp-showcase--explore" aria-label="Thruster and escape hatch loops">
          <div class="gp-video-card">
            <p class="gp-showcase-eyebrow">Thrusters</p>
            <video
              class="gp-video"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              poster="/images/gameplay/exploration_bg_s_en.webp"
              aria-label="Thruster traversal loop from Capcom English gameplay page"
            >
              <source src="/media/gameplay/thruster.webm" type="video/webm" />
            </video>
            <p class="gp-showcase-caption">Thruster traversal clip — same loop used on the English gameplay hub (hosted locally).</p>
          </div>
          <div class="gp-video-card">
            <p class="gp-showcase-eyebrow">Escape hatch</p>
            <video
              class="gp-video"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              poster="/images/gameplay/topic_escape_hatch.webp"
              aria-label="Escape hatch fast travel loop from Capcom English gameplay page"
            >
              <source src="/media/gameplay/movie_hatch.webm" type="video/webm" />
            </video>
            <p class="gp-showcase-caption">Hatch / return route motion — footer module on the official English page (hosted locally).</p>
          </div>
        </div>
        <h3>Shelter, CABIN, escape hatches, and the tram</h3>
        <p>
          Progression stitching uses <strong>escape hatches</strong> as return valves to the <strong>Shelter</strong>. Once a hatch is online you can bounce between the hub and that surface exit at
          will, which encourages thorough sweeps so you do not miss a shortcut. Friendly <strong>CABIN</strong> automation contrasts with hostile station AI — expect the hub to host printers, loadout
          benches, and narrative downtime between pushes. When marketing shows a <strong>tram</strong>, read it as a spine that links unlocked hatches back to central prep rather than a generic open
          world.
        </p>
      </section>

      <section class="gp-panel" aria-labelledby="gp-enemies">
        <h2 id="gp-enemies">Enemy design vocabulary (trailer-informed)</h2>
        <p>
          Standard drones teach the baseline <strong>hack exposure → weak point damage</strong> loop. Shielded variants gate Diana until Hugh strips outer layers. Larger encounters layer area denial,
          turret arcs, or melee rushers so you cannot tunnel vision the grid. Boss names, phases, and DPS checks belong to the final disc and day-one patches — this page stays focused on mechanics fans
          actually search before launch: <strong>Pragmata hacking</strong>, <strong>Diana abilities</strong>, <strong>Hugh weapons</strong>, and <strong>co-op tempo</strong>. When you want names and roles
          beside corporation blurbs, jump to <a class="gp-inline-a" href="/wiki/enemies">enemies &amp; bots</a> or the <a class="gp-inline-a" href="/wiki/creatures">creatures</a> hub
          from the wiki.
        </p>
      </section>

      <section class="gp-panel" aria-labelledby="gp-demo">
        <h2 id="gp-demo">Sketchbook demo vs full campaign expectations</h2>
        <p>
          The <a class="gp-inline-a" href="/getting-started#gs-sketchbook-demo">Sketchbook demo</a> is a vertical slice: it proves camera comfort, shooting feedback, and a representative
          <strong>intrusion minigame</strong>, but it will not contain every <strong>weapon mod</strong>, <strong>hacking node</strong>, or <strong>Shelter upgrade</strong> from the retail tree. Use it to
          practice pathing discipline and co-op communication, then cross-read <a class="gp-inline-a" href="/characters/diana">Diana’s profile</a> for hacking vocabulary and
          <a class="gp-inline-a" href="/characters/hugh">Hugh’s profile</a> for EVA gunplay keywords such as <strong>multihack</strong>, <strong>decode</strong>, and thruster habits.
        </p>
      </section>

      <section class="gp-panel gp-panel--muted" aria-labelledby="gp-platforms">
        <h2 id="gp-platforms">Platforms and release window (check your storefront)</h2>
        <p>
          Capcom has communicated staggered dates by platform family — regional storefronts can differ. Expect <strong>PRAGMATA</strong> on <strong>PS5</strong>, <strong>Xbox Series X|S</strong>, and
          <strong>Steam</strong> around mid-April 2026 and <strong>Nintendo Switch 2</strong> shortly after in several markets. Voice and subtitle language lists are broad; Simplified and Traditional
          Chinese appear in text support matrices shown in official packs. Before you buy, sanity-check carts and region locks on <a class="gp-inline-a" href="/getting-started">getting started</a>
          so gameplay expectations here line up with what your storefront actually offers.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import GameplayUnitWheel from '@/components/GameplayUnitWheel.vue'
</script>

<style scoped>
.gp-page {
  padding-bottom: 3rem;
}

.gp-inner {
  padding-top: 0.65rem;
  padding-bottom: 0.5rem;
}

.gp-header {
  margin-bottom: clamp(1.5rem, 3vw, 2.25rem);
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(57, 240, 255, 0.18);
}

.gp-bc {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  color: var(--color-muted);
  margin-bottom: 1rem;
}

.gp-bc-a {
  color: inherit;
  text-decoration: none;
}

.gp-bc-a:hover {
  color: var(--neon-cyan);
}

.gp-bc-sep {
  opacity: 0.45;
}

.gp-bc-here {
  color: var(--color-text);
  font-weight: 600;
}

.gp-kicker {
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 140, 190, 0.95);
  margin: 0 0 0.45rem;
}

.gp-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3.8vw, 2.35rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1.1;
  margin: 0 0 0.85rem;
  color: var(--color-text);
  text-shadow: var(--glow-heading);
}

.gp-lead {
  margin: 0 0 0.85rem;
  max-width: 72ch;
  font-size: 0.95rem;
  line-height: 1.68;
  color: rgba(185, 195, 225, 0.95);
}

.gp-lead:last-of-type {
  margin-bottom: 0;
}

.gp-lead strong {
  color: rgba(230, 236, 252, 0.98);
  font-weight: 700;
}

.gp-inline-a {
  color: var(--neon-cyan);
  font-weight: 600;
  text-decoration: none;
}

.gp-inline-a:hover {
  color: var(--color-cta);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.gp-top-figures {
  display: grid;
  gap: 1rem;
  margin-top: 1.35rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.gp-pair-figures {
  display: grid;
  gap: 1rem;
  margin: 1rem 0 0.25rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 768px) {
  .gp-top-figures {
    grid-template-columns: 1fr;
  }

  .gp-pair-figures {
    grid-template-columns: 1fr;
  }
}

.gp-figure {
  margin: 0;
  padding: 0;
  border-radius: 4px;
  border: 1px solid rgba(57, 240, 255, 0.2);
  background: rgba(5, 6, 14, 0.9);
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.gp-pair-figures .gp-figure {
  aspect-ratio: 8 / 5;
}

.gp-figure img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gp-figure figcaption {
  padding: 0.5rem 0.65rem 0.6rem;
  font-size: 0.72rem;
  line-height: 1.45;
  color: rgba(150, 165, 200, 0.92);
  border-top: 1px solid rgba(57, 240, 255, 0.1);
}

.gp-figure--center {
  margin: 1rem auto 0;
  max-width: 42rem;
}

.gp-figure--tight {
  max-width: 36rem;
}

/* Wide landscape — official hacking minigame promo */
.gp-figure--minigame {
  max-width: min(100%, 75rem);
}

.gp-video {
  display: block;
  width: 100%;
  height: 100%;
  max-height: none;
  object-fit: cover;
  background: #02040a;
  border-radius: 3px;
}

.gp-figure--video-narrow {
  max-width: min(100%, 38rem);
  margin-left: auto;
  margin-right: auto;
  aspect-ratio: 16 / 9;
}

.gp-showcase {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.gp-showcase--explore {
  grid-template-columns: 1fr 1fr;
  gap: 1.15rem;
}

@media (max-width: 1024px) {
  .gp-showcase--explore {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.gp-showcase-eyebrow {
  font-family: var(--font-display);
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(180, 210, 240, 0.95);
  margin: 0;
}

.gp-video-card {
  border-radius: 4px;
  border: 1px solid rgba(57, 240, 255, 0.2);
  background: rgba(5, 6, 14, 0.92);
  padding: 0.65rem 0.7rem 0.75rem;
}

.gp-showcase-caption {
  margin: 0.45rem 0 0;
  font-size: 0.72rem;
  line-height: 1.45;
  color: rgba(150, 165, 200, 0.92);
}

.gp-panel .gp-figure {
  margin-top: 1rem;
}

.gp-panel {
  padding: 1.2rem 1.25rem 1.35rem;
  margin-bottom: 1.15rem;
  border-radius: 4px;
  border: 1px solid rgba(70, 85, 120, 0.42);
  background: rgba(8, 10, 22, 0.78);
  box-shadow:
    0 0 0 1px rgba(255, 42, 122, 0.05),
    0 12px 36px rgba(0, 0, 0, 0.32);
}

.gp-panel--muted {
  border-style: dashed;
  border-color: rgba(100, 115, 150, 0.45);
  background: rgba(6, 8, 18, 0.55);
}

.gp-panel h2 {
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: 0 0 0.65rem;
  color: #e8b0c8;
}

.gp-panel h3 {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 1.1rem 0 0.45rem;
  color: rgba(180, 210, 240, 0.95);
}

.gp-panel h3:first-of-type {
  margin-top: 0.35rem;
}

.gp-panel p {
  margin: 0 0 0.75rem;
  font-size: 0.9rem;
  line-height: 1.68;
  color: rgba(175, 188, 218, 0.96);
  max-width: 72ch;
}

.gp-panel p:last-child {
  margin-bottom: 0;
}

.gp-panel strong {
  color: rgba(225, 232, 250, 0.98);
}

.gp-steps {
  margin: 0.5rem 0 0;
  padding-left: 1.2rem;
  max-width: 72ch;
  color: rgba(175, 188, 218, 0.96);
  font-size: 0.9rem;
  line-height: 1.65;
}

.gp-steps li {
  margin-bottom: 0.55rem;
}

.gp-steps strong {
  color: rgba(225, 232, 250, 0.98);
}

.gp-callout {
  margin: 0.75rem 0 0 !important;
  padding: 0.65rem 0.75rem;
  border-radius: 3px;
  border: 1px dashed rgba(57, 240, 255, 0.3);
  background: rgba(57, 240, 255, 0.05);
  max-width: 72ch !important;
}
</style>
