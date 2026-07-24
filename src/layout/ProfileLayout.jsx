import { NavLink, Outlet } from 'react-router-dom';
import { User, Package } from 'lucide-react';
import useProfile from '@/hooks/useProfile';
import { Settings } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function ProfileLayout() {
  const profileQuery = useProfile();
  const { data: profile } = profileQuery;

  return (
    <div className="bg-muted/30 min-h-screen">
      <div className="container mx-auto py-10">
        {/* Header */}
        <Card className="from-primary/10 mb-8 overflow-hidden bg-gradient-to-r to-transparent">
          <div className="flex flex-col items-center gap-5 p-8 md:flex-row">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="text-3xl font-bold">
                {profile?.fullName?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h1 className="text-3xl font-bold">
                {profile?.fullName || 'Loading...'}
              </h1>

              <p className="text-muted-foreground mt-1">{profile?.email}</p>
            </div>
          </div>
        </Card>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <Card className="h-fit p-3">
            <nav className="space-y-2">
              <NavLink
                to="/profile"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow'
                      : 'hover:bg-muted'
                  }`
                }
              >
                <User className="h-5 w-5" />
                <span className="font-medium">Profile</span>
              </NavLink>

              <NavLink
                to="/profile/orders"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow'
                      : 'hover:bg-muted'
                  }`
                }
              >
                <Package className="h-5 w-5" />
                <span className="font-medium">Orders</span>
              </NavLink><NavLink
  to="/profile/settings"
  className={({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
      isActive
        ? 'bg-primary text-primary-foreground'
        : 'hover:bg-muted'
    }`
  }
>
  <Settings className="h-5 w-5" />
  <span>Settings</span>
</NavLink>
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
