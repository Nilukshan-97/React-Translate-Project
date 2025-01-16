import React from 'react';
import '../styles/FeatureCard.css';

const FeatureCard = ({ icon: Icon, title, description, bgColor }) => {
  return (
    <div className="feature-card" style={{ backgroundColor: bgColor }}>
      <Icon className="feature-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;