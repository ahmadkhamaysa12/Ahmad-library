import { Link } from 'react-router-dom';
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export default function Page404() {
  return (
    <Container className="flex min-h-[calc(100vh-200px)] items-center justify-center py-12">
      <div className="max-w-md text-center">
        <h1 className="text-primary font-serif text-9xl font-bold">404</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mt-4">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Button asChild className="mt-6">
          <Link to="/">Go back home</Link>
        </Button>
      </div>
    </Container>
  );
}
