import { notFound } from 'next/navigation';
import DocumentaryVideographyDetail from '@/views/DocumentaryVideographyDetail';
import { allProjects, documentaryVideographyProjects } from '@/data/projects';

export async function generateStaticParams() {
  return documentaryVideographyProjects.map((project) => ({
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
    title: `${project.title} | Documentary Videography | BigzImage`,
    description: project.description,
    keywords: [
      'documentary videography',
      project.title,
      'NGO video production Kenya',
      'impact video stories',
    ],
    alternates: {
      canonical: `/documentaries/videography/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Documentary Videography | BigzImage`,
      description: project.description,
      url: `/documentaries/videography/${slug}`,
      type: 'website',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Documentary Videography`,
      description: project.description,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function DocumentaryVideographyDetailPage({ params }) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <DocumentaryVideographyDetail project={project} />;
}
