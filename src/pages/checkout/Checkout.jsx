import { useState } from 'react';

import useCart from '@/hooks/useCart';
import useCheckout from '@/hooks/useCheckout';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('Cash');

  const { data: cart, isLoading, error } = useCart();

  const { mutate: checkout, isPending } = useCheckout();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading cart</div>;

  return (
    <div className="container mx-auto max-w-6xl p-6">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Order Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {cart?.items?.map((item) => (
              <div
                key={item.productId}
                className="flex items-center justify-between border-b pb-4"
              >
                <div>
                  <h3 className="font-semibold">{item.productName}</h3>

                  <p className="text-muted-foreground text-sm">
                    Quantity: {item.count}
                  </p>

                  <p className="text-muted-foreground text-sm">
                    Price: ${item.price}
                  </p>
                </div>

                <p className="font-bold">${item.totalPrice}</p>
              </div>
            ))}

            <div className="flex items-center justify-between border-t pt-4 text-xl font-bold">
              <span>Total</span>
              <span>${cart?.cartTotal}</span>
            </div>
          </CardContent>
        </Card>

        {/* Payment */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-4">
              <input
                type="radio"
                name="payment"
                value="Cash"
                checked={paymentMethod === 'Cash'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <span>💵 Cash on Delivery</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-4">
              <input
                type="radio"
                name="payment"
                value="Visa"
                checked={paymentMethod === 'Visa'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <span>💳 Visa / Mastercard</span>
            </label>

            <div className="rounded-lg border p-4">
              <p className="text-muted-foreground text-sm">
                Selected Payment Method
              </p>

              <p className="mt-2 font-semibold">{paymentMethod}</p>
            </div>

            <Button
              className="w-full"
              size="lg"
              disabled={isPending}
              onClick={() => checkout(paymentMethod)}
            >
              {isPending ? 'Processing...' : 'Place Order'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
