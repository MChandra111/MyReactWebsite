import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactDOM from "react-dom";

import "./App.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
      email: "user1@gmail.com"
    },
    {
      username: "user2",
      password: "pass2",
      email: "user2@gmail.com"
    }
  ];

  const errors = {
    uname: "Invalid Username",
    pass: "Invalid Password"
  }

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const signup = (event) => {
    var signupname = prompt('Please enter your username','John Doe');
    var check = database.find((user) => user.username === signupname);
    while(check){
      signupname = prompt('This username already exists','John Doe');
      check = database.find((user) => user.username === signupname);
    }
    while(!signupname){
      signupname = prompt('Username cannot be empty','John Doe');
    }
    var signupemail = prompt('Please enter your email');
    while(!signupemail){
      signupemail = prompt('Username cannot be empty','John Doe');
    }
    var signuppassword = prompt('Please enter your password');
    while(!signuppassword){
      signuppassword = prompt('Username cannot be empty','John Doe');
    }
    var verify = prompt('Please verify your password');
    while(verify != signuppassword){
      signuppassword = prompt('Your passwords did not match, please re-enter your password');
      verify = prompt('Please verify your password');
    }

    database.push(
    {
      username: signupname,
      password: signuppassword,
      email: signupemail,
    });
  }

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" placeholder="Enter Username" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" placeholder="Enter Password" required />
          {renderErrorMessage("pass")}
        </div>
        <div className = "button-container">
          <input type="submit" />
        </div>
      </form>

      {//Sign Up
      }<div class="signupbtn">
        <button class="btn" onClick={signup}>
        Sign Up
        </button>
      </div>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App