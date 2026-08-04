import {
  Languages,
  LogOut,
  Menu,
  Moon,
  Search,
  ShoppingCart,
  Sun,
  User,
} from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';
import Container from '@/components/ui/container';

import useAuthStore from '../../store/useAuthStore';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const { theme, setTheme } = useTheme();
  const [searchParams] = useSearchParams();

  const urlSearch = searchParams.get('search') || '';

  const [search, setSearch] = useState(urlSearch);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setSearch(urlSearch);
  }, [urlSearch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search === urlSearch) return;

      if (search.trim()) {
        navigate(`/books?search=${encodeURIComponent(search)}`, {
          replace: true,
        });
      } else {
        navigate('/books', {
          replace: true,
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search, urlSearch, navigate]);

  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';

  const links = [
    { name: t('home'), to: '/' },
    { name: t('books'), to: '/books' },
    { name: t('categories'), to: '/categories' },
  ];

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    setOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const iconButton =
    'rounded-full text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-primary hover:shadow-sm';

  const mobileLink =
    'border-border hover:bg-accent hover:text-primary flex items-center justify-center rounded-xl border py-3 text-base font-medium transition-all duration-200';

  return (
    <header className="bg-background/90 border-border sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <Container>
        <div className="mx-auto flex h-18 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-secondary hover:text-primary font-serif text-3xl font-bold tracking-tight transition-all duration-200"
          >
            {t('lib_name')}
          </Link>

          {/* Search */}
          <div className="bg-card border-border hidden h-11 w-80 items-center gap-3 rounded-xl border px-4 shadow-xs transition-shadow duration-200 hover:shadow-sm sm:flex">
            <Search className="text-muted-foreground h-4 w-4" />

            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('search')}
              className="border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-muted-foreground hover:text-primary after:bg-primary relative text-[15px] font-medium tracking-wide transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <Button
              variant="ghost"
              size="icon"
              className={iconButton}
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={iconButton}
              onClick={changeLanguage}
            >
              <Languages className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={iconButton}
              onClick={toggleTheme}
            >
              {mounted &&
                (theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                ))}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-muted-foreground hover:bg-accent hover:text-primary inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:shadow-sm">
                <User className="h-5 w-5" />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-40">
                {token ? (
                  <>
                    <DropdownMenuItem
                      render={
                        <Link
                          to="/profile"
                          className="flex w-full cursor-pointer items-center"
                        />
                      }
                    >
                      {t('profile')}
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      className="flex w-full cursor-pointer items-center"
                      onClick={logout}
                    >
                      {t('logout')}
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem
                      render={
                        <Link
                          to="/login"
                          className="flex w-full cursor-pointer items-center"
                        />
                      }
                    >
                      {t('login')}
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      render={
                        <Link
                          to="/register"
                          className="flex w-full cursor-pointer items-center"
                        />
                      }
                    >
                      {t('register')}
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="text-muted-foreground hover:bg-accent hover:text-primary inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200">
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent
                side={direction === 'rtl' ? 'left' : 'right'}
                className="bg-background border-border w-[340px] p-0"
              >
                <div className="flex h-full flex-col">
                  {/* Header */}
                  <div className="border-border flex items-center justify-center border-b px-6 py-6">
                    <Link
                      to="/"
                      onClick={() => setOpen(false)}
                      className="text-secondary font-serif text-2xl font-bold"
                    >
                      {t('lib_name')}
                    </Link>
                  </div>

                  <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-8">
                    {/* Navigation */}
                    <div className="space-y-2">
                      {links.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setOpen(false)}
                          className="text-muted-foreground hover:bg-accent hover:text-primary flex items-center justify-center rounded-xl px-4 py-3 text-base font-medium transition-all"
                        >
                          {link.name}
                        </Link>
                      ))}

                      <Link
                        to="/cart"
                        onClick={() => setOpen(false)}
                        className="text-muted-foreground hover:bg-accent hover:text-primary flex items-center justify-center rounded-xl px-4 py-3 text-base font-medium transition-all"
                      >
                        {t('cart')}
                      </Link>
                    </div>

                    <div className="border-border border-t" />

                    {/* Settings */}
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="h-12 w-full rounded-xl"
                        onClick={() => {
                          changeLanguage();
                          setOpen(false);
                        }}
                      >
                        <Languages className="me-2 h-5 w-5" />
                        {t('language')}
                      </Button>

                      <Button
                        variant="outline"
                        className="h-12 w-full rounded-xl"
                        onClick={toggleTheme}
                      >
                        {mounted &&
                          (theme === 'dark' ? (
                            <>
                              <Sun className="me-2 h-5 w-5" />
                              {t('light_mode')}
                            </>
                          ) : (
                            <>
                              <Moon className="me-2 h-5 w-5" />
                              {t('dark_mode')}
                            </>
                          ))}
                      </Button>
                    </div>

                    <div className="border-border border-t" />

                    {/* Account */}
                    <div className="space-y-2">
                      {token ? (
                        <>
                          <Link
                            to="/profile"
                            onClick={() => setOpen(false)}
                            className="text-muted-foreground hover:bg-accent hover:text-primary flex h-12 items-center justify-center rounded-xl border font-medium transition"
                          >
                            <User className="me-2 h-5 w-5" />
                            {t('profile')}
                          </Link>

                          <button
                            onClick={() => {
                              logout();
                              setOpen(false);
                            }}
                            className="text-muted-foreground hover:bg-accent hover:text-primary flex h-12 w-full items-center justify-center rounded-xl border font-medium transition"
                          >
                            <LogOut className="me-2 h-5 w-5" />
                            {t('logout')}
                          </button>
                        </>
                      ) : (
                        <>
                          <Link
                            to="/login"
                            onClick={() => setOpen(false)}
                            className="text-muted-foreground hover:bg-accent hover:text-primary flex h-12 items-center justify-center rounded-xl border font-medium transition"
                          >
                            {t('login')}
                          </Link>

                          <Link
                            to="/register"
                            onClick={() => setOpen(false)}
                            className="text-muted-foreground hover:bg-accent hover:text-primary flex h-12 items-center justify-center rounded-xl border font-medium transition"
                          >
                            {t('register')}
                          </Link>
                        </>
                      )}
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
