import React from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Button from "./Button";

const Form =() => {
    return(
        <form action="" className="translation-form">
            <h2>Get Your Translation Here!</h2>
            <p>Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. </p>
            <Dropdown label={"Translate From"} options = {['French', 'Tamil', 'English']} />
            <Dropdown label={"Translate To"} options = {['English', 'Tamil', 'French']} />
            <Dropdown label={"Select Service"} options={['Document Translation', 'Medical Translation']} />
            <Input label="Number of words" type="number" />
            <Button text={"Get Started"} />
        </form>
    )
}

export default Form;