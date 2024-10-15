import React, { useEffect ,useState} from 'react';
import Actia from "../../assets/actia.png";
import ICxRP from "../../assets/ICxRP.png";
import DKSoft from "../../assets/DKSoft.png";
import ICC from "../../assets/iccanada.png";
import Etaii from "../../assets/et.png";
import './Experiences.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Experiences = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const experiencesData = [
        { 
          company: "ACTIA ENGINEERING SERVICES", 
          logo: Actia, 
          description:"Reverse-engineering of a web application for managing e-bikes and development of a microservice to manage an IoT device installed on e-bikes. The microservice collects data on the bike's electronic components, as well as information on its position and routes",
          post:"Web Developer",
          startDate:"13/02/2024",
          endDate:"13/06/2024",
          location:"Sfax",
          stacks:["Spring Boot", "Angular", "GitLab", "PostgreSQL", "Jira", "Scrum"]
        },
        { 
          company: "International cooperation project ICxRP", 
          logo: ICxRP, 
          description:"Collaborated with teams from the Higher Institute of Computer Science, Karlsruhe University in Germany, and Turku University in Finland to develop a VR application for teaching Value Stream Analysis.",
          post:"Virtual Reality Developer",
          startDate:"03/2023",
          endDate:"10/2023",
          location:"Tunisia, Germany, Finland",
          stacks:["Unity", "C#", "GitHub", "Clockify", "Virtual Reality"]
        },
        { 
          company: "DK Soft", 
          logo: DKSoft, 
          description:"Developed an inventory management web application for an association, working directly with the client to gather requirements.",
          post:"Web Developer",
          startDate:"06/2022",
          endDate:"09/2022",
          location:"Sfax",
          stacks:["Spring Boot", "Angular", "GitHub", "MySQL", "Jira", "Scrum"]
        },
        { 
          company: "International Consulting Canada", 
          logo: ICC, 
          description:"Conception, prototype and development of a mobile application for quality management.",
          post:"Mobile Developer",
          startDate:"02/2021",
          endDate:"06/2021",
          location:"Remote",
          stacks:["React Native", "Django", "Adobe XD","GitHub", "PostgreSQL"]
        },
        { 
          company: "ETAAII Software", 
          logo: Etaii, 
          description:"Updating a Web Application for Foncony Maladie by adding features for data export to Excel and medical record printing.",
          post:"Web Developer",
          startDate:"01/07/2020",
          endDate:"01/08/2020",
          stacks:["Spring Boot", "GitLab"]
        },
    ];

    return (
      <div><h1 className='title' id="experiences">Experiences</h1>
        <div className="card-grid-Experiance">
            {experiencesData.map((experience, index) => (
                <div 
                    key={index} 
                    className={`experience-card ${index % 2 === 0 ? 'experience-card-left' : 'experience-card-right'}`}
                    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                    <div className="experience-card-header">
                        <img src={experience.logo} alt={`${experience.company} logo`} />
                        <div className="experience-company-title">
                            <h3>{experience.company}</h3>
                        </div>
                        <div className="experience-dates">
                            <p>{experience.startDate} - {experience.endDate}</p>
                        </div>
                    </div>
                    <div className="experience-post">
                        <p><FontAwesomeIcon className='experience-post-icon' icon={faBriefcase} /> {experience.post}</p>
                    </div>
                    <div className="experience-description">
                        <p>{experience.description}</p>
                    </div>
                    <div className="experience-stacks">
                        <p><strong>Technologies:</strong> {experience.stacks.join(', ')}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Experiences;
