import { Quote } from 'lucide-react';

import { useTranslation } from 'react-i18next';

import { Card, CardContent } from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';

export default function QuoteSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <Card>
          <CardContent className="flex flex-col items-center px-8 py-16 text-center">
            <div className="bg-primary/10 text-primary mb-8 flex h-16 w-16 items-center justify-center rounded-full">
              <Quote />
            </div>

            <blockquote className="font-serif text-3xl italic md:text-5xl">
              "{t('homePage.quote.text')}"
            </blockquote>

            <Separator className="my-8 w-24" />

            <p className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">
              {t('homePage.quote.reference')}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
