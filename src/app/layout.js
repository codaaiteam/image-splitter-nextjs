import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://localhost:3000'),	
  title: 'Paper Minecraft: A Unique 2D Minecraft Experience',
  description: 'Experience Minecraft like never before in this 2D reimagining. Craft, explore, and survive in a unique paper-like world with Paper Minecraft!',
  keywords: ['Paper Minecraft', '2D Minecraft', 'browser game', 'craft', 'explore', 'survive'],
  openGraph: {
    title: 'Paper Minecraft: A Unique 2D Minecraft Experience',
    description: 'Experience Minecraft like never before in this 2D reimagining. Craft, explore, and survive in a unique paper-like world!',
    type: 'website',
    url: 'https://your-website-url.com',
    images: [{ url: 'https://your-website-url.com/paper-minecraft-og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paper Minecraft: A Unique 2D Minecraft Experience',
    description: 'Experience Minecraft like never before in this 2D reimagining. Craft, explore, and survive in a unique paper-like world!',
    images: ['https://your-website-url.com/paper-minecraft-twitter-image.jpg'],
  },
  robots: 'index, follow',
  canonical: 'https://your-website-url.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Search Console Verification - Replace with actual code when available */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE" />
      </head>
      <body className={inter.className}>
        {children}
        {/* Google Analytics - Replace with actual code when available */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ANALYTICS_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');
          `}
        </Script>
      </body>
    </html>
  )
}