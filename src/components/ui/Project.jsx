import React, { useEffect, useState, useRef } from "react";
import SocialLink from "./SocialLink";
import Cinemascope from "../../assets/Advanced_Portfolio_Cinemascope.png";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "./Skeleton";

function Project({ project }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <li className="project">
      {!showContent ? (
        <>
          <Skeleton width="500px" height="230px" borderRadius="8px" />
        </>
      ) : (
        <div className="project__wrapper">
          <img
            src={project?.url}
            className="project__img "
            alt="project image"
            loading="lazy"
          />
          <div className="project__wrapper--bg"></div>
          <div className="project__description">
            <h3 className="project__description--title">{project?.title}</h3>
            <h4 className="project__description--sub-title">
              <span className="blue">{project?.languages}</span>
            </h4>
            <p className="project__description--para">{project?.description}</p>
            <div className="project__description--links">
              <SocialLink
                icon={faGithub}
                link={"https://heroic-cajeta-9b019d.netlify.app"}
                className={"project-description--link"}
              />
              <SocialLink
                icon={faLinkedin}
                link={"https://heroic-cajeta-9b019d.netlify.app"}
                className={"project-description--link"}
              />
              <SocialLink
                icon={faLink}
                link={project?.link}
                className={"project-description--link"}
              />
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

export default Project;
