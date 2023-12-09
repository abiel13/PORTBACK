import { getSkills } from "@/actions";
import React from "react";

const SkillsPage = async () => {
  const data = await getSkills();
  return (
    <div className=" mt-[4%] w-[70%] relative md:h-[70vh] flex px-7 flex-col items-center justify-center gap-5">
      <div className="w-full bg-white rounded-lg py-[1.4rem] px-[1rem] flex flex-col items-start gap-8">
        <h2 className="font-bold text-3xl ">Skills</h2>

        <div className="min-h-[300px] flex flex-wrap  gap-8 value_border px-4 py-5">
          {/* get data and populate area with it */}
          {data?.data?.map((item: any) => (
            <div className="px-5 h-fit py-3 background text-white rounded-xl ">
              {item.skillName}
            </div>
          ))}
        </div>
      </div>
      <button className="primary self-end  px-5 py-3 rounded-lg text-xl text-white font-bold">
        Update
      </button>
    </div>
  );
};

export default SkillsPage;
