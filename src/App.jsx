import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import MainLayout from './layout/MainLayout';

import Home from './pages/home/Home';
import Books from './pages/books/Books';
import Categories from './pages/categories/Categories';
import NotFound from './pages/page404/Page404'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Cart from './pages/cart/Cart';
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
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
