import BookCard from './BookCard';


export default function BooksGrid({
  books = [],
  view = 'grid',
}) {

  return (

    <div
      className={
        view === 'grid'
          ? 'grid gap-6 md:grid-cols-2 xl:grid-cols-3'
          : 'space-y-5'
      }
    >

      {books.map((book) => (

        <BookCard
          key={book.id}
          book={book}
        />

      ))}

    </div>

  );
}