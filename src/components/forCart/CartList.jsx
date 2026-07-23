import CartItem from './CartItem';

export default function CartList({
  items,
  books,
  onUpdateQty,
  onRemove,
  isUpdating,
  isRemoving,
}) {
  if (!items?.length) {
    return (
      <p className="text-muted-foreground text-center">Your cart is empty.</p>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const book = books?.find((book) => book.id === item.productId);

        return (
          <CartItem
            key={item.productId}
            item={item}
            book={book}
            onUpdateQty={onUpdateQty}
            onRemove={onRemove}
            isUpdating={isUpdating}
          />
        );
      })}
    </div>
  );
}
