import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React
import type { Metadata, Viewport } from "next/types"

const inter = Inter({ subsets: ["latin"] })

// Add security headers
export const generateMetadata = (): Metadata => {
  return {
    title: {
      default: "Jacob - Frontend Engineer | React, Next.js, TypeScript, Blockchain",
      template: "%s | Jacob Portfolio",
    },
    description: "Frontend Engineer with 4.5+ years of experience specializing in React, Next.js, TypeScript, and Blockchain development. Led projects at Var Meta, including payment systems and stablecoin platforms.",
    metadataBase: new URL("https://porforlio-jacob.vercel.app"),
    keywords: [
      "Frontend Engineer",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Blockchain Developer",
      "Web3 Developer",
      "Full Stack Developer",
      "Vietnam Developer",
      "DaNang Developer",
      "Var Meta",
      "Smart Contracts",
      "Solidity",
    ],
    authors: [
      {
        name: "Tran Phuoc My Toan (Jacob)",
        url: "https://porforlio-jacob.vercel.app"
      }
    ],
    creator: "Tran Phuoc My Toan",
    publisher: "Jacob",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://porforlio-jacob.vercel.app",
      title: "Jacob - Frontend Engineer",
      description: "Frontend Engineer with 4.5+ years of experience | React, Next.js, TypeScript, Blockchain",
      siteName: "Jacob Portfolio",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Jacob - Frontend Engineer Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Jacob - Frontend Engineer",
      description: "Frontend Engineer with 4.5+ years of experience | React, Next.js, TypeScript, Blockchain",
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
  }
}

// Add viewport settings
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add CSP meta tag */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; frame-src 'self';"
        />
        {/* Add security headers */}
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
