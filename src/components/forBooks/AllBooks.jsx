import { useTranslation } from 'react-i18next';

import useBooks from '@/hooks/useBooks';
import BooksGrid from './BooksGrid';

export default function AllBooks({
  view,
  categoryId,
  sortBy,
  minPrice,
  maxPrice,
  search,
  ascending,
}) {
  const { t } = useTranslation();

  const {
    data: books = [],
    error,
    isLoading,
  } = useBooks({
    categoryId,
    sortBy,
    minPrice,
    maxPrice,
    search,
    ascending,
  });

  if (isLoading) {
    return (
      <div className="text-muted-foreground flex min-h-60 items-center justify-center text-lg">
        {t('common.loading')}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-destructive flex min-h-60 items-center justify-center text-lg">
        {t('common.error')}
      </div>
    );
  }

  return <BooksGrid books={books} view={view} />;
}
