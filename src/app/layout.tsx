import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sunshine Clean | Premier Vacation Home Cleaning in Davenport, FL',
  description: 'Professional vacation rental and Airbnb cleaning services in Davenport, Florida. 5-star turnover cleaning for vacation homes near Disney World. Licensed, insured, and trusted by top property managers.',
  keywords: 'vacation home cleaning Davenport FL, Airbnb cleaning Florida, turnover cleaning Orlando, vacation rental cleaning service, Disney area cleaning',
  openGraph: {
    title: 'Sunshine Clean | Vacation Home Cleaning in Davenport, FL',
    description: 'Professional vacation rental cleaning services. Fast turnovers, 5-star results, trusted by top property managers in the Davenport/Orlando area.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
