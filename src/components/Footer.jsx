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
        <div className="footer-left">
          <div className="socialMedia">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div className="footer-right">
          <div className="details">
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
        </div>
        <p className="footer-bottom">&copy; 2024 Translatic</p>
      </div>
    );
  }
  
  export default Footer;