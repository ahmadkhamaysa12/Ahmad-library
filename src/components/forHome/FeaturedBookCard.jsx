import { ShoppingCart, Star } from 'lucide-react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Card, CardContent, CardFooter } from '@/components/ui/card';

import { AspectRatio } from '@/components/ui/aspect-ratio';

import { Button } from '@/components/ui/button';

import useAddToCart from '@/hooks/useAddToCart';

export default function FeaturedBookCard({ book }) {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { mutate: addToCart } = useAddToCart();

  const image = book.imageUrl || book.image || '/placeholder-book.jpg';

  const openBook = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <Card className="group border-border/60 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div onClick={openBook} className="cursor-pointer overflow-hidden">
        <AspectRatio ratio={4 / 5}>
          <img
            src={image}
            alt={book.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
      </div>

      <CardContent className="space-y-4 p-5">
        {book.rate !== undefined && (
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= Math.round(book.rate)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-muted-foreground/30'
                  } `}
                />
              ))}
            </div>

            <span className="text-muted-foreground text-xs">
              {Number(book.rate).toFixed(1)}
            </span>
          </div>
        )}

        <h3
          onClick={openBook}
          className="group-hover:text-primary line-clamp-2 cursor-pointer font-serif text-xl font-semibold transition-colors"
        >
          {book.name}
        </h3>

        <p className="text-primary text-2xl font-bold">
          {book.price} {t('common.currency')}
        </p>
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
