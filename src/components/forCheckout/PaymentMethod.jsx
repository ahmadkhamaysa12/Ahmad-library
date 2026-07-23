import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PaymentMethod({
  paymentMethod,
  setPaymentMethod,
  checkout,
  isPending,
}) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <label className="hover:border-primary hover:bg-primary/5 flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition">
          <input
            type="radio"
            name="payment"
            value="Cash"
            checked={paymentMethod === 'Cash'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />

          <span>💵 Cash on Delivery</span>
        </label>

        <label className="hover:border-primary hover:bg-primary/5 flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition">
          <input
            type="radio"
            name="payment"
            value="Visa"
            checked={paymentMethod === 'Visa'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />

          <span>💳 Visa / Mastercard</span>
        </label>

        <Button
          className="w-full text-lg"
          size="lg"
          disabled={isPending}
          onClick={checkout}
        >
          {isPending ? 'Processing...' : 'Place Order'}
        </Button>
      </CardContent>
    </Card>
  );
}
