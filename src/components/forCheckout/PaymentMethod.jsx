import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';

export const paymentOptions = [
  {
    value: 'Cash',
    label: '💵 Cash on Delivery',
  },
  {
    value: 'Visa',
    label: '💳 Visa / Mastercard',
  },
];

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
        <div className="space-y-4">
          {paymentOptions.map((option) => (
            <label
              key={option.value}
              className="hover:border-primary hover:bg-primary/5 flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition"
            >
              <input
                type="radio"
                name="payment"
                value={option.value}
                checked={paymentMethod === option.value}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <span>{option.label}</span>
            </label>
          ))}
        </div>

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
