import WorkDetail, { getWorkEntry } from "@/views/WorkDetail";
import { workProjects } from "@/data/mock";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return workProjects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = getWorkEntry(slug);
  if (!entry) {
    return {
      title: "Work | BigzImage",
    };
  }
  return {
    title: `${entry.detail.title} | BigzImage`,
    description: entry.detail.challenge,
  };
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  const entry = getWorkEntry(slug);
  if (!entry) {
    notFound();
  }
  return <WorkDetail {...entry} />;
}
