import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/* Cloudflare Web Analytics */}
      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js"
        strategy="afterInteractive"
        defer
        data-cf-beacon='{"token": "240fef3332c542a89a6ba7b5e0bf783c"}'
      />
      {/* End Cloudflare Web Analytics */}
    </>
  )
}

export default MyApp
