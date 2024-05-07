import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";
const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          FInd a better Card deal <br className="sm:block hidden" />
          in few easy steps!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
          lorem ac dui fermentum dictum a non leo. Vivamus augue lorem,
        </p>
        <Button styles="mt-10"></Button>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card-deal" className=""/>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient" />
      </div>
    </section>
  );
};

export default CardDeal;
