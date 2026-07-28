import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      className="bg-background text-foreground min-h-screen"
    >
      {/* Header */}
      <section className="border-border border-b py-10 text-center">
        <h1 className="text-primary font-serif text-4xl font-bold">
          {t('privacy.title')}
        </h1>

        <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm">
          {t('privacy.subtitle')}
        </p>

        <span className="text-muted-foreground mt-5 inline-block rounded-full border px-4 py-1 text-xs">
          {t('privacy.updated')}
        </span>
      </section>

      <main className="container mx-auto grid gap-8 px-5 py-12 lg:grid-cols-[250px_1fr]">
        {/* Contents */}
        <Card className="border-border bg-card h-fit">
          <CardHeader>
            <CardTitle className="text-secondary text-sm">
              {t('privacy.contents')}
            </CardTitle>
          </CardHeader>

          <CardContent className="text-muted-foreground space-y-3 text-sm">
            <p>{t('privacy.policy')}</p>
            <p>{t('privacy.dataCollection')}</p>
            <p>{t('privacy.dataUsage')}</p>
            <p>{t('privacy.cookies')}</p>

            <Separator />

            <p>{t('privacy.terms')}</p>
            <p>{t('privacy.userObligations')}</p>
            <p>{t('privacy.ip')}</p>
            <p>{t('privacy.liability')}</p>
          </CardContent>
        </Card>

        {/* Content */}
        <article className="space-y-10">
          <section>
            <h2 className="text-primary font-serif text-2xl">
              {t('privacy.policy')}
            </h2>

            <Separator className="my-4" />

            <p className="text-muted-foreground leading-7">
              {t('privacy.policyText')}
            </p>
          </section>

          <section>
            <h3 className="text-secondary mb-3 text-lg font-semibold">
              1. {t('privacy.dataCollection')}
            </h3>

            <p className="text-muted-foreground leading-7">
              {t('privacy.collectionText')}
            </p>

            <ul className="text-muted-foreground mt-4 list-disc space-y-2 ps-6">
              <li>{t('privacy.personal')}</li>
              <li>{t('privacy.academic')}</li>
              <li>{t('privacy.interaction')}</li>
            </ul>
          </section>

          <section>
            <h3 className="text-secondary mb-3 text-lg font-semibold">
              2. {t('privacy.dataUsage')}
            </h3>

            <p className="text-muted-foreground leading-7">
              {t('privacy.usageText')}
            </p>

            <blockquote className="bg-muted mt-4 rounded-md border p-4 text-sm italic">
              {t('privacy.quote')}
            </blockquote>
          </section>

          <section>
            <h3 className="text-secondary mb-3 text-lg font-semibold">
              3. {t('privacy.cookies')}
            </h3>

            <p className="text-muted-foreground leading-7">
              {t('privacy.cookiesText')}
            </p>
          </section>

          <section>
            <h2 className="text-primary font-serif text-2xl">
              {t('privacy.terms')}
            </h2>

            <Separator className="my-4" />

            <div className="space-y-6">
              <div>
                <h3 className="text-secondary font-semibold">
                  1. {t('privacy.userObligations')}
                </h3>

                <p className="text-muted-foreground mt-2 leading-7">
                  {t('privacy.userText')}
                </p>
              </div>

              <div>
                <h3 className="text-secondary font-semibold">
                  2. {t('privacy.ip')}
                </h3>

                <p className="text-muted-foreground mt-2 leading-7">
                  {t('privacy.ipText')}
                </p>
              </div>

              <div>
                <h3 className="text-secondary font-semibold">
                  3. {t('privacy.liability')}
                </h3>

                <p className="text-muted-foreground mt-2 leading-7">
                  {t('privacy.liabilityText')}
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
