import './App.css';
import ContactForm from './components/contactForm/ContactForm';
import Education from './components/educations/Education';
import Experiences from './components/Experiances/Experiences';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import NavBar from "./components/navBar/NavBar";
import AcademicProjects from "./components/academicProjects/AcademicProjects";
import Languages from './components/languges/Languages';
import Certifications from './components/certifications/Certifications';
import Hobbies from './components/hobbies/Hobbies';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Education  />
      <Experiences  />
      <Skills />
      <AcademicProjects  />
      <Languages  />
      <Certifications  />
      <Hobbies  />
      <ContactForm  />
      <Footer />
    </div>
  );
}

export default App;
