import React, { useEffect } from "react";
import sideImage from "../../assets/side.png";
import LoginForm from "./LoginForm";

export default function Login() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateOverflow = () => {
      const value = mediaQuery.matches ? "hidden" : "auto";

      document.documentElement.style.overflow = value;
      document.body.style.overflow = value;
    };

    updateOverflow();

    mediaQuery.addEventListener("change", updateOverflow);

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";

      mediaQuery.removeEventListener("change", updateOverflow);
    };
  }, []);

  return (
    <main className="h-dvh w-full overflow-hidden">
      <div className="grid h-dvh md:grid-cols-2">{/* Form */}
        <div className="flex h-full items-center justify-center px-4 overflow-y-auto md:overflow-hidden">
          <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
            <LoginForm />
          </div>
        </div>
        {/* Image */}
        <div className="hidden md:block h-full">
          <img
            src={sideImage}
            alt="login"
            className="h-full w-full object-cover"
          />
        </div>

        
      </div>
    </main>
  );
}