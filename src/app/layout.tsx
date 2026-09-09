import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";
import { CartProvider } from "@/app/components/CartProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://audiophile-store-eight.vercel.app"),
  title: {
    default: "Audiophile | Premium Audio Equipment",
    template: "%s | Audiophile",
  },
  description:
    "Discover premium headphones, speakers, and wireless earphones engineered for exceptional sound.",
  keywords: [
    "audiophile",
    "headphones",
    "speakers",
    "earphones",
    "premium audio",
    "wireless headphones",
    "high fidelity audio",
  ],
  authors: [{ name: "Audiophile" }],
  creator: "Audiophile",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Audiophile",
    title: "Audiophile | Premium Audio Equipment",
    description:
      "Discover premium headphones, speakers, and wireless earphones engineered for exceptional sound.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audiophile | Premium Audio Equipment",
    description:
      "Discover premium headphones, speakers, and wireless earphones engineered for exceptional sound.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-20 rounded bg-primary px-4 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Skip to main content
        </a>

        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}