import { notFound } from 'next/navigation';
import CorporatePhotographyDetail from '@/views/CorporatePhotographyDetail';
import { allProjects, corporatePhotographyProjects } from '@/data/projects';

export async function generateStaticParams() {
  return corporatePhotographyProjects.map((project) => ({
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
    title: `${project.title} | Corporate Photography | BigzImage`,
    description: project.description,
    keywords: [
      'corporate photography',
      project.title,
      'event coverage Kenya',
      'professional photography',
    ],
    alternates: {
      canonical: `/corporate/photography/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Corporate Photography | BigzImage`,
      description: project.description,
      url: `/corporate/photography/${slug}`,
      type: 'website',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Corporate Photography`,
      description: project.description,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function CorporatePhotographyDetailPage({ params }) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <CorporatePhotographyDetail project={project} />;
}
