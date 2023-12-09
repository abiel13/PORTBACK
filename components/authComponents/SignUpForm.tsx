"use client";
import React from "react";
import { Grid, Stack } from "@mui/material";
import Fields from "./Fields";
import { useFormik } from "formik";
import { loginSchema } from "@/app/(auth)/verifications";
import CtaButton from "./CtaButton";
import AltLinks, { Links } from "./alternativeLinks";

// const login links

const loginlinks: Links[] = [
  {
    text: "Already have an account? sign in",
    href: "/sign-in",
  },
];

const SignupForm = () => {
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
        width: { md: "50%", xs: "100%" },
        padding: "1rem",
      }}
      spacing={3}
    >
      <Grid sx={{ gap: "1rem", width: "100%" , justifyContent:'space-between' }} container>
        <Grid item xs={12} md={5.6}>
          <Fields
            title="first name"
            value={values.email}
            placeholder="first name"
            onChange={handleChange}
            name="email"
            type="email"
            errorlock={errors.email!}
          />
        </Grid>
        <Grid item xs={12} md={5.6}>
          <Fields
            title="last name"
            value={values.email}
            placeholder="last name"
            onChange={handleChange}
            name="email"
            type="email"
            errorlock={errors.email!}
          />
        </Grid>
        <Grid item xs={12} md={5.6}>
          <Fields
            title="email address"
            value={values.email}
            placeholder="input your email"
            onChange={handleChange}
            name="email"
            type="email"
            errorlock={errors.email!}
          />
        </Grid>
        <Grid item xs={12} md={5.6}>
          <Fields
            title="passowrd"
            value={values.email}
            placeholder="password"
            onChange={handleChange}
            name="email"
            type="password"
            errorlock={errors.email!}
          />
        </Grid>
        <Grid item xs={12} >
          <Fields
            title="confirm paswword"
            value={values.email}
            placeholder="confirm password"
            onChange={handleChange}
            name="email"
            type="password"
            errorlock={errors.email!}
          />
        </Grid>
      </Grid>
      <CtaButton name="Register Now" />
      <AltLinks links={loginlinks} />
    </Stack>
  );
};

export default SignupForm;
