import AboutPage from '@/views/AboutPage';
import StructuredData from '@/components/StructuredData';
import { breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'About Us | BigzImage',
  description: 'BigzImage partners with NGOs and development actors to translate complex programmes into compelling visual narratives.',
  keywords: [
    'about BigzImage',
    'visual storytelling agency',
    'NGO photography partner',
    'development sector media',
    'Kenya production company',
    'East Africa documentary',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | BigzImage',
    description: 'BigzImage partners with NGOs and development actors to translate complex programmes into compelling visual narratives.',
    url: '/about',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About BigzImage - Visual Storytelling Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | BigzImage',
    description: 'BigzImage partners with NGOs and development actors to translate complex programmes into compelling visual narratives.',
    images: ['/og-image.jpg'],
  },
};

export default function About() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ]);

  return (
    <>
      <StructuredData data={breadcrumb} />
      <AboutPage />
    </>
  );
}
