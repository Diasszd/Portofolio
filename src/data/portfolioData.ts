export type ProjectCategory = 'Web Design' | 'Visual Campaign' | 'UI Exploration';

export interface ProjectItem {
  id: string;
  number: string;
  tag: string;
  tagTone: 'crimson' | 'neutral';
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  client: string;
  role: string;
  tools: string[];
  image: string;
  imageAlt: string;
  grayscaleDefault?: boolean;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  outcomes: { label: string; value: string }[];
  palette: string[];
  skillsUsed: string[];
  featured: boolean;
}

export interface CredentialItem {
  title: string;
  organization: string;
  period: string;
  highlight?: boolean;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  deliverable: string;
  iconName: 'search' | 'pen' | 'layers' | 'code' | 'send';
}

export const PORTRAIT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDqtusoqbA5dMrNC5s40uaN84751VP_Zqds1XlnpC6s9jYumCB80SQL23BKMHqcp5zwNMdUHlXC2eejW2NBcORhYETNR3a7vafXsOoY-DEBtyXZMhWMg2D_ir28eemFjlLOCLnBgQm9Rlpb0TNWCW1DyISyumjf6_l2YOVJyR1oUloY_oZXSHcylcG-l8Pkj9PYcJHR7ybP2JUqoJgMhQZFrvnIFWwSSYgS-Ww-FoyQoaplO-O7TQ';

export const PROFILE = {
  brandTop: 'WEB DESIGNER',
  brandSub: 'DIGITAL CREATOR',
  statusLabel: 'AVAILABLE FOR FREELANCE',
  greeting: "Hello, I'm",
  firstName: 'DIAZ AULADY',
  lastName: 'RAHMAN',
  role: 'WEB DESIGNER & VISUAL DESIGNER',
  bio: 'I design clean, user-focused web interfaces and visual assets that combine aesthetics with clarity. Passionate about modern layouts, responsive design, and meaningful details.',
  location: 'BASED IN BANDUNG, INDONESIA',
  shortLocation: 'Bandung, Indonesia',
  shoulderNote: 'Turning ideas into clean & purposeful visual experiences.',
  quote: 'Good design is not just how it looks, but how clearly it communicates.',
  signature: 'Diaz Aulady',
  quoteClosing: "LET'S CREATE SOMETHING GREAT TOGETHER.",
  email: 'diazaulady08@email.com',
  linkedinUrl: 'https://www.linkedin.com/in/diaz-aulady-rahman-0a1537379',
  linkedinLabel: 'linkedin.com/in/diaz-aulady-rahman',
  instagramUrl: 'https://www.instagram.com/o_0dias/',
  instagramLabel: '@o_0dias',
  copyright: '© 2026 DIAZ AULADY RAHMAN. ALL RIGHTS RESERVED.',
  footerMeta: 'BANDUNG, INDONESIA — WEB & VISUAL DESIGNER',
};

export const HERO_METRICS = [
  {
    value: '2025',
    label: 'PT.INTENS / DESIGN INTERN',
  },
  {
    value: '02+',
    label: 'CORE TOOLS / FIGMA & CANVA',
  },
  {
    value: 'IT-PLN',
    label: 'INFORMATICS / UNDERGRADUATE',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'veloce-bikes',
    number: '01',
    tag: 'VELOCE / E-COMMERCE',
    tagTone: 'crimson',
    title: 'PORTFOLIO CONCEPT',
    subtitle: 'WEB DESIGN · FIGMA',
    category: 'Web Design',
    year: '2025',
    client: 'Veloce Performance Cycles (Concept)',
    role: 'Lead Web & UI Designer',
    tools: ['Figma', 'Responsive Grid', 'Design System'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOhDtxw5HtqPCOfSQ7A6RolkuVxzzo_2CSgjFh7B8YQfY-55NyxnXuRQLuCWNAP9j2PnAZgXL0fBv03wnCpdeALAOefM4AI364JpsWjIHvRiuzyGB-bjQjUQI1H-buUHIRSm-E3QWoQiDJp5xR2mjpby5UDBgLYVO1EYBSvgr727Q2vDW_8_XvGrMNgz7ZJZYPRJfnxT4ev7wAwleClKetjIk_6FWXU6D-woFa',
    imageAlt: 'Veloce Bikes E-Commerce Concept',
    grayscaleDefault: true,
    summary:
      'A high-contrast editorial e-commerce flagship concept built to showcase carbon road bicycles with dramatic product framing and zero visual clutter.',
    challenge:
      'Performance cycling storefronts often bury technical geometry specifications inside dense tables, breaking the aspirational mood of flagship frame launches.',
    solution:
      'Designed an asymmetric modular product layout pairing monumental condensed typography with crisp specification drawers and seamless desktop-to-mobile breakpoints.',
    deliverables: [
      'Full Desktop & Mobile Responsive Wireframes',
      'Interactive Frame Configurator Prototype in Figma',
      'Component Library & Monochrome Editorial Token Set',
    ],
    outcomes: [
      { label: 'Screens Designed', value: '18+' },
      { label: 'Breakpoints', value: '3 Viewports' },
      { label: 'Design Tool', value: 'Figma' },
    ],
    palette: ['#0B0B0C', '#18181B', '#E11D23', '#F5F5F7'],
    skillsUsed: ['WEB DESIGN', 'UI/UX DESIGN', 'FIGMA', 'RESPONSIVE LAYOUT'],
    featured: true,
  },
  {
    id: 'woodcraft-furniture',
    number: '02',
    tag: 'WOODCRAFT / FURNITURE',
    tagTone: 'neutral',
    title: 'VISUAL CAMPAIGN DESIGN',
    subtitle: 'GRAPHIC DESIGN · PT.INTENS',
    category: 'Visual Campaign',
    year: '2025',
    client: 'PT.INTENS / Woodcraft Studio Showcase',
    role: 'Visual Designer (Internship)',
    tools: ['Canva', 'Figma', 'Visual Branding'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAYAMiz8J71OEyQAfAXGHIEwuJK_cHJrlE1h2oWbbWLZ7c7vHeALAYUF1RyCboJOC0_UpEhoMDk9BL373eHjMX8lXLN1yJzwYnkIoGm4-znJJw3ShVUCOyXdCzLm1pkdKmnkMe4cOJOr6PvPvEzSomCgqukGNafUZa5sgwo7V_nj7Pz6o-VIiv9_u0LN4BvQDUTIu-4Gp8q_cCVjdgiHyi-XfygWfk38OlAd4Zu',
    imageAlt: 'Timeless Crafted Furniture Design Concept',
    grayscaleDefault: false,
    summary:
      'Cohesive visual campaign and digital catalog direction celebrating handcrafted timber furniture through warm architectural lighting and disciplined grid pacing.',
    challenge:
      'Translating tactile wood joinery and material craft into social, web banner, and presentation deliverables under tight internship production timelines.',
    solution:
      'Created reusable editorial grid templates in Figma and Canva that standardized headline hierarchy, shadow contrast, and stakeholder review handoffs.',
    deliverables: [
      'Multi-Channel Campaign Key Visuals',
      'Digital Lookbook Layout & Editorial Grid',
      'Stakeholder Presentation Deck Templates',
    ],
    outcomes: [
      { label: 'Internship Term', value: '4 Months' },
      { label: 'Campaign Assets', value: '24 Pieces' },
      { label: 'Core Tools', value: 'Figma & Canva' },
    ],
    palette: ['#141210', '#4A090B', '#D4A373', '#F5F5F7'],
    skillsUsed: ['VISUAL BRANDING', 'CANVA', 'FIGMA', 'STAKEHOLDER MANAGEMENT', 'TIME & PRIORITIES'],
    featured: true,
  },
  {
    id: 'urbanic-editorial',
    number: '03',
    tag: 'URBANIC / EDITORIAL',
    tagTone: 'crimson',
    title: 'UI EXPLORATION',
    subtitle: 'LANDING PAGE · FIGMA & CANVA',
    category: 'UI Exploration',
    year: '2025',
    client: 'Urbanic Editorial Magazine (Exploration)',
    role: 'UI & Editorial Designer',
    tools: ['Figma', 'Canva', 'Typography Systems'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDoBxsWH50jE8fOMAA4gBKck9LsSc4C_F6UnAR4EhjonniCjBB3Sfl0kS74AiSF8jfVZgorLVaKfQzG9I10bNKSRLih5Ex2naUE44jipA6Ww6cRVEXjjV_sVSLwXQ_ThBiHTmRZ-I0ccbNV2Y4rq6hQA39nE735nlypWQFsjPICISIieVwfi9JzbV_mkUibhfXxQMSusqKXVudZLwjSlBIO4VJZmHxHG4ZEGW6u',
    imageAlt: 'Urbanic Fashion Editorial Magazine',
    grayscaleDefault: false,
    summary:
      'An avant-garde fashion lookbook landing page exploring brutalist headline scale, stark 1px dividers, and rhythmic negative space.',
    challenge:
      'Balancing oversized magazine-style display typography with readable article metadata and responsive mobile stacking without losing editorial drama.',
    solution:
      'Built a fluid typographic scale pairing condensed uppercase headers with clean geometric body prose and deliberate image aspect-ratio framing.',
    deliverables: [
      'Editorial Landing Page Exploration',
      'Interactive Lookbook Hover States',
      'Typography Scale & Grid Documentation',
    ],
    outcomes: [
      { label: 'Grid Columns', value: '12-Col' },
      { label: 'Focus', value: 'Editorial UI' },
      { label: 'Tools', value: 'Figma & Canva' },
    ],
    palette: ['#0B0B0C', '#242428', '#E11D23', '#FFFFFF'],
    skillsUsed: ['UI/UX DESIGN', 'WEB DESIGN', 'FIGMA', 'CANVA', 'PROBLEM SOLVING'],
    featured: true,
  },
  {
    id: 'osis-event-portal',
    number: '04',
    tag: 'FITHRAH INSANI / STUDENT ORG',
    tagTone: 'neutral',
    title: 'EVENT VISUAL IDENTITY',
    subtitle: 'BRANDING & WEB · COORDINATION',
    category: 'Visual Campaign',
    year: '2024',
    client: 'OSIS SMK Fithrah Insani',
    role: 'Koordinator Seksi Bidang',
    tools: ['Canva', 'Figma', 'Stakeholder Alignment'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAYAMiz8J71OEyQAfAXGHIEwuJK_cHJrlE1h2oWbbWLZ7c7vHeALAYUF1RyCboJOC0_UpEhoMDk9BL373eHjMX8lXLN1yJzwYnkIoGm4-znJJw3ShVUCOyXdCzLm1pkdKmnkMe4cOJOr6PvPvEzSomCgqukGNafUZa5sgwo7V_nj7Pz6o-VIiv9_u0LN4BvQDUTIu-4Gp8q_cCVjdgiHyi-XfygWfk38OlAd4Zu',
    imageAlt: 'Event Visual Identity System',
    grayscaleDefault: true,
    summary:
      'Coordinated visual identity, event signage, and digital registration flows across school-wide technology and creative programs.',
    challenge:
      'Aligning multiple student committees and faculty stakeholders around a single cohesive visual system with fast turnaround.',
    solution:
      'Established clear brand rules, reusable poster layouts, and prioritized production checklists to ship materials on schedule.',
    deliverables: [
      'Event Poster & Banner System',
      'Digital Registration Interface Mockup',
      'Committee Visual Guidelines',
    ],
    outcomes: [
      { label: 'Tenure', value: '2023–2025' },
      { label: 'Role', value: 'Coordinator' },
      { label: 'Focus', value: 'Visual Branding' },
    ],
    palette: ['#0B0B0C', '#1C1C1F', '#E11D23', '#F5F5F7'],
    skillsUsed: ['VISUAL BRANDING', 'CANVA', 'TIME & PRIORITIES', 'STAKEHOLDER MANAGEMENT'],
    featured: false,
  },
  {
    id: 'rpl-system-ui',
    number: '05',
    tag: 'INFORMATICS / SYSTEM UI',
    tagTone: 'crimson',
    title: 'RESPONSIVE INTERFACE KIT',
    subtitle: 'UI/UX DESIGN · FIGMA',
    category: 'Web Design',
    year: '2025',
    client: 'Informatics Study & Portfolio System',
    role: 'UI/UX & Frontend Concept Designer',
    tools: ['Figma', 'Responsive Layout', 'Component Tokens'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOhDtxw5HtqPCOfSQ7A6RolkuVxzzo_2CSgjFh7B8YQfY-55NyxnXuRQLuCWNAP9j2PnAZgXL0fBv03wnCpdeALAOefM4AI364JpsWjIHvRiuzyGB-bjQjUQI1H-buUHIRSm-E3QWoQiDJp5xR2mjpby5UDBgLYVO1EYBSvgr727Q2vDW_8_XvGrMNgz7ZJZYPRJfnxT4ev7wAwleClKetjIk_6FWXU6D-woFa',
    imageAlt: 'Responsive Interface Kit',
    grayscaleDefault: false,
    summary:
      'Modular dark-mode UI kit bridging software engineering structure with high-contrast editorial typography and accessible spacing tokens.',
    challenge:
      'Bridging the gap between developer handoff specs and clean visual polish across multi-column web layouts.',
    solution:
      'Structured auto-layout Figma components with explicit spacing tokens, clear hover states, and developer-ready asset exports.',
    deliverables: [
      'Auto-Layout Figma Component Library',
      'Spacing & Typography Token Spec',
      'Developer Handoff Documentation',
    ],
    outcomes: [
      { label: 'Components', value: '32+' },
      { label: 'Grid', value: '1400px Max' },
      { label: 'Handoff', value: 'Dev-Ready' },
    ],
    palette: ['#0B0B0C', '#121214', '#E11D23', '#8E8E93'],
    skillsUsed: ['UI/UX DESIGN', 'FIGMA', 'RESPONSIVE LAYOUT', 'PROBLEM SOLVING'],
    featured: false,
  },
];

export const EDUCATION_ITEMS: CredentialItem[] = [
  {
    title: 'Mahasiswa Teknik Informatika',
    organization: 'Institut Teknologi PLN',
    period: '2026 - Now',
    highlight: true,
    description: 'Undergraduate studies in Informatics Engineering, combining structured software thinking with modern web design craft.',
  },
  {
    title: 'Siswa Rekayasa Perangkat Lunak / IT',
    organization: 'SMK Informatika Fithrah Insani',
    period: '2023 - 2025',
    highlight: true,
    description: 'Vocational Software Engineering track covering web fundamentals, interface architecture, and collaborative project delivery.',
  },
];

export const EXPERIENCE_ITEMS: CredentialItem[] = [
  {
    title: 'Desainer (Internship)',
    organization: 'PT.INTENS',
    period: '4 Agu - 1 Des 2025',
    highlight: false,
    description: 'Produced visual campaign assets, layout systems, and digital design deliverables in collaboration with internal teams.',
  },
  {
    title: 'Koordinator Seksi Bidang',
    organization: 'OSIS SMK Fithrah Insani',
    period: '2023 - 2025',
    highlight: false,
    description: 'Led cross-team coordination, event timelines, and stakeholder alignment for student organization initiatives.',
  },
];

export const SKILLS_LIST = [
  'WEB DESIGN',
  'UI/UX DESIGN',
  'FIGMA',
  'CANVA',
  'VISUAL BRANDING',
  'RESPONSIVE LAYOUT',
  'PROBLEM SOLVING',
  'TIME & PRIORITIES',
  'STAKEHOLDER MANAGEMENT',
];

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    summary: 'Understanding goals, audience, and project requirements.',
    deliverable: 'Project brief alignment, audience mapping, and reference audit.',
    iconName: 'search',
  },
  {
    number: '02',
    title: 'IDEATE',
    summary: 'Planning, wireframing, and exploring the right concept.',
    deliverable: 'Information hierarchy, wireframe flows, and editorial layout directions.',
    iconName: 'pen',
  },
  {
    number: '03',
    title: 'DESIGN',
    summary: 'Crafting visual design with a focus on user experience in Figma.',
    deliverable: 'High-contrast UI screens, typography pairing, and visual assets.',
    iconName: 'layers',
  },
  {
    number: '04',
    title: 'REFINE',
    summary: 'Iterating details, spacing, feedback, and typography balance.',
    deliverable: 'Responsive breakpoint checks, micro-spacing polish, and stakeholder review.',
    iconName: 'code',
  },
  {
    number: '05',
    title: 'DELIVER',
    summary: 'Preparing clean developer-ready assets and design specs.',
    deliverable: 'Organized Figma frames, exported media assets, and handoff notes.',
    iconName: 'send',
  },
];
