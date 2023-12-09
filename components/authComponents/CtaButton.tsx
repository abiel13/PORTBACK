import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

type TCtaButton = {
  name: string;
  func?: () => void;
};

const CtaButton: FC<TCtaButton> = ({ name, func }) => {
  return (
    <button className="bg-blue-900 text-white text-center py-3 rounded-lg cursor-pointer" >
      <Typography className="tracking-wide font-medium text-lg cursor-pointer">{name}</Typography>
    </button>
  );
};

export default CtaButton;
