import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { Mail, Lock } from 'lucide-react';

import useUpdateEmail from '@/hooks/useUpdateEmail';
import useUpdatePassword from '@/hooks/useUpdatePassword';

export default function ProfileSettings() {
  const { t } = useTranslation();

  const [email, setEmail] = useState({
    NewEmail: '',
  });

  const [passwordData, setPasswordData] = useState({
    CurrentPassword: '',
    NewPassword: '',
    ConfirmNewPassword: '',
  });

  const {
    mutate: updateEmail,
    isPending: emailPending,
    isSuccess: emailSuccess,
  } = useUpdateEmail();

  const {
    mutate: updatePassword,
    isPending: passwordPending,
    isSuccess: passwordSuccess,
  } = useUpdatePassword();

  const handleEmailChange = (e) => {
    setEmail((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePasswordChange = (e) => {
    setPasswordData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    updateEmail(email);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (passwordData.NewPassword !== passwordData.ConfirmNewPassword) {
      alert(t('profilePage.passwordsDoNotMatch'));
      return;
    }

    updatePassword(passwordData);
  };

  return (
    <div className="space-y-6">
      {/* Change Email */}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            {t('profilePage.changeEmail')}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>{t('profilePage.newEmail')}</Label>

              <Input
                name="NewEmail"
                type="email"
                placeholder="example@gmail.com"
                value={email.NewEmail}
                onChange={handleEmailChange}
                required
              />
            </div>

            <Button type="submit" disabled={emailPending || emailSuccess}>
              {emailPending
                ? t('profilePage.updating')
                : emailSuccess
                  ? t('profilePage.updated')
                  : t('profilePage.updateEmail')}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Change Password */}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            {t('profilePage.changePassword')}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>{t('profilePage.currentPassword')}</Label>

              <Input
                name="CurrentPassword"
                type="password"
                value={passwordData.CurrentPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>{t('profilePage.newPassword')}</Label>

              <Input
                name="NewPassword"
                type="password"
                value={passwordData.NewPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>{t('profilePage.confirmNewPassword')}</Label>

              <Input
                name="ConfirmNewPassword"
                type="password"
                value={passwordData.ConfirmNewPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <Button type="submit" disabled={passwordPending || passwordSuccess}>
              {passwordPending
                ? t('profilePage.updating')
                : passwordSuccess
                  ? t('profilePage.updated')
                  : t('profilePage.updatePassword')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
