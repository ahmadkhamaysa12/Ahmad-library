import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function ProductReviews({ reviews = [] }) {
  return (
    <section className="mt-16">
      <h2 className="mb-6 font-serif text-3xl font-bold">Reviews</h2>

      {reviews.length === 0 ? (
        <p className="text-muted-foreground">No reviews yet.</p>
      ) : (
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Card key={index} className="transition hover:shadow-md">
              <CardContent className="space-y-3 p-5">
                <div className="font-semibold">{review.userName}</div>

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < review.rating
                          ? 'fill-secondary text-secondary'
                          : 'text-muted-foreground'
                      }
                    />
                  ))}
                </div>

                <p className="text-muted-foreground">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
