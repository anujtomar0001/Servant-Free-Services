import React from "react";
import "../Contact/Contact.css";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import CommonPagesContent from "../../components/CommonPagesContent/CommonPagesContent";
import ContactForm from "../../components/ContactForm/ContactForm";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

const Contact = () => {
  const newData = {
    heading: "Contact Us",
  };

  return (
    <div>
      <Navbar />
      <CommonPagesContent data={newData} />
      <ContactForm />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Contact;
