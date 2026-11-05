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

const BASE_URL = "https://reciproque.eu";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: "Reciproque | Assistance informatique, réseaux et logiciels",

  description:
    "Reciproque propose des services informatiques à Bertrix et environs : dépannage, réseaux professionnels, logiciels sur mesure et automatisation pour particuliers et entreprises.",

  openGraph: {
    title: "Reciproque",
    description:
      "Assistance informatique, réseaux professionnels, logiciels sur mesure et automatisation.",
    url: BASE_URL,
    siteName: "Reciproque",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: "https://reciproque.eu/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Reciproque — Assistance informatique, réseaux et logiciels",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://reciproque.eu/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Reciproque",
  url: BASE_URL,
  email: "info@reciproque.eu",
  description:
    "Assistance informatique, réseaux professionnels, développement de logiciels sur mesure et automatisation. Services informatiques à Bertrix et environs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
