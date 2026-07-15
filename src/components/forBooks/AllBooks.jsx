import React from 'react';
import useBooks from '@/hooks/useBooks';
import { ShoppingBasket, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function AllBooks() {
   const navigate = useNavigate();
  const { data: books, isLoading, error } = useBooks();
  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-muted h-96 animate-pulse rounded-xl border"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="border-destructive bg-destructive/10 text-destructive flex h-40 items-center justify-center rounded-xl border">
        Failed to load books
      </div>
    );
  }

  if (!books || books.length === 0) {
    return (
      <div className="bg-muted flex h-40 items-center justify-center rounded-xl border">
        No books found
      </div>
    );
  }

  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      { books.map((book) => (
        <div
        
          key={book.id}
          className="group bg-card border-border mx-auto flex h-full w-full flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          {/* Image */}
          <div className="bg-muted flex h-60 items-center justify-center p-4">
            <img
              src={book.image}
              alt={book.name}
              className="h-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col space-y-3 p-4">
            {/* Rating */}
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

            {/* Title */}
            <h3 className="line-clamp-1 text-lg font-semibold" onClick={() => navigate(`/book/${book.id}`)}>{book.name}</h3>

            {/* Price + Button */}
            <div className="mt-auto flex items-center justify-between pt-2">
              <span className="text-xl font-bold">
                ${Number(book.price).toFixed(2)}
              </span>

              <button className="bg-primary text-primary-foreground rounded-lg p-2 transition hover:opacity-90">
                <ShoppingBasket className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
