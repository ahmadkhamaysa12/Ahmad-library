import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import { paymentOptions } from './PaymentMethod';

export default function OrderSuccessDialog({
  open,
  onOpenChange,
  paymentMethod,
}) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onOpenChange(false);
    navigate('/');
  };

  const selectedPayment = paymentOptions.find(
    (option) => option.value === paymentMethod,
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
          {selectedPayment && (
            <p className="bg-secondary/10 rounded-lg p-3 text-sm font-medium">
              Payment method: {selectedPayment.label}
            </p>
          )}
          <button
            onClick={handleContinue}
            className="bg-primary text-primary-foreground w-full rounded-xl py-3 font-semibold transition hover:opacity-90"
          >
            Continue Shopping
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
