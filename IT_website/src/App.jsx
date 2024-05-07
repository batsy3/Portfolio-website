import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

function testthis() {
  
  console.log(this)
}
const person = {}
const personTest = testthis.bind(person)

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* navigation div */}
    <div className={`${styles.paddingX} ${styles.flexCenter} sticky top-[0px]`}>
      <div className={`${styles.boxWidth} `}>
        <Navbar />
      </div>
    </div>
    {/* hero section */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />
        <Clients /> <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
