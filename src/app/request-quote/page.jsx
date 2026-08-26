import RequestQuoteView from "@/views/RequestQuote";

export const metadata = {
  title: 'Request a Quote | BigzImage',
  description:
    'Share your project scope, stakeholders, and timelines so our producers can prepare a tailored proposal within two business days.',
  keywords: [
    'request photography quote',
    'videography quote Kenya',
    'custom media package',
    'event coverage pricing',
    'documentary production quote',
  ],
  alternates: {
    canonical: '/request-quote',
  },
  openGraph: {
    title: 'Request a Quote | BigzImage',
    description: 'Share your project scope, stakeholders, and timelines so our producers can prepare a tailored proposal within two business days.',
    url: '/request-quote',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Request a Quote - BigzImage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request a Quote | BigzImage',
    description: 'Share your project scope, stakeholders, and timelines so our producers can prepare a tailored proposal.',
    images: ['/og-image.jpg'],
  },
};

export default function RequestQuotePage() {
  return <RequestQuoteView />;
}
