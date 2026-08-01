import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CategoryCard({ category }) {
  const booksCount = category.booksCount || category._count?.books || 0;

  return (
    <Card className="group border-border/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-xl">
      <CardContent className="flex flex-col items-center p-8 text-center">
        <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold shadow-sm transition-colors">
          {category.name?.charAt(0) || '?'}
        </div>

        <h3 className="font-serif text-2xl font-semibold tracking-tight">
          {category.name || 'Unnamed Category'}
        </h3>

        <p className="text-muted-foreground mt-3 text-sm">{booksCount} Books</p>
      </CardContent>

      <CardFooter>
        <Button
          asChild
          variant="ghost"
          className="group-hover:bg-primary group-hover:text-primary-foreground w-full transition-all group-hover:shadow-md"
        >
          <Link to={`/books?category=${category.id}`}>
            Explore
            <ArrowRight className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
