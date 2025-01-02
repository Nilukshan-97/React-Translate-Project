import React from 'react'
import ServicesList from '../components/ServicesList'
import '../styles/ServiceCard.css';


const Services = () => {
  return (
    <div className="service">
      <div className="header">
        <h1>We Focus On Many Industries</h1>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
        making it look like readable English.
        </p>
        <button className="view-all-button">View All Services</button>
      </div>
      
      <ServicesList />
    </div>
  )
}

export default Services