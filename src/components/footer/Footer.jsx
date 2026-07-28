import { Link } from 'react-router-dom';

const links = [
  {
    title: 'About Our Archive',
    href: '/about',
  },
  {
    title: 'Shipping & Returns',
    href: '/shipping',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy',
  },
  {
    title: 'Terms of Service',
    href: '/terms',
  },
  {
    title: 'Contact Scholar',
    href: '/contact',
  },
];

export default function Footer() {
  return (
    <footer className="border-border bg-background border-t">
      <div className="container mx-auto flex flex-col items-center px-6 py-20">
        <h2 className="text-secondary font-serif text-4xl font-bold tracking-tight md:text-5xl">
          Ahmad Library
        </h2>

        <nav className="my-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="text-muted-foreground hover:text-primary text-base font-medium tracking-wide underline underline-offset-4 transition-all duration-200 hover:underline-offset-8"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <p className="text-primary/80 text-center text-lg">
          © {new Date().getFullYear()} Ahmad Library. Preserving Heritage
          Through Knowledge.
        </p>
      </div>
    </footer>
  );
}
