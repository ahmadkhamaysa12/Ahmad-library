import 'react';
import useCart from '../../hooks/useCart';
import useUpdateQty from '../../hooks/useUpdateQty';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useClearCart from '../../hooks/useClearCart';

export default function Cart() {
  const { mutate: clearCart, isPending: isClearing } = useClearCart();

  const { data: cart, isLoading, error } = useCart();

  const { mutate: updateQty, isPending: isUpdating } = useUpdateQty();

  const { mutate: removeFromCart, isPending: isRemoving } = useRemoveFromCart();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading cart</div>;

  const handleUpdateQty = (productId, count) => {
    if (count === 0) {
      removeFromCart(productId);
      return;
    }

    updateQty({
      productId,
      count,
    });
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Shopping Cart</h1>

      <div className="space-y-4">
        {cart?.items?.map((item) => (
          <div
            key={item.productId}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div>
              <h2 className="text-lg font-semibold">{item.productName}</h2>

              <p>Price: ${item.price}</p>

              <div className="mt-3 flex items-center gap-3">
                <button
                  disabled={isUpdating}
                  onClick={() =>
                    handleUpdateQty(item.productId, item.count - 1)
                  }
                  className="hover:bg-muted rounded-lg border px-3 py-1 font-bold"
                >
                  -
                </button>

                <span className="font-bold">{item.count}</span>

                <button
                  disabled={isUpdating}
                  onClick={() =>
                    handleUpdateQty(item.productId, item.count + 1)
                  }
                  className="hover:bg-muted rounded-lg border px-3 py-1 font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3">
              <p className="font-bold">${item.totalPrice}</p>

              <button
                disabled={isRemoving}
                onClick={() => handleRemove(item.productId)}
                className="border-destructive text-destructive hover:bg-destructive/10 rounded-lg border px-3 py-1 text-sm font-bold transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <h2 className="text-xl font-bold">Total: ${cart?.cartTotal}</h2>

        <button
          disabled={isClearing}
          onClick={() => clearCart()}
          className="border-destructive text-destructive hover:bg-destructive/10 rounded-lg border px-4 py-2 font-bold transition disabled:opacity-50"
        >
          {isClearing ? 'Clearing...' : 'Clear Cart'}
        </button>
      </div>
    </div>
  );
}
