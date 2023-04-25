import React, { Component, useState } from 'react';
import './FormStyle.css';

const SignupInputs = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, onChange, errorMessage, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    };
    
    return (
        <div classname='signup-input'>
            {/* <label classname='signup-label'>{label}</label><br /> */}
            <input 
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={()=>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <br /><span>{errorMessage}</span>
        </div>
    );
};

export default SignupInputs;