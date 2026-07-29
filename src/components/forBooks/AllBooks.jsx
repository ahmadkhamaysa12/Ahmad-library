import useBooks from '@/hooks/useBooks';
import BooksGrid from './BooksGrid';

export default function AllBooks({
  categoryId,
  view,
  sortBy,
  minPrice,
  maxPrice,
  search,
  ascending,
}) {
  const {
    data: books = [],
    isLoading,
    error,
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