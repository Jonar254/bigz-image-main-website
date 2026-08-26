import DocumentariesPage from '@/views/DocumentariesPage';

export const metadata = {
  title: 'Documentaries | BigzImage',
  description: 'Evidence-based visual stories that demonstrate program impact and translate complex outcomes into compelling narratives.',
  keywords: [
    'documentary production Kenya',
    'impact storytelling',
    'NGO documentaries',
    'development sector films',
    'program impact videos',
    'evidence-based storytelling',
  ],
  alternates: {
    canonical: '/documentaries',
  },
  openGraph: {
    title: 'Documentaries | BigzImage',
    description: 'Evidence-based visual stories that demonstrate program impact and translate complex outcomes into compelling narratives.',
    url: '/documentaries',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Documentary Production - BigzImage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentaries | BigzImage',
    description: 'Evidence-based visual stories that demonstrate program impact and translate complex outcomes into compelling narratives.',
    images: ['/og-image.jpg'],
  },
};

export default function Documentaries() {
  return <DocumentariesPage />;
}
