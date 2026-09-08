/**
 * Single source of truth for site copy and structured data.
 * Written in the first person — enVision Studio is a solo studio.
 */

export const SITE = {
  name: 'enVision Studio',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.envisionstudio.co.nz',
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

/* ---------- Selected work (only work I can legitimately show) ---------- */
export const SELECTED_WORK = {
  name: 'Bumper Buddies',
  type: 'Booking & business management platform',
  summary:
    'An online booking platform for a vehicle service business. Customers book through a guided multi-step wizard that prices each job automatically; behind it, role-based dashboards handle scheduling, invoicing, payments, staff and revenue.',
  highlights: [
    'Multi-step online booking',
    'Automatic job pricing',
    'Invoices & payments',
    'Owner, admin & staff dashboards',
  ],
  stack: ['Laravel', 'Livewire', 'Tailwind CSS', 'SQLite'],
} as const;

/* ---------- What I can build (concepts, clearly not client case studies) ---------- */
export const BUILD_CONCEPTS = [
  { icon: 'globe', title: 'Business websites' },
  { icon: 'calendar', title: 'Booking platforms' },
  { icon: 'gauge', title: 'Admin dashboards' },
  { icon: 'users', title: 'Customer portals' },
  { icon: 'database', title: 'Business management systems' },
] as const;

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
