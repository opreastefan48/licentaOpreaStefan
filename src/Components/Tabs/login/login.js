import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

import './style.css';

function Login() {
  const [Accounts, setAccounts] = useState([]);

  useEffect(() => {
    getDataFromDb();
  }, []);

  function getDataFromDb() {
    axios.get('https://licentastefanoprea.onrender.com/api/getAccount/').then(function (response) {
      setAccounts(response.data);
    });
  }

  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('isloggedin', 'true');
    navigate('/home');
    
    toast.success('Logged in successfully!');
    window.location.reload();

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    let userData = null;

    for (const user of Accounts) {
      if (user.username === username.value) {
        userData = user;
        break;
      }
    }

    if (userData) {
      if (userData.password !== password.value) {
        username.value = '';
        password.value = '';
        toast.error('Wrong password');
      } else {
        toast.promise(
          new Promise((resolve) => {
            handleLogin();
            resolve();
          }),
          {
            loading: 'Logging in...',
            error: 'Failed to log in',
          }
        );
      }
    } else {
      username.value = '';
      password.value = '';
      toast.error('Account not found');
    }
  };

  const renderForm = (
    <div className="login-box">
      <p>Login</p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="user-box">
          <input type="text" name="username" required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required />
          <label>Password</label>
        </div>
        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );

  return (
    <div className="bg-color">
      <Toaster position="top-center" reverseOrder={true} />
      <div className="login-page">
        {localStorage.getItem('isloggedin') === 'true' ? (
          <div>
            {navigate('/licentaOpreaStefan/#/home')}
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Login;
