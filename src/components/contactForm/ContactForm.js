import React,{useRef} from 'react';
import './contactForm.css';
import emailjs from 'emailjs-com';
const ContactForm = () => {
  const form = useRef();
  const SERVICE_ID = "service_txiw6tm";
  const TEMPLATE_ID = "template_p9rs2vk";
  const PUBLIC_KEY = "hD7fafrAjdYss8LWV";
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert('Message Sent Successfully')
      }, (error) => {
        alert('Something went wrong!')
      });
    e.target.reset()
  };
  return (
    <div id="contact" className="container">
      <div className="contactTitle">
        <h2>Contact <span className="contactSpan">Me</span></h2>
      </div>

      <div className="contactForm">
        <form ref={form} className="formContainer" onSubmit={handleOnSubmit}>
          <div className="formElement">
            <label htmlFor="from_name">Name</label>
            <input type="text" id="from_name" name="user-name" placeholder="Your name.." required />
          </div>

          <div className="formElement">
            <label htmlFor="from_email">E-mail</label>
            <input type="email" id="from_email" name="user-email" placeholder="Your email.." required />
          </div>

          <div className="formElement">
            <label htmlFor="message">Message</label>
            <textarea name="user-message" rows="8" cols="30" placeholder="Your message.." required />
          </div>

          <button type="submit" className="formButton">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
