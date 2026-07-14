import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Languages, Moon, Sun } from 'lucide-react';

import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from 'next-themes';

import logo from '../../assets/logo.svg';
import { RegisterSchema } from '../../validation/RegisterSchema';

import authinstance from '../../api/authAxiosInstance';
import i18n from '../../i18next';

export default function RegisterForm() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const isArabic = i18n.language === 'ar';
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
  console.log("FORM DATA:", data);

  try {
    const response = await authinstance.post(
      '/auth/Account/Register',
      data
    );

    console.log(response);

    if (response.status === 200 || response.status === 201) {
      toast.success(t('registerPage.success'));
      navigate('/login');
    }
  } catch (error) {
    console.log(error);
    toast.error(t('registerPage.failed'));
  }
};

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
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
          {t('registerPage.welcome')}
        </CardTitle>

        <p className="text-muted-foreground text-sm">
          {t('registerPage.subtitle')}
        </p>
      </CardHeader>

      <CardContent>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* FullName */}

          <div className="space-y-2">
            <Label>{t('registerPage.fullName')}</Label>

            <Input
              type="text"
              autoComplete="name"

              className="!bg-search placeholder:text-search-foreground rounded-lg"
              placeholder={t('registerPage.fullName')}
              {...register('fullName')}
            />

            {errors.fullName && (
              <p className="text-sm text-red-500">
                {t(errors.fullName.message)}
              </p>
            )}
          </div>
          {/* Email */}

          <div className="space-y-2">
            <Label>{t('registerPage.email')}</Label>

            <Input
              type="email"
              autoComplete="email"
              className="!bg-search placeholder:text-search-foreground rounded-lg"
              placeholder={t('registerPage.email')}
              {...register('email')}
            />

            {errors.email && (
              <p className="text-sm text-red-500">{t(errors.email.message)}</p>
            )}
          </div>
{/* Username */}

<div className="space-y-2">
  <Label>{t('registerPage.userName')}</Label>

  <Input
    type="text"
    autoComplete="username"
    className="!bg-search placeholder:text-search-foreground rounded-lg"
    placeholder={t('registerPage.userName')}
    {...register('userName')}
  />

  {errors.userName && (
    <p className="text-sm text-red-500">
      {t(errors.userName.message)}
    </p>
  )}
</div>
          {/* phoneNumber */}

          <div className="space-y-2">
            <Label>{t('registerPage.phoneNumber')}</Label>

            <Input
              type="tel"
              autoComplete="tel"
              dir="ltr"
              className={`!bg-search placeholder:text-search-foreground rounded-lg ${
                isArabic ? 'text-right' : 'text-left'
              }`}
              placeholder={t('registerPage.phoneNumber')}
              {...register('phoneNumber')}
            />

            {errors.phoneNumber && (
              <p className="text-sm text-red-500">
                {t(errors.phoneNumber.message)}
              </p>
            )}
          </div>

          {/* Password */}

          <div className="space-y-2">
            <Label>{t('registerPage.password')}</Label>

            <div className="bg-search relative rounded-lg">
              <Input
                type="password"
                
                autoComplete="new-password"
                className="placeholder:text-search-foreground"
                placeholder={t('registerPage.password')}
                {...register('password')}
              />
            </div>

            {errors.password && (
              <p className="text-sm text-red-500">
                {t(errors.password.message)}
              </p>
            )}
          </div>
          {/* Register Button */}

          <Button
  type="submit"
  className="flex w-full items-center justify-center gap-2"
  disabled={isSubmitting}
>
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>{t('registerPage.creating')}</span>
              </>
            ) : (
              <span>{t('registerPage.createAccount')}</span>
            )}
          </Button>

          {/* Register + Settings */}

          <div className="flex items-center justify-between gap-3 max-[400px]:flex-col">
            <p className="text-muted-foreground text-sm whitespace-nowrap">
              {t('registerPage.haveAccount')}{' '}
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
