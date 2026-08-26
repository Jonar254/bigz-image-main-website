import "./globals.css";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import StructuredData from "@/components/StructuredData";
import { organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/structured-data";

export const metadata = {
  title: "BigzImage",
  description:
    "BigzImage partners with NGOs and development actors to translate complex programmes into compelling, evidence-driven visual narratives.",
  authors: [{ name: "BigzImage" }],
  creator: "BigzImage",
  publisher: "BigzImage",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL('https://www.bigzimage.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bigzimage.com',
    siteName: 'BigzImage',
    title: 'BigzImage - Visual Storytelling for Impact',
    description: 'BigzImage partners with NGOs and development actors to translate complex programmes into compelling, evidence-driven visual narratives.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BigzImage - Professional Photography and Videography Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BigzImage - Visual Storytelling for Impact',
    description: 'BigzImage partners with NGOs and development actors to translate complex programmes into compelling, evidence-driven visual narratives.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/community-webp/9B3A0434.webp" fetchPriority="high" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet"
        />
        <StructuredData data={organizationSchema} />
        <StructuredData data={localBusinessSchema} />
        <StructuredData data={websiteSchema} />
      </head>
      <body className="bg-black text-white antialiased">
        <Navigation />
        <main className="md:pt-[110px] min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
