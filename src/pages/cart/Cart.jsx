import useCart from '../../hooks/useCart';
import useUpdateQty from '../../hooks/useUpdateQty';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useClearCart from '../../hooks/useClearCart';
import { useNavigate } from 'react-router-dom';
import Container from '@/components/ui/container';
import CartSummary from '@/components/forCart/CartSummary';
import CartList from '@/components/forCart/CartList';
import useBooks from '@/hooks/useBooks';

export default function Cart() {
  const { mutate: clearCart, isPending: isClearing } = useClearCart();
  const navigate = useNavigate();
  const { data: cart, cartIsLoading, cartError } = useCart();
  const { data: books } = useBooks();
  const { mutate: updateQty, isPending: isUpdating } = useUpdateQty();

  const { mutate: removeFromCart, isPending: isRemoving } = useRemoveFromCart();
  console.log(cart);
  if (cartIsLoading) return <div>Cart is loading...</div>;

  if (cartError) return <div>Error loading cart</div>;
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
    <Container className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-3">
      <section className="lg:col-span-2">
        <CartList
          items={cart?.items}
          books={books}
          onUpdateQty={handleUpdateQty}
          onRemove={handleRemove}
          isUpdating={isUpdating}
          isRemoving={isRemoving}
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
