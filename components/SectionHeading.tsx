import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'center' | 'left';
};

export default function SectionHeading({ eyebrow, title, lead, align = 'center' }: Props) {
  return (
    <Reveal className={`section-head section-head--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </Reveal>
  );
}
