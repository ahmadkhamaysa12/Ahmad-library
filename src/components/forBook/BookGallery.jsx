import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function BookGallery({ book }) {
  const [selectedImage, setSelectedImage] = useState(book?.image);

  if (!book) return null;

  const images = [book.image, ...(book.subImages || [])];

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-8">
        <div className="bg-muted flex aspect-4/5 items-center justify-center overflow-hidden rounded-xl">
          <img
            src={selectedImage}
            alt={book.name}
            className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {images.length > 1 && (
          <div className="mt-5 grid grid-cols-4 gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden rounded-lg border transition ${
                  selectedImage === image ? 'ring-primary ring-2' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${book.name}-${index}`}
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
