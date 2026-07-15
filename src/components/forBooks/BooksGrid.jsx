import { ShoppingBasket, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useAddToCart from '@/hooks/useAddToCart';

export default function BooksGrid({ books }) {
  const navigate = useNavigate();
  const { mutate: addToCart, isPending } = useAddToCart();

  const handleAddToCart = (id) => {
    addToCart({
      ProductId: Number(id),
      Count: 1,
    });
  };

  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {books?.map((book) => (
        <div
          key={book.id}
          className="group bg-card border-border mx-auto flex h-full w-full flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="bg-muted flex h-60 items-center justify-center p-4">
            <img
              src={book.image}
              alt={book.name}
              className="h-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-1 flex-col space-y-3 p-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${
                    index < Math.round(book.rate)
                      ? 'fill-secondary text-secondary'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <h3
              className="line-clamp-1 cursor-pointer text-lg font-semibold"
              onClick={() => navigate(`/book/${book.id}`)}
            >
              {book.name}
            </h3>

            <div className="mt-auto flex items-center justify-between pt-2">
              <span className="text-xl font-bold">
                ${Number(book.price).toFixed(2)}
              </span>

              <button
                onClick={() => handleAddToCart(book.id)}
                disabled={isPending}
                className="bg-primary text-primary-foreground rounded-lg p-2 transition hover:opacity-90 disabled:opacity-50"
              >
                <ShoppingBasket className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
