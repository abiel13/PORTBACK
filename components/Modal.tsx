import { Grid, Typography } from "@mui/material";
import React, { FC } from "react";

interface ModalI {
  name: string;
}

const Modal: FC<ModalI> = ({ name }) => {
  return (
    <div className="bg-white flex-col w-[60vw] min-h-[80vh] rounded-lg px-4 py-4 flex">
      <Typography
        sx={{ fontWeight: "bold", fontSize: { md: "2rem", xs: "1.5rem" } }}
      >
        {name}
      </Typography>
      <Grid
        container
        sx={{ flex: 1, border: "1px solid #999", borderRadius: "5px" }}
      >
        {name == "skills" ? <div></div> : <div></div>}
      </Grid>
      <div className="mt-4 self-end flex gap-6">
        <button className="bg-[#1E1E1E99]  px-4 py-2 rounded-lg font-bold tracking-wider font-sans">
          Cancel
        </button>
        <button className="bg-[#449F24] text-white px-4 py-2 rounded-lg font-bold tracking-wider font-sans">
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
