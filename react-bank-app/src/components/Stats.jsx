import React from "react";
import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <div className={`${styles.flexCenter} flex flex-wrap sm:mb-20  mb-6`}>
    {
      stats.map((stat)=>(
       <div key={stat.id} className="flex-1 flex justify-center items-center m-3">
          <h4 className={`font-poppins font-semibold text-[40px] text-white `}>{stat.value}</h4>
          <p className={`font-poppins text-[20px] text-gradient uppercase ml-3`}>{stat.title}</p>
        </div>
      ))}
        
  </div>
);
export default Stats;
