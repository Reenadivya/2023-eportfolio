import React from "react";

function Skill({ skillImg, language }) {
  return (
    <div className="language__img">
      <img src={skillImg} alt="" className="skill__img" />
      <h3>{language}</h3>
    </div>
  );
}

export default Skill;
