import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          lib_name: "Ahmad Library",
          home: "Home",
          books: "Books",
          cats: "Categories",
          about: "About Us",
          contact: "Contact Us",
          search: "Search title, author",
          categories: "Categories",
        },
      },

      ar: {
        translation: {
          lib_name: "مكتبة احمد",
          home: "الرئيسية",
          books: "الكتب",
          cats: "التصنيفات",
          about: "من نحن",
          contact: "اتصل بنا",
          search: "ابحث عن الكتاب أو المؤلف",
          categories: "الاصناف",
        },
      },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
