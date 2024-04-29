import React from "react";
import style from "./style";

import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";
import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden ">
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${style.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero /><Stats/>
      </div>
    </div>

    <div className={`bg-primary ${style.paddingX} ${styles.flexStart}`}>
      <div className={`${style.boxWidth}`}>
        
      </div>
    </div>




  </div>
);

export default App;
