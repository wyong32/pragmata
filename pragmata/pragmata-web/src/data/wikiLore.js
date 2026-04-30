/** Lore index data — copy summarized from community sources; confirm in-game. */
export const wikiPeople = [
  {
    id: 'diana',
    name: 'Diana',
    subtitle: 'D-I-0336-7 · Pragmata-class android',
    path: '/characters/diana',
    image: '/images/wiki/diana-babel-context.jpg',
    blurb: 'Hacking, Decode / Multihack nodes, and the duo loop with Hugh on the lunar station.',
  },
  {
    id: 'hugh',
    name: 'Hugh Williams',
    subtitle: 'Dispatch investigator · EVA combat',
    path: '/characters/hugh',
    image: '/images/wiki/hugh-williams.jpg',
    blurb: 'Thrusters, weapon units, and keeping pressure off Diana while she routes the grid.',
  },
]

export const wikiOrganizations = [
  {
    id: 'babel',
    name: 'Babel Industries',
    path: '/wiki/babel-industries',
    blurb: 'Corporate branding on equipment and facility hardware — name ties to the Tower of Babel mythos.',
  },
  {
    id: 'delphi',
    name: 'Delphi Corporation',
    path: '/wiki/delphi-corporation',
    blurb: 'Lunafilament, generative AI, and the Bots Hugh and Diana fight across the station.',
  },
]

/** Hostile units — summaries from trailer / marketing discourse; confirm in-game. */
export const wikiEnemyEntries = [
  {
    id: 'walkers',
    title: 'Walkers',
    image: '/images/wiki/walker-render.png',
    role: 'Product line',
    grid: '4×4 · 2 blue nodes (basic pattern)',
    summary:
      'Humanoid Bots based on the M4 series — one of Delphi’s most successful designs for tool use alongside humans. Improved M4AM variants handle low-gravity lunar conditions.',
  },
  {
    id: 'basic-walker',
    title: 'Basic walker',
    image: '/images/wiki/basic-walker.webp',
    role: 'Ground threat',
    grid: '4×4 · 2 blue',
    summary:
      'Slow humanoid that closes distance and strikes with an energy blade; it steps forward as it swings, often beginning its attack before it is truly in range.',
  },
  {
    id: 'heavy-walker',
    title: 'Heavy walker',
    image: '/images/wiki/heavy-walker.webp',
    role: 'Ground threat',
    grid: '5×5 · 3 blue · 1 gray',
    summary:
      'Armless sturdy walker that stomps to send a short cone of blue electrical energy toward Hugh — jump to avoid the shock.',
  },
  {
    id: 'hovering-turret',
    title: 'Hovering turret',
    image: '/images/wiki/hovering-turret.webp',
    role: 'Ranged',
    grid: '3×3 · 1 blue',
    summary:
      'Hovers in place, paints a targeting laser, then charges a shot; Hugh can break lock by moving while it turns slowly between attempts.',
  },
  {
    id: 'missile-turret',
    title: 'Missile Turret',
    image: '/images/wiki/missile-turret.webp',
    role: 'Ranged',
    grid: '4×4 minus one corner · 1 blue',
    summary:
      'Fires slow missiles Diana can hack to turn back on the launcher — unusual grid geometry with a corner removed.',
  },
  {
    id: 'quadraped',
    title: 'Quadraped',
    image: '/images/wiki/quadraped.webp',
    role: 'Mobile threat',
    grid: '3×4 · 2 blue',
    summary:
      'Four-legged unit that launches spinning sideways “propeller” attacks, legs acting as blades in rapid vertical spins.',
  },
  {
    id: 'big-crawler',
    title: 'Big Crawler',
    image: '/images/wiki/big-crawler.webp',
    role: 'Elite',
    grid: '5×5 · 3 blue · antenna',
    summary:
      'Large humanoid on crawlers; opens its neck to expose a red energy drum and can extend antennae that block Diana’s hacks until Hugh shoots them off.',
  },
  {
    id: 'sector-guard',
    title: 'SectorGuard',
    image: '/images/wiki/sectorguard-render.webp',
    role: 'Boss · S-35 line',
    grid: '5×5 · 3 blue · 1 red',
    summary:
      'Delphi military-line Bot guarding high-priority installations — guided low-gravity missiles, thruster rushes, and red ground telegraphs. First major boss encounter after a power-restoration beat.',
  },
]
