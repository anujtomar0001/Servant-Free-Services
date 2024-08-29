import React, { useEffect } from "react";
import "../WhatWeDoSection/WhatWeDoServices.css";
import Aos from "aos";
import "aos/dist/aos.css";

const WhatWeDoServices = () => {
  // use effect hook for scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div data-aos="fade-up" className="whatWeDo_Services_Card">
        <div className="card-body">
          <h5 className="card-heading">WE ARE OFFERING</h5>

          <div className="row">
            <div className="col">
              <p className="column-heading">Cleaning services</p>
            </div>
            <div className="col">
              <p className="column-heading">Fire, safety & Health</p>
            </div>
            <div className="col">
              <p className="column-heading">Plumbing & Drainage Services</p>
            </div>
            <div className="col">
              <p className="column-heading">Electric Work</p>
            </div>
            <div className="col">
              <p className="column-heading">Fabrication Works</p>
            </div>
            <div className="col">
              <p className="column-heading">Carpenter Works</p>
            </div>
            <div className="col">
              <p className="column-heading">Civil Works</p>
            </div>
            <div className="col">
              <p className="column-heading">Construction Works</p>
            </div>
            <div className="col">
              <p className="column-heading">Space Planning</p>
            </div>
            <div className="col">
              <p className="column-heading">Water Management Services</p>
            </div>
            <div className="col">
              <p className="column-heading">Parking Arrangements</p>
            </div>
            <div className="col">
              <p className="column-heading">Blind Cleaning</p>
            </div>
            <div className="col">
              <p className="column-heading">Sofa Chair Cleaning</p>
            </div>
            <div className="col">
              <p className="column-heading">Electrical Work</p>
            </div>
            <div className="col">
              <p className="column-heading">Car parking structure & shed</p>
            </div>
            <div className="col">
              <p className="column-heading">Entrance Tensile Structure</p>
            </div>
            <div className="col">
              <p className="column-heading">Wall Painting</p>
            </div>
            <div className="col">
              <p className="column-heading">Vendor Management</p>
            </div>
            <div className="col">
              <p className="column-heading">System & Safety Audits</p>
            </div>
            <div className="col">
              <p className="column-heading">Incident Reporting...</p>
            </div>
            <div className="col">
              <p className="column-heading">Building & Machinery Insurance</p>
            </div>
            <div className="col">
              <p className="column-heading">all Other Painter Works</p>
            </div>
            <div className="col">
              <p className="column-heading">Statutory Compliance</p>
            </div>
            <div className="col">
              <p className="column-heading">Façade Cleaning</p>
            </div>
            <div className="col">
              <p className="column-heading">Physiotherapist</p>
            </div>
            <div className="col">
              <p className="column-heading">Security Guard</p>
            </div>
            <div className="col">
              <p className="column-heading">Housekeeping</p>
            </div>
            <div className="col">
              <p className="column-heading">Gardener</p>
            </div>
            <div className="col">
              <p className="column-heading">House Maid</p>
            </div>
            <div className="col">
              <p className="column-heading">Care Taker (Child/ Elders)</p>
            </div>
            <div className="col">
              <p className="column-heading">
                Spa Services (Hair or Body Massage)
              </p>
            </div>
            <div className="col">
              <p className="column-heading">General Physician</p>
            </div>
            <div className="col">
              <p className="column-heading">Gun Man</p>
            </div>
            <div className="col">
              <p className="column-heading">Driver</p>
            </div>
            <div className="col">
              <p className="column-heading">AC/Refrigerator Services</p>
            </div>
            <div className="col">
              <p className="column-heading">Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDoServices;
