import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Abdul Kader | Google Ads for Home Service Businesses",
    template: "%s | Abdul Kader"
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "994x994" },
      { url: "/images/site-icon.png", type: "image/png", sizes: "994x994" }
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/images/site-icon.png", type: "image/png", sizes: "994x994" }]
  },
  openGraph: {
    siteName: siteConfig.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
