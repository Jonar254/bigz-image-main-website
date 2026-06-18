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
