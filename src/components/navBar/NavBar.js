import React, { useState } from 'react';
import './navBar.css';
import { Link } from 'react-scroll';
import imgBtn from '../../assets/send.png';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='desktopMenu'>
        <Link className='desktopMenuItem' activeClass="active-link" to="intro" spy={true} smooth={true} duration={500}>About</Link>
        <Link className='desktopMenuItem' activeClass="active-link" to="education" spy={true} offset={-100} smooth={true} duration={500}>Education</Link>
        <Link className='desktopMenuItem' activeClass="active-link" to="experiences" spy={true} offset={-100} smooth={true} duration={500}>Experiences</Link>
        <Link className='desktopMenuItem' activeClass="active-link" to="skills" spy={true} offset={-100} smooth={true} duration={500}>Skills</Link>
        <Link className='desktopMenuItem' activeClass="active-link" to="academic-projects" spy={true} offset={-100} smooth={true} duration={500}>Academic Projects</Link>
        <Link className='desktopMenuItem' activeClass="active-link" to="languages" spy={true} offset={-100} smooth={true} duration={500}>Language</Link>
        <Link className='desktopMenuItem' activeClass="active-link" to="certifications" spy={true} offset={-100} smooth={true} duration={500}>Certifications</Link>
        <Link className='desktopMenuItem' activeClass="active-link" to="hobbies" spy={true} offset={-100} smooth={true} duration={500}>Hobbies</Link>
      </div>

      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
      }}>
        <img alt="img contact" src={imgBtn} className='desktopMenuImg' />
        Contact Me
      </button>

      
      <div className='burger-btn' onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='mobileMenu'>
          <Link className='desktopMenuItem' onClick={toggleMenu} to="intro" spy={true} smooth={true} duration={500}>About</Link>
          <Link className='desktopMenuItem' onClick={toggleMenu} to="education" spy={true} offset={-100} smooth={true} duration={500}>Education</Link>
          <Link className='desktopMenuItem' onClick={toggleMenu} to="experiences" spy={true} offset={-100} smooth={true} duration={500}>Experiences</Link>
          <Link className='desktopMenuItem' onClick={toggleMenu} to="skills" spy={true} offset={-100} smooth={true} duration={500}>Skills</Link>
          <Link className='desktopMenuItem' onClick={toggleMenu} to="academic-projects" spy={true} offset={-100} smooth={true} duration={500}>Academic Projects</Link>
          <Link className='desktopMenuItem' onClick={toggleMenu} to="languages" spy={true} offset={-100} smooth={true} duration={500}>Language</Link>
          <Link className='desktopMenuItem' onClick={toggleMenu} to="certifications" spy={true} offset={-100} smooth={true} duration={500}>Certifications</Link>
          <Link className='desktopMenuItem' onClick={toggleMenu} to="hobbies" spy={true} offset={-100} smooth={true} duration={500}>Hobbies</Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
