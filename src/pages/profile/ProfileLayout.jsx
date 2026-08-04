import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { User, Package, Settings } from 'lucide-react';

import useProfile from '@/hooks/useProfile';

import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProfileLayout() {
  const { t } = useTranslation();

  const profileQuery = useProfile();

  const { data: profile, isLoading } = profileQuery;

  const links = [
    {
      to: '/profile',
      label: t('profile'),
      icon: User,
      end: true,
    },
    {
      to: '/profile/orders',
      label: t('profilePage.myOrders'),
      icon: Package,
    },
    {
      to: '/profile/settings',
      label: t('profilePage.settings'),
      icon: Settings,
    },
  ];

  return (
    <div className="bg-muted/30 min-h-dvh">
      <div className="container mx-auto py-10">
        {/* Header */}

        <Card className="from-primary/10 mb-8 overflow-hidden bg-gradient-to-r to-transparent">
          <div className="flex flex-col items-center gap-5 p-8 md:flex-row">
            {isLoading ? (
              <>
                <Skeleton className="h-20 w-20 rounded-full" />

                <div className="flex-1 space-y-3">
                  <Skeleton className="h-8 w-52" />
                  <Skeleton className="h-5 w-72" />
                </div>
              </>
            ) : (
              <>
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="text-3xl font-bold">
                    {profile?.fullName?.charAt(0) ?? 'U'}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <h1 className="text-3xl font-bold">{profile?.fullName}</h1>

                  <p className="text-muted-foreground mt-1">{profile?.email}</p>
                </div>
              </>
            )}
          </div>
        </Card>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}

          <Card className="h-fit p-3">
            <nav className="space-y-2">
              {links.map(({ to, label, icon: Icon, end = false }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow'
                        : 'hover:bg-muted'
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />

                  <span className="font-medium">{label}</span>
                </NavLink>
              ))}
            </nav>
          </Card>

          {/* Content */}

          <main>
            <Outlet context={profileQuery} />
          </main>
        </div>
      </div>
    </div>
  );
}
