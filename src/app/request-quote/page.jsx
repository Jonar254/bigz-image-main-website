import RequestQuoteView from "@/views/RequestQuote";

export const metadata = {
  title: 'Request a Quote | BigzImage',
  description:
    'Share your project scope, stakeholders, and timelines so our producers can prepare a tailored proposal within two business days.',
};

export default function RequestQuotePage() {
  return <RequestQuoteView />;
}
