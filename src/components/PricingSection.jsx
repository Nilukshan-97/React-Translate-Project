import React from "react";
import PricingCard from "./PricingCard";
import "../styles/PricingSection.css";

const PricingSection = () => {
  const plans = [
    {
      title: "Basic",
      price: 29,
      features: [
        "support for a single language.",
        "translation for simple sentences.",
        "Basic translation of websites.",
        "Limited access to glossary",
        "Basic email and text translation."
      ],
    },
    {
      title: "Pro",
      price: 49,
      features: [
        "support for a single language.",
        "translation for simple sentences.",
        "Basic translation of websites.",
        "Limited access to glossary",
        "Basic email and text translation."
      ],
      popular: true,
    },
    {
      title: "Enterprise",
      price: 129,
      features: [
        "support for a single language.",
        "translation for simple sentences.",
        "Basic translation of websites.",
        "Limited access to glossary",
        "Basic email and text translation."
      ],
    },
  ];

  return (
    <section className="pricing-section">
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </section>
  );
};

export default PricingSection;