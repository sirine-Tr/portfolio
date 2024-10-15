import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope ,FaPhoneAlt } from "react-icons/fa";
import './footer.css'; 

function Footer() {
  return (
    <footer>
      <div className="left-section">
        
      <FaPhoneAlt className="icon" />+216 54757195 
<FaEnvelope className="icon" />
<p className="email">sirinetrabelsi.job@gmail.com</p>

      </div>
      <div className="right-section">
        <a href="https://www.linkedin.com/in/sirine-trabelsi-113273199/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/sirine-Tr" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
