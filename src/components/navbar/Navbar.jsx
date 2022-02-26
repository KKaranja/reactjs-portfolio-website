import React from "react";
import "./navbar.css";
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { SiBookstack } from "react-icons/si";
import { RiServiceFill } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";

import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href='#'
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <SiAboutdotme />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <SiBookstack />
      </a>
      <a
        href='#services'
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceFill />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <TiMessages />
      </a>
    </nav>
  );
};

export default Navbar;
