import { useMemo, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Eye, EyeOff, Languages, Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
  const navigate = useNavigate();
  const isArabic = i18n.language === 'ar';
  const [showPassword, setShowPassword] = useState(false);

  const schema = useMemo(() => RegisterSchema(t), [t]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    try {
      const response = await authinstance.post('/auth/Account/Register', data);

      if (response.status === 200 || response.status === 201) {
        toast.success(t('registerPage.success'));
        navigate('/login');
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
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
          <img src={logo} alt="Logo" className="h-40 w-40" />
        </Link>

        <CardTitle className="my-4 text-4xl font-bold">
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
          {/* Full Name */}
          <div className="space-y-3">
            <Label>{t('registerPage.fullName')}</Label>

            <Input
              type="text"
              autoComplete="name"
              placeholder={t('registerPage.fullName')}
              {...register('fullName')}
            />

            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-3">
            <Label>{t('registerPage.email')}</Label>

            <Input
              type="email"
              autoComplete="email"
              placeholder={t('registerPage.email')}
              {...register('email')}
            />

            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Username */}
          <div className="space-y-3">
            <Label>{t('registerPage.userName')}</Label>

            <Input
              type="text"
              autoComplete="username"
              placeholder={t('registerPage.userName')}
              {...register('userName')}
            />

            {errors.userName && (
              <p className="text-sm text-red-500">{errors.userName.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-3">
            <Label>{t('registerPage.phoneNumber')}</Label>

            <Input
              type="tel"
              autoComplete="tel"
              dir="ltr"
              className={isArabic ? 'text-right' : 'text-left'}
              placeholder={t('registerPage.phoneNumber')}
              {...register('phoneNumber')}
            />

            {errors.phoneNumber && (
              <p className="text-sm text-red-500">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-3">
            <Label>{t('registerPage.password')}</Label>

            <div className="relative">
              <Input
                type="tel"
                autoComplete="tel"
                dir="ltr"
                className={isArabic ? 'text-right' : 'text-left'}
                placeholder={t('registerPage.phoneNumber')}
                {...register('phoneNumber')}
              />
            </div>

            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Button */}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting
              ? t('registerPage.creating')
              : t('registerPage.createAccount')}
          </Button>

          {/* Footer */}
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
