import React from 'react';
import useBooks from '@/hooks/useBooks';
export default function Books() {
  const { data: books, isLoading, error } = useBooks();
  console.log(books);
  return (
    <div>
      {books?.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
