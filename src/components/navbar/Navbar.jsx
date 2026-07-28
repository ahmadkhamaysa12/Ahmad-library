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
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18next';
import { useTheme } from 'next-themes';
import { useState } from 'react';

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
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';

  const [open, setOpen] = useState(false);

  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);

  const links = [
    { name: t('home'), to: '/' },
    { name: t('books'), to: '/books' },
    { name: t('categories'), to: '/categories' },
  ];

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const iconButton =
    'rounded-full text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-primary hover:shadow-sm';

  return (
    <header className="bg-background/90 border-border sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <Container>
        <div className="mx-auto flex h-[72px] items-center justify-between">
          {/* Logo */}

          <Link
            to="/"
            className="text-secondary hover:text-primary font-serif text-3xl font-bold tracking-tight transition-all duration-200"
          >
            {t('lib_name')}
          </Link>

          {/* Search */}

          <div className="bg-card border-border hidden h-11 w-80 items-center gap-3 rounded-xl border px-4 shadow-xs transition-shadow duration-200 hover:shadow-sm lg:flex">
            <Search className="text-muted-foreground h-4 w-4" />

            <Input
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
                className="text-muted-foreground hover:text-primary after:bg-primary relative text-[15px] font-medium tracking-wide transition-colors duration-200 after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
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
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-muted-foreground hover:bg-accent hover:text-primary inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:shadow-sm">
                <User className="h-5 w-5" />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                {token ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/Profile">{t('profile')}</Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={logout}
                    >
                      {t('logout')}
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/Login">{t('login')}</Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link to="/register">{t('register')}</Link>
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
                className="border-border bg-background w-80"
              >
                <nav className="flex flex-col items-center gap-6 pt-10">
                  <div className="flex w-full flex-col gap-2">
                    {links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className="border-border hover:bg-accent hover:text-primary flex items-center justify-center rounded-xl border py-3 text-base font-medium transition-all duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}

                    <Link
                      to="/cart"
                      onClick={() => setOpen(false)}
                      className="border-border hover:bg-accent hover:text-primary flex items-center justify-center rounded-xl border py-3 text-base font-medium transition-all duration-200"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      {t('cart')}
                    </Link>
                  </div>
                  <div className="border-border w-full border-t" />{' '}
                  {/* Settings */}
                  <div className="border-border w-full border-t" />
                  <div className="flex w-full flex-col gap-3">
                    <Button
                      variant="outline"
                      className="w-full justify-center"
                      onClick={changeLanguage}
                    >
                      <Languages className="mr-2 h-4 w-4" />
                      {t('language')}
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full justify-center"
                      onClick={toggleTheme}
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
                  </div>
                  {/* Account */}
                  <div className="border-border w-full border-t" />
                  <div className="flex w-full flex-col gap-2">
                    {token ? (
                      <>
                        <Link
                          to="/Profile"
                          onClick={() => setOpen(false)}
                          className="border-border hover:bg-accent hover:text-primary flex items-center justify-center rounded-xl border py-3 text-base font-medium transition-all duration-200"
                        >
                          <User className="mr-2 h-5 w-5" />
                          {t('profile')}
                        </Link>

                        <button
                          onClick={() => {
                            logout();
                            setOpen(false);
                          }}
                          className="border-border hover:bg-accent hover:text-primary flex w-full items-center justify-center rounded-xl border py-3 text-base font-medium transition-all duration-200"
                        >
                          <LogOut className="mr-2 h-5 w-5" />
                          {t('logout')}
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/Login"
                          onClick={() => setOpen(false)}
                          className="border-border hover:bg-accent hover:text-primary flex items-center justify-center rounded-xl border py-3 text-base font-medium transition-all duration-200"
                        >
                          <User className="mr-2 h-5 w-5" />
                          {t('login')}
                        </Link>

                        <Link
                          to="/register"
                          onClick={() => setOpen(false)}
                          className="border-border hover:bg-accent hover:text-primary flex items-center justify-center rounded-xl border py-3 text-base font-medium transition-all duration-200"
                        >
                          <User className="mr-2 h-5 w-5" />
                          {t('register')}
                        </Link>
                      </>
                    )}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
