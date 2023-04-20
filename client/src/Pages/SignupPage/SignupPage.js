import React, { useState } from 'react';
import './FormStyle.css';
// import LoginPage from "./LoginPage";


export default function SignupPage() {

  const [errorMessage, setErrorMessage] = useState("");

  const signup = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const age = parseInt(document.getElementById("age").value);
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm-password").value;

    // Check if all fields are valid
    let isValid = true;
    const userRegex = /[\d+\w]+/; 
    if (!userRegex.test(username)) {
      setErrorMessage("Username must include at least 1 letter follow by 1 number, and must not exceed 12 characters.");
      isValid = false;
    }
    if (age < 18) {
      setErrorMessage("You must be at least 18 years old to sign up.");
      isValid = false;
    }
    if (password !== confirm_password) {
      setErrorMessage("Passwords do not match.");
      isValid = false;
    }
    if (isValid) {
      const userData = {
        username: username,
        age: age,
        password: password
      };
      localStorage.setItem(username, JSON.stringify(userData));
      setErrorMessage("");
      window.location.href = '/LoginPage'; // Redirect to login page
    }
  };

  return (
    <div className="form">
      <div className="form-title">
        <h1>Sign Up</h1>
        <p>Fill in the following to sign up!</p>
      </div>
      <hr />
      <div className="form-input">
        <form id="signup-form">
          <label>
            Username:
            <input type="text" id="username" required /><br />
            <span id="user-detail">
              Username must include at least
              1 letter and 1 number. No more than 12 characters.
            </span>
            <span className="error-message">{errorMessage}</span>
          </label>
          <br />
          <label>
            Age:
            <input type="number" id="age" required /><br />
            Numbers only
            <span className="error-message">{errorMessage}</span>
          </label>
          <br />
          <label>
            Password:
            <input type="password" id="password" required />
            <span className="error-message">{errorMessage}</span>
          </label>
          <br />
          <label>
            Confirm Password:
            <input type="password" id="confirm-password" required />
            <span className="error-message">{errorMessage}</span>
          </label>
          <br />
          <button id="submit" onClick={signup}>Submit</button>
        </form>
      </div>
    </div>
  )
}
