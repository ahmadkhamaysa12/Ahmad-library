import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function SectionHeader({
  title,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="mb-12 flex items-end justify-between gap-6">
      <div>
        <h2 className="font-serif text-4xl font-bold tracking-tight">
          {title}
        </h2>

        <p className="text-muted-foreground mt-2 max-w-2xl text-lg">
          {description}
        </p>
      </div>

      {buttonText && (
        <Button
          variant="outline"
          asChild
          className="shadow-sm transition-shadow hover:shadow-md"
        >
          <Link to={buttonLink}>
            {buttonText}
            <ArrowRight className="ms-2 h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  );
}
