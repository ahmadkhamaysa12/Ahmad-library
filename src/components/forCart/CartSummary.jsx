import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Trash2, CreditCard } from 'lucide-react';

export default function CartSummary({ cart, onClear, isClearing, onCheckout }) {
  const subtotal = cart?.cartTotal ?? 0;
  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal + shipping;

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Items</span>
          <span>{cart?.items?.length ?? 0}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-green-600">Free</span>
        </div>

        <Separator />

        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <Button
          className="w-full"
          size="lg"
          onClick={onCheckout}
          disabled={!cart?.items?.length}
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Proceed to Checkout
        </Button>

        <Button
          variant="outline"
          className="w-full"
          onClick={onClear}
          disabled={isClearing || !cart?.items?.length}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Clear Cart
        </Button>
      </CardContent>
    </Card>
  );
}
