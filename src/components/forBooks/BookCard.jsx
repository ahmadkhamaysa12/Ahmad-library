import { ShoppingCart, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import useAddToCart from '@/hooks/useAddToCart';

export default function BookCard({ book }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { mutate: addToCart } = useAddToCart();

  const openBook = () => navigate(`/book/${book.id}`);

  return (
    <Card className="pt-4-0 group bg-card hover:border-primary/30 overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}

      <div
        onClick={openBook}
        className="bg-muted/20 flex h-80 cursor-pointer items-center justify-center"
      >
        <img
          src={book.image}
          alt={book.name}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <CardContent className="space-y-4 p-5">
        {/* Rating */}

        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= Math.round(book.rate)
                    ? 'fill-amber-400 text-amber-400'
                    : 'fill-muted text-muted-foreground/25'
                }`}
              />
            ))}
          </div>

          <span className="text-muted-foreground text-xs">
            {book.rate.toFixed(1)}
          </span>
        </div>
        {/* Title */}

        <h2
          onClick={openBook}
          className="hover:text-primary line-clamp-2 cursor-pointer font-serif text-xl leading-snug font-bold transition-colors"
        >
          {book.name}
        </h2>

        {/* Price & Cart */}

        <div className="flex items-center justify-between border-t pt-4">
          <span className="text-primary text-2xl font-bold">${book.price}</span>

          <Button
            size="sm"
            onClick={() =>
              addToCart({
                ProductId: book.id,
                count: 1,
              })
            }
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {t('booksPage.addToCart')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
