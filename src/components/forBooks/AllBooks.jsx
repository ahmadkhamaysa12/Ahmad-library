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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading books</div>;
  }

  return <BooksGrid books={books} view={view} />;
}
