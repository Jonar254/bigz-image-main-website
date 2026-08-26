import { notFound } from 'next/navigation';
import DocumentaryPhotographyDetail from '@/views/DocumentaryPhotographyDetail';
import { allProjects, documentaryPhotographyProjects } from '@/data/projects';

export async function generateStaticParams() {
  return documentaryPhotographyProjects.map((project) => ({
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
    title: `${project.title} | Documentary Photography | BigzImage`,
    description: project.description,
    keywords: [
      'documentary photography',
      project.title,
      'NGO photography Kenya',
      'impact photography',
    ],
    alternates: {
      canonical: `/documentaries/photography/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Documentary Photography | BigzImage`,
      description: project.description,
      url: `/documentaries/photography/${slug}`,
      type: 'website',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Documentary Photography`,
      description: project.description,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function DocumentaryPhotographyDetailPage({ params }) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <DocumentaryPhotographyDetail project={project} />;
}
