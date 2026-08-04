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
    <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="font-serif text-4xl font-bold">{title}</h2>

        <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
          {description}
        </p>
      </div>

      {buttonText && (
        <Button asChild variant="outline">
          <Link to={buttonLink}>
            {buttonText}

            <ArrowRight className="ms-2 h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  );
}
