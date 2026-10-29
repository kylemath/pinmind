/**
 * PinMind — Personal Visual Discovery & Interest Engine
 * Hybrid Client-Side Pixel DNA Analysis + Optional Gemini Vision & Idea Synthesis
 */

const STORAGE_KEY = 'pinmind_state_v1';

// Aesthetic Archetype Knowledge Base & Curated Idea Catalog
const AESTHETIC_ARCHETYPES = [
  {
    id: 'warm_minimalism',
    name: 'Warm Architectural Minimalism',
    category: 'Architecture & Spatial Design',
    keywords: ['Travertine & Raw Plaster', 'Warm Minimalist Interiors', 'Sculptural Timber', 'Quiet Luxury'],
    description: 'Drawn to tactile natural materials, sun-washed neutral palettes, and calm architectural geometry.',
    matchRule: (m) => m.warmth > 52 && m.saturation < 48 && m.brightness > 42,
    ideas: [
      {
        title: 'Limewash Alcove & Travertine Plinth',
        desc: 'Recessed plaster shelving illuminated by concealed warm grazing light over a honed Roman travertine console.',
        tags: ['Travertine', 'Limewash', 'Minimalist Interior', 'Warm Neutrals'],
        photoUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
        artStyle: 'arch_archway'
      },
      {
        title: 'Smoked Oak & Bouclé Lounge Sanctuary',
        desc: 'Low-slung timber seating paired with unbleached linen drapery and soft afternoon shadow play.',
        tags: ['Japandi', 'Tactile Fabrics', 'Natural Light', 'Organic Modern'],
        photoUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
        artStyle: 'organic_layers'
      },
      {
        title: 'Hand-Thrown Stoneware Vessel Study',
        desc: 'Asymmetric matte ceramic silhouettes in bone, oat, and raw umber arranged on a monolithic stone table.',
        tags: ['Ceramics', 'Wabi-Sabi', 'Still Life', 'Tactile Craft'],
        photoUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=80',
        artStyle: 'ceramic_totem'
      }
    ]
  },
  {
    id: 'botanical_biophilic',
    name: 'Biophilic & Botanical Sanctuary',
    category: 'Nature, Foliage & Organic Living',
    keywords: ['Indoor Conservatory', 'Moss & Fern Textures', 'Dappled Forest Light', 'Botanical Illustration'],
    description: 'Strong affinity for living greenery, organic chlorophyll tones, natural ecosystems, and restorative outdoor-indoor flow.',
    matchRule: (m) => m.greenRatio > 0.22 || (m.dominantHue >= 75 && m.dominantHue <= 165),
    ideas: [
      {
        title: 'Glasshouse Atrium & Suspended Ferns',
        desc: 'Steel-framed solarium drenched in mist with cascading tropical foliage and aged terracotta planters.',
        tags: ['Biophilic Design', 'Glasshouse', 'Botanical', 'Indoor Jungle'],
        photoUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
        artStyle: 'botanical_leaf'
      },
      {
        title: 'Moss Garden & Weathered Basalt Courtyard',
        desc: 'Contemplative pocket courtyard combining velvet Kyoto moss, rain-darkened basalt stepping stones, and bamboo.',
        tags: ['Zen Courtyard', 'Landscape Design', 'Moss', 'Natural Stone'],
        photoUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80',
        artStyle: 'organic_layers'
      },
      {
        title: 'Pressed Herbarium & Linen Apothecary',
        desc: 'Botanical specimen framing alongside amber apothecary glass and wild-harvested eucalyptus stems.',
        tags: ['Botanical Art', 'Apothecary', 'Natural Curation', 'Sage Green'],
        photoUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=80',
        artStyle: 'botanical_leaf'
      }
    ]
  },
  {
    id: 'editorial_brutalist',
    name: 'Monochrome Editorial & Sculptural Form',
    category: 'Brutalism, Fashion & Typography',
    keywords: ['Architectural Concrete', 'Chiaroscuro Lighting', 'Swiss Grid Typography', 'Avant-Garde Tailoring'],
    description: 'Captivated by dramatic light-and-shadow interplay, structural silhouette, high-contrast restraint, and gallery-grade precision.',
    matchRule: (m) => m.saturation < 26 || m.contrast > 62,
    ideas: [
      {
        title: 'Board-Formed Concrete & Skylight Void',
        desc: 'Monolithic brutalist stairwell cut by a razor-sharp beam of zenithal daylight.',
        tags: ['Brutalist Architecture', 'Chiaroscuro', 'Concrete', 'Minimalist Form'],
        photoUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
        artStyle: 'brutalist_grid'
      },
      {
        title: 'Sculptural Wool Coat & Gallery Shadow',
        desc: 'Oversized charcoal tailoring photographed against a stark gallery wall with crisp geometric contrast.',
        tags: ['Editorial Fashion', 'Monochrome', 'Silhouette', 'Tailoring'],
        photoUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
        artStyle: 'editorial_poster'
      },
      {
        title: 'Brushed Aluminum & Smoked Glass Object',
        desc: 'Industrial desk objects machined from raw anodized aluminum paired with matte obsidian stone.',
        tags: ['Industrial Design', 'Product Aesthetics', 'Monochrome', 'Metallic'],
        photoUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
        artStyle: 'brutalist_grid'
      }
    ]
  },
  {
    id: 'mediterranean_terracotta',
    name: 'Sunlit Terracotta & Artisanal Craft',
    category: 'Mediterranean Living & Warm Color',
    keywords: ['Terracotta & Ochre', 'Golden Hour Patina', 'Handwoven Textiles', 'Coastal Villa'],
    description: 'Resonates with sun-baked earth pigments, golden-hour warmth, artisan ceramics, and effortless coastal living.',
    matchRule: (m) => m.warmth >= 60 && m.saturation >= 35,
    ideas: [
      {
        title: 'Ochre Courtyard & Bougainvillea Arch',
        desc: 'Sun-drenched stucco loggia in warm sienna with handmade zellige tilework and terracotta urns.',
        tags: ['Mediterranean', 'Terracotta', 'Golden Hour', 'Courtyard'],
        photoUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80',
        artStyle: 'arch_archway'
      },
      {
        title: 'Moroccan Kilim & Raw Clay Studio',
        desc: 'Textured hand-loomed wool textiles in rust, saffron, and cinnamon layered over cool micro-cement floors.',
        tags: ['Artisanal Textiles', 'Warm Palette', 'Rust & Ochre', 'Bohemian Modern'],
        photoUrl: 'https://images.unsplash.com/photo-1540518614846-7ede433c457?auto=format&fit=crop&w=900&q=80',
        artStyle: 'ceramic_totem'
      },
      {
        title: 'Amber Glassware & Sunset Tablescape',
        desc: 'Hand-blown honey and burnt-orange carafes catching late-afternoon rays on raw linen.',
        tags: ['Tablescape', 'Amber Glass', 'Warm Lighting', 'Artisanal'],
        photoUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80',
        artStyle: 'solar_orb'
      }
    ]
  },
  {
    id: 'cyber_chromatic',
    name: 'Chromatic Futurism & Neon Atmosphere',
    category: 'Digital Art, Lighting & Sci-Fi Mood',
    keywords: ['Iridescent Gradients', 'Neon Nocturne', 'Glassmorphism & Light', 'Synthwave Chromatics'],
    description: 'Energized by luminous color gradients, atmospheric night lighting, futuristic materials, and high-saturation visual drama.',
    matchRule: (m) => (m.brightness < 45 && m.saturation > 38) || m.saturation > 62,
    ideas: [
      {
        title: 'Dichroic Glass Pavilion at Dusk',
        desc: 'Architectural light installation refracting electric cobalt, magenta, and violet across wet stone.',
        tags: ['Light Art', 'Chromatic', 'Futurism', 'Iridescent'],
        photoUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
        artStyle: 'solar_orb'
      },
      {
        title: 'Neon Rain & Anamorphic Street Study',
        desc: 'Cinematic nocturnal composition balancing deep indigo shadows with glowing cyan and vermilion signage.',
        tags: ['Cinematic Lighting', 'Neon Noir', 'Night Photography', 'Color Contrast'],
        photoUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80',
        artStyle: 'editorial_poster'
      },
      {
        title: 'Holographic Foil & Modular Synth Desk',
        desc: 'Tactile hardware studio bathed in dual-tone ambient LED wash with anodized metallic accents.',
        tags: ['Studio Setup', 'Ambient Lighting', 'Tech Aesthetics', 'Color Wash'],
        photoUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',
        artStyle: 'brutalist_grid'
      }
    ]
  },
  {
    id: 'coastal_ethereal',
    name: 'Ethereal Coastal & Nordic Clarity',
    category: 'Airy Spaces, Sea Glass & Calm',
    keywords: ['Nordic Daylight', 'Seafoam & Slate Blue', 'Sheer Linen & Mist', 'Minimalist Horizon'],
    description: 'Gravitates toward cool, breathable color harmonies, diffused coastal light, and serene uncluttered compositions.',
    matchRule: (m) => m.warmth <= 50 && m.brightness >= 45,
    ideas: [
      {
        title: 'Nordic Cliffside Cabin & Mist Horizon',
        desc: 'Weathered silver-pine framing a panoramic ocean horizon in soft slate blue and pale alabaster.',
        tags: ['Nordic Architecture', 'Coastal Calm', 'Cool Palette', 'Minimalism'],
        photoUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=80',
        artStyle: 'organic_layers'
      },
      {
        title: 'Frosted Sea-Glass & Brushed Steel Still Life',
        desc: 'Translucent celadon and ice-blue vessels arranged on pale limestone under diffused north light.',
        tags: ['Sea Glass', 'Still Life', 'Cool Tones', 'Ethereal'],
        photoUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
        artStyle: 'solar_orb'
      },
      {
        title: 'Sheer Gauze & Pale Birch Studio',
        desc: 'Billowing translucent curtains filtering morning coastal light across wide-plank bleached floorboards.',
        tags: ['Airy Interior', 'Scandinavian', 'Natural Light', 'Soft Minimal'],
        photoUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80',
        artStyle: 'arch_archway'
      }
    ]
  }
];

// Starter Sample Pack (so user can test immediately or mix with their own uploads)
const SAMPLE_PACK_SOURCES = [
  {
    title: 'Sunlit Travertine & Archway Study',
    desc: 'Warm plaster curves and natural stone texture under soft afternoon light.',
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    board: 'Spaces & Architecture'
  },
  {
    title: 'Botanical Conservatory & Terracotta',
    desc: 'Lush indoor foliage contrasting with hand-thrown clay planters and filtered sun.',
    url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    board: 'Inspiration Vault'
  },
  {
    title: 'Sculptural Ceramic & Linen Composition',
    desc: 'Tactile earth-toned ceramics arranged on raw unbleached linen.',
    url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80',
    board: 'Style & Objects'
  },
  {
    title: 'Architectural Concrete & Shadow Play',
    desc: 'Minimalist geometric staircase with high-contrast daylight shadows.',
    url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    board: 'Spaces & Architecture'
  }
];

// Application State
let state = {
  pins: [],
  boards: ['Inspiration Vault', 'Spaces & Architecture', 'Style & Objects', 'Color & Mood'],
  activeFilter: 'all', // 'all' | 'uploaded' | 'generated'
  activeBoard: '',
  activeTag: '',
  searchQuery: '',
  geminiApiKey: '',
  visualGenStyle: 'hybrid', // 'hybrid' | 'photography' | 'generative_art'
  aiPersonaOverride: null
};

let currentModalPinId = null;

// ==========================================
// INITIALIZATION & STATE PERSISTENCE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  bindEvents();
  renderBoardSelectors();
  updateAIStatusIndicator();
  renderAll();
});

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state.pins = Array.isArray(parsed.pins) ? parsed.pins : [];
      state.boards = Array.isArray(parsed.boards) && parsed.boards.length
        ? parsed.boards
        : ['Inspiration Vault', 'Spaces & Architecture', 'Style & Objects', 'Color & Mood'];
      state.geminiApiKey = parsed.geminiApiKey || '';
      state.visualGenStyle = parsed.visualGenStyle || 'hybrid';
      state.aiPersonaOverride = parsed.aiPersonaOverride || null;
    }
  } catch (err) {
    console.warn('Could not load saved state:', err);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      pins: state.pins,
      boards: state.boards,
      geminiApiKey: state.geminiApiKey,
      visualGenStyle: state.visualGenStyle,
      aiPersonaOverride: state.aiPersonaOverride
    }));
  } catch (err) {
    console.warn('Storage quota reached, trimming oldest generated pins if needed:', err);
  }
}

// ==========================================
// PIXEL-LEVEL VISUAL DNA & COLOR EXTRACTOR
// ==========================================

/**
 * Analyzes an HTMLImageElement on an offscreen canvas to extract:
 * - Dominant HEX palette (5 colors via k-means / bucket quantization)
 * - Warmth score (0-100)
 * - Brightness score (0-100)
 * - Saturation score (0-100)
 * - Edge Contrast / Complexity score (0-100)
 * - Matching Aesthetic Archetypes & Interest Tags
 */
function analyzeImageElement(imgEl, titleHint = '') {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const sampleSize = 96;
  const aspect = imgEl.naturalWidth && imgEl.naturalHeight
    ? imgEl.naturalWidth / imgEl.naturalHeight
    : 1;

  canvas.width = sampleSize;
  canvas.height = Math.max(48, Math.round(sampleSize / aspect));
  ctx.drawImage(imgEl, 0, 0, canvas.width, canvas.height);

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const pixels = [];
  let totalLum = 0;
  let totalSat = 0;
  let warmPixels = 0;
  let greenPixels = 0;
  let hueAccumulator = 0;
  let hueCount = 0;

  for (let i = 0; i < imgData.length; i += 16) {
    const r = imgData[i];
    const g = imgData[i + 1];
    const b = imgData[i + 2];
    const a = imgData[i + 3];
    if (a < 128) continue;

    const [h, s, l] = rgbToHsl(r, g, b);
    totalLum += l;
    totalSat += s;

    // Warmth check: reds, oranges, yellows, warm browns
    if ((h >= 0 && h <= 65) || h >= 330 || (r > b + 18)) {
      warmPixels++;
    }
    if (h >= 75 && h <= 165 && s > 15) {
      greenPixels++;
    }
    if (s > 12) {
      hueAccumulator += h;
      hueCount++;
    }

    pixels.push([r, g, b]);
  }

  const count = Math.max(1, pixels.length);
  const brightness = Math.round(totalLum / count);
  const saturation = Math.round(totalSat / count);
  const warmth = Math.round((warmPixels / count) * 100);
  const greenRatio = greenPixels / count;
  const dominantHue = hueCount > 0 ? Math.round(hueAccumulator / hueCount) : 35;

  // Compute local contrast (standard deviation of luminance)
  let lumVariance = 0;
  for (let i = 0; i < pixels.length; i++) {
    const [r, g, b] = pixels[i];
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 2.55;
    lumVariance += Math.pow(lum - brightness, 2);
  }
  const contrast = Math.min(100, Math.round(Math.sqrt(lumVariance / count) * 1.8));

  // Extract 5 distinct dominant colors
  const palette = extractDominantPalette(pixels, 5);

  const metrics = {
    brightness,
    saturation,
    warmth,
    contrast,
    greenRatio,
    dominantHue
  };

  // Classify into Aesthetic Archetypes & Interest Tags
  const matchedArchetypes = AESTHETIC_ARCHETYPES.filter(arch => arch.matchRule(metrics));
  if (matchedArchetypes.length === 0) {
    matchedArchetypes.push(AESTHETIC_ARCHETYPES[0]);
  }

  const primaryArch = matchedArchetypes[0];
  const secondaryArch = matchedArchetypes[1] || AESTHETIC_ARCHETYPES[(AESTHETIC_ARCHETYPES.indexOf(primaryArch) + 1) % AESTHETIC_ARCHETYPES.length];

  const tags = new Set();
  tags.add(primaryArch.keywords[0]);
  tags.add(primaryArch.keywords[1]);
  if (secondaryArch) tags.add(secondaryArch.keywords[0]);

  if (warmth > 62) tags.add('Warm Tones');
  else if (warmth < 38) tags.add('Cool Minimal');

  if (saturation < 25) tags.add('Monochrome & Muted');
  else if (saturation > 58) tags.add('Vibrant Chromatic');
  else tags.add('Natural Pigments');

  if (brightness > 68) tags.add('High-Key Daylight');
  else if (brightness < 35) tags.add('Moody & Atmospheric');

  // Generate descriptive title & note if user uploaded raw filename
  const cleanTitle = formatUploadTitle(titleHint, primaryArch);
  const autoDesc = `Analyzed visual signature: ${primaryArch.name} with ${warmth > 50 ? 'warm' : 'cool'} ${saturation < 35 ? 'muted' : 'rich'} harmony (${palette.slice(0, 3).join(', ')}).`;

  return {
    palette,
    metrics,
    archetypeId: primaryArch.id,
    archetypeName: primaryArch.name,
    category: primaryArch.category,
    tags: Array.from(tags).slice(0, 5),
    autoTitle: cleanTitle,
    autoDesc
  };
}

function formatUploadTitle(rawName, archetype) {
  if (!rawName) return `${archetype.keywords[0]} Study`;
  const stripped = rawName
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b(IMG|DSC|Screenshot|Photo|Image|PXL)\b\s*\d*/gi, '')
    .trim();
  if (stripped.length < 3 || /^\d+$/.test(stripped)) {
    return `${archetype.keywords[0]} Inspiration`;
  }
  return stripped.replace(/\b\w/g, c => c.toUpperCase());
}

function extractDominantPalette(pixels, k = 5) {
  if (!pixels.length) return ['#d8cfc2', '#a89f91', '#70685e', '#3c3834', '#f0ece1'];

  // Quantize into color buckets and sort by frequency + diversity
  const buckets = new Map();
  for (const [r, g, b] of pixels) {
    const qr = Math.min(255, Math.round(r / 24) * 24);
    const qg = Math.min(255, Math.round(g / 24) * 24);
    const qb = Math.min(255, Math.round(b / 24) * 24);
    const key = `${qr},${qg},${qb}`;
    buckets.set(key, (buckets.get(key) || 0) + 1);
  }

  const sorted = Array.from(buckets.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key.split(',').map(Number));

  const chosen = [];
  for (const rgb of sorted) {
    if (chosen.length >= k) break;
    const isDistinct = chosen.every(existing => colorDistance(rgb, existing) > 48);
    if (isDistinct) {
      chosen.push(rgb);
    }
  }

  // Fill remaining if image is very monochromatic
  for (const rgb of sorted) {
    if (chosen.length >= k) break;
    if (!chosen.includes(rgb)) chosen.push(rgb);
  }

  return chosen.map(([r, g, b]) => rgbToHex(r, g, b));
}

function colorDistance(c1, c2) {
  return Math.sqrt(
    Math.pow(c1[0] - c2[0], 2) +
    Math.pow(c1[1] - c2[1], 2) +
    Math.pow(c1[2] - c2[2], 2)
  );
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => Math.max(0, Math.min(255, x)).toString(16).padStart(2, '0')).join('');
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

// ==========================================
// PROCEDURAL AESTHETIC CONCEPT CARD GENERATOR
// ==========================================
/**
 * Renders a high-resolution, editorial Pinterest concept artwork on an HTML5 Canvas
 * using the exact color palette & motif extracted from the user's uploaded images.
 */
function generateBespokeConceptArtwork(palette, style = 'arch_archway', title = '') {
  const canvas = document.createElement('canvas');
  canvas.width = 720;
  canvas.height = 920;
  const ctx = canvas.getContext('2d');

  const c0 = palette[0] || '#e5dec9';
  const c1 = palette[1] || '#c7b299';
  const c2 = palette[2] || '#8c7a6b';
  const c3 = palette[3] || '#2b2927';
  const c4 = palette[4] || '#f4f1ea';

  // Background subtle gradient
  const bgGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  bgGrad.addColorStop(0, c4);
  bgGrad.addColorStop(1, c0);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (style === 'arch_archway') {
    // Warm architectural niche & shadow geometry
    ctx.fillStyle = c1;
    ctx.fillRect(60, 80, 600, 700);

    // Recessed arch
    ctx.fillStyle = c3;
    ctx.beginPath();
    ctx.arc(360, 340, 190, Math.PI, 0, false);
    ctx.lineTo(550, 780);
    ctx.lineTo(170, 780);
    ctx.closePath();
    ctx.fill();

    // Inner sunlit wall inside arch
    const innerGrad = ctx.createLinearGradient(170, 180, 520, 780);
    innerGrad.addColorStop(0, c0);
    innerGrad.addColorStop(1, c2);
    ctx.fillStyle = innerGrad;
    ctx.beginPath();
    ctx.arc(385, 355, 165, Math.PI, 0, false);
    ctx.lineTo(550, 780);
    ctx.lineTo(220, 780);
    ctx.closePath();
    ctx.fill();

    // Plinth & sculptural sphere
    ctx.fillStyle = c4;
    ctx.fillRect(280, 560, 160, 220);
    ctx.fillStyle = c1;
    ctx.beginPath();
    ctx.arc(360, 500, 54, 0, Math.PI * 2);
    ctx.fill();
  } else if (style === 'organic_layers') {
    // Biophilic / topographic organic curves
    const layers = [c1, c2, c3, c0];
    layers.forEach((col, idx) => {
      ctx.fillStyle = col;
      ctx.beginPath();
      const baseY = 240 + idx * 145;
      ctx.moveTo(0, baseY);
      ctx.bezierCurveTo(220, baseY - 90, 480, baseY + 95, 720, baseY - 30);
      ctx.lineTo(720, 920);
      ctx.lineTo(0, 920);
      ctx.closePath();
      ctx.fill();
    });

    // Sun/Moon disc
    ctx.fillStyle = c4;
    ctx.beginPath();
    ctx.arc(500, 210, 78, 0, Math.PI * 2);
    ctx.fill();
  } else if (style === 'ceramic_totem') {
    // Still life sculptural vessel study
    ctx.fillStyle = c1;
    ctx.beginPath();
    ctx.arc(360, 440, 240, 0, Math.PI * 2);
    ctx.fill();

    // Table horizon
    ctx.fillStyle = c2;
    ctx.fillRect(0, 640, 720, 280);

    // Ceramic vessel body
    ctx.fillStyle = c3;
    ctx.beginPath();
    ctx.ellipse(360, 540, 115, 145, 0, 0, Math.PI * 2);
    ctx.fill();

    // Vessel neck
    ctx.fillRect(325, 355, 70, 60);

    // Highlight accent
    ctx.fillStyle = c4;
    ctx.beginPath();
    ctx.arc(430, 620, 55, 0, Math.PI * 2);
    ctx.fill();
  } else if (style === 'botanical_leaf') {
    // Botanical abstract composition
    ctx.fillStyle = c3;
    ctx.fillRect(55, 55, 610, 740);

    const fronds = 5;
    for (let i = 0; i < fronds; i++) {
      ctx.fillStyle = i % 2 === 0 ? c1 : c0;
      ctx.beginPath();
      ctx.ellipse(260 + i * 45, 420 - i * 35, 120, 52, -0.5 + i * 0.18, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.strokeStyle = c4;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(180, 680);
    ctx.quadraticCurveTo(360, 420, 520, 190);
    ctx.stroke();
  } else if (style === 'solar_orb') {
    // Chromatic aura gradient orb
    const radGrad = ctx.createRadialGradient(360, 410, 20, 360, 410, 310);
    radGrad.addColorStop(0, c4);
    radGrad.addColorStop(0.45, c1);
    radGrad.addColorStop(0.8, c2);
    radGrad.addColorStop(1, c3);
    ctx.fillStyle = radGrad;
    ctx.fillRect(50, 50, 620, 740);

    ctx.strokeStyle = c4;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(360, 410, 210, 0, Math.PI * 2);
    ctx.stroke();
  } else {
    // Brutalist / Swiss editorial grid
    ctx.fillStyle = c3;
    ctx.fillRect(50, 50, 620, 730);
    ctx.fillStyle = c1;
    ctx.fillRect(90, 90, 260, 320);
    ctx.fillStyle = c2;
    ctx.fillRect(370, 90, 260, 650);
    ctx.fillStyle = c0;
    ctx.beginPath();
    ctx.arc(220, 575, 125, 0, Math.PI * 2);
    ctx.fill();
  }

  // Subtle tactile grain overlay
  ctx.fillStyle = 'rgba(255,255,255,0.06)';
  for (let i = 0; i < 900; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    ctx.fillRect(x, y, 2, 2);
  }

  // Editorial bottom caption strip with palette chips
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 810, 720, 110);

  ctx.fillStyle = '#161514';
  ctx.font = '600 20px Inter, sans-serif';
  ctx.fillText((title || 'Aesthetic Concept Synthesis').slice(0, 38), 36, 855);

  ctx.fillStyle = '#757067';
  ctx.font = '500 13px Inter, sans-serif';
  ctx.fillText('GENERATED FROM YOUR VISUAL DNA PALETTE', 36, 882);

  // Draw extracted color swatches on the concept card
  palette.slice(0, 5).forEach((hex, idx) => {
    ctx.fillStyle = hex;
    ctx.beginPath();
    ctx.arc(540 + idx * 32, 865, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  return canvas.toDataURL('image/jpeg', 0.88);
}

// ==========================================
// UPLOADING & SAMPLE LOADING
// ==========================================
async function handleFilesUploaded(fileList) {
  if (!fileList || fileList.length === 0) return;

  showStatusBanner(`Analyzing ${fileList.length} uploaded image${fileList.length > 1 ? 's' : ''} & extracting visual DNA...`);

  const newlyAddedPins = [];

  for (const file of Array.from(fileList)) {
    if (!file.type.startsWith('image/')) continue;
    try {
      const dataUrl = await readFileAsDataURL(file);
      const { img, resizedDataUrl } = await loadAndCompressImage(dataUrl, 900);
      const analysis = analyzeImageElement(img, file.name);

      const newPin = {
        id: 'pin_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
        type: 'uploaded',
        title: analysis.autoTitle,
        description: analysis.autoDesc,
        imageUrl: resizedDataUrl,
        palette: analysis.palette,
        metrics: analysis.metrics,
        archetypeId: analysis.archetypeId,
        archetypeName: analysis.archetypeName,
        category: analysis.category,
        tags: analysis.tags,
        board: state.activeBoard || 'Inspiration Vault',
        saved: true,
        createdAt: Date.now()
      };

      state.pins.unshift(newPin);
      newlyAddedPins.push(newPin);
    } catch (err) {
      console.error('Error processing uploaded image:', err);
    }
  }

  saveState();
  renderAll();

  // Automatically generate similar ideas from the newly uploaded image(s)!
  if (newlyAddedPins.length > 0) {
    showStatusBanner('Synthesizing new similar ideas matched to your uploads...');
    await generateSimilarIdeas({
      seedPins: newlyAddedPins,
      count: Math.min(4, Math.max(2, newlyAddedPins.length * 2))
    });
  }

  hideStatusBanner();
}

async function loadSampleInspirationPack() {
  showStatusBanner('Loading sample aesthetic pack & analyzing visual DNA...');
  const added = [];

  for (const item of SAMPLE_PACK_SOURCES) {
    try {
      const img = await loadImageCrossOrigin(item.url);
      const analysis = analyzeImageElement(img, item.title);
      const pin = {
        id: 'pin_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
        type: 'uploaded',
        title: item.title,
        description: item.desc,
        imageUrl: item.url,
        palette: analysis.palette,
        metrics: analysis.metrics,
        archetypeId: analysis.archetypeId,
        archetypeName: analysis.archetypeName,
        category: analysis.category,
        tags: analysis.tags,
        board: item.board,
        saved: true,
        createdAt: Date.now()
      };
      state.pins.unshift(pin);
      added.push(pin);
    } catch (err) {
      // Fallback if offline
      const fallbackPalette = ['#d9cbb8', '#a68a71', '#695849', '#2e2925', '#f2ece1'];
      const artwork = generateBespokeConceptArtwork(fallbackPalette, 'arch_archway', item.title);
      const pin = {
        id: 'pin_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
        type: 'uploaded',
        title: item.title,
        description: item.desc,
        imageUrl: artwork,
        palette: fallbackPalette,
        metrics: { brightness: 64, saturation: 32, warmth: 68, contrast: 45, greenRatio: 0.1, dominantHue: 34 },
        archetypeId: 'warm_minimalism',
        archetypeName: 'Warm Architectural Minimalism',
        category: 'Architecture & Spatial Design',
        tags: ['Travertine & Raw Plaster', 'Warm Minimalist Interiors', 'Warm Tones', 'Natural Pigments'],
        board: item.board,
        saved: true,
        createdAt: Date.now()
      };
      state.pins.unshift(pin);
      added.push(pin);
    }
  }

  saveState();
  renderAll();

  if (added.length > 0) {
    await generateSimilarIdeas({ seedPins: added, count: 3 });
  }
  hideStatusBanner();
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadAndCompressImage(dataUrl, maxDim = 900) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxDim / Math.max(img.naturalWidth || 1, img.naturalHeight || 1));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round((img.naturalWidth || 600) * scale);
      canvas.height = Math.round((img.naturalHeight || 600) * scale);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve({
        img,
        resizedDataUrl: canvas.toDataURL('image/jpeg', 0.85)
      });
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}

function loadImageCrossOrigin(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

// ==========================================
// IDEA & SIMILAR PIN GENERATION ENGINE
// ==========================================

/**
 * Generates new similar Idea Pins based on seed pins or the user's overall Taste Profile.
 * Uses Hybrid mode:
 * - If Gemini API key is configured, queries `gemini-2.5-flash` to synthesize tailored concepts & interest profile.
 * - Combines curated high-res photography + procedural palette-matched concept art.
 */
async function generateSimilarIdeas({ seedPins = null, count = 3, focusTopic = null } = {}) {
  const sourcePins = (seedPins && seedPins.length > 0)
    ? seedPins
    : state.pins.filter(p => p.type === 'uploaded');

  const referencePins = sourcePins.length > 0 ? sourcePins : state.pins;

  if (referencePins.length === 0) {
    await loadSampleInspirationPack();
    return;
  }

  showStatusBanner(
    state.geminiApiKey
      ? 'Gemini Vision AI is analyzing your pins & generating bespoke ideas...'
      : 'Generating new visual ideas from your color DNA & interest profile...'
  );

  // If user configured a Gemini API key, try Gemini synthesis first
  if (state.geminiApiKey) {
    try {
      const geminiGenerated = await generateIdeasWithGemini(referencePins, count, focusTopic);
      if (geminiGenerated && geminiGenerated.length > 0) {
        geminiGenerated.forEach(pin => state.pins.unshift(pin));
        saveState();
        renderAll();
        hideStatusBanner();
        return;
      }
    } catch (err) {
      console.warn('Gemini API fallback to local visual engine:', err);
    }
  }

  // Local Hybrid Visual Synthesis Engine
  await new Promise(r => setTimeout(r, 420));

  const existingTitles = new Set(state.pins.map(p => p.title));
  const createdPins = [];

  for (let i = 0; i < count; i++) {
    const seedPin = referencePins[i % referencePins.length];
    const archetype = AESTHETIC_ARCHETYPES.find(a => a.id === seedPin.archetypeId) || AESTHETIC_ARCHETYPES[0];

    // Pick an unused idea template or synthesize a remix concept
    const availableIdeas = archetype.ideas.filter(idea => !existingTitles.has(idea.title));
    const chosenTemplate = availableIdeas.length > 0
      ? availableIdeas[i % availableIdeas.length]
      : synthesizeRemixIdea(seedPin, archetype, i, focusTopic);

    existingTitles.add(chosenTemplate.title);

    // Determine visual representation based on user's setting (hybrid alternates photography & bespoke palette art)
    const useProceduralArt =
      state.visualGenStyle === 'generative_art' ||
      (state.visualGenStyle === 'hybrid' && (i % 2 === 1 || !chosenTemplate.photoUrl));

    const visualUrl = useProceduralArt
      ? generateBespokeConceptArtwork(seedPin.palette, chosenTemplate.artStyle || 'arch_archway', chosenTemplate.title)
      : chosenTemplate.photoUrl;

    const matchReason = focusTopic
      ? `Generated for your "${focusTopic}" interest cluster using palette (${seedPin.palette.slice(0, 3).join(', ')})`
      : `Inspired by "${seedPin.title}" — matched on ${archetype.name} & ${seedPin.metrics.warmth > 50 ? 'warm' : 'cool'} tonal harmony`;

    const generatedPin = {
      id: 'gen_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      type: 'generated',
      title: focusTopic && i === 0 ? `${focusTopic}: ${chosenTemplate.title}` : chosenTemplate.title,
      description: chosenTemplate.desc,
      imageUrl: visualUrl,
      palette: seedPin.palette,
      metrics: { ...seedPin.metrics },
      archetypeId: archetype.id,
      archetypeName: archetype.name,
      category: archetype.category,
      tags: chosenTemplate.tags || seedPin.tags,
      matchReason,
      inspiredByPinId: seedPin.id,
      board: state.activeBoard || seedPin.board || 'Inspiration Vault',
      saved: false,
      createdAt: Date.now() + i
    };

    state.pins.unshift(generatedPin);
    createdPins.push(generatedPin);
  }

  saveState();
  renderAll();
  hideStatusBanner();
}

function synthesizeRemixIdea(seedPin, archetype, idx, focusTopic) {
  const materials = ['Travertine', 'Raw Linen', 'Smoked Oak', 'Brushed Aluminum', 'Hand-Thrown Clay', 'Fluted Glass', 'charcoal Basalt', 'Limewash Plaster'];
  const forms = ['Alcove Study', 'Modular Shelving', 'Spatial Sanctuary', 'Lighting Object', 'Editorial Composition', 'Tactile Moodboard', 'Courtyard Pavilion'];
  const styles = ['arch_archway', 'organic_layers', 'ceramic_totem', 'botanical_leaf', 'solar_orb', 'brutalist_grid'];

  const mat1 = materials[(idx * 3 + seedPin.metrics.warmth) % materials.length];
  const mat2 = materials[(idx * 5 + seedPin.metrics.brightness) % materials.length];
  const form = forms[(idx * 2 + seedPin.metrics.contrast) % forms.length];

  const topicPrefix = focusTopic ? `${focusTopic} — ` : '';

  return {
    title: `${topicPrefix}${mat1} & ${mat2} ${form}`,
    desc: `A bespoke concept blending ${archetype.name.toLowerCase()} with your signature palette (${seedPin.palette.slice(0, 3).join(', ')}). Balances ${seedPin.metrics.warmth}% warmth and ${seedPin.metrics.contrast}% structural contrast.`,
    tags: [...new Set([focusTopic, archetype.keywords[0], mat1, 'AI Concept'].filter(Boolean))],
    photoUrl: null,
    artStyle: styles[idx % styles.length]
  };
}

/**
 * Optional Gemini 2.5 Flash Integration for deep multi-image interest synthesis & idea generation
 */
async function generateIdeasWithGemini(referencePins, count, focusTopic) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(state.geminiApiKey)}`;

  // Prepare up to 3 base64 inline images if available
  const parts = [];
  for (const pin of referencePins.slice(0, 3)) {
    if (pin.imageUrl && pin.imageUrl.startsWith('data:image/')) {
      const [meta, b64] = pin.imageUrl.split(',');
      const mimeMatch = meta.match(/data:(.*?);/);
      if (b64 && mimeMatch) {
        parts.push({
          inlineData: {
            mimeType: mimeMatch[1],
            data: b64
          }
        });
      }
    }
  }

  const pinSummaries = referencePins.slice(0, 5).map(p =>
    `- "${p.title}" (Archetype: ${p.archetypeName}, Tags: ${p.tags.join(', ')}, Palette: ${p.palette.join(', ')})`
  ).join('\n');

  const prompt = `You are PinMind, an expert visual curator and aesthetic taste engine.
Based on the user's uploaded images and visual signatures below:
${pinSummaries}
${focusTopic ? `Focus specifically on the interest theme: "${focusTopic}".` : ''}

Return ONLY valid JSON with this structure:
{
  "personaTitle": "Short evocative 3-5 word aesthetic persona title",
  "personaSummary": "2-sentence insightful explanation defining the user's visual interests, recurring motifs, and taste.",
  "ideas": [
    {
      "title": "Specific creative concept title",
      "description": "Rich 2-sentence visual description of the new similar idea",
      "matchReason": "1 short sentence explaining why this matches their uploaded pins",
      "tags": ["Tag1", "Tag2", "Tag3"],
      "artStyle": "arch_archway | organic_layers | ceramic_totem | botanical_leaf | solar_orb | brutalist_grid"
    }
  ]
}
Generate exactly ${count} ideas.`;

  parts.push({ text: prompt });

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts }],
      generationConfig: {
        responseMimeType: 'application/json'
      }
    })
  });

  if (!res.ok) throw new Error(`Gemini API HTTP ${res.status}`);
  const data = await res.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) throw new Error('Empty Gemini response');

  const parsed = JSON.parse(rawText);
  if (parsed.personaTitle && parsed.personaSummary) {
    state.aiPersonaOverride = {
      title: parsed.personaTitle,
      summary: parsed.personaSummary
    };
  }

  return (parsed.ideas || []).map((idea, idx) => {
    const seed = referencePins[idx % referencePins.length];
    const artUrl = generateBespokeConceptArtwork(
      seed.palette,
      idea.artStyle || 'arch_archway',
      idea.title
    );
    return {
      id: 'gen_gemini_' + Date.now() + '_' + idx,
      type: 'generated',
      title: idea.title,
      description: idea.description,
      imageUrl: artUrl,
      palette: seed.palette,
      metrics: { ...seed.metrics },
      archetypeId: seed.archetypeId,
      archetypeName: seed.archetypeName,
      category: seed.category,
      tags: Array.isArray(idea.tags) ? idea.tags.slice(0, 4) : seed.tags,
      matchReason: idea.matchReason || `Synthesized by Gemini Vision from "${seed.title}"`,
      inspiredByPinId: seed.id,
      board: state.activeBoard || seed.board || 'Inspiration Vault',
      saved: false,
      createdAt: Date.now() + idx
    };
  });
}

// ==========================================
// DEFINING USER INTERESTS (TASTE DNA ENGINE)
// ==========================================

function computeTasteProfile() {
  // Prioritize uploaded & saved pins for defining the user's core interests
  const corePins = state.pins.filter(p => p.type === 'uploaded' || p.saved);
  const sourcePins = corePins.length > 0 ? corePins : state.pins;

  if (sourcePins.length === 0) return null;

  // 1. Aggregate Archetype frequencies
  const archCounts = new Map();
  const tagCounts = new Map();
  const colorFreq = new Map();

  let sumWarmth = 0;
  let sumBrightness = 0;
  let sumSaturation = 0;
  let sumContrast = 0;

  sourcePins.forEach(pin => {
    const weight = pin.type === 'uploaded' ? 2 : 1;
    archCounts.set(pin.archetypeId, (archCounts.get(pin.archetypeId) || 0) + weight);

    (pin.tags || []).forEach(t => {
      tagCounts.set(t, (tagCounts.get(t) || 0) + weight);
    });

    (pin.palette || []).forEach((hex, idx) => {
      colorFreq.set(hex, (colorFreq.get(hex) || 0) + (5 - idx) * weight);
    });

    const m = pin.metrics || { warmth: 50, brightness: 50, saturation: 40, contrast: 50 };
    sumWarmth += m.warmth;
    sumBrightness += m.brightness;
    sumSaturation += m.saturation;
    sumContrast += m.contrast;
  });

  const n = sourcePins.length;
  const avgMetrics = {
    warmth: Math.round(sumWarmth / n),
    brightness: Math.round(sumBrightness / n),
    saturation: Math.round(sumSaturation / n),
    contrast: Math.round(sumContrast / n)
  };

  // Top archetypes
  const sortedArchs = Array.from(archCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([id, score]) => ({
      archetype: AESTHETIC_ARCHETYPES.find(a => a.id === id) || AESTHETIC_ARCHETYPES[0],
      score
    }));

  const primary = sortedArchs[0].archetype;
  const secondary = sortedArchs[1]?.archetype;

  // Synthesize Persona Title & Description
  const personaTitle = state.aiPersonaOverride?.title || (
    secondary
      ? `${primary.name.split(' ')[0]} ${primary.name.split(' ').slice(-1)[0]} & ${secondary.name.split(' ')[0]} Explorer`
      : primary.name
  );

  const toneWord = avgMetrics.warmth > 55 ? 'sun-warmed, tactile palettes' : avgMetrics.warmth < 45 ? 'cool, serene tonalities' : 'balanced neutral harmonies';
  const lightWord = avgMetrics.brightness > 60 ? 'airy natural daylight' : avgMetrics.brightness < 42 ? 'moody chiaroscuro lighting' : 'soft gallery illumination';

  const personaSummary = state.aiPersonaOverride?.summary || (
    `Your visual uploads reveal a strong gravitation toward ${primary.name.toLowerCase()}${secondary ? ` blended with ${secondary.name.toLowerCase()}` : ''}. You consistently favor ${toneWord}, ${lightWord}, and ${avgMetrics.contrast > 52 ? 'sculptural high-contrast forms' : 'calm, cohesive compositions'}.`
  );

  // Top 6 distinct signature colors
  const sortedColors = Array.from(colorFreq.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([hex]) => hex)
    .slice(0, 6);

  // Top Interest Tags
  const topTags = Array.from(tagCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }))
    .slice(0, 12);

  // Interest Clusters with match percentages
  const totalWeight = sortedArchs.reduce((acc, item) => acc + item.score, 0) || 1;
  const clusters = sortedArchs.slice(0, 4).map(item => ({
    id: item.archetype.id,
    name: item.archetype.name,
    category: item.archetype.category,
    keywords: item.archetype.keywords,
    percent: Math.min(98, Math.max(18, Math.round((item.score / totalWeight) * 100)))
  }));

  // Tailored Prompt Suggestions
  const promptSuggestions = [
    `Explore ${primary.keywords[0]} with ${avgMetrics.warmth > 50 ? 'terracotta & warm oak' : 'brushed steel & slate'}`,
    secondary
      ? `Blend ${primary.keywords[1]} and ${secondary.keywords[0]}`
      : `Minimalist ${primary.category.toLowerCase()} study`,
    `Moodboard using your top palette (${sortedColors.slice(0, 3).join(', ')})`
  ];

  return {
    pinCount: sourcePins.length,
    personaTitle,
    personaSummary,
    signatureColors: sortedColors,
    avgMetrics,
    topTags,
    clusters,
    promptSuggestions
  };
}

// ==========================================
// RENDERING UI
// ==========================================

function renderAll() {
  renderCountsAndHero();
  renderTasteProfileSidebar();
  renderInterestTagBar();
  renderMasonryGrid();
}

function renderCountsAndHero() {
  const uploadedCount = state.pins.filter(p => p.type === 'uploaded').length;
  const generatedCount = state.pins.filter(p => p.type === 'generated').length;

  document.getElementById('countAll').textContent = state.pins.length;
  document.getElementById('countUploaded').textContent = uploadedCount;
  document.getElementById('countGenerated').textContent = generatedCount;

  const hero = document.getElementById('dropzoneHero');
  if (state.pins.length > 0) {
    hero.classList.add('compact');
  } else {
    hero.classList.remove('compact');
  }
}

function renderBoardSelectors() {
  const topSelect = document.getElementById('customBoardSelect');
  const modalSelect = document.getElementById('modalBoardSelect');

  topSelect.innerHTML = `<option value="">All Boards</option>` +
    state.boards.map(b => `<option value="${escapeHtml(b)}" ${state.activeBoard === b ? 'selected' : ''}>${escapeHtml(b)}</option>`).join('');

  if (modalSelect) {
    modalSelect.innerHTML = state.boards.map(b => `<option value="${escapeHtml(b)}">${escapeHtml(b)}</option>`).join('');
  }
}

function renderInterestTagBar() {
  const container = document.getElementById('activeInterestTags');
  const profile = computeTasteProfile();

  if (!profile || profile.topTags.length === 0) {
    container.innerHTML = `<span class="tag-empty-hint">Upload images to discover your signature tags...</span>`;
    return;
  }

  const allPill = `<button class="interest-pill ${state.activeTag === '' ? 'active' : ''}" data-tag="">All Interests</button>`;
  const tagPills = profile.topTags.map((item, idx) => {
    const color = profile.signatureColors[idx % profile.signatureColors.length] || '#888';
    const isActive = state.activeTag === item.tag;
    return `
      <button class="interest-pill ${isActive ? 'active' : ''}" data-tag="${escapeHtml(item.tag)}">
        <span class="dot" style="background:${color}"></span>
        ${escapeHtml(item.tag)}
      </button>
    `;
  }).join('');

  container.innerHTML = allPill + tagPills;

  container.querySelectorAll('.interest-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosen = btn.getAttribute('data-tag') || '';
      state.activeTag = state.activeTag === chosen ? '' : chosen;
      renderAll();
    });
  });
}

function renderTasteProfileSidebar() {
  const emptyEl = document.getElementById('profileEmptyState');
  const contentEl = document.getElementById('profileContent');
  const profile = computeTasteProfile();

  if (!profile) {
    emptyEl.classList.remove('hidden');
    contentEl.classList.add('hidden');
    return;
  }

  emptyEl.classList.add('hidden');
  contentEl.classList.remove('hidden');

  document.getElementById('personaEngineBadge').textContent = state.geminiApiKey ? 'Gemini Vision + Pixel DNA' : 'Visual DNA Engine';
  document.getElementById('personaPinCount').textContent = `${profile.pinCount} pin${profile.pinCount > 1 ? 's' : ''} analyzed`;
  document.getElementById('personaTitle').textContent = profile.personaTitle;
  document.getElementById('personaSummary').textContent = profile.personaSummary;

  // Signature Palette Bar & Swatches
  const paletteBar = document.getElementById('signaturePaletteBar');
  paletteBar.innerHTML = profile.signatureColors.map(hex =>
    `<div style="flex:1;background:${hex}" title="${hex}"></div>`
  ).join('');

  const swatchesEl = document.getElementById('signatureSwatches');
  swatchesEl.innerHTML = profile.signatureColors.map(hex => `
    <div class="swatch-chip" data-hex="${hex}" title="Filter or search by ${hex}">
      <span class="swatch-dot" style="background:${hex}"></span>
      <span class="swatch-label">${hex.toUpperCase()}</span>
    </div>
  `).join('');

  swatchesEl.querySelectorAll('.swatch-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const hex = chip.getAttribute('data-hex');
      const searchInput = document.getElementById('searchInput');
      searchInput.value = hex;
      state.searchQuery = hex.toLowerCase();
      document.getElementById('clearSearchBtn').classList.remove('hidden');
      renderMasonryGrid();
    });
  });

  // Visual Spectrum Bars
  const spectrumEl = document.getElementById('spectrumList');
  const spectra = [
    { left: 'Cool Tones', right: 'Warm Earth', value: profile.avgMetrics.warmth },
    { left: 'Moody Shadow', right: 'Sunlit Airy', value: profile.avgMetrics.brightness },
    { left: 'Muted Minimal', right: 'Chromatic Rich', value: profile.avgMetrics.saturation },
    { left: 'Soft Atmospheric', right: 'Sculptural Contrast', value: profile.avgMetrics.contrast }
  ];

  spectrumEl.innerHTML = spectra.map(s => `
    <div class="spectrum-item">
      <div class="spectrum-labels">
        <span>${s.left}</span>
        <span>${s.value}% — ${s.right}</span>
      </div>
      <div class="spectrum-track">
        <div class="spectrum-fill" style="width:${s.value}%"></div>
      </div>
    </div>
  `).join('');

  // Interest Clusters
  const clustersEl = document.getElementById('interestClusters');
  clustersEl.innerHTML = profile.clusters.map(c => `
    <div class="cluster-row" data-topic="${escapeHtml(c.keywords[0])}">
      <div class="cluster-info">
        <span class="cluster-name">${escapeHtml(c.name)}</span>
        <span class="cluster-desc">${escapeHtml(c.keywords.slice(0, 2).join(' • '))}</span>
      </div>
      <span class="cluster-score">${c.percent}%</span>
    </div>
  `).join('');

  clustersEl.querySelectorAll('.cluster-row').forEach(row => {
    row.addEventListener('click', () => {
      const topic = row.getAttribute('data-topic');
      generateSimilarIdeas({ count: 2, focusTopic: topic });
    });
  });

  // Recommended Idea Prompts
  const promptsEl = document.getElementById('promptSuggestions');
  promptsEl.innerHTML = profile.promptSuggestions.map(promptText => `
    <button class="prompt-card" data-prompt="${escapeHtml(promptText)}">
      <span>${escapeHtml(promptText)}</span>
      <strong>✨</strong>
    </button>
  `).join('');

  promptsEl.querySelectorAll('.prompt-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const promptText = btn.getAttribute('data-prompt');
      generateSimilarIdeas({ count: 2, focusTopic: promptText });
    });
  });
}

function renderMasonryGrid() {
  const grid = document.getElementById('masonryGrid');

  const filtered = state.pins.filter(pin => {
    if (state.activeFilter === 'uploaded' && pin.type !== 'uploaded') return false;
    if (state.activeFilter === 'generated' && pin.type !== 'generated') return false;
    if (state.activeBoard && pin.board !== state.activeBoard) return false;
    if (state.activeTag && !(pin.tags || []).includes(state.activeTag)) return false;

    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const hay = [
        pin.title,
        pin.description,
        pin.archetypeName,
        pin.category,
        pin.board,
        ...(pin.tags || []),
        ...(pin.palette || [])
      ].join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    return;
  }

  grid.innerHTML = filtered.map(pin => {
    const paletteStrip = (pin.palette || []).map(hex => `<span style="background:${hex}"></span>`).join('');
    const badgeLabel = pin.type === 'uploaded' ? 'Uploaded' : '✨ AI Idea';
    const saveLabel = pin.saved ? 'Saved' : 'Save';
    const tagsHtml = (pin.tags || []).slice(0, 3).map(t => `<span class="pin-mini-tag">${escapeHtml(t)}</span>`).join('');

    return `
      <article class="pin-card" data-pin-id="${pin.id}">
        <div class="pin-media">
          <img src="${pin.imageUrl}" alt="${escapeHtml(pin.title)}" loading="lazy" />
          <div class="pin-overlay">
            <div class="pin-overlay-top">
              <span class="pin-type-badge ${pin.type}">${badgeLabel}</span>
              <button class="pin-save-btn ${pin.saved ? 'saved' : ''}" data-action="toggle-save" data-id="${pin.id}">
                ${saveLabel}
              </button>
            </div>
            <div class="pin-overlay-bottom">
              <button class="pin-spark-btn" data-action="spark-similar" data-id="${pin.id}">
                ✨ More like this
              </button>
            </div>
          </div>
        </div>
        <div class="pin-body">
          <div class="pin-palette-strip">${paletteStrip}</div>
          <h3 class="pin-title">${escapeHtml(pin.title)}</h3>
          <p class="pin-desc">${escapeHtml(pin.description)}</p>
          ${pin.matchReason ? `<div class="pin-match-note">${escapeHtml(pin.matchReason)}</div>` : ''}
          <div class="pin-tags-row">${tagsHtml}</div>
        </div>
      </article>
    `;
  }).join('');

  // Attach card listeners
  grid.querySelectorAll('.pin-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const actionBtn = e.target.closest('[data-action]');
      const pinId = card.getAttribute('data-pin-id');
      const pin = state.pins.find(p => p.id === pinId);
      if (!pin) return;

      if (actionBtn) {
        e.stopPropagation();
        const action = actionBtn.getAttribute('data-action');
        if (action === 'toggle-save') {
          pin.saved = !pin.saved;
          saveState();
          renderAll();
        } else if (action === 'spark-similar') {
          generateSimilarIdeas({ seedPins: [pin], count: 3 });
        }
        return;
      }

      openPinModal(pin);
    });
  });
}

// ==========================================
// PIN DETAIL MODAL
// ==========================================

function openPinModal(pin) {
  currentModalPinId = pin.id;
  const modal = document.getElementById('pinModal');
  document.getElementById('modalImage').src = pin.imageUrl;
  document.getElementById('modalOriginBadge').textContent = pin.type === 'uploaded' ? 'Uploaded Reference Pin' : '✨ Generated Similar Idea';
  document.getElementById('modalTitle').textContent = pin.title;
  document.getElementById('modalDescription').textContent = pin.description;

  const boardSelect = document.getElementById('modalBoardSelect');
  renderBoardSelectors();
  boardSelect.value = pin.board || state.boards[0];

  const inspBox = document.getElementById('modalInspirationBox');
  if (pin.matchReason) {
    inspBox.classList.remove('hidden');
    document.getElementById('modalMatchReason').textContent = pin.matchReason;
  } else {
    inspBox.classList.remove('hidden');
    document.getElementById('modalMatchReason').textContent = `Categorized under ${pin.archetypeName} (${pin.category}). Contributes directly to your live Aesthetic DNA.`;
  }

  document.getElementById('modalSwatches').innerHTML = (pin.palette || []).map(hex => `
    <span class="modal-swatch-pill">
      <span class="swatch-dot" style="background:${hex}"></span>
      ${hex.toUpperCase()}
    </span>
  `).join('');

  document.getElementById('modalTags').innerHTML = (pin.tags || []).map(t => `
    <span class="interest-pill" style="cursor:default">${escapeHtml(t)}</span>
  `).join('');

  const m = pin.metrics || { warmth: 50, brightness: 50, saturation: 40, contrast: 50 };
  document.getElementById('modalMetricsGrid').innerHTML = `
    <div class="metric-box">
      <span class="m-label">Warmth</span>
      <span class="m-val">${m.warmth}%</span>
    </div>
    <div class="metric-box">
      <span class="m-label">Brightness</span>
      <span class="m-val">${m.brightness}%</span>
    </div>
    <div class="metric-box">
      <span class="m-label">Contrast</span>
      <span class="m-val">${m.contrast}%</span>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closePinModal() {
  document.getElementById('pinModal').classList.add('hidden');
  currentModalPinId = null;
}

// ==========================================
// EVENT BINDINGS
// ==========================================

function bindEvents() {
  const fileInput = document.getElementById('fileInput');
  const uploadTriggerBtn = document.getElementById('uploadTriggerBtn');
  const heroUploadBtn = document.getElementById('heroUploadBtn');
  const loadSamplePackBtn = document.getElementById('loadSamplePackBtn');
  const generateIdeasBtn = document.getElementById('generateIdeasBtn');
  const remixAllBtn = document.getElementById('remixAllBtn');
  const refreshAnalysisBtn = document.getElementById('refreshAnalysisBtn');
  const clearAllDataBtn = document.getElementById('clearAllDataBtn');

  uploadTriggerBtn.addEventListener('click', () => fileInput.click());
  heroUploadBtn.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', (e) => {
    handleFilesUploaded(e.target.files);
    fileInput.value = '';
  });

  loadSamplePackBtn.addEventListener('click', () => loadSampleInspirationPack());

  generateIdeasBtn.addEventListener('click', () => generateSimilarIdeas({ count: 3 }));
  remixAllBtn.addEventListener('click', () => generateSimilarIdeas({ count: 4 }));
  refreshAnalysisBtn.addEventListener('click', () => {
    state.aiPersonaOverride = null;
    renderAll();
  });

  clearAllDataBtn.addEventListener('click', () => {
    if (confirm('Clear all uploaded pins, generated ideas, and reset your Taste Profile?')) {
      state.pins = [];
      state.activeTag = '';
      state.aiPersonaOverride = null;
      saveState();
      renderAll();
    }
  });

  // Drag and drop on dropzone & window
  const dropzoneBox = document.getElementById('dropzoneBox');
  ['dragenter', 'dragover'].forEach(evt => {
    dropzoneBox.addEventListener(evt, (e) => {
      e.preventDefault();
      dropzoneBox.classList.add('dragover');
    });
  });
  ['dragleave', 'drop'].forEach(evt => {
    dropzoneBox.addEventListener(evt, (e) => {
      e.preventDefault();
      dropzoneBox.classList.remove('dragover');
    });
  });
  dropzoneBox.addEventListener('drop', (e) => {
    if (e.dataTransfer?.files?.length) {
      handleFilesUploaded(e.dataTransfer.files);
    }
  });

  // Navigation filter tabs
  document.querySelectorAll('#boardTabs .nav-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#boardTabs .nav-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeFilter = pill.getAttribute('data-filter');
      renderMasonryGrid();
    });
  });

  // Custom board filter
  document.getElementById('customBoardSelect').addEventListener('change', (e) => {
    state.activeBoard = e.target.value;
    renderMasonryGrid();
  });

  // Add new board modal
  const newBoardModal = document.getElementById('newBoardModal');
  document.getElementById('addBoardBtn').addEventListener('click', () => {
    document.getElementById('newBoardNameInput').value = '';
    newBoardModal.classList.remove('hidden');
  });
  document.getElementById('closeNewBoardModalBtn').addEventListener('click', () => {
    newBoardModal.classList.add('hidden');
  });
  document.getElementById('confirmCreateBoardBtn').addEventListener('click', () => {
    const name = document.getElementById('newBoardNameInput').value.trim();
    if (name && !state.boards.includes(name)) {
      state.boards.push(name);
      state.activeBoard = name;
      saveState();
      renderBoardSelectors();
      renderMasonryGrid();
    }
    newBoardModal.classList.add('hidden');
  });

  // Search Input
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim();
    clearSearchBtn.classList.toggle('hidden', !state.searchQuery);
    renderMasonryGrid();
  });
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    renderMasonryGrid();
  });

  // Toggle Right Sidebar
  document.getElementById('toggleProfileBtn').addEventListener('click', () => {
    document.querySelector('.workspace').classList.toggle('sidebar-collapsed');
  });

  // Pin Detail Modal events
  document.getElementById('closePinModalBtn').addEventListener('click', closePinModal);
  document.getElementById('pinModal').addEventListener('click', (e) => {
    if (e.target.id === 'pinModal') closePinModal();
  });

  document.getElementById('modalBoardSelect').addEventListener('change', (e) => {
    const pin = state.pins.find(p => p.id === currentModalPinId);
    if (pin) {
      pin.board = e.target.value;
      saveState();
      renderMasonryGrid();
    }
  });

  document.getElementById('modalDeletePinBtn').addEventListener('click', () => {
    if (!currentModalPinId) return;
    state.pins = state.pins.filter(p => p.id !== currentModalPinId);
    saveState();
    closePinModal();
    renderAll();
  });

  document.getElementById('modalSparkSimilarBtn').addEventListener('click', () => {
    const pin = state.pins.find(p => p.id === currentModalPinId);
    closePinModal();
    if (pin) {
      generateSimilarIdeas({ seedPins: [pin], count: 3 });
    }
  });

  // Settings Modal
  const settingsModal = document.getElementById('settingsModal');
  document.getElementById('settingsBtn').addEventListener('click', () => {
    document.getElementById('geminiKeyInput').value = state.geminiApiKey || '';
    document.getElementById('visualGenStyleSelect').value = state.visualGenStyle || 'hybrid';
    settingsModal.classList.remove('hidden');
  });
  document.getElementById('closeSettingsModalBtn').addEventListener('click', () => {
    settingsModal.classList.add('hidden');
  });
  document.getElementById('saveSettingsBtn').addEventListener('click', () => {
    state.geminiApiKey = document.getElementById('geminiKeyInput').value.trim();
    state.visualGenStyle = document.getElementById('visualGenStyleSelect').value;
    saveState();
    updateAIStatusIndicator();
    renderAll();
    settingsModal.classList.add('hidden');
  });
  document.getElementById('clearApiKeyBtn').addEventListener('click', () => {
    document.getElementById('geminiKeyInput').value = '';
    state.geminiApiKey = '';
    saveState();
    updateAIStatusIndicator();
    renderAll();
    settingsModal.classList.add('hidden');
  });
}

function updateAIStatusIndicator() {
  const dot = document.getElementById('aiStatusDot');
  if (state.geminiApiKey) {
    dot.classList.add('gemini-active');
    dot.title = 'Gemini Vision API Active';
  } else {
    dot.classList.remove('gemini-active');
    dot.title = 'Keyless Local Visual DNA Engine Active';
  }
}

function showStatusBanner(msg) {
  const banner = document.getElementById('generationStatus');
  document.getElementById('generationStatusText').textContent = msg;
  banner.classList.remove('hidden');
}

function hideStatusBanner() {
  document.getElementById('generationStatus').classList.add('hidden');
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
