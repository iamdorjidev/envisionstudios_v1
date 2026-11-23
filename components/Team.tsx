import Image from 'next/image';
import Reveal from './Reveal';

export const TEAM = [
  {
    name: 'Thinley Dorji',
    role: 'Founder & Lead Developer',
    photo: '/image/profile.png',
  },
  {
    name: 'Sangay Choden',
    role: 'Business Analyst & Developer',
    photo: '/image/sangay-choden.png',
  },
] as const;

export default function Team({ delay = 80 }: { delay?: number }) {
  return (
    <div className="team-grid">
      {TEAM.map((m, i) => (
        <Reveal className="about-card" delay={delay + i * 70} key={m.name}>
          <div className="about-photo">
            <Image
              src={m.photo}
              alt={`${m.name}, ${m.role} at enVision Studio`}
              fill
              sizes="(min-width: 960px) 220px, 45vw"
            />
          </div>
          <strong>{m.name}</strong>
          <span>{m.role}</span>
          <span>Auckland, New Zealand</span>
        </Reveal>
      ))}
    </div>
  );
}
