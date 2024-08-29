import React from "react";
import "../WhatsAppButton/WhatsAppButton.css";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/910000000000", "_blank");
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
        alt="WhatsApp"
      />
    </div>
  );
};

export default WhatsAppButton;
