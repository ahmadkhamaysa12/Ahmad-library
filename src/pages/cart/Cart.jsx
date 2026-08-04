import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useCart from '../../hooks/useCart';
import useUpdateQty from '../../hooks/useUpdateQty';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useClearCart from '../../hooks/useClearCart';
import useBooks from '@/hooks/useBooks';

import Container from '@/components/ui/container';
import CartSummary from '@/components/forCart/CartSummary';
import CartList from '@/components/forCart/CartList';

export default function Cart() {
  const navigate = useNavigate();

  const [updatingId, setUpdatingId] = useState(null);
  const [removingId, setRemovingId] = useState(null);

  const { data: cart, cartIsLoading, cartError } = useCart();
  const { data: books } = useBooks();

  const { mutate: clearCart, isPending: isClearing } = useClearCart();

  const { mutate: updateQty } = useUpdateQty();

  const { mutate: removeFromCart } = useRemoveFromCart();

  if (cartIsLoading) {
    return <div>Cart is loading...</div>;
  }

  if (cartError) {
    return <div>Error loading cart</div>;
  }

  const handleUpdateQty = (productId, count) => {
    if (count === 0) {
      handleRemove(productId);
      return;
    }

    setUpdatingId(productId);

    updateQty(
      {
        productId,
        count,
      },
      {
        onSettled: () => {
          setUpdatingId(null);
        },
      },
    );
  };

  const handleRemove = (productId) => {
    setRemovingId(productId);

    removeFromCart(productId, {
      onSettled: () => {
        setRemovingId(null);
      },
    });
  };

  return (
    <Container className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-3">
      <section className="lg:col-span-2">
        <CartList
          items={cart?.items}
          books={books}
          onUpdateQty={handleUpdateQty}
          onRemove={handleRemove}
          updatingId={updatingId}
          removingId={removingId}
        />
      </section>

      <aside className="lg:col-span-1">
        <CartSummary
          cart={cart}
          onClear={clearCart}
          isClearing={isClearing}
          onCheckout={() => navigate('/checkout')}
        />
      </aside>
    </Container>
  );
}
