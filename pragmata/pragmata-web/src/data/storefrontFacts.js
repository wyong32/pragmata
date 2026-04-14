/** Canonical storefront copy: Steam URL, release-date line, PC spec tables (mirror Steam). */
export default {
  STEAM_PRAGMATA_URL: 'https://store.steampowered.com/app/3357650/PRAGMATA/',
  CAPCOM_PRAGMATA_EN_URL: 'https://www.capcom-games.com/pragmata/en-us/',
  PRAGMATA_RELEASE_STEAM_LINE:
    'Steam’s store header lists PRAGMATA for April 16, 2026, while Capcom’s on-page Early Bird notice describes moving most Steam regions to April 17, 2026 (instead of April 24). Your account’s countdown and purchase panel are authoritative — refresh before pre-load week.',
  PC_SPECS_STEAM: {
    minimum: {
      os: 'Windows 11 (64-bit)',
      processor: 'Intel Core i5-8500 / AMD Ryzen 5 3500',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1660 6 GB / AMD Radeon RX 5500 XT 8 GB',
      directx: 'Version 12',
      network: 'Broadband Internet connection',
      storage: '40 GB available space',
      notes:
        'Steam estimates “Performance” preset at about 1080p / 45 fps; framerate can dip in heavy scenes. SSD recommended.',
    },
    recommended: {
      os: 'Windows 11 (64-bit)',
      processor: 'Intel Core i7-8700 / AMD Ryzen 5 5500',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 2060 Super 8 GB / AMD Radeon RX 6600 8 GB',
      directx: 'Version 12',
      network: 'Broadband Internet connection',
      storage: '40 GB available space',
      notes:
        'Steam estimates “Balanced” preset at about 1080p / 60 fps. Ray tracing needs AMD Radeon RX 6700 XT 12 GB or NVIDIA GeForce RTX 3060 12 GB. SSD recommended.',
    },
  },
}
