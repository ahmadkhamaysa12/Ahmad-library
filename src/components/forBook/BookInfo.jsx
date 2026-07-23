import { Star } from 'lucide-react';

export default function ProductInfo({ book }) {
  const reviewsCount = book.reviews?.length || 0;
  const rating = Math.round(book.rate || 0);

  return (
    <div className="space-y-4 border-b pb-8">
      <h1 className="text-primary font-serif text-4xl font-bold">
        {book.name}
      </h1>

      <div className="text-secondary text-3xl font-bold">${book.price}</div>

      <div className="text-muted-foreground flex items-center gap-3 text-sm">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={
                i < rating
                  ? 'fill-secondary text-secondary'
                  : 'text-muted-foreground'
              }
            />
          ))}
        </div>

        <span>({reviewsCount} Reviews)</span>
      </div>
    </div>
  );
}
