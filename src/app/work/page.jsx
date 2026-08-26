import WorkView from "@/views/Work";
import StructuredData from '@/components/StructuredData';
import { breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Work | BigzImage',
  description: 'Explore our portfolio of documentary photography, videography, and corporate event coverage across Kenya and East Africa.',
  keywords: [
    'BigzImage portfolio',
    'photography portfolio Kenya',
    'videography work samples',
    'NGO project examples',
    'documentary portfolio',
    'corporate event portfolio',
  ],
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Work | BigzImage',
    description: 'Explore our portfolio of documentary photography, videography, and corporate event coverage across Kenya and East Africa.',
    url: '/work',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'BigzImage Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work | BigzImage',
    description: 'Explore our portfolio of documentary photography, videography, and corporate event coverage across Kenya and East Africa.',
    images: ['/og-image.jpg'],
  },
};

export default function WorkPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Work', url: '/work' }
  ]);

  return (
    <>
      <StructuredData data={breadcrumb} />
      <WorkView />
    </>
  );
}
 