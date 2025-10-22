import type React from "react"
import "./globals.css"
import { Inter, Space_Grotesk } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata = {
  title: "Myanmar Print & Pack - Integrated Printing & Packaging Solutions",
  description: "Leading provider of integrated printing and packaging solutions for a sustainable future",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>{children}</body>
    </html>
  )
}
