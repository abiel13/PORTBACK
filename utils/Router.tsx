'use client'
import React from "react";
import { redirect } from "next/navigation";

const isLoggedIn = false;

if (isLoggedIn) {
  redirect("/sign-in");
}

const Router = () => {
  return <div></div>;
};

export default Router;
