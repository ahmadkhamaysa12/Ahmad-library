import useBooks from '@/hooks/useBooks';
import useGetBooksByCat from '@/hooks/useGetBooksByCat';
import BooksGrid from './BooksGrid';

export default function AllBooks({ categoryId, view }) {
  const allBooksQuery = useBooks();

  const categoryBooksQuery = useGetBooksByCat(categoryId);

  const { data, isLoading, error } = categoryId
    ? categoryBooksQuery
    : allBooksQuery;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading books</div>;
  }

  const books =
    data?.response?.data ?? data?.response ?? data?.data ?? data ?? [];

  return <BooksGrid books={Array.isArray(books) ? books : []} view={view} />;
}
