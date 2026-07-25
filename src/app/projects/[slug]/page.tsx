import { projects } from '@/data/portfolio';
import { ProjectContent } from './ProjectContent';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ProjectContent slug={params.slug} />;
}
