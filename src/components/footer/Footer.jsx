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
      <div className="container mx-auto flex flex-col items-center px-6 py-16">
        {/* Logo */}
        <Link
          to="/"
          className="text-secondary hover:text-primary font-serif text-4xl font-bold tracking-tight transition-all md:text-5xl"
        >
          {t('lib_name')}
        </Link>

        {/* Description */}
        <p className="text-muted-foreground mt-5 max-w-xl text-center text-sm leading-7 md:text-base">
          {t('footer.description')}
        </p>

        {/* Links */}
        <nav className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-muted-foreground hover:text-primary after:bg-primary relative text-sm font-medium transition-colors after:absolute after:start-0 after:-bottom-1 after:h-0.5 after:w-0 after:transition-all hover:after:w-full"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-border mt-10 w-full border-t" />

        {/* Copyright */}
        <p className="text-muted-foreground mt-6 text-center text-sm">
          © {new Date().getFullYear()} {t('lib_name')}. {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
