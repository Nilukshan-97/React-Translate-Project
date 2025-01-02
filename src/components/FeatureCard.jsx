import React from 'react';
import '../styles/FeatureCard.css';

const FeatureCard = ({ icon: Icon, title, description, bgColor }) => {
  return (
    <div className="feature-card">
      <div className="icon">
        <Icon />
      </div>
      <h3>{title}</h3>
      <h6>{description}</h6>
    </div>
  );
};

export default FeatureCard;