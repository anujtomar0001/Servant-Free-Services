import React, { useState } from "react";
import "../Header/Navbar.css";
import { FcServices } from "react-icons/fc";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  // function to toggle navbar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  // function to remove navbar
  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <>
      <section className="navBarSection">
        <header className="header flex">
          <div className="logoDiv">
            <a href="/" className="logo flex">
              <h1>
                <FcServices className="icon" />
                Servant Free Services
              </h1>
            </a>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <Link to="/">Home</Link>
              </li>
              <li className="navItem">
                <Link to="/Services">Services</Link>
              </li>
              <li className="navItem">
                <Link to="/About">About</Link>
              </li>
              <li className="navItem">
                <Link to="/WhatWeDo">What We Do</Link>
              </li>

              <button className="btn">
                <Link to="/ContactUs">Contact Us</Link>
              </button>
            </ul>

            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </header>
      </section>
    </>
  );
};

export default Navbar;
