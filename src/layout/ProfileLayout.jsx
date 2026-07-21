import { Link, Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function ProfileLayout() {
  return (
    <div className="flex min-h-screen gap-6 p-6">
      <aside className="flex w-64 flex-col gap-3 rounded-lg border p-4">
        <p className="text-xl font-bold">My Profile</p>

        <Link to="/profile">
          <Button variant="outline" className="w-full">
            Info
          </Button>
        </Link>

        <Link to="/profile/orders">
          <Button variant="outline" className="w-full">
            Orders
          </Button>
        </Link>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
