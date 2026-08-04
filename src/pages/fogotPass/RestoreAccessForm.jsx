import { useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Languages, Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { useTranslation } from 'react-i18next';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from 'next-themes';

import logo from '../../assets/logo.svg';
import authinstance from '../../api/authAxiosInstance';
import i18n from '../../i18next';

import { ResetPasswordSchema } from '../../validation/ResetPasswordSchema';

export default function ResetPassword() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const schema = useMemo(() => ResetPasswordSchema(t), [t]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const email = useWatch({
    control,
    name: 'email',
  });

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  const sendCode = async () => {
    if (!email) {
      toast.error(t('validation.email.required'));
      return;
    }

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
      const response = await authinstance.patch('/auth/Account/ResetPassword', {
        email: data.email,
        code: data.code,
        newPassword: data.newPassword,
      });

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
      <CardHeader className="flex flex-col items-center justify-center text-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-40 w-40" />
        </Link>

        <CardTitle className="my-4 text-4xl font-bold">
          {t('resetPage.welcome')}
        </CardTitle>

        <p className="text-muted-foreground text-sm">
          {t('resetPage.subtitle')}
        </p>
      </CardHeader>

      <CardContent>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Email */}

          <div className="space-y-3">
            <Label>{t('resetPage.email')}</Label>

            <div className="flex gap-2">
              <Input
                type="email"
                autoComplete="email"
                placeholder="example@email.com"
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
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Code */}

          <div className="space-y-3">
            <Label>{t('resetPage.code')}</Label>

            <Input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              placeholder="0000"
              {...register('code')}
            />

            {errors.code && (
              <p className="text-sm text-red-500">{errors.code.message}</p>
            )}
          </div>

          {/* Password */}

          <div className="space-y-3">
            <Label>{t('resetPage.password')}</Label>

            <Input
              type="password"
              autoComplete="new-password"
              placeholder={t('resetPage.passwordPlaceholder')}
              {...register('newPassword')}
            />

            {errors.newPassword && (
              <p className="text-sm text-red-500">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t('resetPage.resetting') : t('resetPage.reset')}
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
