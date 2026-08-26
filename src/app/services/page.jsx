import ServicesPage from '@/views/ServicesPage';
import StructuredData from '@/components/StructuredData';
import { breadcrumbSchema, serviceSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Services | BigzImage',
  description: 'High-quality visual storytelling solutions for NGOs, research institutions, and development partners.',
  keywords: [
    'photography services Kenya',
    'videography services East Africa',
    'event coverage',
    'documentary production',
    'corporate photography',
    'NGO media services',
    'visual content packages',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services | BigzImage',
    description: 'High-quality visual storytelling solutions for NGOs, research institutions, and development partners.',
    url: '/services',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BigzImage Services - Photography and Videography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | BigzImage',
    description: 'High-quality visual storytelling solutions for NGOs, research institutions, and development partners.',
    images: ['/og-image.jpg'],
  },
};

export default function Services() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' }
  ]);

  const services = [
    serviceSchema(
      'Corporate Event Photography',
      'Professional photography for conferences, launches, partnerships, and institutional milestones.',
      'https://www.bigzimage.com/corporate/photography'
    ),
    serviceSchema(
      'Corporate Event Videography',
      'Professional video coverage for corporate events, stakeholder engagements, and brand positioning.',
      'https://www.bigzimage.com/corporate/videography'
    ),
    serviceSchema(
      'Documentary Photography',
      'Authentic, high-quality imagery that brings your programmes to life for reports, campaigns, and digital platforms.',
      'https://www.bigzimage.com/documentaries/photography'
    ),
    serviceSchema(
      'Documentary Videography',
      'Documentary-style success stories rooted in real experiences—capturing voices, outcomes, and transformation.',
      'https://www.bigzimage.com/documentaries/videography'
    )
  ];

  return (
    <>
      <StructuredData data={breadcrumb} />
      {services.map((service, index) => (
        <StructuredData key={index} data={service} />
      ))}
      <ServicesPage />
    </>
  );
}
