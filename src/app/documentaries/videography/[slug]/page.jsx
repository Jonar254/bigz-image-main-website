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
