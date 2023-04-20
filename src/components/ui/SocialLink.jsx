import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialLink({ link, icon, className }) {
  return (
    <a href={link} target="_blank" className={className}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

export default SocialLink;
