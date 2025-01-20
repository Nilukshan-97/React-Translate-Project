import React from 'react'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import '../styles/CustomerFeedback.css';

const CustomerFeedback = () => {

    const testimonials = [
        {
          name: "Mark Grant",
          role: "Project Manager",
          photo: user1, 
          text: "Augue sed viverra nulla interdum miabibendum lrisus iuctum tincidunt It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        },
        {
          name: "Jesse Doyle",
          role: "Project Manager",
          photo: user2, 
          text: "Augue sed viverra nulla interdum miabibendum lrisus iuctum tincidunt It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          name: "Shay Harper",
          role: "Project Manager",
          photo: user3, 
          text: "Augue sed viverra nulla interdum miabibendum lrisus iuctum tincidunt It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
      ];


  return (
    <div className="testimonials-section">
        <div className="header">
            <h5 className='c-subtitle'>TESTMONIALS</h5>
            <h1>What Our Customers Say</h1>
            <p>
                Quis egestas felis eu fermentum ad arcu suscipit quis ut gravida dolor amet justo. 
                In purus integer dui enim vitae vitae congue volutpat tincidunt sed ac non tempor massa.
            </p>
            <button className="button">Start Translating Now <span>&gt;</span></button>
        </div>
        <div className="testimonial-cards">
            {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
                <div className="quote">
                    <FormatQuoteIcon className='quote-icon'/>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
                <h4>{testimonial.name}</h4>
                <p className="testimonial-role">{testimonial.role}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default CustomerFeedback