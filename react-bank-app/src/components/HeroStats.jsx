import React from "react";

const HeroStats = ({ number, tagLine }) => {
  return (
    <div className={`flex items-center justify-center  font-poppins gap-5`}>
      <div className={`font-poppins text-white font-[600] text-[40px]`}>{number}</div>
      <div className={`text-gradient text-[20px]`}>{tagLine}</div>

    </div>
  );
};

export default HeroStats;
