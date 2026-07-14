import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          lib_name: 'Ahmad Library',
          home: 'Home',
          books: 'Books',
          cats: 'Categories',
          about: 'About Us',
          contact: 'Contact Us',
          search: 'Search title, author',
          categories: 'Categories',
          profile: 'Profile',
          logout: 'Logout',
          login: 'Login',
          register: 'Create New Account',
          loginPage: {
            welcome: 'Welcome Back',
            subtitle: 'Login to your account',
            email: 'Email',
            password: 'Password',
            remember: 'Remember me',
            forgotpass: 'Forgot password?',
            noAccount: "Don't have an account?",
            createAccount: 'Create account',
            loggingIn: 'Signing in...',
          },
        },
      },

      ar: {
        translation: {
          lib_name: 'مكتبة احمد',
          home: 'الرئيسية',
          books: 'الكتب',
          cats: 'التصنيفات',
          about: 'من نحن',
          contact: 'اتصل بنا',
          search: 'ابحث عن الكتاب أو المؤلف',
          categories: 'الاصناف',
          profile: 'الملف الشخصي',
          logout: 'تسجيل الخروج',
          login: 'تسجيل الدخول',
          register: 'إنشاء حساب جديد',
          loginPage: {
            welcome: 'مرحبًا بعودتك',
            subtitle: 'سجّل الدخول إلى حسابك',
            email: 'البريد الإلكتروني',
            password: 'كلمة المرور',
            remember: 'تذكرني',
            forgotpass: 'هل نسيت كلمة المرور؟',
            noAccount: 'ليس لديك حساب؟',
            createAccount: 'إنشاء حساب',
            loggingIn: 'جارٍ تسجيل الدخول...',
          },
          registerPage: {
            welcome: 'مرحبًا بعودتك',
            subtitle: 'سجّل الدخول إلى حسابك',
            email: 'البريد الإلكتروني',
            password: 'كلمة المرور',
            remember: 'تذكرني',
            forgotpass: 'هل نسيت كلمة المرور؟',
            noAccount: 'ليس لديك حساب؟',
            createAccount: 'إنشاء حساب',
            loggingIn: 'جارٍ تسجيل الدخول...',
          },
        },
      },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
