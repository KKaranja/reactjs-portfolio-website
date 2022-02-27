import React from "react";
import "./footer.css";

import { BsTwitter, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        KIMURA
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#abou'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonial'>Testimonial</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='footer__social'>
        <a href='https://facebooc.com'>
          <BsFacebook className='footer__social-icon' />
        </a>
        <a href='https://twiter.com'>
          <BsTwitter className='footer__social-icon' />
        </a>
        <a href='https://linkedin.com'>
          <BsLinkedin className='footer__social-icon' />
        </a>
        <a href='https://intagram.com'>
          <BsInstagram className='footer__social-icon' />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Isaac Kimura</small>
      </div>
    </footer>
  );
};

export default Footer;
