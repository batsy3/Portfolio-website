import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px]${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business <br className="sm:block hidden" />
        We'll Handle the Money
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
        lorem ac dui fermentum dictum a non leo. Vivamus augue lorem, facilisis
        non fringilla vitae, aliquet molestie justo. Mauris finibus ipsum eu
        libero vulputate finibus vitae blandit turpis.
      </p>
      <Button styles="mt-10"></Button>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feat, index) => (
        <FeatureCard key={feat.id} {...feat} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
