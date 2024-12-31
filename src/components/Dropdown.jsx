import React from "react";

const Dropdown = ({label, options}) => {
    return (
        <div className="dropdown">
            <label>{label}</label>
            <select>
                {options.map((options,index) => (
                    <option key={index} value ={options}>
                        {options}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown;