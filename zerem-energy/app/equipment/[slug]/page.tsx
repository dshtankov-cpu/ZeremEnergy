import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EquipmentPage from '@/components/EquipmentPage';
import { equipmentCategories, getEquipmentCategory } from '@/lib/equipment';

type EquipmentRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return equipmentCategories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: EquipmentRouteProps): Promise<Metadata> {
  const category = getEquipmentCategory((await params).slug);
  if (!category) return {};
  const path = `/equipment/${category.slug}`;
  return {
    title: { absolute: category.metaTitle },
    description: category.description,
    alternates: { canonical: path },
    openGraph: { title: category.metaTitle, description: category.description, url: path },
  };
}

export default async function EquipmentRoute({ params }: EquipmentRouteProps) {
  const category = getEquipmentCategory((await params).slug);
  if (!category) notFound();
  return <EquipmentPage category={category} />;
}
