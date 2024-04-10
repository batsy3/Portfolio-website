import React from "react";
import styles, { layout } from "../style";
import { feedback } from "../constants";
import { quotes } from "../assets";
const FeedbackCard = ({ content, name, title, img, id }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 feedback-card">
    <img
      src={quotes}
      alt="quotes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>
    <div className=" flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full " />
      <div className="flex flex-col ml-4 ">
        <h4 className="font-poppins font-semibold text-white text-[18px]">
          {name}
        </h4>
        <h4 className="font-poppins font-normal text-dimWhite text-[14px]">
          {title}
        </h4>
      </div>
    </div>
  </div>
);
const Testimonials = () => {
  return (
    <>
      <section
        className={`flex md:flex-row flex-col justify-center items-center`}
      >
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
        <div
          className={`flex flex-1 flex-col w-full justify-between items-center md:flex-row sm:mb-16 mb-6 relative z-[1] `}
        >
          <h2 className={styles.heading2}>
            What People are <br />
            saying about us!
          </h2>
          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              everything you need to accept card payments
              <br className="md:block hidden" />
              and grow your business everywhere on this planet
            </p>
          </div>
        </div>
      </section>
      <section
        className={`flex md:flex-row flex-col justify-center items-center`}
      >
        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] ">
          {feedback.map((card, index) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
