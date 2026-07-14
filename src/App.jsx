import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import MainLayout from './layout/MainLayout';

import ProtectedRouter from './ProtectedRouter';
import GuestRouter from './GuestRouter';

import Home from './pages/home/Home';
import Books from './pages/books/Books';
import Categories from './pages/categories/Categories';

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Cart from './pages/cart/Cart';
import ForgotPassword from './pages/fogotPass/ForgotPassword';
import Page404 from './pages/page404/Page404';

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        {/* Protected */}
        <Route element={<ProtectedRouter />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Route>
      <Route element={<GuestRouter />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPass" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}
