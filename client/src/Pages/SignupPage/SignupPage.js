import React, { Component, useState, useHistory } from 'react';
import './FormStyle.css';
import SignupInputs from './SignupInputs';
import SignupHeading from './SignupHeading';
import axios from 'axios';

const SignupPage = () => {
  const [values, setValues] = useState({
    username:"",
    age:"",
    password:"",
    securityquestion:""
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
      name: "age",
      type: "text",
      placeholder: "Age",
      label: "Age",
      pattern: "^(1[89]|[2-9]\\d)$",
      errorMessage: "User should be at least 18 years old",
      required: true
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Password",
      label: "password",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$#^&.*])[A-Za-z\\d$#^&.*]{5,}$",
      errorMessage: "Password should have at least 5 characters and should include at least both lowercase and uppercase letter, 1 number, and 1 special character",
      required: true
    },
    {
      id: 4,
      name: "security question",
      type: "text",
      placeholder: "What is your favorite number? (No more than 10 digits)",
      label: "security question",
      pattern: "^[0-9]{0,10}$",
      errorMessage: "No more than 10 digits",
      required: true
    }
  ];

  const onChange = (e) => {
    
    setValues({...values, [e.target.name]: e.target.value});
    
  };

  console.log(values);

   
  const handleSubmit = async (e) => {
    e.preventDefault();  
    
    const newUser = {
      username: values.username,
      age: values.age,
      password: values.password,
      securityquestion: values.securityquestion
    };
    
    await axios.post('http://localhost:3001/createUser', newUser)
    
  };

  return (
    <div className='main'>
      <div className='formHeading'>
        <SignupHeading />
        <hr />
      </div>
      
      <div className='formInputs'>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <SignupInputs 
              key={input.id} 
              {...input} 
              value={values[input.name]}
              onChange={onChange}  
            />
          ))}
          
          <button id='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;