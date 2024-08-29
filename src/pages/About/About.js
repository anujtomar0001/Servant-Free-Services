import React from "react";
import "../About/About.css";
import Navbar from "../../components/Header/Navbar";
import ExecutiveSummary from "../../components/ExecutiveSummary/ExecutiveSummary";
import CommonPagesContent from "../../components/CommonPagesContent/CommonPagesContent";
import Footer from "../../components/Footer/Footer";
import WhatWeDoAboutPage from "../../components/WhatWeDoSection/WhatWeDoAboutPage";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

const About = () => {
  const newData = {
    heading: "About Us",
  };

  return (
    <div>
      <Navbar />
      <CommonPagesContent data={newData} />
      <ExecutiveSummary />
      <WhatWeDoAboutPage />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default About;
