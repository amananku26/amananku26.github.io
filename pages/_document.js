import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aman Anku",
    "jobTitle": "Senior Frontend Engineer",
    "url": "https://amananku26.github.io",
    "sameAs": [
      "https://www.linkedin.com/in/amananku26/",
      "https://github.com/amananku26",
      "https://medium.com/@amananku",
      "https://linktr.ee/amananku26"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Frontend Architecture",
      "Web Performance",
      "Accessibility (WCAG)"
    ]
  };

  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#fbfbfd" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/images/IMG_1480.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
