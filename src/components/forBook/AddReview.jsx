import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import usePostReview from '@/hooks/usePostReview';

export default function AddReview({ productId }) {
  const { t } = useTranslation();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const { mutate: postReview, isPending } = usePostReview();

  function handleSubmit(e) {
    e.preventDefault();

    if (!rating || !comment.trim()) return;

    postReview(
      {
        productId: Number(productId),
        rating,
        comment: comment.trim(),
      },
      {
        onSuccess: () => {
          setRating(0);
          setComment('');
        },
      },
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
      <h3 className="font-serif text-2xl font-bold">
        {t('bookPage.writeReview')}
      </h3>

      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={28}
            onClick={() => setRating(rating === i + 1 ? 0 : i + 1)}
            className={`cursor-pointer transition ${
              i < rating
                ? 'fill-secondary text-secondary'
                : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>

      <Textarea
        placeholder={t('bookPage.comment')}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <Button
        type="submit"
        disabled={isPending || rating === 0 || !comment.trim()}
      >
        {isPending ? t('bookPage.sending') : t('bookPage.submitReview')}
      </Button>
    </form>
  );
}
