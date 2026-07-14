import {
  Languages,
  Menu,
  Moon,
  Search,
  ShoppingCart,
  Sun,
  User,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';
import i18n from '../../i18next';
import { useTheme } from 'next-themes';

import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import { Separator } from '../ui/separator';

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export default function Navbar() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
  const links = [
    { name: t('home'), href: '/' },
    { name: t('books'), href: '/books' },
    { name: t('categories'), href: '/categories' },
  ];
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };
  const iconButton =
    'text-foreground hover:bg-accent hover:text-accent-foreground transition-colors';
  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="text-primary text-2xl font-bold">
          {t('lib_name')}
        </a>
        {/* Search */}
        <div className="bg-search hidden h-10 w-80 items-center rounded-lg px-3 sm:flex">
          <Search className="text-search-foreground h-4 w-4" />

          <Input
            placeholder={t('search')}
            className="text-search-foreground placeholder:text-search-foreground border-0 shadow-none focus-visible:ring-0"
          />
        </div>
        {/* Desktop Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Actions */}
        <div className="hidden items-center gap-1 lg:flex">
          <Button variant="ghost" size="icon" className={iconButton}>
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={changeLanguage}
            className={iconButton}
          >
            <Languages className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={iconButton}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:bg-accent hover:text-accent-foreground inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors">
              <User className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>{t('profile')}</DropdownMenuItem>
              <DropdownMenuItem>{t('logout')}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Mobile */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger className="hover:bg-accent inline-flex h-9 w-9 items-center justify-center rounded-md">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent
              side={direction === 'rtl' ? 'left' : 'right'}
              className="bg-background text-foreground"
            >
              <nav className="mt-8 flex w-full flex-col gap-6">
                <div className="flex flex-col items-center gap-6">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="bg-border h-px w-full" />
                <div className="flex flex-col gap-3 pt-2">
                  <Button variant="outline" onClick={changeLanguage}>
                    <Languages className="mr-2 h-4 w-fit" />
                    {t('language')}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="mr-2 h-4 w-4" />
                        {t('light_mode')}
                      </>
                    ) : (
                      <>
                        <Moon className="mr-2 h-4 w-4" />
                        {t('dark_mode')}
                      </>
                    )}
                  </Button>
                  <Button variant="outline">
                    <User className="mr-2 h-4 w-4" />
                    {t('profile')}
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
