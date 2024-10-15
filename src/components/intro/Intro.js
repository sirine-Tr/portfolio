import React from 'react';
import './intro.css';
import sirineImg from '../../assets/sirine.png';
import download from '../../assets/downloads.png';
import cvFile from '../../assets/sirineTrabelsi-CV.pdf';  

function Intro() {
  return (
    <section id="intro">
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I am <span className='introName'>Sirine</span><br />Software Engineer</span>
        <p className='introPara'>
          With 1 year and 7 months of internship experience, I excel in client communication and translating
          needs into technical solutions. My passion for drawing enhances my creativity, driving innovative
          problem-solving. I am eager to contribute these skills to your team as a Full Stack Developer.
        </p>
        <button className='introBTN'>
          <a href={cvFile} download="CV_Sirine_Trabelsi.pdf">
            <img src={download} alt="Download CV" />
            Download CV
          </a>
        </button>
      </div>
      <img alt="sirine" src={sirineImg} className='bg' />
    </section>
  );
}

export default Intro;
