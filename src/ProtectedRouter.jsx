import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuthStore from './store/useAuthStore';

export default function ProtectedRouter() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    if (!toast.isActive('auth-warning')) {
      toast.warning('Please login first', {
        toastId: 'auth-warning',
      });
    }

    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
