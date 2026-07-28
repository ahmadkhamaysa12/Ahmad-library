import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Container from '@/components/ui/container';
import { BookOpen, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import libraryImage from '@/assets/logo.svg';

export default function AboutLibraryPage() {
  const { t } = useTranslation();

  const timeline = t('aboutPage.timeline', {
    returnObjects: true,
  });

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="space-y-6">
              <Badge variant="secondary" className="rounded-full px-4 py-1">
                {t('aboutPage.badge')}
              </Badge>

              <h1 className="text-primary font-serif text-5xl font-bold lg:text-6xl">
                {t('aboutPage.title')}
              </h1>

              <p className="text-muted-foreground max-w-xl text-lg leading-8">
                {t('aboutPage.description')}
              </p>
            </div>

            <Card className="bg-card border-border overflow-hidden shadow-xl">
              <AspectRatio ratio={4 / 3}>
                <img
                  src={libraryImage}
                  alt={t('aboutPage.title')}
                  className="bg-muted/30 h-full w-full object-contain p-10 transition-transform duration-700 hover:scale-105"
                />
              </AspectRatio>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-muted/30 border-border border-y py-24">
        <Container>
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              {t('aboutPage.timelineBadge')}
            </Badge>

            <h2 className="text-secondary font-serif text-4xl font-bold">
              {t('aboutPage.timelineTitle')}
            </h2>
          </div>

          <div className="relative">
            <div className="bg-secondary/30 absolute top-0 left-4 h-full w-px md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="bg-secondary border-background absolute top-2 left-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 shadow-lg md:left-1/2" />

                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <h3 className="text-primary text-2xl font-bold">
                      {item.year}
                    </h3>

                    <h4 className="mt-2 text-lg font-semibold">{item.title}</h4>

                    <p className="text-muted-foreground mt-3 leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="mb-14">
            <Badge variant="secondary" className="mb-4">
              {t('aboutPage.valuesBadge')}
            </Badge>

            <h2 className="text-primary font-serif text-4xl font-bold">
              {t('aboutPage.valuesTitle')}
            </h2>

            <p className="text-muted-foreground mt-4 max-w-2xl leading-8">
              {t('aboutPage.valuesDescription')}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="bg-card border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="bg-secondary/10 text-secondary mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <BookOpen className="h-6 w-6" />
                </div>

                <CardTitle className="font-serif text-2xl">
                  {t('aboutPage.preservationTitle')}
                </CardTitle>

                <CardDescription className="text-muted-foreground text-base leading-7">
                  {t('aboutPage.preservationDescription')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="grid h-full md:grid-cols-5">
                <CardContent className="space-y-5 p-6 md:col-span-3">
                  <div className="bg-secondary/10 text-secondary flex h-12 w-12 items-center justify-center rounded-xl">
                    <Globe className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-semibold">
                      {t('aboutPage.accessibilityTitle')}
                    </h3>

                    <p className="text-muted-foreground mt-3 leading-7">
                      {t('aboutPage.accessibilityDescription')}
                    </p>
                  </div>
                </CardContent>

                <div className="p-5 md:col-span-2">
                  <AspectRatio ratio={1}>
                    <img
                      src={libraryImage}
                      alt={t('aboutPage.accessibilityTitle')}
                      className="bg-muted/30 h-full w-full rounded-lg object-contain p-8 transition-transform duration-500 hover:scale-105"
                    />
                  </AspectRatio>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
