import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Eye, EyeOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import logo from '../../assets/logo.svg';
import { LoginSchema } from '../../validation/LoginSchema';

import authinstance from '../../api/authAxiosInstance';
import useAuthStore from '../../store/useAuthStore';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {t}=useTranslation();
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
        toast.success('Login successful');

        setToken(response.data.accessToken);

        navigate('/');
      }
    } catch (error) {
      toast.error('Login failed');

      console.log(error.response?.data || error.message);
    }
  };

  return (
    <Card className="w-full border-none shadow-lg">
      <CardHeader className="flex flex-col items-center justify-center text-center">
        <img
          src={logo}
          alt="Logo"
          className="mx-auto mb-4 h-20 w-20 object-contain"
        />

        <CardTitle className="text-2xl font-bold">{t("loginPage.welcome")}</CardTitle>

        <p className="text-muted-foreground text-sm">{t('loginPage.subtitle')}</p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">{t('loginPage.email')}</Label>

            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              {...register('email')}
            />

            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">{t('loginPage.password')}</Label>

            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="pr-10"
                {...register('password')}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              {t('loginPage.remember')}
            </label>

            <Link to="/forgotPass" className="text-primary hover:underline">
              {t('loginPage.forgotpass')}
            </Link>
          </div>

<Button type="submit" className="w-full" disabled={isSubmitting}>
  {isSubmitting ? t("loginPage.loggingIn") : t("login")}
</Button>

          <p className="text-muted-foreground text-center text-sm">
            {t('loginPage.noAccount')}{' '}
            <Link to="/register" className="text-primary hover:underline">
              {t('loginPage.createAccount')}
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
