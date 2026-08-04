import { ArrowRight, BookOpen } from 'lucide-react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import heroImage from '@/assets/side.png';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative isolate overflow-hidden border-b">
      {/* Background Image */}
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50 dark:opacity-30"
      />

      {/* Image Blur Overlay */}
      <div className="bg-background/30 dark:bg-background/40 absolute inset-0 -z-10 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Badge>{t('homePage.hero.badge')}</Badge>

          <h1 className="mt-8 font-serif text-5xl leading-tight font-bold md:text-7xl">
            {t('homePage.hero.title')}

            <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              {' '}
              {t('homePage.hero.highlight')}
            </span>
          </h1>

          <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-lg leading-8">
            {t('homePage.hero.description')}
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/books">
                <BookOpen className="me-2 h-5 w-5" />

                {t('homePage.hero.browse')}
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link to="/categories">
                {t('homePage.hero.categories')}

                <ArrowRight className="ms-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
