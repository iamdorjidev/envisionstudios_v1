'use client';

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import Icon from './Icon';
import BookConsultation from './BookConsultation';
import { SITE, SERVICE_OPTIONS, BUDGET_OPTIONS, CONTACT_METHODS } from '@/lib/content';
import type { EnquiryFields } from '@/lib/enquiry';

type Status = 'idle' | 'submitting' | 'success' | 'error';
type FieldErrors = Partial<Record<keyof EnquiryFields, string>>;

const FIELD_LABEL = 'form-label';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string>('');
  const mountedAt = useRef<number>(0);
  const formRef = useRef<HTMLFormElement | null>(null);
  const errorSummaryRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === 'error' && errorSummaryRef.current) errorSummaryRef.current.focus();
  }, [status, formError]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get('name') ?? ''),
      email: String(fd.get('email') ?? ''),
      phone: String(fd.get('phone') ?? ''),
      business: String(fd.get('business') ?? ''),
      service: String(fd.get('service') ?? ''),
      budget: String(fd.get('budget') ?? ''),
      message: String(fd.get('message') ?? ''),
      contactMethod: String(fd.get('contactMethod') ?? 'Email'),
      company: String(fd.get('company') ?? ''),
      elapsedMs: Date.now() - mountedAt.current,
    };

    setStatus('submitting');
    setErrors({});
    setFormError('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
        errors?: FieldErrors;
      };

      if (res.ok && data.ok) {
        setStatus('success');
        form.reset();
        return;
      }
      setStatus('error');
      setErrors(data.errors ?? {});
      setFormError(
        data.message ||
          `Something went wrong. Please email me directly at ${SITE.email}.`,
      );
    } catch {
      setStatus('error');
      setFormError(`Couldn't reach the server. Please email me directly at ${SITE.email}.`);
    }
  }

  if (status === 'success') {
    return (
      <section className="section section--paper contact" id="contact">
        <div className="container contact-inner">
          <div className="contact-success" role="status">
            <span className="contact-success-mark">
              <Icon name="check" size={26} />
            </span>
            <h2>Thanks — your enquiry is in.</h2>
            <p>
              I&apos;ve received your enquiry and will get back to you shortly, usually within one
              business day. A confirmation email is on its way to you now.
            </p>
            <button type="button" className="btn btn-ghost" onClick={() => setStatus('idle')}>
              Send another enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section section--paper contact" id="contact">
      <div className="container contact-inner">
        <div className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Tell me about your project</h2>
          <p className="contact-lead">
            Send a few details and I&apos;ll come back with a recommended approach and a clear quote.
          </p>
          <p className="contact-alt">
            <Icon name="mail" size={16} />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <p className="contact-alt">
            <Icon name="mapPin" size={16} />
            {SITE.location} — available remotely
          </p>
          <div className="contact-consult">
            <span>Prefer to talk it through?</span>
            <BookConsultation variant="ghost" />
          </div>
        </div>

        <form ref={formRef} className="enquiry-form" onSubmit={handleSubmit} noValidate>
          {status === 'error' && formError ? (
            <p className="form-alert" role="alert" tabIndex={-1} ref={errorSummaryRef}>
              {formError}
            </p>
          ) : null}

          {/* honeypot */}
          <div className="hp" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="form-row">
            <Field label="Name" name="name" error={errors.name} required>
              <input id="name" name="name" type="text" autoComplete="name" required
                aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
            </Field>
            <Field label="Email" name="email" error={errors.email} required>
              <input id="email" name="email" type="email" autoComplete="email" required
                aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />
            </Field>
          </div>

          <div className="form-row">
            <Field label="Phone" name="phone" error={errors.phone} optional>
              <input id="phone" name="phone" type="tel" autoComplete="tel"
                aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-err' : undefined} />
            </Field>
            <Field label="Business name" name="business" error={errors.business} optional>
              <input id="business" name="business" type="text" autoComplete="organization" />
            </Field>
          </div>

          <div className="form-row">
            <Field label="Service required" name="service" error={errors.service} required>
              <select id="service" name="service" defaultValue={SERVICE_OPTIONS[0]} required>
                {SERVICE_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field label="Budget range" name="budget" error={errors.budget} optional>
              <select id="budget" name="budget" defaultValue={BUDGET_OPTIONS[0]}>
                {BUDGET_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Project description" name="message" error={errors.message} required>
            <textarea id="message" name="message" rows={5} required
              placeholder="What are you trying to build or solve? Anything you already know about scope, timing or must-haves."
              aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
          </Field>

          <fieldset className="form-fieldset">
            <legend className={FIELD_LABEL}>Preferred contact method</legend>
            <div className="form-radios">
              {CONTACT_METHODS.map((m, i) => (
                <label key={m} className="form-radio">
                  <input type="radio" name="contactMethod" value={m} defaultChecked={i === 0} />
                  <span>{m}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
            {status !== 'submitting' && <Icon name="arrowRight" size={15} />}
          </button>
          <p className="form-note">
            No spam, ever. Your details are only used to reply to this enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  required,
  optional,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`form-field${error ? ' has-error' : ''}`}>
      <label className={FIELD_LABEL} htmlFor={name}>
        {label}
        {optional ? <span className="opt"> (optional)</span> : null}
        {required ? (
          <span className="req" aria-hidden="true">
            {' '}
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <span className="field-err" id={`${name}-err`}>
          {error}
        </span>
      ) : null}
    </div>
  );
}
