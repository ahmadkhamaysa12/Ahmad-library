import { Card } from '../ui/card';
import QuantitySelector from '../ui/QuantitySelector';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

export default function CartItem({
  item,
  book,
  onUpdateQty,
  onRemove,
  isUpdating,
}) {
  const handleDecrease = () => {
    if (item.count === 1) {
      onRemove(item.productId);
    } else {
      onUpdateQty(item.productId, item.count - 1);
    }
  };

  return (
    <Card className="p-4">
      <div className="flex gap-4">
        <div className="h-28 w-20 shrink-0 overflow-hidden rounded-md">
          <img
            src={book?.image ?? '/placeholder-book.png'}
            alt={item.productName}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <h3 className="line-clamp-1 text-lg font-semibold">
            {book?.name ?? item.productName}
          </h3>

          <QuantitySelector
            value={item.count}
            disabled={isUpdating}
            onIncrease={() => onUpdateQty(item.productId, item.count + 1)}
            onDecrease={handleDecrease}
          />
        </div>

        <div className="flex flex-col items-end justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemove(item.productId)}
            disabled={isUpdating}
          >
            <X className="h-4 w-4" />
          </Button>

          <span className="text-primary text-xl font-bold">
            ${item.totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </Card>
  );
}
