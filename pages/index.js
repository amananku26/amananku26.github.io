import Head from 'next/head';
import HomePage from '../src/components/homePage/HomePage';

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Aman Anku | Senior Frontend Engineer</title>
        <meta name="description" content="Aman Anku is a senior frontend engineer who builds clear, accessible React and Next.js applications for product teams." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://amananku26.github.io" />
        <meta property="og:title" content="Aman Anku | Senior Frontend Engineer" />
        <meta property="og:description" content="Senior frontend engineer. React, Next.js, and TypeScript systems built for speed, accessibility, and confident product teams." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amananku26.github.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aman Anku | Senior Frontend Engineer" />
        <meta name="twitter:description" content="Senior frontend engineer specializing in React, Next.js, TypeScript, accessibility, and web performance." />
      </Head>
      <HomePage {...props} />
    </>
  );
}
