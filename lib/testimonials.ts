/**
 * Homepage testimonials. Each entry needs a real quote, name and business
 * before it can go live — entries below are placeholders and are clearly
 * marked TODO in both this file and the rendered card so nobody mistakes
 * them for a real client quote.
 */

export type Testimonial = {
  quote: string;
  name: string;
  business: string;
  /** Optional path to a client/business logo under /public. */
  logo?: string;
  isPlaceholder?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'TODO: replace with a real quote from this client, once received.',
    name: 'TODO — client name',
    business: 'TODO — business name',
    isPlaceholder: true,
  },
  {
    quote: 'TODO: replace with a real quote from this client, once received.',
    name: 'TODO — client name',
    business: 'TODO — business name',
    isPlaceholder: true,
  },
];
