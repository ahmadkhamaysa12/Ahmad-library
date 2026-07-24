import { useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { Mail, Lock } from 'lucide-react';

import useUpdateEmail from '@/hooks/useUpdateEmail';
import useUpdatePassword from '@/hooks/useUpdatePassword';

export default function ProfileSettings() {
  const [email, setEmail] = useState('');

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
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    updateEmail(email);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (passwordData.NewPassword !== passwordData.ConfirmNewPassword) {
      alert('Passwords do not match');
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
            Change Email
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>New Email</Label>

              <Input
                name="NewEmail"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button type="submit" disabled={emailPending || emailSuccess}>
              {emailPending
                ? 'Updating...'
                : emailSuccess
                  ? 'Updated'
                  : 'Update Email'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Change Password */}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Change Password
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Current Password</Label>

              <Input
                name="CurrentPassword"
                type="password"
                value={passwordData.CurrentPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>New Password</Label>

              <Input
                name="NewPassword"
                type="password"
                value={passwordData.NewPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Confirm New Password</Label>

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
                ? 'Updating...'
                : passwordSuccess
                  ? 'Updated'
                  : 'Update Password'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
