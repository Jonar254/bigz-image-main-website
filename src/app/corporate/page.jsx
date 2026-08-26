import CorporatePage from '@/views/CorporatePage';

export const metadata = {
  title: 'Corporate & Stakeholder Event Coverage | BigzImage',
  description: 'Professional photo and video coverage for corporate events, stakeholder engagements, and brand positioning.',
  keywords: [
    'corporate event photography',
    'corporate event videography',
    'conference coverage',
    'stakeholder engagement media',
    'brand positioning photography',
    'professional event coverage Kenya',
  ],
  alternates: {
    canonical: '/corporate',
  },
  openGraph: {
    title: 'Corporate & Stakeholder Event Coverage | BigzImage',
    description: 'Professional photo and video coverage for corporate events, stakeholder engagements, and brand positioning.',
    url: '/corporate',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Corporate Event Coverage - BigzImage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate & Stakeholder Event Coverage | BigzImage',
    description: 'Professional photo and video coverage for corporate events, stakeholder engagements, and brand positioning.',
    images: ['/og-image.jpg'],
  },
};

export default function Corporate() {
  return <CorporatePage />;
}
