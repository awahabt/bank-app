import React from "react";
import styles from "../style";
import HeroStats from "./HeroStats";

const Stats = () => (
  <div className="flex justify-between items-center flex-wrap gap-4 max-[640px]:justify-center ">
    <HeroStats number={"3400+"} tagLine={"User Active"} />
    <div className="w-[2px] h-[16px] bg-slate-400 max-[640px]:hidden"></div>
    <HeroStats number={"230+"} tagLine={"Trusted By Company"} />
    <div className="w-[2px] h-[13px] bg-slate-400 max-[640px]:hidden"></div>
    <HeroStats number={"$230M+"} tagLine={"Transaction"} />
  </div>
);

export default Stats;
