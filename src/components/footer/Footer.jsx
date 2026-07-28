import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

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
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto flex flex-col items-center px-6 py-20">
        <h2 className="font-serif text-4xl font-bold tracking-tight text-secondary md:text-5xl">
          Ahmad Library
        </h2>

        <nav className="my-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="text-base font-medium tracking-wide text-muted-foreground underline underline-offset-4 transition-all duration-200 hover:text-primary hover:underline-offset-8"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <p className="text-center text-lg text-primary/80">
          © {new Date().getFullYear()} Ahmad Library. Preserving Heritage Through
          Knowledge.
        </p>
      </div>
    </footer>
  );
}