import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';

import router from './router';

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const { documentElement } = document;

    documentElement.lang = i18n.language;
    documentElement.dir = i18n.dir(i18n.language);
  }, [i18n]);

  return <RouterProvider router={router} />;
}
