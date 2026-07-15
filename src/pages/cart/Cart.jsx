import React from 'react';
import useCart from '../../hooks/useCart';
import useUpdateQty from '../../hooks/useUpdateQty';

export default function Cart() {
  const { data: cart, isLoading, error } = useCart();

  const { mutate: updateQty, isPending } = useUpdateQty();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading cart</div>;

  const handleUpdateQty = (productId, count) => {
    if (count < 1) return;

    updateQty({
      productId,
      count,
    });
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
                  disabled={isPending}
                  onClick={() =>
                    handleUpdateQty(item.productId, item.count - 1)
                  }
                  className="hover:bg-muted rounded-lg border px-3 py-1 font-bold"
                >
                  -
                </button>

                <span className="font-bold">{item.count}</span>

                <button
                  disabled={isPending}
                  onClick={() =>
                    handleUpdateQty(item.productId, item.count + 1)
                  }
                  className="hover:bg-muted rounded-lg border px-3 py-1 font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <p className="font-bold">${item.totalPrice}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4 text-xl font-bold">
        Total: ${cart?.cartTotal}
      </div>
    </div>
  );
}
