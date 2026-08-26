import DocumentaryVideography from '@/views/DocumentaryVideography';

export const metadata = {
  title: 'Documentary Videography | BigzImage',
  description: 'We produce documentary-style success stories rooted in real experiences—capturing voices, outcomes, and transformation in ways that resonate with donors and key stakeholders.',
  keywords: [
    'documentary videography Kenya',
    'NGO video production',
    'impact video stories',
    'development sector videography',
    'success story videos',
    'donor engagement videos',
  ],
  alternates: {
    canonical: '/documentaries/videography',
  },
  openGraph: {
    title: 'Documentary Videography | BigzImage',
    description: 'We produce documentary-style success stories rooted in real experiences—capturing voices, outcomes, and transformation.',
    url: '/documentaries/videography',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Documentary Videography - BigzImage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentary Videography | BigzImage',
    description: 'We produce documentary-style success stories rooted in real experiences—capturing voices, outcomes, and transformation.',
    images: ['/og-image.jpg'],
  },
};

export default function DocumentaryVideographyPage() {
  return <DocumentaryVideography />;
}
