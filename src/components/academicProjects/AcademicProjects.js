import React from 'react';
import { FaCode, FaLaptopCode, FaPenNib } from 'react-icons/fa'; 
import "./academicProjects.css"
function AcademicProjects() {
    const academicProjectsData = [
        { 
          title: "Web application to manage a medical practice",  
          description:"This web application manages a medical practice with two user roles: doctor and secretary. Doctors can manage patient records, appointments, and prescriptions, while secretaries handle scheduling, billing, and patient information.",
          linkOfProjectFront:"https://github.com/rahma-becha/GCM",
          stacks:["Angular","JSON Server", "GitHub"]
        },
        { 
          title: "Web application for quality management in universities",  
          description:"This web application is designed for quality management in universities, focusing on improving institutional processes. It includes modules for complaint management, allowing students and staff to submit and track issues, and risk management, which helps identify, assess, and mitigate potential risks.",
          linkOfProjectFront:"https://github.com/sirine-Tr/SMQ-frontend", 
          linkOfProjectBackend:"https://github.com/sirine-Tr/SMQ-back-end",
          stacks:["Angular","Spring Boot","PostgreSQL" ,"GitHub"]
        },
        { 
          title: "Web Application for Pharmacy Management",  
          description:"This web application for pharmacy management facilitates the efficient operation of a pharmacy by providing features such as inventory management, enabling tracking of medication stock, and prescription management for processing and storing patient prescriptions. It also supports billing and invoicing, supplier management, and report generation to monitor sales and inventory levels.",
          linkOfProjectBackend:"https://github.com/rabeb-hub/gestion-ph",
          stacks:[".Net", "GitHub"]
        },
        { 
          title: "Mobile application to reduce pollution",  
          description:"This mobile application aims to reduce pollution by minimizing food waste. It has two parts: one for human consumption, where restaurants, hotels, and stores can sell surplus food at reduced prices by the end of the day. The second part is dedicated to animal farmers and other professionals like bakers, fishmongers, and butchers, who can post when food items that are no longer consumable by humans become available for animal consumption. The app promotes sustainability and responsible waste management in the food industry.",
          linkOfProjectFront:"https://github.com/sirine-Tr/FightWaste",
          linkToAdobeXd:"https://xd.adobe.com/view/db83d035-472a-4d17-aff3-9c5fdab54b2c-8ed0/grid/",
          stacks:["Flutter","Adobe Xd", "GitHub"]
        },
        { 
            title: "Mobile food delivery application 'Foodsie'",  
            description:"Foodsie is a mobile food delivery application where restaurants sell their surplus food at reduced prices by the end of the day, helping to minimize waste. Clients can browse available food items, reserve meals, and choose to pay either online or upon delivery, offering convenience and affordability while supporting sustainability efforts.",
            linkOfProjectFront:"https://github.com/sirine-Tr/foodsie",
            stacks:["Android", "GitHub"]
          },
    ];

    return (
        <div id="academic-projects">
            <h1 className='title'>Academic Projects</h1>
            <div className="card-grid-projects">
                {academicProjectsData.map((project, index) => (
                    <div key={index} className='project-card'>
                        <div className="project-card-header">
                            <div className="project-title">
                                <h3>{project.title}</h3>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>{project.description}</p>
                        </div>
                        <div className="project-stacks">
                            <p><strong>Technologies:</strong> {project.stacks.join(', ')}</p>
                        </div>
                        <div className="project-links">
                            
                            {project.linkOfProjectFront && (
    <a href={project.linkOfProjectFront} target="_blank" rel="noopener noreferrer" className="project-link">
        <FaLaptopCode className="icon-style" /> <span className="link-text">Front-End Code</span>
    </a>
)}

{project.linkOfProjectBackend && (
    <a href={project.linkOfProjectBackend} target="_blank" rel="noopener noreferrer" className="project-link">
        <FaCode className="icon-style" /> <span className="link-text">Back-End Code</span>
    </a>
)}

{project.linkToAdobeXd && (
    <a href={project.linkToAdobeXd} target="_blank" rel="noopener noreferrer" className="project-link">
        <FaPenNib className="icon-style" /> <span className="link-text">Prototype Link</span>
    </a>
)}                       
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AcademicProjects;
