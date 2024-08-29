import React from "react";
import "../Home/Home.css";
import Navbar from "../../components/Header/Navbar";
import HeroSection from "../../components/Hero/Hero";
import WaveAnimation from "../../components/WaveAnimation/WaveAnimation";
import WhatWeDo from "../../components/WhatWeDoSection/WhatWeDoComponent";
import OurServices from "../../components/OurServices/OurServices";
import OurServicesCard from "../../components/OurServicesCard/OurServicesCard";
import Footer from "../../components/Footer/Footer";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <WaveAnimation />
      <OurServices />
      <OurServicesCard />
      <WaveAnimation />
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Home;
