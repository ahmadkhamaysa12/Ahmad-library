import BookCard from './BookCard';

export default function BooksGrid({
  books = [],
  view = 'grid',
}) {
  const isGrid = view === 'grid';
  const list = Array.isArray(books) ? books : [];

  return (
    <div
      className={
        isGrid
          ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'
          : 'flex flex-col gap-5'
      }
    >
      {list.length ? (
        list.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            view={view}
          />
        ))
      ) : (
        <div className="col-span-full flex min-h-[350px] items-center justify-center rounded-xl border border-dashed border-border">
          <p className="text-muted-foreground text-lg">
            No books found.
          </p>
        </div>
      )}
    </div>
  );
}