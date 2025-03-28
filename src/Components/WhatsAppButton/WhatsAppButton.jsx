import React from 'react';
import './WhatsAppButton.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "+966553043449";
  const message = "مرحباً، أريد الاستفسار عن...";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={openWhatsApp}>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppButton;