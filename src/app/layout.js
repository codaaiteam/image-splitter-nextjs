import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Online Image Splitter',
  description: 'Create an engaging + beautiful Instagram grid or carousel in seconds with out Grid Maker and download your split images without installing an extra app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
