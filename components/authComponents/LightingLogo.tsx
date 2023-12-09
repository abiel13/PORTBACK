import Image from "next/image";
import React from "react";

const LightingLogo = () => {
  return (
    <div className="w-[140px] h-[140px] relative ">
      <Image className="blur-[4px]" src={"/blue.jpeg"} fill alt="portback" />
    </div>
  );
};

export default LightingLogo;
