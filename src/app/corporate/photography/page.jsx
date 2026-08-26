import CorporatePhotography from '@/views/CorporatePhotography';
import StructuredData from '@/components/StructuredData';
import { breadcrumbSchema, serviceSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Corporate Event Photography | BigzImage',
  description: 'Professional photography for conferences, launches, partnerships, and institutional milestones. Polished media assets for PR, donor reporting, and stakeholder communication.',
  keywords: [
    'corporate photography Kenya',
    'conference photography',
    'event photography services',
    'professional photographer Nairobi',
    'donor reporting photography',
    'institutional photography',
  ],
  alternates: {
    canonical: '/corporate/photography',
  },
  openGraph: {
    title: 'Corporate Event Photography | BigzImage',
    description: 'Professional photography for conferences, launches, partnerships, and institutional milestones.',
    url: '/corporate/photography',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Corporate Photography - BigzImage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Event Photography | BigzImage',
    description: 'Professional photography for conferences, launches, partnerships, and institutional milestones.',
    images: ['/og-image.jpg'],
  },
};

export default function CorporatePhotographyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Corporate', url: '/corporate' },
    { name: 'Photography', url: '/corporate/photography' }
  ]);

  const service = serviceSchema(
    'Corporate Event Photography',
    'Professional photography for conferences, launches, partnerships, and institutional milestones. Polished media assets for PR, donor reporting, and stakeholder communication.',
    'https://www.bigzimage.com/corporate/photography'
  );

  return (
    <>
      <StructuredData data={breadcrumb} />
      <StructuredData data={service} />
      <CorporatePhotography />
    </>
  );
}
