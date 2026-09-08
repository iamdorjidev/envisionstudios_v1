import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'enVision Studio — Affordable web & software development in Auckland';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#0b1b28',
          color: '#e9f0f5',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 34, letterSpacing: '-0.02em' }}>
          <span style={{ fontWeight: 700, color: '#fff' }}>enVision</span>
          <span style={{ marginLeft: 10, color: '#93a7b5' }}>Studio</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 64, fontWeight: 700, color: '#fff', lineHeight: 1.1, maxWidth: 900 }}>
            Affordable web &amp; software development
          </div>
          <div style={{ fontSize: 30, color: '#93a7b5', marginTop: 24 }}>
            Websites · Web Applications · Business Systems — Auckland, New Zealand
          </div>
        </div>
        <div style={{ display: 'flex', height: 8, width: 180, background: '#d8181f', borderRadius: 4 }} />
      </div>
    ),
    { ...size },
  );
}
