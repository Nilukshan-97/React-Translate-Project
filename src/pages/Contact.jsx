import React from "react";
import "../styles/Contact.css"; 
import ContactForm from "../components/ContactForm";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PinDropIcon from '@mui/icons-material/PinDrop';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


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
        <div className="contact-details-m">
          <h1>Let's Get Started!</h1>
            <div className="contact-details">
              <span>
                <PinDropIcon /> No 85, Rue Avenue de la republique, France
              </span>
              <span>
                <CallIcon /> +33 65 78 95 82 12
              </span>
              <span>
                <EmailIcon /> service@translatic.com
              </span>
            </div>
            <h2 className="contact-follow">Follow Us</h2>
            <div className="contact-socialMedia">
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
              <LinkedInIcon />
            </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;