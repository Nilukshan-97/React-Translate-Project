import React from "react";
import "../styles/Contact.css"; 
import ContactForm from "../components/ContactForm";


function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d777.4110091265555!2d2.3618248!3d48.924497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ebadd2263bf%3A0x70c04f7109156311!2sStade%20de%20France!5e1!3m2!1sen!2sfr!4v1735651164242!5m2!1sen!2sfr"
          width="100%"
          height="100%"
          className="map-iframe"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      
      <div className="form-section">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;