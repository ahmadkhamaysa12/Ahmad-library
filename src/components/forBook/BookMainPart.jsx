import React, { useState } from 'react';
import { ShoppingCart, Star, ChevronRight } from 'lucide-react';
import useBook from '@/hooks/useBook';
import useAddToCart from '@/hooks/useAddToCart';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '@/components/ui/container';

export default function BookMainPart({ id }) {
  const { t } = useTranslation();

  const { data: book, isLoading, error } = useBook(id);

  const { mutate: addToCart, isPending } = useAddToCart();

  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      ProductId: Number(id),
      Count: count,
    });
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="text-destructive flex min-h-screen items-center justify-center">
        Failed to load book
      </div>
    );
  }

  return (
    <Container>
      <div className="bg-background text-foreground min-h-screen p-6 md:p-12">

        {/* Breadcrumb */}
        <nav className="text-muted-foreground mb-8 flex items-center text-xs font-semibold tracking-widest md:mb-12">
          <Link to="/" className="hover:text-foreground transition">
            {t('bookPage.home')}
          </Link>

          <ChevronRight className="mx-2 h-3 w-3" />

          <Link to="/books" className="hover:text-foreground transition">
            {t('bookPage.books')}
          </Link>

          <ChevronRight className="mx-2 h-3 w-3" />

          <span className="text-secondary max-w-[200px] truncate">
            {book.name}
          </span>
        </nav>


        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="flex flex-col gap-6">
            <div className="border-border bg-card aspect-[4/5] rounded-xl border p-4 shadow-lg">
              <div className="bg-muted flex h-full items-center justify-center overflow-hidden rounded-lg">

                <img
                  src={book.image}
                  alt={book.name}
                  className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                />

              </div>
            </div>
          </div>


          {/* Details */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <div className="mb-6">
              <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-bold">
                {t('bookPage.premium')}
              </span>
            </div>


            {/* Title */}
            <h1 className="mb-4 font-serif text-4xl leading-tight md:text-5xl">
              <span className="text-secondary">
                {book.name}
              </span>
            </h1>


            {/* Rating */}
            <div className="mb-8 flex items-center gap-3">

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.round(book.rate)
                        ? 'fill-secondary text-secondary'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>

              <span className="text-muted-foreground text-sm">
                {book.rate} {t('bookPage.rating')}
              </span>

            </div>


            {/* Price */}
            <div className="text-primary mb-6 font-serif text-4xl">
              ${Number(book.price).toFixed(2)}
            </div>


            {/* Description */}
            <p className="text-muted-foreground mb-10 line-clamp-7 leading-relaxed">
              {book.description || t('bookPage.noDescription')}
            </p>


            {/* Buttons */}
            <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* Counter */}
              <div className="flex items-center gap-3">

                <button
                  onClick={() =>
                    setCount((prev) => Math.max(1, prev - 1))
                  }
                  className="border-border bg-card rounded-lg border px-5 py-4 font-bold transition hover:opacity-80"
                >
                  -
                </button>


                <div className="border-border bg-card flex items-center justify-center rounded-lg border px-6 py-4 font-bold">
                  {count}
                </div>


                <button
                  onClick={() =>
                    setCount((prev) => prev + 1)
                  }
                  className="border-border bg-card rounded-lg border px-5 py-4 font-bold transition hover:opacity-80"
                >
                  +
                </button>

              </div>


              {/* Add To Cart */}
              <button
                onClick={handleAddToCart}
                disabled={isPending}
                className="bg-primary text-primary-foreground flex items-center justify-center gap-2 rounded-lg px-6 py-4 font-bold transition hover:opacity-90 disabled:opacity-50"
              >

                <ShoppingCart className="h-5 w-5" />

                {isPending
                  ? 'Adding...'
                  : t('bookPage.addToCart')
                }

              </button>


              <button className="border-secondary text-secondary hover:bg-secondary/10 rounded-lg border px-6 py-4 font-bold transition sm:col-span-2">
                {t('bookPage.buyNow')}
              </button>

            </div>


            {/* Features */}
            <div className="grid grid-cols-3 gap-3">

              <div className="border-border bg-card rounded-xl border p-4">
                <span className="text-secondary text-xs">
                  {t('bookPage.category')}
                </span>

                <p className="text-card-foreground text-sm font-bold">
                  {t('bookPage.cat')}
                </p>
              </div>


              <div className="border-border bg-card rounded-xl border p-4">
                <span className="text-secondary text-xs">
                  {t('bookPage.stock')}
                </span>

                <p className="text-card-foreground text-sm font-bold">
                  {t('bookPage.available')}
                </p>
              </div>


              <div className="border-border bg-card rounded-xl border p-4">
                <span className="text-secondary text-xs">
                  {t('bookPage.shipping')}
                </span>

                <p className="text-card-foreground text-sm font-bold">
                  {t('bookPage.express')}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </Container>
  );
}