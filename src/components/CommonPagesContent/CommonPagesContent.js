import React, { useEffect } from "react";
import "../CommonPagesContent/CommonPagesContent.css";
import Aos from "aos";
import "aos/dist/aos.css";

const CommonPagesContent = (props) => {
  const data = props.data;

  // use effect hook for scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="CommonPagesContent">
        {data.heading === "About Us" ? (
          <h2 data-aos="fade-up">{data.heading}</h2>
        ) : (
          <h2 data-aos="fade-up" className="CommonPagesContent_heading">
            {data.heading}
          </h2>
        )}
      </div>
    </>
  );
};

export default CommonPagesContent;
