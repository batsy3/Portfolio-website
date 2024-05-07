import React from "react";
import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient" />
      </div>
      <div className={`${layout.sectionInfo} ml-10`}>
        <h2 className={styles.heading2}>
          Easy Control Of <br className="sm:block hidden" /> Billing & Invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
          lorem ac dui fermentum dictum a non leo. Vivamus augue lorem,
          facilisis non fringilla vitae, aliquet molestie justo
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"  />
          <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer"  />
        </div>
      </div>
    </section>
  );
};

export default Billing;
