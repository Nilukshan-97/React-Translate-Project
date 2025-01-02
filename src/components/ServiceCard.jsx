import React from 'react';
import '../styles/ServiceCard.css';
import Button from './Button';

const ServiceCard = ({ title, description, Icon }) => {
  return (
    <div className="service-card">
    <ul>
        <li>
            <div className="icon">
                <Icon style={{ fontSize: 40, color: '#007bff' }} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="b-more">More details</button>
        </li>
    </ul>
    </div>
  );
};

export default ServiceCard;