import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import useBooks from '@/hooks/useBooks';


export default function FeaturedBooksSection() {
  const { t } = useTranslation();

  const {
    data: books = [],
    isLoading,
    error,
  } = useBooks({
    sortBy: 'createdAt',
    ascending: false,
  });


  if (isLoading) {
    return (
      <section className="py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-[420px] animate-pulse rounded-2xl bg-muted"
            />
          ))}
        </div>
      </section>
    );
  }


  if (error) {
    return null;
  }


  const featuredBooks = books.slice(0, 4);


  return (
    <section className="border-b py-20">

      <div className="container mx-auto px-4">


        {/* Header */}
        <div className="mb-10 flex items-end justify-between">

          <div>

            <Badge
              variant="secondary"
              className="mb-3"
            >
              {t('featured.badge')}
            </Badge>


            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              {t('featured.title')}
            </h2>


            <p className="mt-3 max-w-xl text-muted-foreground">
              {t('featured.description')}
            </p>

          </div>


          <Link
            to="/books"
            className="
              hidden
              items-center
              gap-2
              text-sm
              font-medium
              text-primary
              transition-all
              hover:gap-3
              sm:flex
            "
          >
            {t('common.viewAll')}
            <ArrowRight size={18} />
          </Link>


        </div>



        {/* Books Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


          {featuredBooks.map((book) => (

            <Card
              key={book.id}
              className="
                group
                overflow-hidden
                border-border/60
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >


              {/* Image */}
              <div
                className="
                  relative
                  aspect-[3/4]
                  overflow-hidden
                  bg-muted
                "
              >

                <img
                  src={book.imageUrl}
                  alt={book.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />


                <Badge
                  className="
                    absolute
                    left-3
                    top-3
                  "
                >
                  {t('featured.new')}
                </Badge>

              </div>



              <CardHeader className="pb-2">

                <CardTitle
                  className="
                    line-clamp-1
                    font-serif
                    text-lg
                    transition
                    group-hover:text-primary
                  "
                >
                  {book.name}
                </CardTitle>


                <p className="text-sm text-muted-foreground">
                  {book.author}
                </p>


              </CardHeader>



              <CardContent>

                <div className="flex items-center gap-1 text-sm">

                  <Star
                    size={16}
                    className="fill-current"
                  />

                  <span>
                    {book.rating ?? '4.8'}
                  </span>

                </div>


                <p
                  className="
                    mt-3
                    text-lg
                    font-bold
                    text-primary
                  "
                >
                  {book.price} $
                </p>


              </CardContent>



              <CardFooter>

                <Button
                  asChild
                  className="w-full"
                >
                  <Link to={`/books/${book.id}`}>
                    {t('common.viewDetails')}
                  </Link>
                </Button>

              </CardFooter>


            </Card>

          ))}


        </div>


        {/* Mobile View All */}
        <Button
          asChild
          variant="ghost"
          className="mt-8 flex w-full sm:hidden"
        >
          <Link to="/books">
            {t('common.viewAll')}
            <ArrowRight />
          </Link>
        </Button>


      </div>

    </section>
  );
}