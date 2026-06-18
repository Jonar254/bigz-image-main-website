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
