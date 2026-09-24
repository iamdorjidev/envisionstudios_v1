type Props = {
  variant?: 'primary' | 'ghost' | 'light';
  size?: 'md' | 'lg';
  label?: string;
};

/** "Book a Consultation" CTA — links straight to the enquiry form. */
export default function BookConsultation({ variant = 'ghost', size = 'md', label = 'Book a Consultation' }: Props) {
  return (
    <a href="/contact" className={`btn btn-${variant}${size === 'lg' ? ' btn-lg' : ''}`}>
      {label}
    </a>
  );
}
