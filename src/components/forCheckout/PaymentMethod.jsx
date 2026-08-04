import { useTranslation } from 'react-i18next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';

export const paymentOptions = [
  {
    value: 'Cash',
    label: 'checkoutPage.cashPayment',
  },
  {
    value: 'Visa',
    label: 'checkoutPage.visaPayment',
  },
];

export default function PaymentMethod({
  paymentMethod,
  setPaymentMethod,
  checkout,
  isPending,
}) {
  const { t } = useTranslation();

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>{t('checkoutPage.paymentMethod')}</CardTitle>
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

              <span>{t(option.label)}</span>
            </label>
          ))}
        </div>

        <Button
          className="w-full text-lg"
          size="lg"
          disabled={isPending}
          onClick={checkout}
        >
          {isPending
            ? t('checkoutPage.processing')
            : t('checkoutPage.placeOrder')}
        </Button>
      </CardContent>
    </Card>
  );
}
