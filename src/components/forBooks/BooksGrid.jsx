import BookCard from './BookCard';

/**
 * BooksGrid component displays a collection of books in a grid or list layout.
 * It is a presentational component and does not handle data fetching.
 *
 * @param {object} props - The component props.
 * @param {Array<object>} props.books - An array of book objects to display.
 * @param {'grid' | 'list'} props.view - The current display view ('grid' or 'list').
 */
export default function BooksGrid({ books, view }) {
  // You can customize the grid/list layout based on the 'view' prop here.
  // For example, using different Tailwind CSS classes.
  const gridClasses =
    'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6';
  const listClasses = 'space-y-6'; // Example for a list layout

  return (
    <div className={view === 'grid' ? gridClasses : listClasses}>
      {Array.isArray(books) && books.length > 0 ? (
        books.map((book) => <BookCard key={book.id} book={book} />)
      ) : (
        <p className="text-muted-foreground col-span-full text-center">
          No books found.
        </p>
      )}
    </div>
  );
}
