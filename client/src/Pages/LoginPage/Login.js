import React, { useContext, useEffect, useState } from 'react';
import '../SignupPage/FormStyle.css';
import LoginInputs from './LoginInputs';
import LoginHeading from './LoginHeading';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { h1 } from 'fontawesome';

const Login = () => {
  const [values, setValues] = useState({
    username:"",
    password:""
  });
  const [isLogin, setIsLogin] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,14}$",
      errorMessage: "Username is invalid",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "password",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$#^&.*])[A-Za-z\\d$#^&.*]{5,}$",
      errorMessage: "Password is invalid",
      required: true
    }
  ];

  const onChange = (e) => {
    
    setValues({...values, [e.target.name]: e.target.value});
    
  };
  
  // This is just a test
  const [users, isUsers] = useState([{
    username: '',
    password: ''
  }])
  useEffect(() => {
    fetch("/userdatas").then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => isUsers(jsonRes));
  })
  const navigate = useNavigate();
  const verifyUser = (e) => {
    e.preventDefault();
    const user = users.find(user => users.username === values.username && users.password === values.password);
    if(user){
      navigate('.../HomePage.js');
    }else{
      console.log("username or password not found.");
    }
  }
  // This is the end of just a test

  

  const handleSubmit = async (e) => {
    e.preventDefault();  

    const loginUser = {
      username: values.username,
      password: values.password
    };

    // const response = await axios.post("http://localhost:3001/login", values);
    await axios.post(`http://localhost:3001/login`, loginUser);

    // console.log("after fetch");
    // setIsLogin(true);
    // localStorage.setItem('token', response.data.token);
    verifyUser();
    
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
          {isLogin && <p>Login successfully</p>}
        </form>
      </div>
      <div className='login-button'>
        Haven't Signed up? <br />
        <Link id='userLink' to='../SignupPage'>Signup</Link>
      </div>
      {/* <div>
        {users.map(note => 
        <div>
          <h1>{note.username}</h1>
          <h2>{note.password}</h2>
        </div>
      )}
      </div> */}
    </div>
  );
};

export default Login;