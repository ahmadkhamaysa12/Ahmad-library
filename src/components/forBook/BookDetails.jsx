import { useTranslation } from 'react-i18next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BookDetails({ book }) {
  const { t } = useTranslation();

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="font-serif text-2xl">
          {t('bookPage.about')}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground leading-8 whitespace-pre-line">
          {book.description || t('bookPage.noDescription')}
        </p>
      </CardContent>
    </Card>
  );
}
