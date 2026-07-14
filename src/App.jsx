import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { useTranslation } from "react-i18next";

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.resolvedLanguage]);

  return <Navbar />;
}