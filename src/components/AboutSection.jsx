import React from 'react'
import aboutImage from '../assets/Group.jpg';
import PricingImage from '../assets/pricing.jpg';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-us">
      <div className="container">
        <section className="services-section">
          <div className="service-item">
            <img src={aboutImage} alt="Professional translation team" className="service-image" />
            <div className="service-content">
              <h2>Professional Translation</h2>
              <p>
                Quis egestas felis eu fermentum aducus suscipit quis gravida dolor amet justo in purus integer dui enim vitae vitae congue volutpat tincidunt sed ac non tempor massa ultrices eget.
              </p>
            </div>
          </div>

          <div className="service-item">
            <img src={PricingImage} alt="Team collaboration" className="service-image" />
            <div className="service-content">
              <h2>We Work Quickly & Precisely</h2>
              <p>
                Quis egestas felis eu fermentum aducus suscipit quis gravida dolor amet justo in purus integer dui enim vitae vitae congue volutpat tincidunt sed ac non tempor massa ultrices eget.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutSection