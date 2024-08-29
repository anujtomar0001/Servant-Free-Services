import React from "react";
import "../Services/Services.css";
import Navbar from "../../components/Header/Navbar";
import ServicesPageCard from "../../components/OurServicesCard/ServicesPageCard";
import OurServicesPage from "../../components/OurServices/OurServicesPage";
import Footer from "../../components/Footer/Footer";
import CommonPagesContent from "../../components/CommonPagesContent/CommonPagesContent";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

const Services = () => {
  const newData = {
    heading: "Services",
  };

  return (
    <>
      <Navbar />
      <CommonPagesContent data={newData} />
      <OurServicesPage />
      <ServicesPageCard />
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Services;
