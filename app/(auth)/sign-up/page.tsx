import LightingLogo from "@/components/authComponents/LightingLogo";
import SignupForm from "@/components/authComponents/SignUpForm";
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen gap-6 ">
      <LightingLogo />
      <h1 className="text-white font-bold text-2xl tracking-widest">
        Create Your PortBack Account
      </h1>
      <SignupForm />
    </div>
  );
};

export default Login;
