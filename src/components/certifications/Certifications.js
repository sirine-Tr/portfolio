import React, { useState } from "react";

import "./certifications.css";
import scrumImg from "../../assets/scrum.png"; 
import englishB2 from "../../assets/englishB2.png";
import communicationCertif from "../../assets/communicationCertif.png";
const Certifications = () => {
 

  const certificationsData = [
    {
      title: "Scrum Fundamentals Certification",
      image: scrumImg,
      link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=956497",
    },
    {
      title: "Communication Training",
      image: communicationCertif,
      link: "https://drive.google.com/file/d/1P4jmPSl_rLZi3lhUIytgBeugu6PT7z6c/view?usp=sharing",
    },
    {
      title: "English Certification",
      image: englishB2,
      link: "https://drive.google.com/file/d/1y0ppPIgwJBbLamNIuaT9_xC01JCW_qNq/view?usp=sharing", 
    },
  ];

  const handleCardClick = (link) => {
    window.open(link, "_blank"); 
  };

  return (
    <div id="certifications">
    <div  className="certification-container">
      <h1 className="title">Certifications</h1>

      <div className="certification-card">
        {certificationsData.map((card, index) => (
          <div
            key={index}
            className="card-link"
            onClick={() => handleCardClick(card.link)}
          >
            <img src={card.image} alt={`${card.title} icon`} className="certification-image" />
            <h3 className="certification-title">{card.title}</h3>
           
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Certifications;
