import { ArrowRight, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import heroImage from '@/assets/side.png';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative isolate overflow-hidden border-b border-border/40">
      {/* Background */}
      <img
        src={heroImage}
        alt={t('homePage.hero.title')}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40 dark:opacity-20"
      />

      <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] dark:bg-background/50" />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background/60 to-background dark:from-primary/10 dark:via-background/70" />

      <div className="container relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="secondary"
            className="rounded-full px-4 py-1 text-sm font-medium shadow-sm"
          >
            {t('homePage.hero.badge')}
          </Badge>

          <h1 className="font-serif mt-8 text-5xl leading-tight font-bold tracking-tight md:text-7xl">
            {t('homePage.hero.title')}{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('homePage.hero.highlight')}
            </span>
          </h1>

          <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-lg leading-8">
            {t('homePage.hero.description')}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
              <Link to="/books">
                <BookOpen className="me-2 h-5 w-5" />
                {t('homePage.hero.browse')}
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow">
              <Link to="/categories">
                {t('homePage.hero.categories')}
                <ArrowRight className="ms-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-border/50 pt-10 sm:grid-cols-3">
            <div className="rounded-lg bg-card/50 p-4 backdrop-blur-sm">
              <h3 className="text-primary text-3xl font-bold">10K+</h3>
              <p className="text-muted-foreground mt-2 text-sm">
                {t('homePage.hero.books')}
              </p>
            </div>

            <div className="rounded-lg bg-card/50 p-4 backdrop-blur-sm">
              <h3 className="text-primary text-3xl font-bold">500+</h3>
              <p className="text-muted-foreground mt-2 text-sm">
                {t('homePage.hero.authors')}
              </p>
            </div>

            <div className="rounded-lg bg-card/50 p-4 backdrop-blur-sm">
              <h3 className="text-primary text-3xl font-bold">100%</h3>
              <p className="text-muted-foreground mt-2 text-sm">
                {t('homePage.hero.authentic')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}