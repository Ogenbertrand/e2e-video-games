import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import Background from '../assets/images/me.jpg';
import './login.css';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Required';
      }
      return errors;
    },
    onSubmit: values => {
      try {
        const response = axios.post('http://localhost:8080/auth/login', values);
        const data = response.data;

        if (data === 'Login successful!') {
          navigate('/App');
        } else {
          formik.setFieldError('email', 'Invalid email or password');
        }
      } catch (error) {
        console.error(error);
      }
    }
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="login">
      <div class="backgroundImage animateBackground"></div>
      <img src={Background} alt="background" className="backgroundImage" />
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Game Search</h3>
          <span className="loginDesc">Connect with friends and the world around you on Game Search.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              type="text"
              placeholder="Email"
              className="loginInput"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && <div className="error">{formik.errors.email}</div>}
            <div className="passwordContainer">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="loginInput"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
               <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="eyeIcon" onClick={togglePasswordVisibility} />
            </div>
            {formik.errors.password && formik.touched.password && <div className="error">{formik.errors.password}</div>}
            <button className="loginButton" onClick={formik.handleSubmit}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <span className="loginForgot" onClick={handleRegister}>
              Log in
            </span>
            <button className="loginRegisterButton" onClick={handleRegister}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}