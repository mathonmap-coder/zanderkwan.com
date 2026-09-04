import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zanderkwan.stormy-bear-1332.chatgpt.site'),
  title: {
    default: 'Zander Kwan — Digital Builder',
    template: '%s — Zander Kwan',
  },
  description:
    'Zander Kwan turns ambitious ideas into clear, useful digital experiences across strategy, design, and technology.',
  openGraph: {
    type: 'website',
    url: 'https://zanderkwan.stormy-bear-1332.chatgpt.site',
    siteName: 'Zander Kwan',
    title: 'Zander Kwan — Ideas into impact.',
    description:
      'Strategy, design, and technology for ambitious digital products and brands.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Ideas into impact — Zander Kwan, Strategy, Design, Build',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zander Kwan — Ideas into impact.',
    description:
      'Strategy, design, and technology for ambitious digital products and brands.',
    images: ['/og.png'],
  },
};

const themeScript = `
  try {
    const saved = localStorage.getItem('zk-theme');
    const dark = saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  } catch {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
