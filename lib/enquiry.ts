import { SERVICE_OPTIONS, BUDGET_OPTIONS, CONTACT_METHODS } from './content';

export type EnquiryInput = {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  service: string;
  budget?: string;
  message: string;
  contactMethod: string;
  // anti-spam
  company?: string; // honeypot — must stay empty
  elapsedMs?: number; // time on form before submit
};

export type EnquiryFields = Omit<EnquiryInput, 'company' | 'elapsedMs'>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ValidationResult =
  | { ok: true; data: EnquiryFields }
  | { ok: false; errors: Partial<Record<keyof EnquiryFields, string>> };

export function validateEnquiry(input: Partial<EnquiryInput>): ValidationResult {
  const errors: Partial<Record<keyof EnquiryFields, string>> = {};

  const name = (input.name ?? '').trim();
  const email = (input.email ?? '').trim();
  const message = (input.message ?? '').trim();
  const phone = (input.phone ?? '').trim();
  const business = (input.business ?? '').trim();
  const service = (input.service ?? '').trim();
  const budget = (input.budget ?? '').trim();
  const contactMethod = (input.contactMethod ?? '').trim();

  if (name.length < 2) errors.name = 'Please enter your name.';
  if (name.length > 120) errors.name = 'That name is too long.';
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';
  if (email.length > 200) errors.email = 'That email is too long.';
  if (message.length < 10) errors.message = 'Please add a sentence or two about your project.';
  if (message.length > 5000) errors.message = 'Please shorten your message a little.';
  if (phone.length > 40) errors.phone = 'That phone number is too long.';
  if (business.length > 160) errors.business = 'That business name is too long.';
  if (service && !SERVICE_OPTIONS.includes(service as (typeof SERVICE_OPTIONS)[number])) {
    errors.service = 'Please choose a service from the list.';
  }
  if (budget && !BUDGET_OPTIONS.includes(budget as (typeof BUDGET_OPTIONS)[number])) {
    errors.budget = 'Please choose a budget from the list.';
  }
  if (contactMethod && !CONTACT_METHODS.includes(contactMethod as (typeof CONTACT_METHODS)[number])) {
    errors.contactMethod = 'Please choose a contact method.';
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      name,
      email,
      phone: phone || undefined,
      business: business || undefined,
      service: service || 'Not sure yet',
      budget: budget || undefined,
      message,
      contactMethod: contactMethod || 'Email',
    },
  };
}
