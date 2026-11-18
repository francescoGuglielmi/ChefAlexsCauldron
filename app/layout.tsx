import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Tangerine, IM_Fell_English } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader/SiteHeader";

const chancery = localFont({
  src: "../public/fonts/chancur.ttf",
  variable: "--font-chancery",
  display: "swap",
  weight: "400",
  style: "normal",
});

// Old-style serif for reading text, close to the printed menu's lettering.
const fell = IM_Fell_English({
  variable: "--font-fell",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Chef Alex's Cauldron",
  description: "Private dining: a medieval feast with a modern twist.",
  // Tab and home-screen icons made from the Chef Alex crest.
  icons: {
    // app/favicon.ico is linked automatically; this adds a sharper PNG.
    icon: { url: "/images/favicon.png", type: "image/png", sizes: "512x512" },
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable} 
        ${geistMono.variable} 
        ${bebasNeue.variable} 
        ${tangerine.variable} 
        ${chancery.variable}
        ${fell.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader/>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
