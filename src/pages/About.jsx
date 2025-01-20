import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import '../styles/AboutUs.css';
import aboutImage from '../assets/about.jpg';
import PricingImage from '../assets/pricing.jpg';
import AboutSection from '../components/AboutSection';
import CustomerFeedback from '../components/CustomerFeedback';

const About = () => {
  return (
    <div className="about-us">
      <div className="container">
        <section className="about-section">
          <div className="about-content">
            <h1>About Translantic</h1>
            <p>
              Quis egestas felis eu fermentum aducus suscipit quis gravida dolor
              amet justo in purus integer dui enim vitae vitae congue volutpat
              tincidunt sed ac non tempor massa ultrices eget.
            </p>
            <p>
              Quis egestas felis eu fermentum aducus suscipit quis gravida dolor
              amet justo in purus integer dui enim vitae vitae congue volutpat
              tincidunt sed ac non tempor massa ultrices eget.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
          <div className="about-images">
            <img src={aboutImage} alt="Team meeting in progress" className="image" />
          </div>
        </section>

        <AboutSection/>

      </div>

      <div>
        <CustomerFeedback/>
        <WhyChooseUs/>
      </div>
    </div>

    
  );
};

export default About;