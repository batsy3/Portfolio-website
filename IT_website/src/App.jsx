import React from "react";
import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* navigation div */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        Navbar
      </div>
    </div>
{/* hero section */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        hero section
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Stats
        Business
        Carddeal
        Testimonials
        clients
        cta
        Footer
      </div>
    </div>
  </div>
);

export default App;
