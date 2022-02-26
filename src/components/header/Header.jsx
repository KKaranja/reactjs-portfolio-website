import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import ME from "../../assets/dev-5.jpeg";

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm </h5>
        <h1>Isaac K. Kimura</h1>
        <h5 className='text-light'>Full-stack Develloper</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
          <img src={ME} alt='Isaac Karanja Kimura' />
        </div>
        <a href='#contact' className='scroll__down'>
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
