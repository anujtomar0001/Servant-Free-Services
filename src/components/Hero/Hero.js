import React, { useEffect } from "react";
import "../Hero/Hero.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  // use effect hook for scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="hero-section">
      {/* Hero Content */}
      <div className="hero-content">
        <h1 data-aos="fade-up" className="hero-heading">
          "Your Property, Our Priority: Safety-Driven Innovation, Bringing Your
          Modern Space Dreams to Life with Comprehensive Expertise."
        </h1>
        <a data-aos="fade-up" href="/ContactUs" className="common-button">
          Get In Touch
        </a>
      </div>

      {/* Hero Images */}
      <div data-aos="fade-up" className="hero-images">
        <div className="hero-column">
          <div className="hero-card">
            <img
              src="https://dorsetfireprotection.co.uk/app/uploads/2020/03/fire-safety-training.jpg"
              alt="Left Image 1"
            />
            <img
              src="https://cdn.modernghana.com/images/content/213201811025_353_900.jpg"
              alt="Left Image 2"
            />
          </div>
        </div>

        <div className="hero-card center">
          <img
            src="https://scrubnbubbles.com/wp-content/uploads/2022/05/cleaning-service.jpeg"
            alt="Center Image"
          />
        </div>

        <div className="hero-column">
          <div className="hero-card">
            <img
              src="https://proknock.in/wp-content/uploads/2023/01/Facade-Cleaning-Services-in-Kolkata.jpg"
              alt="Right Image 1"
            />
            <img
              src="https://cdn.pixabay.com/photo/2017/08/25/20/01/gallery-2681238_1280.jpg"
              alt="Right Image 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
