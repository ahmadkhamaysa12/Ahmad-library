import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

import { paymentOptions } from './PaymentMethod';

export default function OrderSuccessDialog({
  open,
  onOpenChange,
  paymentMethod,
}) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const selectedPayment = paymentOptions.find(
    (option) => option.value === paymentMethod,
  );

  const handleContinue = () => {
    onOpenChange(false);
    navigate('/');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-2xl p-8 text-center shadow-2xl">
        <DialogHeader className="items-center">
          <div className="bg-primary/10 mb-4 flex h-20 w-20 items-center justify-center rounded-full text-4xl">
            ✓
          </div>

          <DialogTitle className="font-serif text-3xl">
            {t('checkoutPage.orderConfirmed')}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-muted-foreground">
            {t('checkoutPage.orderPlaced')}
          </p>

          {selectedPayment && (
            <p className="bg-secondary/10 rounded-lg p-3 text-sm font-medium">
              {t('checkoutPage.paymentMethod')}: {t(selectedPayment.label)}
            </p>
          )}

          <Button onClick={handleContinue} className="w-full rounded-xl">
            {t('checkoutPage.continueShopping')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
