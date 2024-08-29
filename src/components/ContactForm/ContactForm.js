import React from "react";
import "./ContactForm.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="form-left">
          <h2>Get in touch</h2>

          <h3>Address</h3>
          <p>Faridabad, Haryana, India, 121004</p>

          <h3>Email</h3>
          <p>servantfree@gmail.com</p>

          <h3>Contact Number</h3>
          <p>+91 0000000000</p>

          <div className="social-media">
            <a href="#" className="social-link">
              <FaFacebookF />
            </a>
            <a href="#" className="social-link">
              <FaTwitter />
            </a>
            <a href="#" className="social-link">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="form-right">
          <div className="input-group">
            <label htmlFor="full-name">Full Name</label>
            <input type="text" id="full-name" name="full-name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone No.</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
