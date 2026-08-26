import { notFound } from 'next/navigation';
import CorporateVideographyDetail from '@/views/CorporateVideographyDetail';
import { allProjects, corporateVideographyProjects } from '@/data/projects';

export async function generateStaticParams() {
  return corporateVideographyProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found | BigzImage',
    };
  }

  return {
    title: `${project.title} | Corporate Videography | BigzImage`,
    description: project.description,
    keywords: [
      'corporate videography',
      project.title,
      'event video coverage Kenya',
      'professional videography',
    ],
    alternates: {
      canonical: `/corporate/videography/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Corporate Videography | BigzImage`,
      description: project.description,
      url: `/corporate/videography/${slug}`,
      type: 'website',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Corporate Videography`,
      description: project.description,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function CorporateVideographyDetailPage({ params }) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <CorporateVideographyDetail project={project} />;
}
