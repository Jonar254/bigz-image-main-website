import DocumentaryPhotography from '@/views/DocumentaryPhotography';

export const metadata = {
  title: 'Documentary Photography | BigzImage',
  description: 'Authentic, high-quality imagery that brings your programmes to life for reports, campaigns, and digital platforms. We capture real moments with dignity and respect.',
  keywords: [
    'documentary photography Kenya',
    'NGO photography',
    'development photography',
    'impact photography',
    'field photography services',
    'ethical storytelling photography',
  ],
  alternates: {
    canonical: '/documentaries/photography',
  },
  openGraph: {
    title: 'Documentary Photography | BigzImage',
    description: 'Authentic, high-quality imagery that brings your programmes to life for reports, campaigns, and digital platforms.',
    url: '/documentaries/photography',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Documentary Photography - BigzImage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentary Photography | BigzImage',
    description: 'Authentic, high-quality imagery that brings your programmes to life for reports, campaigns, and digital platforms.',
    images: ['/og-image.jpg'],
  },
};

export default function DocumentaryPhotographyPage() {
  return <DocumentaryPhotography />;
}
