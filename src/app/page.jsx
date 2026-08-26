import HomeView from "@/views/Home";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = {
  title: "Home | BigzImage",
  description:
    "BigzImage partners with NGOs and development actors to translate complex programmes into compelling, evidence-driven visual narratives.",
  keywords: [
    "documentary photography",
    "documentary videography",
    "NGO visual storytelling",
    "corporate event photography",
    "corporate event videography",
    "development sector photography",
    "impact storytelling",
    "Kenya photography services",
    "East Africa videography",
    "donor reporting visuals",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BigzImage - Visual Storytelling for Impact",
    description: "BigzImage partners with NGOs and development actors to translate complex programmes into compelling, evidence-driven visual narratives.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BigzImage - Professional Photography and Videography Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BigzImage - Visual Storytelling for Impact",
    description: "BigzImage partners with NGOs and development actors to translate complex programmes into compelling, evidence-driven visual narratives.",
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" }
  ]);

  return (
    <>
      <StructuredData data={breadcrumb} />
      <HomeView />
    </>
  );
}
