import React from "react";
import Form from "../components/Form";
import "../styles/Home.css";


const Home = () => {
    return(
        <section className="hero">
            <div className="hero-left">
                <h1>Professional Translation at your finger tips</h1>
                <p>Satisfied conveying an dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do mr prevailed. </p>
                <button className="btn">Our Services</button>
            </div>

            <div className="hero-right">
               <Form /> 
            </div>
        </section>
    )
}

export default Home;