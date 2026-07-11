import { useState } from 'react';
import Reveal from './Reveal.jsx';

const SERVICE_OPTIONS = [
  'Website Design & Development',
  'Website Maintenance',
  'Web Hosting',
  'System Development',
  'App Development',
  'Logo & Brand Design',
  'Other / Not Sure',
];

const SOCIALS = [
  { icon: 'fa-brands fa-facebook-f', label: 'Facebook' },
  { icon: 'fa-brands fa-instagram', label: 'Instagram' },
  { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
  { icon: 'fa-brands fa-github', label: 'GitHub' },
];

export default function Contact() {
  const [status, setStatus] = useState({ text: '', type: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setSubmitting(true);
    setStatus({ text: '', type: '' });

    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        body: new FormData(form),
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      });

      if (res.ok) {
        setStatus({ text: "Thanks! Your message has been sent — we'll be in touch soon.", type: 'success' });
        form.reset();
      } else {
        throw new Error('Request failed');
      }
    } catch (err) {
      setStatus({ text: 'Something went wrong. Please email us directly at tdorji.dev@gmail.com.', type: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <Reveal className="contact-info">
          <p className="eyebrow">Get In Touch</p>
          <h2>Let's Build Something <span className="gradient-text">Great Together</span></h2>
          <p className="section-desc">Tell us about your project and we'll get back to you shortly.</p>
          <div className="contact-detail"><i className="fa-solid fa-envelope"></i><span>tdorji.dev@gmail.com</span></div>
          <div className="contact-detail"><i className="fa-solid fa-location-dot"></i><span>Available for remote work, worldwide</span></div>
          <div className="social-links">
            {SOCIALS.map((s) => (
              <a href="#" aria-label={s.label} key={s.label}><i className={s.icon}></i></a>
            ))}
          </div>
        </Reveal>

        <Reveal as="form" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="service">Service Interested In</label>
            <select id="service" name="service" defaultValue={SERVICE_OPTIONS[0]}>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Project Details</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
            {submitting ? (
              <>Sending... <i className="fa-solid fa-spinner fa-spin"></i></>
            ) : (
              <>Send Message <i className="fa-solid fa-paper-plane"></i></>
            )}
          </button>
          <p className={`form-status${status.type ? ' ' + status.type : ''}`}>{status.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
