import PortFeatures from "@/components/PortFeatures";
import PortBackInstallationGuide from "@/components/PortInstallation";
import LightingLogo from "@/components/authComponents/LightingLogo";
import { Stack, Typography } from "@mui/material";
import React from "react";

const DocumentationPage = () => {
  return (
    <Stack
      spacing={3}
      sx={{
        marginTop: "3rem",
        bgcolor: "s",
        padding: { xs: "0rem 1rem", md: "0rem 2rem" },
      }}
    >
      <div className="flex gap-2">
        <LightingLogo />
        <h1 className="text-white self-end md:text-2xl ">
          PortBack Documentation
        </h1>
      </div>

      <Stack spacing={2}>
        <Typography className="text-white md:text-3xl font-bold">
          Overview
        </Typography>
        <p className="text-gray-300 text-justify w-[100%] md:w-[75%] ">
          PortBack is an innovative application designed to empower developers
          in effortlessly constructing and maintaining their portfolios without
          the burden of managing the backend. It seamlessly handles all backend
          requirements and is entirely language-agnostic, allowing you to
          continuously enhance your portfolio details without the need to
          manipulate your initial codebase. With PortBack, updating your
          portfolio is as simple as visiting the application and making the
          desired changes with just a click of a button.
        </p>
      </Stack>
      <PortBackInstallationGuide />
      <PortFeatures />
    </Stack>
  );
};

export default DocumentationPage;
