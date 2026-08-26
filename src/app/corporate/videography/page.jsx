import CorporateVideography from '@/views/CorporateVideography';

export const metadata = {
  title: 'Corporate Event Videography | BigzImage',
  description: 'Professional video coverage for corporate events, stakeholder engagements, and brand positioning. Polished video assets ready for multi-platform use.',
  keywords: [
    'corporate videography Kenya',
    'event videography services',
    'conference video coverage',
    'professional videographer Nairobi',
    'corporate video production',
    'brand video content',
  ],
  alternates: {
    canonical: '/corporate/videography',
  },
  openGraph: {
    title: 'Corporate Event Videography | BigzImage',
    description: 'Professional video coverage for corporate events, stakeholder engagements, and brand positioning.',
    url: '/corporate/videography',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Corporate Videography - BigzImage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Event Videography | BigzImage',
    description: 'Professional video coverage for corporate events, stakeholder engagements, and brand positioning.',
    images: ['/og-image.jpg'],
  },
};

export default function CorporateVideographyPage() {
  return <CorporateVideography />;
}
