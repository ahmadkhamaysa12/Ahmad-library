import { useEffect, useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';

export default function BookGallery({ book }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (book?.image) {
      setSelectedImage(book.image);
    }
  }, [book]);

  if (!book) return null;

  const images = [book.image, ...(book.subImages ?? [])].filter(Boolean);

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-8">
        <div className="bg-muted flex aspect-4/5 items-center justify-center overflow-hidden rounded-xl">
          <img
            src={selectedImage || '/placeholder-book.png'}
            alt={book.name}
            className="h-full w-full object-contain transition duration-500 hover:scale-105"
          />
        </div>

        {images.length > 1 && (
          <div className="mt-5 grid grid-cols-4 gap-3">
            {images.map((image) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden rounded-lg border transition ${
                  selectedImage === image ? 'ring-primary ring-2' : ''
                } `}
              >
                <img
                  src={image}
                  alt={book.name}
                  className="aspect-square w-full object-cover transition hover:scale-105"
                />
              </button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
