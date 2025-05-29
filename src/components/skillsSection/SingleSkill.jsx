import React from "react";

const SingleSkill = ({ imgSvg, text, color }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-[#F9F6F7] text-black h-[80px] w-[80px] flex items-center justify-center rounded-full hover:text-black/70 hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-[#E0E0E0]">
          <div style={{ color: color }}>{imgSvg}</div>
        </div>
        <p className="font-medium text-[0.7rem] text-black">{text}</p>
      </div>
      <div className="w-[80px] h-[190px] bg-[#E0E0E0] absolute top-[45px] -z-10"></div>
    </div>
  );
};

export default SingleSkill;
