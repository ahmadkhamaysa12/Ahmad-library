import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductDetails({ book }) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="font-serif text-2xl">
          About this Product
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground leading-8 whitespace-pre-line">
          {book.description}
        </p>
      </CardContent>
    </Card>
  );
}