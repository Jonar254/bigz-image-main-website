import "./globals.css";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "BigzImage",
  description:
    "BigzImage partners with NGOs and development actors to translate complex programmes into compelling, evidence-driven visual narratives.",
  icons: {
    icon: "/favicon.png",
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
      </head>
      <body className="bg-black text-white antialiased">
        <Navigation />
        <main className="md:pt-[110px] min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
