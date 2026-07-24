import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/layout/MainLayout';
import ProfileLayout from '@/layout/ProfileLayout';

import ProtectedRouter from '@/ProtectedRouter';
import GuestRouter from '@/GuestRouter';

import Home from '@/pages/home/Home';
import Books from '@/pages/books/Books';
import Book from '@/pages/books/Book';
import Categories from '@/pages/categories/Categories';

import Login from '@/pages/login/Login';
import Register from '@/pages/register/Register';
import ForgotPassword from '@/pages/fogotPass/ForgotPassword';

import Cart from '@/pages/cart/Cart';
import Checkout from '@/pages/checkout/Checkout';

import Page404 from '@/pages/page404/Page404';

import ProfileInfo from '@/components/forProfile/ProfileInfo';
import ProfileOrders from '@/components/forProfile/ProfileOrders';


const router = createBrowserRouter([

  {
    element: <MainLayout />,

    children: [

      {
        path: '/',
        element: <Home />,
      },


      {
        path: '/books',
        element: <Books />,
      },


      {
        path: '/book/:id',
        element: <Book />,
      },


      {
        path: '/categories',
        element: <Categories />,
      },


      // Protected Routes
      {
        element: <ProtectedRouter />,

        children: [

          {
            path: '/profile',

            element: <ProfileLayout />,

            children: [

              {
                index: true,
                element: <ProfileInfo />,
              },


              {
                path: 'orders',
                element: <ProfileOrders />,
              },

            ],
          },


          {
            path: '/cart',
            element: <Cart />,
          },


          {
            path: '/checkout',
            element: <Checkout />,
          },

        ],
      },


      {
        path: '*',
        element: <Page404 />,
      },

    ],
  },



  // Guest Routes
  {
    element: <GuestRouter />,

    children: [

      {
        path: '/login',
        element: <Login />,
      },


      {
        path: '/register',
        element: <Register />,
      },


      {
        path: '/forgotPass',
        element: <ForgotPassword />,
      },

    ],
  },

]);


export default router;