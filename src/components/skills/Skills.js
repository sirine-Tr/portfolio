import React, { useState } from "react";
import PopUp from "../popUp/PopUp";
import "./skills.css";
import programmingImg from "../../assets/application.png";
import appDevelopmentImg from "../../assets/app-development.png";
import databaseImg from "../../assets/database-storage.png";
import designImg from "../../assets/illustration.png";
import codeManagementImg from "../../assets/system.png";
const Skills = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const skillsData = [
    { 
      title: "Programming Languages", 
      image: programmingImg, 
      frameworks: ["C#", "Java", "Python", "JavaScript", "TypeScript"] 
    },
    { 
      title: "Development", 
      image: appDevelopmentImg, 
      frameworks: ["HTML5/CSS3","Angular","React Js","React Native","Flutter","Android", "Spring Boot", "Django",   "Node.js"] 
    },
    { 
      title: "Databases", 
      image: databaseImg, 
      frameworks: ["MongoDB", "MySQL", "PostgreSQL"] 
    },
    { 
      title: "Design", 
      image: designImg, 
      frameworks: ["UX", "UI (Adobe XD)"] 
    },
    { 
      title: "Code Management Tools and Platforms", 
      image: codeManagementImg, 
      frameworks: ["GitHub", "GitLab", "Jira", "Docker"] 
    },
  ];

  const handleCardClick = (index) => {
    setSelectedCard(skillsData[index]);
  };

  return (
    <div id="skills" className="container">
      <h1 className="title">Skills</h1> 
      
      <div className="card-grid">
        {skillsData.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleCardClick(index)}
          >
            <img src={card.image} alt={`${card.title} icon`} className="card-image" />
            <h3>{card.title}</h3>
            <button className="arrow-button">&#9654;</button> 
          </div>
        ))}
      </div>

      {selectedCard && (
        <PopUp
          card={selectedCard}
          closeModal={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
};

export default Skills;
