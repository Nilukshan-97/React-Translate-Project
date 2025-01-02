import React from 'react'
import WhyChooseUs from '../components/WhyChooseUs'
import "../styles/AboutUs.css"; 

const About = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        We are dedicated to providing top-notch services to our clients. With a team of experienced
        professionals, we strive to deliver exceptional customer service, guaranteed satisfaction, and timely solutions.
      </p>

      <div>
        <WhyChooseUs/>
      </div>
    </div>
  )
}

export default About