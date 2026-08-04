import Hero from '@/components/forHome/Hero';
import CategoriesSection from '@/components/forHome/CategoriesSection';
import FeaturedBooks from '@/components/forHome/FeaturedBooks';
import QuoteSection from '@/components/forHome/QuoteSection';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <FeaturedBooks />
      <QuoteSection />
    </>
  );
}
