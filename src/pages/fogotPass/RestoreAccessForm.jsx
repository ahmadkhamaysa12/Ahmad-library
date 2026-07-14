import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm, useWatch } from "react-hook-form";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { useTranslation } from 'react-i18next';
import { Languages, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';


import logo from '../../assets/logo.svg';
import authinstance from '../../api/authAxiosInstance';
import i18n from '../../i18next';

export default function ResetPassword() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const navigate = useNavigate();

const {
  register,
  handleSubmit,
  control,
  formState: { errors, isSubmitting },
} = useForm();

  const email = useWatch({
  control,
  name: "email",
});

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  const sendCode = async () => {
    try {
      await authinstance.post('/auth/Account/SendCode', {
        email,
      });

      toast.success(t('resetPage.codeSent'));
    } catch (error) {
      toast.error(t('resetPage.failed'));
      console.log(error.response?.data || error.message);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await authinstance.patch(
        '/auth/Account/ResetPassword',
        {
          email: data.email,
          code: data.code,
          newPassword: data.newPassword,
        },
      );

      if (response.status === 200) {
        toast.success(t('resetPage.success'));
        navigate('/login');
      }
    } catch (error) {
      toast.error(t('resetPage.failed'));
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <Card className="w-full border-none shadow-lg">
      <CardHeader className="flex flex-col items-center text-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="mb-4 h-20 w-20 object-contain"
          />
        </Link>

        <CardTitle className="text-2xl font-bold">
          {t('resetPage.welcome')}
        </CardTitle>

        <p className="text-muted-foreground text-sm">
          {t('resetPage.subtitle')}
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label>{t('resetPage.email')}</Label>

            <div className="flex gap-2">
              <Input
                type="email"
                autoComplete="email"
                placeholder="example@email.com"
                className="bg-search! placeholder:text-search-foreground rounded-lg"
                {...register('email')}
              />

              <Button
                type="button"
                onClick={sendCode}
                className="whitespace-nowrap"
              >
                {t('resetPage.sendCode')}
              </Button>
            </div>

            {errors.email && (
              <p className="text-sm text-red-500">
                {t(errors.email.message)}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>{t('resetPage.code')}</Label>

            <Input
              type="text"
              autoComplete="one-time-code"
              placeholder="0000"
              className="bg-search! placeholder:text-search-foreground rounded-lg"
              {...register('code')}
            />

            {errors.code && (
              <p className="text-sm text-red-500">
                {t(errors.code.message)}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>{t('resetPage.password')}</Label>

            <Input
              type="password"
              autoComplete="new-password"
              placeholder={t('resetPage.password')}
              className="bg-search! placeholder:text-search-foreground rounded-lg"
              {...register('newPassword')}
            />

            {errors.newPassword && (
              <p className="text-sm text-red-500">
                {t(errors.newPassword.message)}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting
              ? t('resetPage.resetting')
              : t('resetPage.reset')}
          </Button>

          <div className="flex items-center justify-between gap-3 max-[400px]:flex-col">
            <p className="text-muted-foreground text-sm whitespace-nowrap">
              {t('resetPage.rememberPassword')}{' '}
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
                onClick={() =>
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                }
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