import React, { useEffect } from "react";
import "../WhatWeDoSection/WhatWeDoAboutPage.css";
import Aos from "aos";
import "aos/dist/aos.css";

const WhatWeDoAboutPage = () => {
  // use effect hook for scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="what-we-do_section">
        <h2 data-aos="fade-up" className="section-heading">
          OUR VISION
        </h2>
        <p data-aos="fade-up" className="section-paragraph">
          Our vision is to be the finest facility services company. It is our
          desire to not only meet, but exceed expectations by providing
          consistent, quality customer service 100% of the time with a
          commitment to excellence in all lines of business.
        </p>
      </div>
    </>
  );
};

export default WhatWeDoAboutPage;
