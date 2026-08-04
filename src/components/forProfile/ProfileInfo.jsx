import { useOutletContext } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

import { User, Mail, Phone, MapPin, BadgeCheck } from 'lucide-react';

export default function ProfileInfo() {
  const { t, i18n } = useTranslation();
  const { data: profile, isLoading, error } = useOutletContext();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-40 w-full rounded-xl" />
        <Skeleton className="h-80 w-full rounded-xl" />
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="text-destructive py-10 text-center">
          {t('common.error')}
        </CardContent>
      </Card>
    );
  }

  const orders = profile?.orders ?? [];

  const totalSpent = orders.reduce((sum, order) => sum + order.amountPaid, 0);

  const currency = new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: 'USD',
  }).format(totalSpent);

  return (
    <div className="space-y-6">
      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title={t('profilePage.orders')} value={orders.length} />

        <StatCard title={t('profilePage.totalSpent')} value={currency} />

        <StatCard
          title={t('profilePage.status')}
          value={t('profilePage.verified')}
        />
      </div>

      {/* Personal Information */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/40 border-b">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="text-3xl font-bold">
                {profile?.fullName?.charAt(0) ?? 'U'}
              </AvatarFallback>
            </Avatar>

            <div>
              <CardTitle className="flex items-center gap-2 text-2xl">
                {profile?.fullName}

                <BadgeCheck className="h-5 w-5 text-green-500" />
              </CardTitle>

              <p className="text-muted-foreground mt-1">
                {t('profilePage.memberAccount')}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="divide-y p-0">
          <InfoRow
            icon={<User className="text-primary h-5 w-5" />}
            label={t('profilePage.fullName')}
            value={profile?.fullName}
          />

          <InfoRow
            icon={<Mail className="text-primary h-5 w-5" />}
            label={t('profilePage.email')}
            value={profile?.email}
          />

          <InfoRow
            icon={<Phone className="text-primary h-5 w-5" />}
            label={t('profilePage.phone')}
            value={profile?.phoneNumber}
          />

          <InfoRow
            icon={<MapPin className="text-primary h-5 w-5" />}
            label={t('profilePage.city')}
            value={profile?.city || t('profilePage.notProvided')}
          />
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <Card className="transition-all hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="py-6 text-center">
        <p className="text-muted-foreground text-sm">{title}</p>

        <h2 className="mt-2 text-3xl font-bold">{value}</h2>
      </CardContent>
    </Card>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        {icon}

        <span className="font-medium">{label}</span>
      </div>

      <span className="text-muted-foreground text-right font-medium break-all">
        {value}
      </span>
    </div>
  );
}
