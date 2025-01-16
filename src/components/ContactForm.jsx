import React from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Button from "./Button";


const ContactForm =() => {
    return(
        <form action="" className="contact-form">
            <div className="contact-head">
                <h1>Translatic</h1>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
            </div>
            <div className="contact-body">
                <h2>Get in Touch!</h2>
                <Input label="Enter your name" type="text"  placeholder="Enter your message here"/>
                <Input label="Enter your email" type="mail"  />
                <div className="input">
                    <label>Your Message</label>
                    <textarea rows="4" placeholder="Enter your message here" className="form-textarea"></textarea>
                </div>
                <Button text={"Submit"} />
            </div>
        </form>
    )
}

export default ContactForm;