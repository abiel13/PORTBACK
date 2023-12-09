import LightingLogo from "@/components/authComponents/LightingLogo";
import LoginForm from "@/components/authComponents/LoginForm";
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen gap-6 ">
      <LightingLogo />
      <h1 className="text-white font-bold text-2xl tracking-widest">
        Sign into your account
      </h1>
      <LoginForm />
    </div>
  );
};

export default Login;
