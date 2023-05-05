import React from "react";
import { Link } from "react-router-dom";
import LogoLight from "../assets/Logo-light.svg";

function Footer({ toggleDarkMode }) {
  return (
    <footer>
      <div className="container">
        <figure className="nav__icon nav__icon--footer">
          <img src={LogoLight} alt="" className="logo footer__logo" />
        </figure>
        <div className="row footer__row">
          <div className="footer__social--list">
            <a
              href="https://github.com/Reenadivya"
              target="_blank"
              className="footer__social--link link__hover link__hover-effect--white">
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/reena-divya/"
              target="_blank"
              className="footer__social--link link__hover link__hover-effect--white">
              LinkedIn
            </a>

            <a
              href="#contact"
              className="footer__social--link link__hover link__hover-effect--white">
              Contact
            </a>

            <a
              href="../../public/assets/Resume V2.docx (1).pdf"
              target="_blank"
              className="footer__social--link link__hover link__hover-effect--white">
              Resume
            </a>
          </div>
          <div className="footer__copyright">Copyright © 2023 Reena Divya</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
