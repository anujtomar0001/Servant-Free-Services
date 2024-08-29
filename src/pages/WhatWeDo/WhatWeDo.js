import React from "react";
import "../WhatWeDo/WhatWeDo.css";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import CommonPagesContent from "../../components/CommonPagesContent/CommonPagesContent";
import WhatWeDoPage from "../../components/WhatWeDoSection/WhatWeDoPage";
import WhatWeDoServices from "../../components/WhatWeDoSection/WhatWeDoServices";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

const WhatWeDo = () => {
  const newData = {
    heading: "What We Do",
  };

  return (
    <>
      <Navbar />
      <CommonPagesContent data={newData} />
      <WhatWeDoPage />
      <WhatWeDoServices />
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default WhatWeDo;
