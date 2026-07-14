import {
  Languages,
  Menu,
  Moon,
  Search,
  ShoppingCart,
  Sun,
  User,
  LogOut,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18next';
import { useTheme } from 'next-themes';

import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';
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
  const { theme, setTheme } = useTheme();

  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';

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
    'text-foreground hover:bg-accent hover:text-accent-foreground transition-colors';

  return (
    <header className="bg-background/80 border-border sticky top-0 z-50 w-full border-b backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="text-primary text-2xl font-bold">
          {t('lib_name')}
        </Link>

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
            <Link
              key={link.to}
              to={link.to}
              className="text-foreground hover:text-primary text-sm font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
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
            onClick={toggleTheme}
            className={iconButton}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger className="hover:bg-accent inline-flex h-9 w-9 items-center justify-center rounded-md">
              <User className="h-5 w-5" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              {token ? (
                <>
                  <DropdownMenuItem>
                    <Link to="/Profile">{t('profile')}</Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={logout} className="cursor-pointer">
                    {t('logout')}
                  </DropdownMenuItem>
                </>
              ) : (
                <DropdownMenuItem>
                  <Link to="/Login">{t('login')}</Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
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
                <nav className="flex w-full flex-col items-center gap-6 pt-10">
                  {/* Links */}
                  <div className="flex w-full flex-col items-center gap-2 px-6">
                    {links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="hover:bg-accent flex w-full justify-center rounded-lg py-3 text-lg font-medium transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>

                  <div className="bg-border h-px w-full" />

                  {/* Settings */}
                  <div className="flex w-full flex-col items-center gap-3 px-6">
                    <Button
                      variant="outline"
                      onClick={changeLanguage}
                      className="w-full justify-center"
                    >
                      <Languages className="mr-2 h-4 w-4" />
                      {t('language')}
                    </Button>

                    <Button
                      variant="outline"
                      onClick={toggleTheme}
                      className="w-full justify-center"
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

                  <div className="bg-border h-px w-full" />

                  {/* Account */}
                  <div className="flex w-full flex-col items-center gap-3 px-6">
                    {token ? (
                      <>
                        <Link
                          to="/Profile"
                          className="hover:bg-accent flex w-full items-center justify-center gap-3 rounded-lg py-3 text-lg font-medium"
                        >
                          <User className="h-5 w-5" />
                          {t('profile')}
                        </Link>

                        <button
                          onClick={logout}
                          className="hover:bg-accent flex w-full items-center justify-center gap-3 rounded-lg py-3 text-lg font-medium"
                        >
                          <LogOut className="h-5 w-5" />
                          {t('logout')}
                        </button>
                      </>
                    ) : (
                      <Link
                        to="/Login"
                        className="hover:bg-accent flex w-full items-center justify-center gap-3 rounded-lg py-3 text-lg font-medium"
                      >
                        <User className="h-5 w-5" />
                        {t('login')}
                      </Link>
                    )}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
