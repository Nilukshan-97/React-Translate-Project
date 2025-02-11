import React from 'react'
import "../styles/Pricing.css"
import PricingSection from '../components/PricingSection'

const Pricing = () => {
  return (
    <div>
    <div className="header-p">
      <div>
      <h1>Pricing Plan</h1>
      <h4>Flexible Plan & Pricing</h4>
      <p>
        Quizzes, please, I am still admiring the quizzes and the weight of the dollar.
      </p>
      </div>
      <div className="cards">
        <PricingSection />
      </div>
    </div>
  </div>
  )
}

export default Pricing