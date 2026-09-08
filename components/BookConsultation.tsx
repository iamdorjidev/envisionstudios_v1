'use client';

import { useEffect, useRef } from 'react';
import Icon from './Icon';

type Props = {
  variant?: 'primary' | 'ghost' | 'light';
  size?: 'md' | 'lg';
  label?: string;
};

/**
 * "Book a Consultation" CTA. The scheduling calendar is not connected yet, so
 * this opens an honest dialog that routes people to the enquiry form rather
 * than implying an appointment has been booked.
 */
export default function BookConsultation({ variant = 'ghost', size = 'md', label = 'Book a Consultation' }: Props) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClick = (e: MouseEvent) => {
      if (e.target === dialog) dialog.close();
    };
    dialog.addEventListener('click', onClick);
    return () => dialog.removeEventListener('click', onClick);
  }, []);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        className={`btn btn-${variant}${size === 'lg' ? ' btn-lg' : ''}`}
        onClick={open}
      >
        {label}
      </button>

      <dialog ref={dialogRef} className="consult-dialog" aria-labelledby="consult-title">
        <button type="button" className="consult-close" aria-label="Close" onClick={close}>
          <Icon name="close" size={18} />
        </button>
        <h2 id="consult-title">Book a consultation</h2>
        <p>
          Online scheduling is being set up. For now, send a quick enquiry with a couple of times that
          suit you and I&apos;ll confirm a call by email — usually within one business day.
        </p>
        <div className="consult-actions">
          <a href="#contact" className="btn btn-primary" onClick={close}>
            Go to enquiry form <Icon name="arrowRight" size={15} />
          </a>
          <button type="button" className="btn btn-ghost" onClick={close}>
            Not now
          </button>
        </div>
      </dialog>
    </>
  );
}
