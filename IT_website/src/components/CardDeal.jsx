import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";
const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business <br className="sm:block hidden" />
          We'll Handle the Money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
          lorem ac dui fermentum dictum a non leo. Vivamus augue lorem,
        </p>
        <Button styles="mt-10"></Button>
      </div>
    </section>
  );
};

export default CardDeal;
