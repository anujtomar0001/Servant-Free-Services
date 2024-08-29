import React, { useEffect } from "react";
import "../Footer/Footer.css";
import { FcServices } from "react-icons/fc";
import { FiSend } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {
  // use effect hook for scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Get IN TOUCH</small>
            <h2>Book an online meeting with us to learn more.</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <FcServices className="icon" /> Servant Free Services
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Your Property, Our Priority: Safety-Driven Innovation, Bringing
              Your Modern Space Dreams to Life with Comprehensive Expertise.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <FaInstagram className="icon" />
              <FaFacebook className="icon" />
              <FaSquareXTwitter className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">PAGES</span>

              <li className="footerList flex">
                <a href="/">
                  <FiChevronRight className="icon" /> HOME
                </a>
              </li>

              <li className="footerList flex">
                <a href="/Services">
                  <FiChevronRight className="icon" /> SERVICES
                </a>
              </li>

              <li className="footerList flex">
                <a href="/About">
                  <FiChevronRight className="icon" /> ABOUT
                </a>
              </li>

              <li className="footerList flex">
                <a href="/WhatWeDo">
                  <FiChevronRight className="icon" /> WHAT WE DO
                </a>
              </li>

              <li className="footerList flex">
                <a href="/ContactUs">
                  <FiChevronRight className="icon" /> CONTACT US
                </a>
              </li>
            </div>

            {/* Group two */}

            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">WHO WE ARE</span>

              <li className="footerList flex">
                <a href="/About">
                  <FiChevronRight className="icon" /> ABOUT US
                </a>
              </li>

              <li className="footerList flex">
                <a href="/About">
                  <FiChevronRight className="icon" /> OUR VISION
                </a>
              </li>

              <li className="footerList flex">
                <a href="/WhatWeDo">
                  <FiChevronRight className="icon" /> WHAT WE DO
                </a>
              </li>

              <li className="footerList flex">
                <a href="/ContactUs">
                  <FiChevronRight className="icon" /> CONTACT US
                </a>
              </li>
            </div>

            {/* Group Three */}

            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">TERMS & CONDITIONS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> TERMS
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> PRIVACY
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> BOOKINGS
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> REFUNDS
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>
              &copy; 2024 Servant Free Services. All rights reserved
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
