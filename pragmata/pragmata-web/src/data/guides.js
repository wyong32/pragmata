/**
 * Player guides — shape aligned with roadtovostok-web articles:
 * id, title, description, tags, publishDate, imageUrl, imageAlt, seo, addressBar, detailsHtml
 */

export default [
  {
    id: 1,
    title: "PRAGMATA beginner's guide — your first session",
    description:
      'A longer first-session walkthrough: how Hugh and Diana split work, the hack-to-shoot loop you should internalize early, co-op habits, demo vs retail expectations, and where to read next on this site.',
    tags: ['Beginner', 'Onboarding', 'Combat'],
    publishDate: '2026-04-13',
    imageUrl: '/images/bg.webp',
    imageAlt: 'PRAGMATA — atmospheric lunar facility key art',
    seo: {
      title: 'Beginner PRAGMATA guide | First session',
      description:
        'PRAGMATA game guide article: Hugh gunplay, Diana hacking, first fights—ties Getting Started, Gameplay and Wiki hubs; Characters for duo roles. Unofficial fan piece.',
      keywords:
        'PRAGMATA game, Guides, Getting Started, Gameplay, Wiki, Characters, beginner, Diana, Hugh, hacking, co-op, pragmatagame.org',
    },
    addressBar: 'beginner-guide',
    detailsHtml: `
<p>PRAGMATA is a science-fiction action-adventure built around <strong>two characters at once</strong>: Hugh handles third-person gunplay, spacing, and survival pressure; Diana runs a real-time <strong>intrusion grid</strong> on enemies and station systems. Official messaging keeps selling the fantasy as <em>cooperation</em>—neither role fully replaces the other, and the best runs feel like a conversation instead of a tug-of-war.</p>
<p>This page is deliberately <strong>spoiler-light</strong>. Treat trailers, wiki summaries, and demo footage as <em>orientation</em>, not homework. Your first real goal is simple: learn to recognize when the game is asking for <strong>shooting</strong> versus <strong>hacking</strong>, then chain those beats without panicking.</p>

<figure class="guide-embed-fig">
  <img src="/images/maxresdefault.webp" width="1280" height="720" loading="lazy" decoding="async" alt="PRAGMATA — wide lunar-base trailer still used as atmosphere reference" />
  <figcaption>Marketing stills set tone: cold metal, long sightlines, and the sense that the station is both a playground and a trap. Use them to calibrate expectations before you worry about perfect optimization.</figcaption>
</figure>

<h2>What “session one” should teach you</h2>
<p>Session one is not about clearing every optional node or memorizing every corporate name on a whiteboard. It is about building three durable habits:</p>
<ul>
  <li><strong>Read the room:</strong> when enemies telegraph armor, shields, or jamming fields, assume the loop will bounce you between Hugh and Diana instead of letting one button solve everything.</li>
  <li><strong>Keep Hugh readable:</strong> if Hugh is constantly cornered, Diana will abandon hacks mid-line. Fix footwork and camera discipline before you blame the grid.</li>
  <li><strong>Keep Diana honest:</strong> readable paths under pressure beat “perfect” paths that collapse the moment a turret rotates two degrees.</li>
</ul>

<h2>Hugh in sixty seconds (gunplay layer)</h2>
<p><strong>Hugh</strong> sells the survival fantasy: EVA mobility, aiming cadence, breaking obstacles that hard-block Diana, and buying time while she commits to a hack route. In co-op, Hugh is also the player most likely to <em>feel</em> failure first—because pressure arrives as bullets and collision, not as a puzzle UI.</p>
<p>Early priorities: maintain spacing, avoid hard pinning against cover that lines you up for splash damage, and learn which enemy tells mean “shoot the red shield first” versus “wait—Diana is about to open a window.” If something is immune to hacking until an external plate is gone, treat that as a <strong>Hugh gate</strong>, not a Diana skill issue.</p>

<figure class="guide-embed-fig">
  <img src="/images/gameplay/combat_bg_s_en.webp" width="800" height="450" loading="lazy" decoding="async" alt="PRAGMATA — combat scene still showing Hugh-style gunplay context" />
  <figcaption>Combat stills emphasize spacing and target priority. Use them as a mental anchor: when the screen gets loud, default back to footwork before you touch the intrusion panel.</figcaption>
</figure>

<h2>Diana in sixty seconds (hacking layer)</h2>
<p><strong>Diana</strong> sells the puzzle-in-combat fantasy: open the intrusion panel, read nodes, draw a path, and convert exposed weak points into damage windows. Marketing demos often highlight a clean “goal node” read and optional bonus nodes that teach <em>risk versus greed</em>—great lessons for day one even if the final economy shifts.</p>
<p>Beginner-friendly framing: you are not trying to draw the shortest possible line on the first week. You are trying to draw a line your partner can <strong>predict</strong>, because Hugh’s job is to be in position when the window opens. If your route constantly forces Hugh to sprint across the arena, rewrite the route—not the friendship.</p>

<figure class="guide-embed-fig">
  <img src="/images/gameplay/hacking-minigame-en.png" width="960" height="540" loading="lazy" decoding="async" alt="PRAGMATA — intrusion grid UI still (English)" />
  <figcaption>Intrusion UI stills reward literacy: learn the difference between “I cannot hack this yet” versus “I am choosing the wrong risk profile on the grid.”</figcaption>
</figure>

<h2>One combat loop to internalize early</h2>
<p>When robots show reinforced armor or similar gating, the loop that shows up again and again in marketing beats is:</p>
<ol>
  <li><strong>Open intrusion</strong> (Diana) when the encounter layout supports it.</li>
  <li><strong>Complete a path to the goal node</strong> (green) without throwing away Hugh positioning.</li>
  <li><strong>Shoot the exposed weak point</strong> (Hugh) before the armor state returns.</li>
</ol>
<p>Optional “blue” style nodes in demos often increase payoff or duration—treat them as lessons in greed control: sometimes the correct play is the boring play that preserves co-op tempo.</p>
<p>If hacking is completely blocked, default to the Hugh-gate heuristic: <strong>shoot the obstacle that is explicitly gating the puzzle</strong> (shields, plates, jammer surfaces) before you spend ten cycles re-drawing the same impossible line.</p>

<h2>When the station goes quiet (exploration pacing)</h2>
<p>PRAGMATA is not only a corridor shooter. Trailers and vertical slices also sell <strong>exploration</strong> beats—quiet traversal, readables, and environmental storytelling that rewards looking up and listening. If you only train combat reflexes, you will still succeed, but you may miss the tonal glue that makes the lunar facility feel like a place rather than a sequence of arenas.</p>

<figure class="guide-embed-fig">
  <img src="/images/gameplay/exploration_bg_s_en.webp" width="800" height="450" loading="lazy" decoding="async" alt="PRAGMATA — lunar base exploration still" />
  <figcaption>Exploration stills are a reminder to lift your eyes from the reticle: the station is also a layout problem—routing, shortcuts, and where fights are likely to erupt.</figcaption>
</figure>

<h2>Co-op habits that survive the first boss</h2>
<h3>Callouts that actually help</h3>
<p>Short, repeatable phrases beat essay-length comms. Examples: “I need three seconds on the line,” “Plate first,” “Window open left,” “I am resetting—cover.” The goal is predictable handoffs, not perfect shot-calling.</p>
<h3>One mental model: turn-taking under stress</h3>
<p>Even when both players are active simultaneously, <em>good</em> duo play often feels like polite turn-taking: Hugh creates space, Diana commits, Hugh spends the window, Diana repositions the puzzle for the next gate. If both players try to “win the encounter solo,” you get the classic friction spike: two solutions competing for the same three seconds.</p>

<h2>Sketchbook demo vs retail (keep expectations clean)</h2>
<p>If <strong>Sketchbook</strong> is available on your platform, treat it as a tutorial-weight vertical slice: camera comfort, shooting feedback, and a representative taste of the duo loop. Demos can drift from shipping balance—patch notes, difficulty tuning, and node economies may change. The demo’s job is to answer: <em>does this control language feel readable to me?</em></p>

<h2>Before you buy — three honest checks</h2>
<ul>
  <li><strong>Sketchbook:</strong> run it once for feel—loop readability beats hype trailers.</li>
  <li><strong>Storefront:</strong> confirm edition text, regional bonuses, and the account you will actually purchase on (Steam vs console pages drift in wording and date presentation).</li>
  <li><strong>PC:</strong> read the official minimum/recommended blocks and leave extra disk headroom for patches and shader caches—tables live on <a href="/getting-started">Getting started</a>.</li>
</ul>

<h2>Mistakes that look like “bad hacking”</h2>
<ul>
  <li><strong>Fighting the grid before clearing gun-gates:</strong> if Hugh has not removed the obstacle that hard-blocks intrusion, no amount of redraw magic fixes it.</li>
  <li><strong>Chasing perfect lines while Hugh is pinned:</strong> reposition the fight first; the grid becomes dramatically easier when the arena is not on fire.</li>
  <li><strong>Ignoring audio/visual tells:</strong> many encounters teach through telegraphing—if you are surprised every time armor returns, you are likely missing a cue, not lacking APM.</li>
</ul>

<h2>Where to read next on this site</h2>
<p>These hubs are written to stack cleanly—pick depth where you need it, skip what you do not want yet:</p>
<ul>
  <li><a href="/getting-started">Getting started</a> — editions, demo availability, PC specs, release anchors</li>
  <li><a href="/gameplay">Gameplay</a> — mechanics overview and trailer-informed systems notes</li>
  <li><a href="/characters/diana">Diana</a> and <a href="/characters/hugh">Hugh</a> — character-first vocabulary for hacking vs EVA combat</li>
  <li><a href="/wiki">Wiki</a> — world premise, factions, and enemies as context (not a substitute for patch notes)</li>
  <li><a href="/faq">FAQ</a> — short answers to common search questions, with reminders to verify official sources</li>
</ul>
`,
  },
]
