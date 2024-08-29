import React, { useEffect } from "react";
import "../ExecutiveSummary/ExecutiveSummary.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ExecutiveSummary = () => {
  // use effect hook for scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section class="our-services_section">
        <div data-aos="fade-up" class="section-image">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Our Services"
          />
        </div>

        <div class="services_section-content">
          <h3 data-aos="fade-up" class="section-heading-small">
            WHO WE ARE
          </h3>
          <h2 data-aos="fade-up" class="section-heading-big">
            Our Journey: Crafting Excellence in Property Care
          </h2>
          <p data-aos="fade-up" class="services-section-paragraph">
            The Servant Free Services established in the year 2024, is the main
            active player in Integrated Enterprise Services. Its activities
            Electrical Work, Civil Work, Painter ,Flex Printing,Carpenter,
            Plumbing ,Fabrication, Shades, Cleaning and many more. It is able to
            provide the core enterprise services of large private groups, public
            bodies and health facilities with a wide range of integrated
            ancillary services. A propensity for innovation, a proven
            organisational capacity and qualified personnel make Servant Free
            Services the ideal partner to be entrusted with the care of
            buildings and property. We understand the business criticality of
            facilities and ensure to provide our customers with the very best of
            services. We constantly monitor our services and wherever possible,
            improve them through implementation of management processes,
            training and skill development of our workforce. We follow through
            our clients’ requirements with precision to achieve the desired
            results.
          </p>
          <a data-aos="fade-up" href="/ContactUs" class="common-button">
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default ExecutiveSummary;
