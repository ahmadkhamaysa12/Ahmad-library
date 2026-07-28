import { ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import useAddToCart from '@/hooks/useAddToCart';

export default function BookCard({ book }) {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { mutate: addToCart } = useAddToCart();

  const openBook = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <Card className="group border-border/50 bg-card overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}

      <div
        onClick={openBook}
        className="group/image bg-muted/30 relative flex aspect-4/5 cursor-pointer items-center justify-center overflow-hidden p-6"
      >
        <img
          src={book.imageUrl || book.image}
          alt={book.name || book.title}
          className="relative h-full w-full rounded-md object-contain transition-all duration-700 ease-out group-hover/image:scale-105"
        />
      </div>
      <CardContent className="space-y-4 p-5">
        {/* Category */}

        {(book.categoryName || book.category) && (
          <Badge>{book.categoryName || book.category}</Badge>
        )}

        {/* Title */}

        <h2
          onClick={openBook}
          className="hover:text-primary line-clamp-2 cursor-pointer font-serif text-xl font-bold transition-colors duration-300"
        >
          {book.name || book.title}
        </h2>

        {/* Author */}

        <p className="text-muted-foreground text-sm italic">
          {book.author || ''}
        </p>

        {/* Price + Cart */}

        <div className="flex items-center justify-between border-t pt-4">
          <span className="text-primary text-2xl font-bold">${book.price}</span>

          <Button
            className="transition-transform duration-200 hover:scale-105 active:scale-95"
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
