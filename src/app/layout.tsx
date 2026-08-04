import type { Metadata } from 'next';
import { Archivo, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import { PageLoader } from '@/components/PageLoader';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: ['400', '500', '600', '700']
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
});

const siteUrl = 'https://noah-tatpati.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'Noah Mohandas Tatpati | AI Developer Portfolio',
    template: '%s | Noah Tatpati',
  },
  description:
    'Portfolio of Noah Mohandas Tatpati — Generative AI Developer specializing in LLM applications, AI agents, and engineering-driven product experiences. View projects, experience, and get in touch.',
  keywords: [
    'Noah Tatpati', 'Noah Mohandas Tatpati', 'AI Developer', 'Generative AI',
    'LLM', 'Machine Learning', 'Portfolio', 'Next.js', 'Python',
    'AI Engineer', 'Hubballi', 'KLE Tech University',
  ],
  authors: [{ name: 'Noah Mohandas Tatpati' }],
  creator: 'Noah Mohandas Tatpati',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Noah Tatpati Portfolio',
    title: 'Noah Mohandas Tatpati | AI Developer Portfolio',
    description:
      'Portfolio of Noah Mohandas Tatpati — Generative AI Developer specializing in LLM applications, AI agents, and engineering-driven product experiences.',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'Noah Mohandas Tatpati',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noah Mohandas Tatpati | AI Developer Portfolio',
    description:
      'Portfolio of Noah Mohandas Tatpati — Generative AI Developer specializing in LLM applications, AI agents, and engineering-driven product experiences.',
    images: ['/assets/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Noah Mohandas Tatpati',
    url: siteUrl,
    jobTitle: 'Generative AI Developer',
    description:
      'AI developer specializing in generative AI, LLM applications, and engineering-driven product experiences.',
    email: 'nmtatpati@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hubballi',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'KLE Tech University',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Generative AI',
      'Large Language Models',
      'Machine Learning',
      'Python',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
    ],
    sameAs: [
      'https://github.com/Noahtatpati',
      'https://linkedin.com/in/noahtatpati',
    ],
  };

  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="google-site-verification" content="fAuRINdWck1ecdsRk1FFxepjBpM1V49vUAjb_sTw-Jo" />
        <meta name="msvalidate.01" content="81458CE44842E123E3A495E0F7ADB724" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-52PTT899');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52PTT899" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <PageLoader>{children}</PageLoader>
      </body>
    </html>
  );
}
