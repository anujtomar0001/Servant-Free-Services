import React, { useEffect } from "react";
import "../OurServices/OurServicesPage.css";
import Aos from "aos";
import "aos/dist/aos.css";

const OurServicesPage = () => {
  // use effect hook for scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section class="our-services_section">
        <div class="services_section-content">
          <h3 data-aos="fade-up" class="section-heading-small">
            OUR SERVICES
          </h3>
          <h2 data-aos="fade-up" class="section-heading-big">
            Your Property, Our Priority: Comprehensive Care Solutions
          </h2>
          <p data-aos="fade-up" class="services-section-paragraph">
            At Servant Free Services, we offer a wide range of services to meet
            your property needs. From cleaning and upkeep to safety measures,
            plumbing, and compliance, we've got you covered. Trust us for expert
            solutions in electrical work, vendor management, and audits. With
            services like - Carpenter Works, Physiotherapist, Security Guard ,
            Housekeeping, Gardener, House Maid, Care Taker (Child/ Elders),
            General Physician, Gun Man, Driver, AC/Refrigerator Services,
            Teacher, Space Planning, construction works. we ensure your property
            is in good hands.
          </p>
          <a data-aos="fade-up" href="/ContactUs" class="common-button">
            Get In Touch
          </a>
        </div>

        <div data-aos="fade-up" class="section-image">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Our Services"
          />
        </div>
      </section>
    </>
  );
};

export default OurServicesPage;
