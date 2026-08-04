import { useTranslation } from 'react-i18next';

import useCategories from '@/hooks/useCategories';

import SectionHeader from './SectionHeader';
import CategoryCard from './CategoryCard';

import { Skeleton } from '@/components/ui/skeleton';

export default function CategoriesSection() {
  const { t } = useTranslation();

  const { data: categories = [], isLoading } = useCategories();

  const list = Array.isArray(categories) ? categories.slice(0, 4) : [];

  return (
    <section className="bg-muted/20 dark:bg-muted/10 py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          title={t('homePage.categories.title')}
          description={t('homePage.categories.description')}
          buttonText={t('homePage.categories.button')}
          buttonLink="/categories"
        />

        {isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <Skeleton key={item} className="h-64 rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
