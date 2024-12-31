import React from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Button from "./Button";


const ContactForm =() => {
    return(
        <form action="" className="contact-form">
            <h2>Get in Touch!</h2>
            <Input label="Enter your name" type="text"  />
            <Input label="Enter your email" type="mail"  />
            <div className="input">
                <label>Your Message</label>
                <textarea rows="4" placeholder="Enter your message here" className="form-textarea"></textarea>
            </div>
            <Button text={"Submit"} />
        </form>
    )
}

export default ContactForm;