import Container from '@/components/ui/container';
import AddReview from '@/components/forBook/AddReview';
import BookGallery from '@/components/forBook/BookGallery';
import BookInfo from '@/components/forBook/BookInfo';
import BookPurchase from '@/components/forBook/BookPurchase';
import BookDetails from '@/components/forBook/BookDetails';
import BookReviews from '@/components/forBook/BookReviews';

import useBook from '@/hooks/useBook';
import { useParams } from 'react-router-dom';

export default function Book() {
  const { id } = useParams();

  const { data: book, isLoading, isError } = useBook(id);

  if (isLoading) {
    return (
      <Container className="flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground">Loading book...</p>
      </Container>
    );
  }

  if (isError || !book) {
    return (
      <Container className="flex min-h-[60vh] items-center justify-center">
        <p className="text-destructive">Failed to load book</p>
      </Container>
    );
  }

  return (
    <Container className="py-10">
      <div className="grid gap-10 lg:grid-cols-12">
        <section className="space-y-10 lg:col-span-7">
          <BookGallery book={book} />
          <BookInfo book={book} />
          <BookDetails book={book} />
        </section>

        <aside className="lg:col-span-5">
          <div className="sticky top-24">
            <BookPurchase book={book} />
          </div>
        </aside>
      </div>
      <AddReview productId={book.id} />
      <BookReviews reviews={book.reviews ?? []} />
    </Container>
  );
}
