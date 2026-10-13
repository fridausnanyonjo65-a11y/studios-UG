import { ProjectItem, TeamMember, Testimonial, StudioPrompt } from '../types';

export const STUDIO_INFO = {
  name: 'VINCI STUDIOS',
  tagline: 'High-End Branding, Digital Design & Custom Print Mastery',
  location: {
    building: 'GRATIAS Building',
    road: 'Salaama Road',
    landmark: 'Just past Nesta Petrol Station',
    city: 'Kampala, Uganda',
    fullAddress: 'GRATIAS Building, Salaama Road (after Nesta Petrol Station), Kampala, Uganda',
  },
  contacts: {
    phone: '+256 700 892 114',
    whatsapp: '+256700892114',
    email: 'info@vincistudios.ug',
    managerEmail: 'fridaus@vincistudios.ug',
  },
  hours: 'Monday – Saturday: 8:00 AM – 7:30 PM (EAT)',
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Mr. Muyanja Geofry',
    role: 'Founder & Creative Director',
    title: 'Managing Director & Brand Strategist',
    bio: 'Oversees the creative philosophy, high-concept brand identities, and executive art direction at Vinci Studios. With deep expertise across identity architecture and graphic craft, Geofry has steered brand transformations for emerging enterprises and multinational firms.',
    responsibilities: [
      'Brand Identity Architecture & Creative Direction',
      'Executive Consultation & Visual Strategy',
      'Typography & Custom Monogram Crafting',
      'Art Direction for Large-Scale Print & Signage Campaigns',
    ],
    email: 'geofry@vincistudios.ug',
    phone: '+256 700 892 114',
  },
  {
    name: 'Nanyonjo Fridaus',
    role: 'Studio Operations & Client Relations Manager',
    title: 'Operations Director & Production Head',
    bio: 'Leads day-to-day studio workflow, print production precision, customer onboarding, and delivery timelines at Gratias Building. Fridaus ensures every print run achieves uncompromising color consistency and timely delivery for our clients.',
    responsibilities: [
      'Studio Production Management & Workflow Scheduling',
      'Client Onboarding, Brief Intake & Cost Estimations',
      'Color Calibration, Material Sourcing & Finish QA',
      'Express Order Dispatch & Partner Relations',
    ],
    email: 'fridausnanyonjo65@gmail.com',
    phone: '+256 754 112 890',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'aeterna-identity',
    title: 'Aeterna Architectural Monograph & Stationery',
    category: 'branding',
    categoryLabel: 'Brand Identity & Stationery',
    client: 'Aeterna Architecture Ltd',
    year: '2025',
    image: '/src/assets/images/vinci_branding_showcase_1791878375989.jpg',
    description: 'Comprehensive luxury identity design, copper foil stamping on 600gsm charcoal duplex paper, architectural monogramming, and bespoke administrative stationery suite.',
    objective: 'Create an understated, timeless identity system that positions the firm among the premier luxury architectural studios in East Africa.',
    specs: ['Color Palette: Obsidian, Copper Foil, Warm Alabaster', 'Substrate: 600gsm Uncoated Charcoal Cotton Board', 'Typography: Custom Editorial Serif + Precision Sans'],
    finishes: ['Hot Stamped Metallic Copper Foil', 'Blind Debossing', 'Painted Beveled Edges', 'Custom Die-Cut Flap Envelopes'],
    deliverables: ['Identity Guideline Manual (84 pgs)', 'Corporate Business Cards & Letterhead', 'Project Presentation Binders', 'Digital Signature Assets'],
    featured: true,
  },
  {
    id: 'luxe-botanical-box',
    title: 'Luxe Botanical Skincare Rigid Packaging',
    category: 'print',
    categoryLabel: 'Custom Print & Packaging',
    client: 'Aurora Organics East Africa',
    year: '2025',
    image: '/src/assets/images/vinci_print_craft_1791878375322.jpg',
    description: 'Precision custom rigid slide box with metallic gold foil stamping, deep tactile embossing, custom internal foam trays, and moisture-resistant soft-touch matte lamination.',
    objective: 'Develop high-end unboxing presentation boxes that protect delicate glass dropper bottles while commanding retail shelf presence.',
    specs: ['Paper Stock: 1200gsm Rigid Greyboard wrapped in 157gsm Art Paper', 'Printing: 4-Color Process + Custom Pantone Metallic Gold 871C', 'Dimensions: 140mm x 75mm x 45mm'],
    finishes: ['Sculpted Multi-Level Foil Stamping', 'Matte Soft-Touch Anti-Scratch Film', 'Precision Laser Die-Cut EVA Insert', 'Magnetic Closure Tab'],
    deliverables: ['Full Production Run (5,000 units)', 'Die-line Structural Prototypes', 'Proof Calibration Sheets', 'Batch QA Documentation'],
    featured: true,
  },
  {
    id: 'velocity-digital-suite',
    title: 'Velocity Design Co. Digital Platform & Motion Suite',
    category: 'digital',
    categoryLabel: 'Digital Design & Motion',
    client: 'Velocity Tech Media',
    year: '2026',
    image: '/src/assets/images/vinci_digital_motion_1791878376296.jpg',
    description: 'High-performance interactive portfolio system, animated brand assets, modular typography scale, and engaging micro-interactions built for high-conversion engagement.',
    objective: 'Re-engineer digital touchpoints for modern tech clients with dark aesthetic, kinetic motion, and responsive layout fidelity.',
    specs: ['Fidelity: Ultra HD 4K / Vector SVG Assets', 'Framework: Modern Interactive Component Library', 'Motion: 60fps kinetic motion guidelines'],
    finishes: ['High-contrast Dark UI System', 'Animated Micro-Interactions', 'Dynamic Social Share Cards', 'Optimized SVG Icon Library'],
    deliverables: ['Complete UI Kit & Figma Design System', 'Motion Graphics Video Stingers (15s, 30s)', 'Interactive Web Showcase Prototype', 'Social Media Campaign Assets (45 pieces)'],
    featured: true,
  },
  {
    id: 'gratias-signage',
    title: 'GRATIAS Building Dimensional Architectural Signage',
    category: 'signage',
    categoryLabel: 'Signage & Large Format',
    client: 'Gratias Commercial Properties',
    year: '2025',
    image: '/src/assets/images/vinci_hero_studio_1791878373846.jpg',
    description: 'Bespoke 3D brushed brass dimensional lettering, weather-resistant acrylic backing, warm indirect LED illumination, and roadside directional pylons along Salaama Road.',
    objective: 'Deliver an iconic landmark presence for GRATIAS Building that is visible from afar along Salaama Road day and night.',
    specs: ['Material: 3mm Brushed Solid Brass Face + 20mm Acrylic Spacer', 'Lighting: IP67 Waterproof 3000K Warm Backlit LEDs', 'Span: 6.2 meters main fascia lettermark'],
    finishes: ['Brushed Satin Clear Lacquer', 'CNC Precision Routed Contours', 'Anti-Corrosive Outdoor Mounting Brackets', 'Concealed Transformer Box'],
    deliverables: ['Fascia Architectural Signage', 'Ground Floor Directory Board', 'Roadside Cantilever Pylon Sign', 'Emergency Exit Safety Wayfinding'],
  },
  {
    id: 'kavuma-roasters',
    title: 'Kavuma Artisanal Coffee Packaging & Foil Bags',
    category: 'print',
    categoryLabel: 'Custom Print & Packaging',
    client: 'Kavuma Specialty Coffee Roasters',
    year: '2025',
    image: '/src/assets/images/vinci_print_craft_1791878375322.jpg',
    description: 'Stand-up degassing valve coffee pouches with metallic spot foil, biodegradable inner lining, and tactile embossed roast-profile stamps.',
    objective: 'Provide premium export-grade packaging communicating authentic Ugandan origins, roast profiles, and specialty brewing specs.',
    specs: ['Structure: Quad-Seal Box Bottom Valve Pouch', 'Finishing: Spot Gloss UV over Natural Kraft Paper Texture', 'Capacity: 250g & 1000g sizes'],
    finishes: ['Degassing One-Way Valve Integration', 'Resealable Zip-Lock System', 'Spot Matte UV Lacquer', 'Hot Stamped Serial Number Badges'],
    deliverables: ['Pouch Packaging Line (3 Roast Variations)', 'Batch Tasting Labels', 'Retail Counter Display Carton', 'Promotional Barista Aprons'],
  },
  {
    id: 'nesta-station-rebrand',
    title: 'Nesta Corridor Large-Format Brand Rollout',
    category: 'signage',
    categoryLabel: 'Signage & Large Format',
    client: 'Corridor Logistics & Retail',
    year: '2026',
    image: '/src/assets/images/vinci_hero_studio_1791878373846.jpg',
    description: 'Heavyweight weather-resistant vinyl banners, high-intensity reflective canopy fascias, and illuminated forecourt point-of-sale displays along Salaama Road.',
    objective: 'Maximize visual impact and navigational clarity for motorists and transit users along the busy Salaama Road commercial artery.',
    specs: ['Substrate: 510gsm High-Tenacity Reinforced PVC Frontlit Banner', 'Inks: UV-Curable Fade-Resistant Eco-Solvent', 'Durability: 3-Year Outdoor UV Warranty'],
    finishes: ['High-Frequency Welded Hemming', 'Nickel Plated Anti-Rust Eyelets', 'Reflective Grade Micro-Prismatic Sheeting', 'Steel Truss Tensioning Framework'],
    deliverables: ['12m Forecourt Billboard Banner', 'Canopy Identity Graphic Wraps', 'Pump Island Price Signs', 'Safety & Navigational Wayfinding Graphics'],
  },
];

export const SERVICES = [
  {
    number: '01',
    title: 'High-End Corporate Branding & Visual Identity',
    tagline: 'Strategy, Monograms & Comprehensive Brand Systems',
    description: 'We construct timeless corporate identities that command authority. From logo engineering and custom typography to extensive brand books and guidelines, we build cohesive assets designed to scale.',
    capabilities: [
      'Custom Logo Marks, Monograms & Wordmarks',
      'Typography Selection, Hierarchy & Grid Systems',
      'Comprehensive Brand Guidelines & Style Books',
      'Corporate Stationery (Business Cards, Letterheads, Envelopes)',
      'Brand Repositioning & Commercial Relaunches',
    ],
  },
  {
    number: '02',
    title: 'Custom Printing & Tactile Craftsmanship',
    tagline: 'Foil Stamping, Embossing, UV Coating & Luxury Stocks',
    description: 'At our Gratias Building studio, we merge modern Heidelberg & UV printing equipment with artisanal hand-finishing. We turn ordinary paper into memorable tactile experiences.',
    capabilities: [
      'Luxury Business Cards (350–600gsm Cotton, Velvet, Duplex)',
      'Metallic Hot Foil Stamping (Gold, Copper, Rose Gold, Holographic)',
      'Blind Debossing & Multi-Level Sculpted Embossing',
      'Spot UV Gloss, Raised Varnish & Soft-Touch Matte Laminations',
      'Custom Packaging Boxes, Folding Cartons & Rigid Slide Boxes',
    ],
  },
  {
    number: '03',
    title: 'Digital Design & Kinetic Motion Systems',
    tagline: 'Modern UI/UX, Dynamic Assets & Social Campaigns',
    description: 'Your digital footprint should look just as bespoke as your print collateral. We craft clean, engaging digital experiences, motion graphics, and social branding kits that turn passive scrollers into dedicated clients.',
    capabilities: [
      'Modern UI/UX Design & Interactive Prototypes',
      'Motion Graphics, Logo Reveals & Kinetic Typography',
      'High-Impact Social Media Content Kits & Story Templates',
      'Digital Lookbooks, Annual Reports & PDF Presentations',
      'Email Newsletter Templates & Digital Campaign Banners',
    ],
  },
  {
    number: '04',
    title: 'Signage, Large Format & Environmental Graphics',
    tagline: 'Architectural Fascias, 3D Letters & Outdoor Billboards',
    description: 'Transform physical spaces into unforgettable brand statements. Located right on Salaama Road, we manufacture and install durable outdoor signage, indoor corporate office branding, and large-format banners.',
    capabilities: [
      '3D Channel Letters & Acrylic Backlit LED Fascias',
      'Heavy-Duty PVC Outdoor Billboards & Tear-Drop Banners',
      'Architectural Office Wall Decals & Frosted Glass Films',
      'Vehicle Wraps, Fleet Decals & Transit Advertising',
      'Event Backdrops, Pull-Up Banners & Exhibition Booth Displays',
    ],
  },
];

export const STUDIO_PROMPTS: StudioPrompt[] = [
  {
    id: 'master-website-prompt',
    title: 'Vinci Studios Master Portfolio Website Brief',
    tag: 'Web Development / AI Prompt',
    description: 'The master comprehensive specification prompt describing Vinci Studios, its leadership, location, and aesthetic parameters.',
    promptText: `Create a high-end luxury portfolio website for "VINCI STUDIOS", an elite graphic design, branding, and custom print house.
Location: GRATIAS Building, along Salaama Road (immediately after Nesta Petrol Station), Kampala, Uganda.
Leadership: Owned by Mr. Muyanja Geofry (Founder & Creative Director) and managed by Nanyonjo Fridaus (Studio Operations & Client Relations Manager).
Core Offerings:
1. High-End Branding & Corporate Identity (Monograms, Brand Books, Typography Systems)
2. Custom Printing & Specialty Finishes (Hot Foil Stamping, Sculpted Embossing, Spot UV, Luxury 600gsm Cotton Business Cards, Custom Rigid Packaging)
3. Digital Design & Kinetic Motion Graphics (UI/UX, Social Kits, Digital Collateral)
4. Signage & Large Format Displays (3D Illuminated Letters, Architectural Office Graphics, Outdoor PVC Banners)
Design Aesthetic: Dark minimalist luxury canvas (#080808), warm amber/copper accents, tight architectural typography, media-first bento grid layout, interactive quote calculator, copyable brief prompts, authentic Salaama road directions guide, direct WhatsApp booking button (+256 700 892 114), and zero generic AI slop.`,
  },
  {
    id: 'luxury-branding-prompt',
    title: 'Luxury Brand Identity & Packaging Creative Brief',
    tag: 'Client Creative Brief',
    description: 'Use this ready prompt to brief Vinci Studios or generate concept visual decks for high-end corporate identity and luxury print packaging.',
    promptText: `Creative Brief for Vinci Studios:
Project: High-End Corporate Rebrand & Tactile Print Suite
Client Type: Premium African Commercial Enterprise / Boutique Hospitality
Deliverables Required:
- Primary & secondary logo marks with custom geometric monogram
- Full typographic system pairing architectural sans-serif with bespoke editorial serif
- Color specification palette with Pantone references (including 1 metallic foil specification)
- 500-unit run of luxury 600gsm duplex business cards featuring copper hot foil stamping and blind deboss
- Custom folding slide packaging box with soft-touch matte lamination and custom EVA foam insert
Studio Notes: Consult with Mr. Muyanja Geofry on monogram art direction and coordinate sample proofing with Nanyonjo Fridaus at Gratias Building, Salaama Road.`,
  },
  {
    id: 'custom-print-prompt',
    title: 'Technical Print & Large Format Production Spec Prompt',
    tag: 'Production Specification',
    description: 'Technical production brief for UV printing, metallic finishes, and outdoor signage along commercial roads.',
    promptText: `Technical Production Order Specification:
Vendor: Vinci Studios (Gratias Building, Salaama Road past Nesta Petrol Station)
Attention: Nanyonjo Fridaus (Studio Operations Manager)
Specifications:
1. Large Format Outdoor Banner: 510gsm High-tenacity reinforced PVC, UV-curable inks with 3-year outdoor fade guarantee, high-frequency reinforced perimeter hem with solid nickel grommets spaced 30cm on center.
2. Executive Stationery Suite: 1,000 units on 400gsm FSC-certified uncoated cotton paper, double-sided spot UV varnish over matte velvet lamination, precision die-cut corners.
3. Turnaround: Express 48-hour delivery with pre-production physical proof approval at Gratias Building front desk.`,
  },
  {
    id: 'social-brand-prompt',
    title: 'Digital Campaign & Kinetic Motion Brief Prompt',
    tag: 'Digital Marketing & Social',
    description: 'Brief prompt for launching high-impact social media assets, digital lookbooks, and kinetic video reels.',
    promptText: `Digital Campaign Design Brief:
Agency: Vinci Studios Digital Motion Lab
Brief: Design a 30-day multi-channel digital launch campaign consisting of:
- 15x High-retention carousel graphics (1080x1350px 4:5 ratio) with minimalist dark mode typography
- 3x 15-second kinetic typography motion video stingers for Instagram Reels & TikTok
- Complete editable Figma design component library with pre-tested contrast ratios
- Delivery of all finalized vector SVG assets, MP4 60fps video renders, and transparent PNG brand watermarks.`,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Vinci Studios transformed our corporate identity completely. The copper foil business cards and embossed folders made an immediate impression during our investor roadshow.',
    author: 'David Kato',
    role: 'Managing Partner',
    company: 'Apex Horizon Capital, Kampala',
    outcome: 'Closed Series A financing with elevated brand credibility',
  },
  {
    quote: 'Fridaus and Geofry run the sharpest print operation in town. We had an urgent conference requiring 300 custom rigid presentation boxes delivered to Speke Resort Munyonyo—they hit the deadline with flawless color fidelity.',
    author: 'Grace Namukasa',
    role: 'Head of Marketing',
    company: 'East Africa Fintech Forum',
    outcome: 'Delivered 300 luxury boxed packs in under 48 hours',
  },
  {
    quote: 'Their location on Salaama Road at Gratias Building is super convenient. We just drop by after Nesta Petrol Station to inspect live proofs. You won’t find this level of tactile craft anywhere else in Kampala.',
    author: 'Brian Mukisa',
    role: 'Creative Director',
    company: 'Urban Arc Interiors',
    outcome: 'Standardized company-wide signage & print collateral',
  },
];

export const ESTIMATOR_RATES = {
  services: [
    { id: 'brand_identity', name: 'Corporate Brand Identity Package', baseUGX: 1200000, baseUSD: 320, description: 'Logo mark, typography, brand guidelines & stationery suite' },
    { id: 'luxury_cards', name: 'Luxury Cotton Business Cards', baseUGX: 250000, baseUSD: 70, description: '100 pcs 450–600gsm with custom foil stamping' },
    { id: 'rigid_packaging', name: 'Custom Rigid Packaging Boxes', baseUGX: 850000, baseUSD: 230, description: '100 pcs custom slide box with foam insert & debossing' },
    { id: 'large_banner', name: 'Heavy-Duty PVC Outdoor Banner', baseUGX: 180000, baseUSD: 50, description: 'Large format outdoor billboard banner with reinforced hems' },
    { id: 'digital_motion', name: 'Digital UI Kit & Motion Stinger', baseUGX: 650000, baseUSD: 175, description: 'Interactive design assets and 15s kinetic video reveal' },
    { id: 'illuminated_signage', name: '3D Illuminated Acrylic Signage', baseUGX: 1500000, baseUSD: 400, description: 'Channel letters with waterproof warm LED backlighting' },
  ],
  materials: [
    { id: 'premium_cotton', name: '600gsm Imported Cotton Board', multiplier: 1.4 },
    { id: 'velvet_card', name: '350gsm Velvet Soft-Touch Card', multiplier: 1.15 },
    { id: 'rigid_greyboard', name: '1200gsm Heavy Industrial Greyboard', multiplier: 1.5 },
    { id: 'heavy_pvc', name: '510gsm High-Tenacity Reinforced PVC', multiplier: 1.1 },
    { id: 'brushed_brass', name: 'Solid Brushed Brass & Cast Acrylic', multiplier: 1.6 },
    { id: 'standard_art', name: 'Standard 300gsm Silk Art Paper', multiplier: 1.0 },
  ],
  finishes: [
    { id: 'metallic_foil', name: 'Metallic Hot Foil Stamping (Gold/Copper)', addUGX: 120000 },
    { id: 'blind_deboss', name: 'Deep Blind Debossing / Letterpress', addUGX: 95000 },
    { id: 'spot_uv', name: 'Spot Gloss UV Raised Varnish', addUGX: 80000 },
    { id: 'soft_touch', name: 'Matte Soft-Touch Anti-Scratch Lamination', addUGX: 60000 },
    { id: 'none', name: 'Standard Precision Machine Trim', addUGX: 0 },
  ],
  turnaroundMultipliers: {
    standard: 1.0,
    express: 1.25,
    rush: 1.5,
  },
};
