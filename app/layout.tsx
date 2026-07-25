import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guruvetchem.in"),
  title: "Guru Vetchem | Specification-Led Animal Nutrition Sourcing",
  description:
    "Specification-led sourcing of feed ingredients, minerals, vitamins and functional inputs for poultry, cattle and dairy manufacturers.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Guru Vetchem | Specification-Led Animal Nutrition Sourcing",
    description:
      "Reliable inputs. Clear specifications. Structured supply for poultry, cattle and dairy nutrition manufacturers.",
    type: "website",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Guru Vetchem",
              url: "https://www.guruvetchem.in",
              email: "info@guruvetchem.in",
              telephone: "+91-70094-08944",
              description:
                "Specification-led sourcing for animal nutrition manufacturers.",
              areaServed: "India",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
