import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import Background from '../assets/images/me.jpg';
import './signup.css'

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8080/auth/signup ', {
        username: formik.values.username,
        email: formik.values.email,
        password: formik.values.password,
        passwordAgain: formik.values.passwordAgain
      });
      console.log('Signup successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };
   
      const formik = useFormik({
        initialValues: {
          username: '',
          email: '',
          password: '',
          passwordAgain: '',
        },
        validate: values => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          if (!values.passwordAgain) {
            errors.passwordAgain = 'Required';
          }
          if (values.password !== values.passwordAgain) {
            errors.passwordAgain = 'Passwords do not match';
          }
          return errors;
        },
        onSubmit: values => {
          // Handle form submission
          // ...
          console.log(values);
        },
      });
    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
      return (
          <div className="signup">
              <img src={Background} alt="background" className="backgroundImage" />
          <div className="signupWrapper">
            <div className="signupLeft">
              <h3 className="signupLogo">Game Search</h3>
              <span className="signupDesc">Connect with friends and the world around you on Game Search.</span>
            </div>
            <div className="signupRight">
              <div className="signupBox">
                <input
                  placeholder="Username"
                  className="signupInput"
                  id="username"
                  {...formik.getFieldProps('username')}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="error">{formik.errors.username}</div>
                ) : null}
                <input
                  placeholder="Email"
                  className="signupInput"
                  id='email'
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="signupInput"
                  id="password"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password Again"
                  className="signupInput"
                  id="passwordAgain"
                  {...formik.getFieldProps('passwordAgain')}
                />
                {formik.touched.passwordAgain && formik.errors.passwordAgain ? (
                  <div className="error">{formik.errors.passwordAgain}</div>
                ) : null}
                <button className="signupButton" onClick={handleSignup}>Sign Up</button>
                <button className="loginRegisterButton" onClick={() => navigate('/login')}>Log intoAccount</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
