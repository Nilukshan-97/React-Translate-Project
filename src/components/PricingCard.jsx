import React from "react";
import "../styles/PricingCard.css";

const PricingCard = ({ title, price, features, popular }) => {
  return (
    <div className={`pricing-card ${popular ? "popular" : ""}`}>
      <h3>{title}</h3>
      <p className="price">${price} / Per Language</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Select Plan</button>
    </div>
  );
};

export default PricingCard;