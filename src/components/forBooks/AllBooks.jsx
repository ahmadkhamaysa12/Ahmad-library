import useBooks from '@/hooks/useBooks';
import useGetProductByCat from '@/hooks/useGetProductByCat';
import BooksGrid from './BooksGrid';

export default function AllBooks({ categoryId }) {
  const allBooksQuery = useBooks();
  const categoryBooksQuery = useGetProductByCat(categoryId);

const { data, isLoading, error } = categoryId
  ? categoryBooksQuery
  : allBooksQuery;

const books = data?.response ?? data ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading books</div>;
  }

  if (!books || books.length === 0) {
    return <div>No books found</div>;
  }

  return <BooksGrid books={books} />;
}