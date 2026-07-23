import { useState } from 'react';
import { ShoppingCart, Minus, Plus, Truck, ShieldCheck } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import useAddToCart from '@/hooks/useAddToCart';

export default function BookPurchase({ book }) {
  const [count, setCount] = useState(1);

  const { mutate: addToCart, isPending } = useAddToCart();

  const handleAddToCart = () => {
    addToCart({
      ProductId: Number(book.id),
      Count: count,
    });
  };

  return (
    <Card className="border-border bg-card w-full">
      <CardHeader>
        <CardTitle className="text-xl">Purchase</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex items-center justify-between border-b pb-5">
          <span className="text-primary text-3xl font-bold">${book.price}</span>

          <span className="bg-secondary/20 text-secondary rounded-full px-3 py-1 text-xs font-bold">
            AVAILABLE
          </span>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">DELIVERY</span>

            <span className="flex items-center gap-2">
              <Truck className="text-primary h-4 w-4" />
              Secure Courier
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">CERTIFICATE</span>

            <span className="flex items-center gap-2">
              <ShieldCheck className="text-secondary h-4 w-4" />
              Authenticity Included
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg border p-3">
          <span className="text-muted-foreground text-sm">Quantity</span>

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
          className="w-full gap-2 text-base"
          size="lg"
          disabled={isPending}
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-5 w-5" />

          {isPending ? 'Adding...' : 'Add To Cart'}
        </Button>

        <p className="text-muted-foreground text-center text-xs">
          Ships internationally. Price includes archival boxing and insurance.
        </p>
      </CardContent>
    </Card>
  );
}
