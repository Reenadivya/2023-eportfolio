import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SocialLink from "./ui/SocialLink";
import Resume from "../../public/assets/Resume V2.docx (1).pdf";
import LaptopGirl from "../assets/Laptop_Girl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function Landing({ toggleDarkMode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <section id="landing">
      <header>
        <div className="header__container" data-aos="fade-up">
          <div className="header__description">
            <h1 className="header__description--title">
              Hello, I'm{" "}
              <span className="blue shimmer bottomhalf">Reena Divya,</span>
            </h1>
            <h2 className="header__description--subtitle">
              a <b className="click"> Frontend Software Engineer</b> with
              expertise in social media marketing and SEO, I have a strong
              passion for developing web applications that provide exceptional
              user experiences.
            </h2>
            <div className="social__list">
              <SocialLink
                icon={faLinkedin}
                link={"https://www.linkedin.com/in/reena-divya/"}
                className={"social__link click"}
              />

              <SocialLink
                icon={faGithub}
                link={"https://github.com/Reenadivya"}
                className={"social__link click"}
              />
              <SocialLink
                icon={faFilePdf}
                link={Resume}
                className={"social__link click"}
              />
            </div>
            <Link to="/projects" className="link__btn">
              <button className="btn click" onClick={toggleDarkMode}>
                Browse Projects
              </button>
            </Link>
          </div>
          <div className="header__img" data-aos="fade-down">
            <figure className="header__img--wrapper">
              <img src={LaptopGirl} alt="" className="laptop-girl" />
            </figure>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Landing;
