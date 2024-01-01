import { Grid, Stack, Typography } from "@mui/material";
import React, { FC } from "react";

interface ModalFieldsI {
  name: string;
  type: string;
  value?: string;
  onChange?: Function;
  row?: number;
}

const ModalFields: FC<ModalFieldsI> = ({ name, type, value, row }) => {
  return (
    <Grid sx={{ height:'fit-content'}} item xs={11} md={row! | 5}>
      <Stack spacing={2}>
        <Typography>{name}</Typography>
        <input
          style={{ border: "1px solid #999" }}
          type="text"
          className="outline-none  rounded-lg px-2 py-1"
        />
      </Stack>
    </Grid>
  );
};

export default ModalFields;
