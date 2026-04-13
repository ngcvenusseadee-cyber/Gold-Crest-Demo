import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "GOLD CREST DEVELOPED | Desarrolladora Inmobiliaria Premium",
  description:
    "Premium real estate development and advisory for exclusive residential projects, high-end presentation, and clear client-focused experiences.",
  openGraph: {
    title: "GOLD CREST DEVELOPED | Desarrolladora Inmobiliaria Premium",
    description:
      "Exclusive residences, trusted advisory, and a sophisticated digital experience for clients seeking quality and confidence.",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "GOLD CREST DEVELOPED | Desarrolladora Inmobiliaria Premium",
    description:
      "A premium real estate landing page with elegant identity, stronger structure, and a clear focus on trust and conversion."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
