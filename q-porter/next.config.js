/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Export static HTML for GitHub Pages
  output: 'export',
  images: {
    // Static export requires unoptimized images or external loader
    unoptimized: true,
  },
}
