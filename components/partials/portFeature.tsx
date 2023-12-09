import React, { FC } from "react";

export type TportFeature = {
  name: string;
  route: string;
  desc: string;
  code: string;
};

const Feature: FC<TportFeature> = ({ name, route, desc, code }) => {
  return (
    <div className=" w-full md:w-[65%] tracking-widest text-lg ">
      <h3 className="text-white font-bold">{name}: </h3>
      <h2 className="text-white font-bold italic">Route: {route}</h2>
      <p>{desc}</p>
      <div className=" w-[100%] p-3 my-3 bg-blue-900 md:w-[75%] ">
        <pre style={{textWrap:'wrap'}}>{code}</pre>
      </div>
    </div>
  );
};

export default Feature;
