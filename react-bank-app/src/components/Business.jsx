import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants";

const FeaturesCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card p-6`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex-col ml-3 ">
      <h4 className="text-white font-semibold font-poppins text-[18px] leading-[23px]">{title}</h4>
      <p className="text-dimWhite font-normal font-poppins leading-[23px]">{content}</p>
      </div>
  </div>
);

const Business = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" />
          we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeaturesCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
