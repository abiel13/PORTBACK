import { Stack } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";

export type Links = {
  text: string;
  href: string;
};

interface ILink {
  links: Links[];
}

const AltLinks: FC<ILink> = ({ links }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {links.map((item, i) => (
        <Link key={i} href={item.href}>
          <p className="text-white text-sm">{item.text}</p>
        </Link>
      ))}
    </Stack>
  );
};

export default AltLinks;
