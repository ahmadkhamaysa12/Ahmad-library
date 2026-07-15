import useCategories from '@/hooks/useCategories';
import 'react';
import { useTranslation } from 'react-i18next';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import logo from '../../assets/logo.svg';

export default function AllCategories() {
  const { data: categories, isLoading, error } = useCategories();
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-muted h-96 animate-pulse rounded-xl border"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="border-destructive bg-destructive/10 text-destructive flex h-40 items-center justify-center rounded-xl border">
        Failed to load categories
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="bg-muted flex h-40 items-center justify-center rounded-xl border">
        No categories found
      </div>
    );
  }

  return (
    <div className="grid justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {categories.map((category) => (
        <Card
          key={category.id}
          className="group mx-auto w-full max-w-60 overflow-hidden rounded-xl border pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="bg-muted flex h-48 items-center justify-center p-5">
            <img
              src={logo}
              alt={category.name}
              className="h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <CardTitle className="line-clamp-1 text-base font-semibold">
                {category.name}
              </CardTitle>

              <Badge variant="books">
                {category.booksCount ?? 0} {t('booksCount')}
              </Badge>
            </div>

            <CardDescription className="line-clamp-2 text-xs">
              {t('browseBooks')}
            </CardDescription>
          </CardHeader>

          <CardFooter>
            <Button className="w-full">
              {t('viewCategory')}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}