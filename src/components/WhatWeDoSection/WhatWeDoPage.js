import React, { useEffect } from "react";
import "../WhatWeDoSection/WhatWeDoPage.css";
import Aos from "aos";
import "aos/dist/aos.css";

const WhatWeDoPage = () => {
  // use effect hook for scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="what-we-do_section">
        <h2 data-aos="fade-up" className="section-heading">
          Comprehensive Solutions for Seamless Operations
        </h2>
        <p data-aos="fade-up" className="section-paragraph">
          Discover our comprehensive range of services dedicated to elevating
          your spaces and improving your everyday experiences.
        </p>
      </div>
    </>
  );
};

export default WhatWeDoPage;
