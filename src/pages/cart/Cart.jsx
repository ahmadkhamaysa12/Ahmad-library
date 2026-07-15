import React from 'react'
import useCart from '../../hooks/useCart'
export default function Cart() {
  const { data: cart, isLoading, error } = useCart();
  console.log(cart);
  return (
    <div>Cart</div>
  )
}
