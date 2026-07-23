import { useState } from 'react';

import Container from '@/components/ui/container';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import useCart from '@/hooks/useCart';
import useCheckout from '@/hooks/useCheckout';
import useBooks from '@/hooks/useBooks';

import OrderSummary from '@/components/forCheckout/OrderSummary';
import PaymentMethod from '@/components/forCheckout/PaymentMethod';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [showSuccess, setShowSuccess] = useState(false);

  const { data: books } = useBooks();
  const { data: cart, isLoading, error } = useCart();
  const { mutate: checkout, isPending } = useCheckout();

  const handleCheckout = () => {
    checkout(paymentMethod, {
      onSuccess: () => {
        if (paymentMethod === 'Cash') {
          setShowSuccess(true);
        }
      },
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading cart</div>;

  return (
    <Container className="py-8">
      <h1 className="mb-8 font-serif text-4xl font-bold">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <OrderSummary cart={cart} books={books} />
        </div>

        <div>
          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            checkout={handleCheckout}
            isPending={isPending}
          />
        </div>
      </div>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-md rounded-2xl p-8 text-center shadow-2xl">
          <DialogHeader className="items-center">
            <div className="bg-primary/10 mb-4 flex h-20 w-20 items-center justify-center rounded-full text-4xl">
              ✓
            </div>

            <DialogTitle className="font-serif text-3xl">
              Order Confirmed
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Your order has been placed successfully.
            </p>

            <p className="bg-secondary/10 rounded-lg p-3 text-sm font-medium">
              💵 Payment method: Cash on Delivery
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="bg-primary text-primary-foreground w-full rounded-xl py-3 font-semibold transition hover:opacity-90"
            >
              Continue Shopping
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </Container>
  );
}
