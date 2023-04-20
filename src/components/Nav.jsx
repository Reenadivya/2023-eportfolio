import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoLight from "../assets/Logo-light.svg";
import LogoDark from "../assets/Logo-dark.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

function Nav({ toggleDarkMode }) {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/" className="nav__icon">
          <img src={LogoLight} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link link__hover">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/projects" className="nav__link link__hover">
              Projects
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/contact" className="nav__link link__hover">
              Contact
            </Link>
          </li>
          <li className="nav__list click">
            <a
              href="#"
              className="nav__link link__hover"
              onClick={toggleDarkMode}>
              <FontAwesomeIcon icon={faCircleHalfStroke} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
