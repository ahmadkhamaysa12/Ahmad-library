import { Card } from '../ui/card';
import QuantitySelector from '../ui/QuantitySelector';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

export default function CartItem({
  item,
  book,
  onUpdateQty,
  onRemove,
  isUpdating,
}) {
  console.log(item);
  return (
    <Card className="p-4">
      <div className="flex gap-4">
        <div className="h-28 w-20 shrink-0 overflow-hidden rounded-md">
          <img
            src={book?.image}
            alt={item.productName}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="line-clamp-1 text-lg font-semibold">
              {book.name}
            </h3>
          </div>

          <QuantitySelector
            value={item.count}
            disabled={isUpdating}
            onIncrease={() => onUpdateQty(item.productId, item.count + 1)}
            onDecrease={() => onUpdateQty(item.productId, item.count - 1)}
          />
        </div>
        <div className="flex flex-col items-end justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemove(item.productId)}
          >
            <X className="h-4 w-4" />
          </Button>

          <span className="text-primary text-xl font-bold">
            ${item.totalPrice}
          </span>
        </div>
      </div>
    </Card>
  );
}
