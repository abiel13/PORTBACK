import { Stack, Typography } from "@mui/material";
import React, { FC } from "react";

interface ViewI {
  name?: string;
  toggle: Function;
}

const View: FC<ViewI> = ({ name, toggle }) => {
  return (
    <div className="flex flex-col  items-center gap-4">
      <div className="w-[90vw] md:[60vw] h-[80vh] mt-[1rem] md:mt-0 rounded-xl bg-white py-4 px-3">
        <Stack spacing={2} sx={{ height: "100%" }}>
          <Typography
            sx={{
              fontWeight: "bolder ",
              fontSize: { md: "1.5rem", xs: "1.1rem" },
            }}
          >
            {name}
          </Typography>

          <div
            style={{ border: "1px solid #999" }}
            className="flex-1 rounded-lg px-3 py-3"
          >
            <Typography
              onClick={() => toggle()}
              className="text-gray-400 font-bold cursor-pointer"
            >
              + Add {name}
            </Typography>
          </div>
        </Stack>
      </div>
      <button
        onClick={() => toggle()}
        className="bg-[#449F24] font-bold tracking-wide px-4 py-2 rounded-lg text-white self-end"
      >
        Update{" "}
      </button>
    </div>
  );
};

export default View;
