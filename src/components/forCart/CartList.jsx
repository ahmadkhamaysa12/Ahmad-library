import CartItem from './CartItem';

export default function CartList({
  items,
  books,
  onUpdateQty,
  onRemove,
  updatingId,
}) {
  if (!items?.length) {
    return (
      <p className="text-muted-foreground text-center">Your cart is empty.</p>
    );
  }

  const booksMap = new Map(books?.map((book) => [book.id, book]) ?? []);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem
          key={item.productId}
          item={item}
          book={booksMap.get(item.productId)}
          onUpdateQty={onUpdateQty}
          onRemove={onRemove}
          isUpdating={updatingId === item.productId}
        />
      ))}
    </div>
  );
}
