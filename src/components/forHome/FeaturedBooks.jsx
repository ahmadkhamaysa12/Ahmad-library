import { useTranslation } from 'react-i18next';
import useBooks from '@/hooks/useBooks';
import FeaturedBookCard from './FeaturedBookCard';
import SectionHeader from './SectionHeader';
import { Skeleton } from '@/components/ui/skeleton';

export default function FeaturedBooks() {
  const { t } = useTranslation();
  const { data: books = [], isLoading } = useBooks();

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          title={t('homePage.featured.title')}
          description={t('homePage.featured.description')}
          buttonText={t('homePage.featured.button')}
          buttonLink="/books"
        />

        {isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-[420px] rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {books.slice(0, 4).map((book) => (
              <FeaturedBookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}