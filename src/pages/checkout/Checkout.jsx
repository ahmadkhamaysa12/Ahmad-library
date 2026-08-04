import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Container from '@/components/ui/container';

import useCart from '@/hooks/useCart';
import useCheckout from '@/hooks/useCheckout';
import useBooks from '@/hooks/useBooks';

import OrderSummary from '@/components/forCheckout/OrderSummary';
import PaymentMethod from '@/components/forCheckout/PaymentMethod';
import OrderSuccessDialog from '@/components/forCheckout/OrderSuccessDialog';

export default function Checkout() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [showSuccess, setShowSuccess] = useState(false);

  const { data: books } = useBooks();
  const { data: cart, isLoading, error } = useCart();

  const { mutate: checkout, isPending } = useCheckout();

  const handleCheckout = () => {
    checkout(paymentMethod, {
      onSuccess: (data) => {
        if (paymentMethod === 'Cash') {
          setShowSuccess(true);
        }

        if (paymentMethod === 'Visa' && data?.url) {
          window.location.href = data.url;
        }
      },
    });
  };

  if (isLoading) {
    return <div className="py-10 text-center">{t('common.loading')}</div>;
  }

  if (error) {
    return <div className="py-10 text-center">{t('common.error')}</div>;
  }

  return (
    <Container className="py-8">
      <h1 className="mb-8 font-serif text-4xl font-bold">
        {t('checkoutPage.title')}
      </h1>

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

      <OrderSuccessDialog
        open={showSuccess}
        onOpenChange={setShowSuccess}
        paymentMethod={paymentMethod}
      />
    </Container>
  );
}
