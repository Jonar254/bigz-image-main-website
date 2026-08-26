import ContactView from "@/views/Contact";
import StructuredData from '@/components/StructuredData';
import { breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Contact Us | BigzImage',
  description:
    'Get in touch with BigzImage for professional photography and videography services. Book a discovery call to discuss your visual storytelling needs.',
  keywords: [
    'contact BigzImage',
    'book photography services',
    'request videography quote',
    'Kenya media services contact',
    'visual storytelling inquiry',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | BigzImage',
    description: 'Get in touch with BigzImage for professional photography and videography services. Book a discovery call to discuss your visual storytelling needs.',
    url: '/contact',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contact BigzImage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | BigzImage',
    description: 'Get in touch with BigzImage for professional photography and videography services.',
    images: ['/og-image.jpg'],
  },
};


export default function ContactPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ]);

  return (
    <>
      <StructuredData data={breadcrumb} />
      <ContactView />
    </>
  );
}
