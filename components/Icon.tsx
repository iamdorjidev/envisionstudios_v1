import type { ReactNode, SVGProps } from 'react';

export type IconName =
  | 'arrowRight'
  | 'arrowUp'
  | 'check'
  | 'menu'
  | 'close'
  | 'tag'
  | 'code'
  | 'chat'
  | 'globe'
  | 'layout'
  | 'database'
  | 'card'
  | 'wrench'
  | 'calendar'
  | 'gauge'
  | 'users'
  | 'mail'
  | 'phone'
  | 'mapPin';

const PATHS: Record<IconName, ReactNode> = {
  arrowRight: <path d="M5 12h14M13 5l7 7-7 7" />,
  arrowUp: <path d="M12 19V5M5 12l7-7 7 7" />,
  check: <path d="M20 6L9 17l-5-5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  tag: (
    <>
      <path d="M3 12V5a2 2 0 012-2h7l9 9-9 9-9-9z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  code: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />,
  chat: <path d="M21 12a8 8 0 01-11.5 7.2L4 21l1.8-5.5A8 8 0 1121 12z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 4 6.2 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6.2-4-9s1.5-6.3 4-9z" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </>
  ),
  wrench: <path d="M14.5 6a3.5 3.5 0 00-4.6 4.6L4 16.5V20h3.5l5.9-5.9A3.5 3.5 0 0018 9.5c0-.5-.1-1-.3-1.4l-2.4 2.4-1.8-1.8 2.4-2.4c-.4-.2-.9-.3-1.4-.3z" />,
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="17" rx="2" />
      <path d="M3 10h18M8 2.5v4M16 2.5v4" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 19a8 8 0 1116 0" />
      <path d="M12 19l4-6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20a6 6 0 0112 0M16 5.5a3.5 3.5 0 010 7M17 20a6 6 0 00-3-5.2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  phone: <path d="M6.5 3h3l1.5 5-2 1.5a11 11 0 005 5l1.5-2 5 1.5v3a2 2 0 01-2 2A16 16 0 014 6a2 2 0 012-2" />,
  mapPin: (
    <>
      <path d="M12 22s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
};

type IconProps = Omit<SVGProps<SVGSVGElement>, 'name'> & {
  name: IconName | (string & {});
  size?: number;
};

export default function Icon({ name, size = 20, strokeWidth = 1.6, className, ...props }: IconProps) {
  const path = PATHS[name as IconName] ?? null;
  return (
    <svg
      className={className ? `icon ${className}` : 'icon'}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {path}
    </svg>
  );
}
