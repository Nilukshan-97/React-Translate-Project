import React from 'react';
import '../styles/ServiceCard.css';
import aboutImage from "../assets/about.jpg";
import PricingImage from "../assets/pricing.jpg";

import GTranslateIcon from '@mui/icons-material/GTranslate';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';

const Services = () => {
  const services = [
    { title: "Translation Service", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", Icon: GTranslateIcon },
    { title: "Business Translation", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", Icon: BusinessCenterIcon },
    { title: "Legal Translation", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", Icon: GavelIcon },
    { title: "Medical Translation", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", Icon: LocalHospitalIcon },
    { title: "Document Translation", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", Icon: DescriptionIcon },
    { title: "Professional Translation", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", Icon: SchoolIcon },
  ];

  return (
    <div className="services">
      <div className="header">
        <h1>We Focus On Many Industries</h1>
        <p>
          Quis egestas felis eu fermentum ad arcu suscipit quis ut gravida dolor amet justo. 
          In purus integer dui enim vitae vitae congue volutpat tincidunt sed ac non tempor massa.
        </p>
        <button className="view-all-button">View All Services</button>
      </div>

      <div className="services-container">
       
        <div className="images-section">
          <img src={aboutImage} alt="Service Industry" className="service-image" />
          <img src={PricingImage} alt="Pricing Plans" className="service-image" />
        </div>

        
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="icon"><service.Icon /></span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;