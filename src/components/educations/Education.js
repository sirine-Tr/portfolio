import React from 'react';
import isims from "../../assets/isims-logo.png";
import './education.css';
const Education = () => {
    

    const EducationData = [
        { 
          institute: "Higher Institute of Computer Science and Multimedia of Sfax", 
          logo: isims, 
          specialty:"Software Engineering",
          startDate:"2021",
          endDate:"2024",
          location:"Sfax",
          
        },
        { 
            institute: "Higher Institute of Computer Science and Multimedia of Sfax", 
            logo: isims, 
            specialty:"Bachelor's degree in Computer Science and Multimedia",
            startDate:"2018",
            endDate:"2021",
            location:"Sfax",
            
          },
        
    ];


    return (
        
    
    <div id="education" className="card-grid-education">
    <h1 className='title'>Education</h1> 
    {EducationData.map((education, index) => (
    <div key={index} className="education-card"> 
        <div className="education-card-header">
            <img src={education.logo} alt={`${education.institute} logo`}  />
            <div className="education-institute">
                <h3>{education.institute}</h3>
                
            </div>
            <div className="education-dates">
                <p>{education.startDate} - {education.endDate}</p>
            </div>
        </div>
        <div className="education-specialty">
        <p> {education.specialty}</p>
        </div>
        
    </div>
))}

    </div>
       
    );
}

export default Education;
