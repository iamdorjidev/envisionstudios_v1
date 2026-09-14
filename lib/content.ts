/**
 * Single source of truth for site copy and structured data.
 * Written in the first person — enVision Studio is a solo studio.
 */

const FALLBACK_SITE_URL = 'https://www.envisionstudio.co.nz';

/**
 * Resolve the canonical site URL from env, tolerating common misconfigurations
 * (empty string, missing protocol, trailing slash). Never throws — a bad value
 * falls back so `new URL(SITE.url)` in metadata can't break the build.
 */
function resolveSiteUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL ?? '').trim();
  const candidate = raw || process.env.VERCEL_PROJECT_PRODUCTION_URL || '';
  if (!candidate) return FALLBACK_SITE_URL;
  const withProtocol = /^https?:\/\//i.test(candidate) ? candidate : `https://${candidate}`;
  try {
    return new URL(withProtocol).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const SITE = {
  name: 'enVision Studio',
  url: resolveSiteUrl(),
  email: 'tdorji.dev@gmail.com',
  location: 'Auckland, New Zealand',
  positioning: 'Websites • Web Applications • Business Systems',
} as const;

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
] as const;

/* ---------- Value strip ---------- */
export const VALUE_POINTS = [
  { icon: 'tag', title: 'Affordable pricing', text: 'Professional work without agency overhead.' },
  { icon: 'code', title: 'Professional development', text: 'Built properly, tested, and maintainable.' },
  { icon: 'layout', title: 'Custom solutions', text: 'Made to fit how your business actually works.' },
  { icon: 'chat', title: 'Direct communication', text: 'You deal with the developer, not an account manager.' },
] as const;

/* ---------- Services ---------- */
export const SERVICES = [
  {
    icon: 'globe',
    title: 'Business Websites',
    text: 'Professional, responsive websites designed to turn visitors into enquiries.',
  },
  {
    icon: 'layout',
    title: 'Custom Web Applications',
    text: 'Systems built around the way your business actually works.',
  },
  {
    icon: 'database',
    title: 'Business Management Systems',
    text: 'Booking, invoicing, customer management, dashboards and workflow tools.',
  },
  {
    icon: 'card',
    title: 'Booking & Payment Solutions',
    text: 'Make it easier for customers to book appointments and pay online.',
  },
  {
    icon: 'wrench',
    title: 'Website Maintenance',
    text: 'Updates, improvements, hosting, domains and ongoing support.',
  },
] as const;

/* ---------- Why enVision Studio ---------- */
export const WHY_POINTS = [
  { title: 'Affordable', text: 'Professional solutions without large-agency pricing.' },
  { title: 'Built for your business', text: 'No unnecessary features or over-complicated technology.' },
  { title: 'Direct communication', text: 'Work directly with the developer from start to finish.' },
  { title: 'Practical & reliable', text: 'Solutions designed to actually solve business problems.' },
] as const;

/* ---------- Selected work (only live, real projects — no employer work) ---------- */
export type Project = {
  name: string;
  type: string;
  summary: string;
  highlights: readonly string[];
  stack: readonly string[];
  url: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  featured?: boolean;
};

export const PROJECTS: readonly Project[] = [
  {
    name: 'Bumper Buddies',
    type: 'Booking & business management platform',
    summary:
      'A booking platform for a mobile vehicle service business. Customers book through a guided multi-step wizard that prices each job automatically; behind it, role-based dashboards handle scheduling, invoicing, payments, staff and revenue.',
    highlights: [
      'Multi-step online booking',
      'Automatic job pricing',
      'Invoices & payments',
      'Owner, admin & staff dashboards',
    ],
    stack: ['Laravel', 'Livewire', 'Tailwind CSS', 'SQLite'],
    url: 'https://bumperbuddies-fd68.vercel.app/',
    image: '/work/bumper-buddies.png',
    imageWidth: 1280,
    imageHeight: 800,
    featured: true,
  },
  {
    name: 'Kharchu Centre',
    type: 'Community & events website',
    summary:
      'A website for Kharchu Centre New Zealand, a Buddhist community organisation, presenting teachings, events and membership with a calm, editorial design built to welcome newcomers as easily as long-time members.',
    highlights: ['Events calendar', 'Membership & donations', 'Resources & FAQ', 'Gallery & news'],
    stack: ['Next.js', 'React'],
    url: 'https://karchucentre.vercel.app/',
    image: '/work/karchu-centre.png',
    imageWidth: 1280,
    imageHeight: 800,
  },
  {
    name: 'YOLO Hair Salon',
    type: 'Salon business website',
    summary:
      'A site for a Rosedale, Auckland hair and beauty studio — artist profiles, service galleries and testimonials, with a clear path to book by phone, text or Instagram.',
    highlights: ['Artist profiles & gallery', 'Service pages', 'Client testimonials', 'Direct booking contact'],
    stack: ['Next.js', 'React'],
    url: 'https://yolohair-salon.vercel.app/',
    image: '/work/yolo-hair-salon.png',
    imageWidth: 1280,
    imageHeight: 800,
  },
];

/* ---------- Process ---------- */
export const PROCESS_STEPS = [
  { num: '1', title: 'Tell me what you need', text: 'Send your requirements or a rough idea.' },
  { num: '2', title: 'Get a clear quote', text: "I'll recommend the right solution and provide pricing." },
  { num: '3', title: 'We build it', text: 'Development, testing and your feedback along the way.' },
  { num: '4', title: 'Launch & support', text: 'Your solution goes live, with ongoing support available.' },
] as const;

/* ---------- Contact form options ---------- */
export const SERVICE_OPTIONS = [
  'Business website',
  'Custom web application',
  'Business management system',
  'Booking & payment solution',
  'Website maintenance / redesign',
  'Not sure yet',
] as const;

export const BUDGET_OPTIONS = [
  'Not sure yet',
  'Under $2,000',
  '$2,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
] as const;

export const CONTACT_METHODS = ['Email', 'Phone', 'Either'] as const;
