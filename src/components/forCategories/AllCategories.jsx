import {
  BookOpen,
  GraduationCap,
  Globe,
  Languages,
  Landmark,
  Library,
  ScrollText,
  Shapes,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import useCategories from '@/hooks/useCategories';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const icons = [
  BookOpen,
  GraduationCap,
  Globe,
  Languages,
  Landmark,
  Library,
  ScrollText,
  Shapes,
];

export default function AllCategories() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: categories, isLoading, error } = useCategories();

  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="bg-muted h-72 animate-pulse rounded-3xl"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="border-destructive bg-destructive/10 text-destructive flex h-40 items-center justify-center rounded-2xl border">
        {t('failedToLoadCategories')}
      </div>
    );
  }

  if (!categories?.length) {
    return (
      <div className="bg-muted flex h-40 items-center justify-center rounded-2xl border">
        {t('noCategoriesFound')}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {categories.map((category) => {
        const Icon = icons[category.id % icons.length];

        return (
          <Card
            key={category.id}
            onClick={() => navigate(`/books/${category.id}`)}
            className="group border-border/60 bg-card hover:border-primary/30 cursor-pointer overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <CardHeader className="flex flex-col items-center justify-center px-6 py-10 text-center">
              <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-6 rounded-3xl p-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Icon className="h-12 w-12" />
              </div>

              <CardTitle className="group-hover:text-primary mb-2 line-clamp-2 text-xl font-bold transition-colors duration-300">
                {category.name}
              </CardTitle>

              <CardDescription className="max-w-[180px] text-sm leading-relaxed">
                {t('browseBooks')}
              </CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
