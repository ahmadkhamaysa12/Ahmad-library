import useBooks from '@/hooks/useBooks';
import useGetProductByCat from '@/hooks/useGetProductByCat';

import BooksGrid from './BooksGrid';


export default function AllBooks({ categoryId, view }) {

  const allBooksQuery = useBooks();

  const categoryBooksQuery =
    useGetProductByCat(categoryId);


  const {
    data: books = [],
    isLoading,
    error,
  } =
    categoryId
      ? categoryBooksQuery
      : allBooksQuery;



  if (isLoading) {
    return <div>Loading...</div>;
  }


  if (error) {
    return <div>Error loading books</div>;
  }


  return (
    <BooksGrid
      books={books}
      view={view}
    />
  );
}