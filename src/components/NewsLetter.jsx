import React from 'react';
import '../styles/NewsLetter.css';
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo3 from '../assets/logo3.png';
import EmailIcon from '@mui/icons-material/Email';

const Newsletter = () => {
  return (
    <div className="translation-section">
      <div className="content">
        <h4 className="sub-heading">TRANSLATORS</h4>
        <h1 className="main-heading">150+ Professional Translators</h1>
        <p className="description">
          Quis egestas felis eu fermentum ad arcu suscipit quis ut gravida dolor amet justo. 
          In purus integer dui enim vitae vitae congue volutpat tincidunt sed ac non tempor 
          massa ultricies eget.
        </p>
        <button className="request-btn">Request a Translation  <span> &gt; </span></button>
        <div className="trusted-by">
          <p>TRUST BY:</p>
          <div className="logos">
            <img src={Logo1} alt="Logo 1" />
            <img src={Logo2} alt="Logo 2" />
            <img src={Logo3} alt="Logo 3" />
            <img src={Logo1} alt="Logo 4" />
          </div>
        </div>
      </div>
      <div className="newsForm">
      <div className="newsletter">
        <h3>Join Our Newsletter</h3>
        <p className="newsletter-description">
          Suspendisse morbi mauris gravida tellus integer ucibus tellus inut condimentum blandit mus auctor nulla.
        </p>
        <input type="email" placeholder="Enter your email address" className="email-input" />
        <button className="subscribe-btn">Subscribe Now <span> <EmailIcon/> </span></button>
      </div>
      </div>
    </div>
  );
};

export default Newsletter;
