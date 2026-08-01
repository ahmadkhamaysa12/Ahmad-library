import { ShoppingCart, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

import useAddToCart from '@/hooks/useAddToCart';

export default function FeaturedBookCard({ book }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutate: addToCart } = useAddToCart();

  const imageUrl = book.image || book.imageUrl || '/placeholder-book.jpg';
  const price = book.price ? `$${book.price}` : '';

  const openBook = () => navigate(`/book/${book.id}`);

  return (
    <Card className="group overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div
        onClick={openBook}
        className="cursor-pointer overflow-hidden"
      >
        <AspectRatio ratio={4 / 5}>
          <img
            src={imageUrl}
            alt={book.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </AspectRatio>
      </div>

      <CardContent className="space-y-4 p-5">
        {/* Rating */}
        {book.rate !== undefined && (
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
        )}

        {/* Title */}
        <h3
          onClick={openBook}
          className="line-clamp-2 cursor-pointer font-serif text-xl font-semibold transition-colors group-hover:text-primary"
        >
          {book.name}
        </h3>

        {/* Price */}
        {price && (
          <p className="text-2xl font-bold text-primary">
            {price}
          </p>
        )}
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          onClick={() =>
            addToCart({
              ProductId: book.id,
              count: 1,
            })
          }
        >
          <ShoppingCart className="me-2 h-4 w-4" />
          {t('booksPage.addToCart')}
        </Button>
      </CardFooter>
    </Card>
  );
}