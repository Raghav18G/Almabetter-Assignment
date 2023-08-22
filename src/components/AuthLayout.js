// src/components/AuthLayout.js
import Image from "next/image";
import React from "react";

const AuthLayout = ({ children, imgSrc }) => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:block w-1/2 bg-cover bg-center bg-login-image">
          {/* <Image src={imgSrc}/> */}
        </div>
        <div className="w-full p-8 md:w-1/2">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
