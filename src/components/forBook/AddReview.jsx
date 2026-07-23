import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import usePostReview from '@/hooks/usePostReview';

export default function AddReview({ productId }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const { mutate: postReview, isPending } = usePostReview();

  function handleSubmit(e) {
    e.preventDefault();

    if (!rating || !comment.trim()) return;

    postReview(
      {
        productId,
        rating,
        comment,
      },
      {
        onSuccess: () => {
          setRating(0);
          setComment('');
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
      <h3 className="font-serif text-2xl font-bold">
        Write a Review
      </h3>

      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={28}
            onClick={() => setRating(i + 1)}
            className={`cursor-pointer transition ${
              i < rating
                ? 'fill-secondary text-secondary'
                : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>

      <Textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <Button
        type="submit"
        disabled={isPending || rating === 0 || !comment.trim()}
      >
        {isPending ? 'Sending...' : 'Submit Review'}
      </Button>
    </form>
  );
}