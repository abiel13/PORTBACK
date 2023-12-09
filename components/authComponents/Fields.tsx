"use client";
import React, { FC, useState } from "react";

import { Stack, Typography, Input, InputAdornment } from "@mui/material";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

type TFields = {
  title: string;
  onChange: any;
  value: string;
  type: string;
  name: string;
  placeholder: string;
  errorlock: string;
};

const Fields: FC<TFields> = ({
  title,
  onChange,
  value,
  type,
  placeholder,
  name,
  errorlock,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Stack spacing={2}>
      <Typography color="white">{title}</Typography>
      {type == "password" ? (
        <Input
          sx={{
            bgcolor: "white",
            borderRadius: "5px",
            padding: ".8rem 2rem",
            width: "100%",
          }}
          type={visible ? "password" : "text"}
          name={name}
          value={value}
          placeholder={placeholder}
          endAdornment={
            <InputAdornment position="end">
              {visible ? (
                <MdOutlineVisibilityOff
                  onClick={() => setVisible(false)}
                  color="black"
                  fontSize={27}
                  cursor="pointer"
                />
              ) : (
                <MdOutlineVisibility
                  onClick={() => setVisible(true)}
                  color="black"
                  fontSize={27}
                  cursor="pointer"
                />
              )}
            </InputAdornment>
          }
          onChange={onChange}
        />
      ) : (
        <Input
          sx={{
            bgcolor: "white",
            borderRadius: "5px",
            padding: ".8rem 2rem",
            width: "100%",
          }}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
      {errorlock && <p className="text-red-500">{errorlock}</p>}
    </Stack>
  );
};

export default Fields;
