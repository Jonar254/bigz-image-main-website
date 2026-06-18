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
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navigation />
        <main className="pt-[92px] md:pt-[110px] min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
