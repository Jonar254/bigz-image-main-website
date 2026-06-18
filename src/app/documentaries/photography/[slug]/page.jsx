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
