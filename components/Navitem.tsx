import React from "react";
import { TNav } from "./Navbar";
import Link from "next/link";



const Navitem = ({ item }: { item: TNav }) => {
  return (
    <Link
      href={item.routename == "overview" ? "/" : item.routename}
      className="flex gap-2 items-center"
    >
      <item.Icon size={24} color="white" />
      <p className="text-white capitalize text-base md:text-base">
        {item.routename}
      </p>
    </Link>
  );
};

export default Navitem;
