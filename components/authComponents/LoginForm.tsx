"use client";
import React from "react";
import { Stack } from "@mui/material";
import Fields from "./Fields";
import { useFormik } from "formik";
import { loginSchema } from "@/app/(auth)/verifications";
import CtaButton from "./CtaButton";
import AltLinks, { Links } from "./alternativeLinks";

// const login links

const loginlinks: Links[] = [
  {
    text: "Dont have an Account? SignUp",
    href: "/sign-up",
  },
  {
    text: "Forgot Password",
    href: "/forgot_password",
  },
];

const LoginForm = () => {
  const onSubmit = () => {};

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
  });

  return (
    <Stack
      sx={{
        marginTop: "2rem",
        width: { md: "40%", xs: "100%" },
        padding: "1rem",
      }}
      spacing={3}
    >
      <Fields
        title="email or user name"
        value={values.email}
        placeholder="input your email"
        onChange={handleChange}
        name="email"
        type="email"
        errorlock={errors.email!}
      />
      <Fields
        title="Password"
        value={values.password}
        placeholder="input your password"
        onChange={handleChange}
        name="password"
        type="password"
        errorlock={errors.password!}
      />
      <CtaButton name="Sign In" />
      <AltLinks links={loginlinks} />
    </Stack>
  );
};

export default LoginForm;
