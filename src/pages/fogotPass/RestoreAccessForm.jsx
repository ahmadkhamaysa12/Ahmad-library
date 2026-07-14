import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import logo from '../../assets/logo.svg';
import { RestoreAccessSchema } from '../../validation/RestoreAccessSchema';

import authinstance from '../../api/authAxiosInstance';
import { Languages, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import i18n from '../../i18next';

export default function RestoreAccessForm() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(RestoreAccessSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    try {
      const response = await authinstance.post(
        '/auth/Account/SendCode',
        data,
      );

      if (response.status === 200) {
        toast.success(t('restorePage.success'));
        navigate('/login');
      }
    } catch (error) {
      toast.error(t('restorePage.failed'));

      console.log(error.response?.data || error.message);
    }
  };

  return (
    <Card className="w-full border-none shadow-lg">
      <CardHeader className="flex flex-col items-center justify-center text-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="mb-4 h-20 w-20 object-contain"
          />
        </Link>

        <CardTitle className="text-2xl font-bold">
          {t('restorePage.welcome')}
        </CardTitle>

        <p className="text-muted-foreground text-sm">
          {t('restorePage.subtitle')}
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}

          <div className="space-y-2">
            <Label>{t('restorePage.email')}</Label>

            <Input
              type="email"
              autoComplete="email"
              className="!bg-search placeholder:text-search-foreground rounded-lg"
              placeholder="example@email.com"
              {...register('email')}
            />

            {errors.email && (
              <p className="text-sm text-red-500">{t(errors.email.message)}</p>
            )}
          </div>

          {/* Button */}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t('restorePage.sending') : t('restorePage.send')}
          </Button>
          <div className="flex items-center justify-between gap-3 max-[400px]:flex-col">
            <p className="text-muted-foreground text-sm whitespace-nowrap">
              {t('restorePage.rememberPassword')}{' '}
              <Link to="/login" className="text-primary hover:underline">
                {t('login')}
              </Link>
            </p>

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={changeLanguage}
              >
                <Languages className="h-5 w-5" />
              </Button>

              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
