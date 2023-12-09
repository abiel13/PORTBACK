import { navRoutes } from "@/utils/statics";
import React from "react";
import Navitem from "./Navitem";

export type TNav = {
  routename: string;
  Icon: any;
};

const Navbar = () => {
  return (
    <div className="px-4 py-2 bg-[#449F24] min-h-[10vh] flex flex-col gap-4">
      <h1 className="font-bold text-3xl text-white">PortBack</h1>
      <div className="flex gap-[1.3rem] items-center overflow-x-auto hidden-scroll">
        {navRoutes.map((item) => (
          <Navitem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
