import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import IndustryPage from '@/components/IndustryPage';
import { getIndustry, industries } from '@/lib/industries';

type IndustryRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryRouteProps): Promise<Metadata> {
  const industry = getIndustry((await params).slug);
  if (!industry) return {};
  const path = `/industries/${industry.slug}`;
  return {
    title: { absolute: industry.metaTitle },
    description: industry.description,
    alternates: { canonical: path },
    openGraph: { title: industry.metaTitle, description: industry.description, url: path },
  };
}

export default async function IndustryRoute({ params }: IndustryRouteProps) {
  const industry = getIndustry((await params).slug);
  if (!industry) notFound();
  return <IndustryPage industry={industry} />;
}
