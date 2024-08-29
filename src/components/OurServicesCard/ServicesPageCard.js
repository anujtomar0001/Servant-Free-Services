import React, { useEffect } from "react";
import "../OurServicesCard/ServicesPageCard.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ServicesPageCard = () => {
  // use effect hook for scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section class="card-section">
        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Cleaning Services and Upkeep</h3>
          <p class="card-paragraph">
            Keep your spaces clean and fresh with our reliable cleaning
            services. From regular upkeep to deep cleaning, we ensure a spotless
            environment using eco-friendly products.
          </p>
          <div class="card-image">
            <img
              src="https://scrubnbubbles.com/wp-content/uploads/2022/05/cleaning-service.jpeg"
              alt="Card Image"
            />
          </div>
        </div>
        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Fire, Safety & Health</h3>
          <p class="card-paragraph">
            Prioritize safety with our expert solutions. We offer fire safety
            assessments, health audits, and compliance services to protect your
            property and people.
          </p>
          <div class="card-image">
            <img
              src="https://dorsetfireprotection.co.uk/app/uploads/2020/03/fire-safety-training.jpg"
              alt="Card Image"
            />
          </div>
        </div>
        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Plumbing & Drainage Services</h3>
          <p class="card-paragraph">
            Say goodbye to plumbing headaches. Our skilled team handles repairs,
            installations, and maintenance, ensuring smooth operations and
            minimal disruptions.
          </p>
          <div class="card-image">
            <img
              src="https://cdn.modernghana.com/images/content/213201811025_353_900.jpg"
              alt="Card Image"
            />
          </div>
        </div>
        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">
            Wall Painting and all Other Painter Works
          </h3>
          <p class="card-paragraph">
            Creating Masterpieces on Every Surface: Professional Wall Painting
            and Painter Works for Your Home or Business.
          </p>
          <div class="card-image">
            <img
              src="https://gurupaintingservices.com/wp-content/uploads/2021/10/painting-contractors-scaled.jpg"
              alt="Card Image"
            />
          </div>
        </div>

        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Electric Work</h3>
          <p class="card-paragraph">
            Lighting Up Your World: Trusted Electrical Work Services with
            Precision and Safety. Comprehensive Electrical Work Services for
            Your Home or Business.
          </p>
          <div class="card-image">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/2/NH/QO/RE/2952059/commercial-electrical-work-service.jpeg"
              alt="Card Image"
            />
          </div>
        </div>

        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Fabrication Works and Carpenter Works</h3>
          <p class="card-paragraph">
            Crafting and Fixing: Quality Fabrication and Carpenter Services for
            Your Needs. Expert Fabrication and Carpenter Works Tailored to You.
          </p>
          <div class="card-image">
            <img
              src="https://webtk.sfastservices.com/blogimg/Carpenter%20Services-Sfastservices.jpeg"
              alt="Card Image"
            />
          </div>
        </div>

        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Civil & Construction Works</h3>
          <p class="card-paragraph">
            From Ground Up: Expert Civil & Construction Services for Homes and
            Businesses. Building Better Communities: Skilled Civil &
            Construction Services at Your Service.
          </p>
          <div class="card-image">
            <img
              src="https://www.innodez.com/wp-content/uploads/2021/07/civil-engineering-services-500x500-1.png"
              alt="Card Image"
            />
          </div>
        </div>
        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Physiotherapist</h3>
          <p class="card-paragraph">
            Recover from injuries and improve mobility with personalized care
            from our experienced physiotherapists.
          </p>
          <div class="card-image">
            <img
              src="https://painfreehealth.ca/axedelty/2022/10/What-is-Physiotherapy-How-Physiotherapy-Helps-You.jpeg"
              alt="Card Image"
            />
          </div>
        </div>
        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Security Guard</h3>
          <p class="card-paragraph">
            Ensure safety and peace of mind with our trained security guards
            providing vigilant protection for your premises.
          </p>
          <div class="card-image">
            <img
              src="https://m.media-amazon.com/images/I/41M1qy5IxGL._AC_UF894,1000_QL80_.jpg"
              alt="Card Image"
            />
          </div>
        </div>
        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Housekeeping</h3>
          <p class="card-paragraph">
            Keep your home clean and organized effortlessly with our reliable
            and thorough housekeeping services.
          </p>
          <div class="card-image">
            <img src="https://hospitalitystudy.eu/wp-content/uploads/2017/02/housekeeping_meaning_41770_1268_878.jpg" />
          </div>
        </div>
        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Gardener</h3>
          <p class="card-paragraph">
            Transform your garden into a lush paradise with the help of our
            skilled gardeners, handling everything from planting to maintenance.
          </p>
          <div class="card-image">
            <img
              src="https://regionillawarra.com.au/wp-content/uploads/sites/10/2023/09/male-gardener-spraying-water-on-plants-2022-02-02-03-58-41-utc-1200x800.jpg"
              alt="Card Image"
            />
          </div>
        </div>
        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">House Maid</h3>
          <p class="card-paragraph">
            Relax and enjoy a clean home without the hassle with our dedicated
            housemaids taking care of all your household chores.
          </p>
          <div class="card-image">
            <img
              src="https://www.housemaids.in/assets/img/srvs-housemaid.jpg"
              alt="Card Image"
            />
          </div>
        </div>
        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Care Taker (Child/ Elders)</h3>
          <p class="card-paragraph">
            Provide compassionate care for your loved ones with our professional
            caregivers, offering support for children and elders alike.
          </p>
          <div class="card-image">
            <img
              src="https://www.waytoservices.in/admin/images/service/babysitter.jpg"
              alt="Card Image"
            />
          </div>
        </div>

        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">General Physician</h3>
          <p class="card-paragraph">
            Stay healthy and well with regular check-ups and expert medical care
            from our experienced general physicians.
          </p>
          <div class="card-image">
            <img
              src="https://cureskin.com/wp-content/uploads/2020/08/general-physician-feature-1.jpg"
              alt="Card Image"
            />
          </div>
        </div>
        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Gun Man</h3>
          <p class="card-paragraph">
            Ensure the safety of your property with our skilled gunmen providing
            robust security solutions for high-risk situations.
          </p>
          <div class="card-image">
            <img
              src="https://blrsquad.com/wp-content/uploads/2021/12/gun-man-2.jpeg"
              alt="Card Image"
            />
          </div>
        </div>
        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Driver</h3>
          <p class="card-paragraph">
            Experience convenience and comfort with our professional drivers,
            offering reliable transportation services for your needs.
          </p>
          <div class="card-image">
            <img
              src="https://www.teamais.net/wp-content/uploads/2020/07/driver-hire-min.jpg"
              alt="Card Image"
            />
          </div>
        </div>
        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">AC/Refrigerator Services</h3>
          <p class="card-paragraph">
            Keep your cooling systems running smoothly with our expert AC and
            refrigerator services, including installation and maintenance.
          </p>
          <div class="card-image">
            <img
              src="https://www.ssairconditionerrepair.in/wp-content/uploads/2021/07/efwef.jpg"
              alt="Card Image"
            />
          </div>
        </div>
        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Teacher</h3>
          <p class="card-paragraph">
            Unlock your potential with personalized tutoring from our dedicated
            teachers, providing support for a wide range of subjects.
          </p>
          <div class="card-image">
            <img
              src="https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
              alt="Card Image"
            />
          </div>
        </div>

        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Space Planning</h3>
          <p class="card-paragraph">
            Optimize your space for efficiency. Our tailored space planning
            solutions maximize workflow and functionality, enhancing
            productivity.
          </p>
          <div class="card-image">
            <img src="https://www.hubstar.com/wp-content/uploads/2023/01/5-steps-to-effective-space-planning.jpg" />
          </div>
        </div>

        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Façade Cleaning</h3>
          <p class="card-paragraph">
            Make a great first impression. Our façade cleaning services remove
            dirt and stains, restoring the beauty of your building exterior.
          </p>
          <div class="card-image">
            <img
              src="https://proknock.in/wp-content/uploads/2023/01/Facade-Cleaning-Services-in-Kolkata.jpg"
              alt="Card Image"
            />
          </div>
        </div>

        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Parking Arrangements</h3>
          <p class="card-paragraph">
            Ensure hassle-free parking. We design layouts and optimize traffic
            flow for efficient parking solutions tailored to your needs.
          </p>
          <div class="card-image">
            <img
              src="https://images.unsplash.com/photo-1580638964062-3ca2379e4a56?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Card Image"
            />
          </div>
        </div>

        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Blind Cleaning</h3>
          <p class="card-paragraph">
            Refresh your space with clean blinds. Our professional cleaning
            removes dust and allergens, revitalizing your interior.
          </p>
          <div class="card-image">
            <img
              src="https://www.squeegeepro.com/wp-content/uploads/blind-cleaning-img1.jpg"
              alt="Card Image"
            />
          </div>
        </div>

        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Sofa Chair Cleaning</h3>
          <p class="card-paragraph">
            Renew your upholstery. Our gentle cleaning methods eliminate dirt
            and odors, leaving your furniture looking and feeling like new.
          </p>
          <div class="card-image">
            <img
              src="https://media.product.which.co.uk/prod/images/original/gm-7085653b-1747-4e8d-a2e9-2f16e651b9a1-cleaning-a-sofa-2-002-vacuum.jpg"
              alt="Card Image"
            />
          </div>
        </div>

        <div data-aos="fade-up" class="card">
          <h3 class="card-heading">Water Management Services</h3>
          <p class="card-paragraph">
            Save water, save costs. Our water management strategies detect
            leaks, optimize irrigation, and promote sustainability for your
            property.
          </p>
          <div class="card-image">
            <img
              src="https://www.watchwater.de/wp-content/uploads/2024/01/01-home-filtersorb.webp"
              alt="Card Image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPageCard;
