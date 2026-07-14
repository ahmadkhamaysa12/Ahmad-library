import React, { useEffect } from "react";
import sideImage from "../../assets/side.png";
import LoginForm from "./LoginForm";

export default function Login() {
  // useEffect(() => {
  //   const oldOverflow = document.body.style.overflow;

  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.overflow = oldOverflow;
  //   };
  // }, []);

  return (
    <div className="h-dvh w-full overflow-hidden">
      <div className="grid h-full md:grid-cols-2">
        <div className="hidden h-full md:block">
          <img
            src={sideImage}
            alt="login"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex h-full items-center justify-center">
          <div className="w-full max-w-md px-5">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}