import { useState } from 'react';

import { ShoppingCart, Minus, Plus, Truck, ShieldCheck } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';

import useAddToCart from '@/hooks/useAddToCart';

import { useTranslation } from 'react-i18next';

export default function BookPurchase({ book }) {
  const { t } = useTranslation();

  const [count, setCount] = useState(1);

  const { mutate: addToCart, isPending } = useAddToCart();

  function handleAddToCart() {
    addToCart({
      ProductId: Number(book.id),

      count: count,
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('bookPage.purchase')}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex items-center justify-between border-b pb-5">
          <span className="text-primary text-3xl font-bold">${book.price}</span>

          <span className="bg-secondary/20 text-secondary rounded-full px-3 py-1 text-xs font-bold">
            {t('bookPage.available')}
          </span>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">
              {t('bookPage.delivery')}
            </span>

            <span className="flex items-center gap-2">
              <Truck className="text-primary h-4 w-4" />

              {t('bookPage.secureCourier')}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">
              {t('bookPage.certificate')}
            </span>

            <span className="flex items-center gap-2">
              <ShieldCheck className="text-secondary h-4 w-4" />

              {t('bookPage.authenticity')}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg border p-3">
          <span className="text-muted-foreground text-sm">
            {t('bookPage.quantity')}
          </span>

          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="outline"
              onClick={() => setCount((prev) => Math.max(1, prev - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>

            <span className="w-8 text-center font-bold">{count}</span>

            <Button
              size="icon"
              variant="outline"
              onClick={() => setCount((prev) => prev + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Button
          size="lg"
          className="w-full gap-2"
          disabled={isPending}
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-5 w-5" />

          {isPending ? t('bookPage.adding') : t('bookPage.addToCart')}
        </Button>

        <p className="text-muted-foreground text-center text-xs">
          {t('bookPage.shipsInternationally')}
        </p>
      </CardContent>
    </Card>
  );
}
