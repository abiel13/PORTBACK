import { Stack } from "@mui/material";
import React from "react";
import Feature from "./partials/portFeature";
import { portFeaturesData } from "@/utils/statics";

const PortFeatures = () => {
  return (
    <Stack spacing={3} className="text-gray-300">
      <h1 className="text-2xl text-white font-bold my-3">Features:</h1>
    <Stack spacing={4}>
        {portFeaturesData.map((item ,i ) => (
            <Feature {...item} key={i} />
        ))}
    </Stack>
      
    </Stack>
  );
};

export default PortFeatures;
