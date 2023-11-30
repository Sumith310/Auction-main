import React, { useState } from 'react';
import "../style/LoginStyles.css";

import LogonImage from "../images/logss.jfif"
import Layout from '../components/Layout/Layout';

function Login({ handleLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    handleLogin(formData);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    
    console.log('Register data:', formData);
  };

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <>
    <Layout showFooter={true}>
    <div className='login-containery'>

      <img src={LogonImage} alt="Logo" className="logon-image" /> {/* Add the logo image */}
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        {/* Login form fields */}
        <div className='form-group'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p className="register-p">
          Don't have an account?{' '}
          
          <button type="button" onClick={toggleRegisterForm}>
            Register
          </button>
        </p>
      </form>
      <br/>
      <br/>

      {showRegisterForm && (
        <div className='grp'>
          <h2>Register</h2>
          <form onSubmit={handleRegisterSubmit}>
            {/* Register form fields */}
            <div className='form-group'>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
    </Layout>
    </>
  );
}

export default Login;
