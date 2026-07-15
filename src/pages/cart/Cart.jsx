import React from 'react';
import useCart from '../../hooks/useCart';

export default function Cart() {
  const { data: cart, isLoading, error } = useCart();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading cart</div>;

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

              <p>Quantity: {item.count}</p>
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
  