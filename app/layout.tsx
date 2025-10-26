import type React from "react"
import "./globals.css"
import { Raleway, Nunito_Sans } from "next/font/google"

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" })
const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito-sans" })

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
      <body className={`${raleway.variable} ${nunitoSans.variable} font-sans`}>{children}</body>
    </html>
  )
}
