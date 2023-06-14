import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import "./style.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [Accounts, setAccounts] = useState([]);

  useEffect(() => {
    getDataFromDb();
  }, []);

  function getDataFromDb() {
    axios.get('http://localhost:8080/api/getAccount')
    .then(function (response) {
      setAccounts(response.data);
      console.log(Accounts)
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    const userData = Accounts.find((user) => user.username === username.value);
    
    if (userData) {
      if (userData.password !== password.value) {

        setErrorMessages({ name: "pass", message: "Invalid password" });
        setIsSubmitted(false);

        username.value = '';
        password.value = '';

      } else {
        
        setIsSubmitted(true);
        event.target.submit(); // manually submit the form

      }
    } else {
      setErrorMessages({ name: "uname", message: "Invalid username" });
      setIsSubmitted(false);

      username.value = '';
      password.value = '';
    }
  };
  
  const [isloggedin, setIsLoggedIn] = useState(false);

  if (isSubmitted) {
    window.localStorage.setItem('isloggedin', 'true');
    setIsLoggedIn(true)
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const navigate = useNavigate();

  const renderForm = (
    <div className="box">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h2>Sign in</h2>
        <div className="inputBox">
          <input type="text" name="username" required />
          <span>Userame</span>
          <i></i>
          {renderErrorMessage("uname")}
        </div>
        <div className="inputBox">
          <input type="password" name="password" required />
          <span>Password</span>
          <i></i>
          {renderErrorMessage("pass")}
        </div>
        <div className="links">
          <a href="#">Forgot Password ?</a>
          <a href="#">Signup</a>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );

  return (
    <div className="login-page">
      <div className="login-form">
        {isloggedin ? (
          <div>
            User is successfully logged in{navigate("/home")}
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Login;
