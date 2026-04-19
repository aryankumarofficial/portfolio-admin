import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import RootProviders from "@/components/providers"

export const metadata: Metadata = {
  title: {
    default: "Aryan Kumar",
    template: "%s | Aryan Kumar",
  },
}

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
})

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        fontMono.variable,
        "font-serif",
        instrumentSerif.variable
      )}
    >
      <body>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  )
}
