import type { Metadata } from 'next';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Thinley Dorji, the developer behind enVision Studio — an independent web and software development studio based in Auckland, New Zealand.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <About />
      <WhyUs />
      <Process />
    </>
  );
}
