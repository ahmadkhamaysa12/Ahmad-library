import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Eye, EyeOff, Languages, Moon, Sun } from 'lucide-react';

import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from 'next-themes';

import logo from '../../assets/logo.svg';
import { LoginSchema } from '../../validation/LoginSchema';

import authinstance from '../../api/authAxiosInstance';
import useAuthStore from '../../store/useAuthStore';
import i18n from '../../i18next';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const navigate = useNavigate();

  const setToken = useAuthStore((state) => state.setToken);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    try {
      const response = await authinstance.post('/auth/Account/Login', data);

      if (response.status === 200) {
        toast.success(t('loginPage.success'));

        setToken(response.data.accessToken);

        navigate('/');
      }
    } catch (error) {
      toast.error(t('loginPage.failed'));

      console.log(error.response?.data || error.message);
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
          {t('loginPage.welcome')}
        </CardTitle>

        <p className="text-muted-foreground text-sm">
          {t('loginPage.subtitle')}
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}

          <div className="space-y-2">
            <Label>{t('loginPage.email')}</Label>

            <Input
              type="email"
              className="bg-search! placeholder:text-search-foreground rounded-lg"
              placeholder="example@email.com"
              {...register('email')}
            />

            {errors.email && (
              <p className="text-sm text-red-500">{t(errors.email.message)}</p>
            )}
          </div>

          {/* Password */}

          <div className="space-y-2">
            <Label>{t('loginPage.password')}</Label>

            <div className="bg-search relative rounded-lg">
              <Input
                type={showPassword ? 'text' : 'password'}

                placeholder="••••••••"

                className="placeholder:text-search-foreground pr-10"

                {...register('password')}
              />

              <button
                type="button"

                onClick={() => setShowPassword(!showPassword)}

                className="text-search-foreground absolute top-1/2 right-3 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-sm text-red-500">
                {t(errors.password.message)}
              </p>
            )}
          </div>

          {/* Remember */}

          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />

              {t('loginPage.remember')}
            </label>

            <Link to="/forgotPass" className="text-primary hover:underline">
              {t('loginPage.forgotpass')}
            </Link>
          </div>

          {/* Login Button */}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t('loginPage.loggingIn') : t('login')}
          </Button>

          {/* Register + Settings */}

          <div className="flex items-center justify-between gap-3 max-[400px]:flex-col">
            <p className="text-muted-foreground text-sm whitespace-nowrap">
              {t('loginPage.noAccount')}{' '}
              <Link to="/register" className="text-primary hover:underline">
                {t('loginPage.createAccount')}
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
