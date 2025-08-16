import Head from 'next/head';
import React from 'react';

interface TagProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  faviconHref?: string;
}

const Tag: React.FC<TagProps> = ({
  title = 'Q-Porter – Hybrid Quantum AI for Port and Airport Logistics',
  description =
    "Q-Porter delivers hybrid quantum-classical AI solutions that optimize port and airport logistics, reducing delays and improving throughput with cutting-edge quantum algorithms.",
  url = 'https://q-porter.com',
  image = '/images/q-port-logo.svg',
  faviconHref = '/favicon.png',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="shortcut icon" href={faviconHref} />
    </Head>
  );
};

export default Tag;
