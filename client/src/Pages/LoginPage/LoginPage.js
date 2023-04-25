import React, { Component, useState } from 'react';
import '../SignupPage/FormStyle.css';
import LoginInputs from './LoginInputs';
import LoginHeading from './LoginHeading';
import axios from 'axios';
import SignupPage from '../SignupPage/SignupPage';


const LoginPage = () => {
  const [values, setValues] = useState({
    username:"",
    password:""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,14}$",
      errorMessage: "Username should be 3-14 characters and include at least 1 letter and 1 number",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "text",
      placeholder: "Password",
      label: "password",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$#^&.*])[A-Za-z\\d$#^&.*]{5,}$",
      errorMessage: "Password should have at least 5 characters and should include at least both lowercase and uppercase letter, 1 number, and 1 special character",
      required: true
    }
  ];

  const onChange = (e) => {
    
    setValues({...values, [e.target.name]: e.target.value});
    
  };

  console.log(values);

  
  const handleSubmit = async (e) => {
    e.preventDefault();  
    const response = await axios.post("http://localhost:3001/login", values);

    
  };

  return (
    
    <div className='main'>
      <div className='formHeading'>
        <LoginHeading />
        <hr />
      </div>
      
      <div className='formInputs'>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <LoginInputs 
              key={input.id} 
              {...input} 
              value={values[input.name]}
              onChange={onChange}  
            />
          ))}
          
          <button id='submit'>Submit</button>
        </form>
      </div>
      <div className='login-button'>
        Haven't Signed up?
        <a href={SignupPage}>Sign up Here</a>
      </div>
    </div>
  );
};

export default LoginPage;