import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PinDropIcon from '@mui/icons-material/PinDrop';
import "../styles/Footer.css";

function Footer() {
  return (
    
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Translantic</h3>
          <p>
            Lectus ac pulvinar tincidunt accumsan. Nulla lectus facilis isaclect
            molestie ulamcorper ublandit vulputactus in sit egestas dolor purus
            tincidunt.
          </p>
        </div>
        <div className="footer-menu">
          <h4>Menu</h4>
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>Services</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li>Translation Services</li>
            <li>Legal Translation</li>
            <li>Medical Translation</li>
            <li>Business Translation</li>
            <li>Document Translation</li>
            <li>Professional Translation</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><PinDropIcon/>&nbsp; 4200 Hamill Avenue, San Diego, California</p>
          <p><CallIcon/>&nbsp; 021 3456 789</p>
          <p><EmailIcon/>&nbsp; customer@translantic.com</p>
          <div className="socialMedia">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <hr></hr>
      <p className="footer-bottom">&copy; Copyright 2021 Translantic</p>
    </div>
  );
}

export default Footer;