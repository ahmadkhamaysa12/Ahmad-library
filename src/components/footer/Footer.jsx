import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const links = [
    { title: t('footer.archive'), href: '/about' },
    { title: t('footer.shipping'), href: '/shipping' },
    { title: t('footer.privacy'), href: '/privacy' },
    { title: t('footer.terms'), href: '/terms' },
    { title: t('footer.contact'), href: '/contact' },
  ];

  return (
    <footer className="border-border bg-background border-t">
      <div className="container mx-auto flex flex-col items-center px-6 py-20">
        <h2 className="text-secondary font-serif text-4xl font-bold tracking-tight md:text-5xl">
          {t('lib_name')}
        </h2>

        <nav className="my-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-muted-foreground hover:text-primary text-base font-medium underline underline-offset-4 transition-all"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <p className="text-primary/80 text-center text-lg">
          © {new Date().getFullYear()} {t('lib_name')}. {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
