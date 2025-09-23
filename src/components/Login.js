import React from "react";
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      
      <header className="login-header">
        <div className="company-name">Escapio</div>
      </header>

      <div className="login-left">
        <div className="left-content">
          <h1>Wander Beyond Limits</h1>
          <p>Your gateway to hidden gems and iconic escapes</p>
          <span>Start your journey today and explore the extraordinary</span>
        </div>
      </div>

      <div className="login-right">
        <form className="login-form">
          <h2>Welcome Back!</h2>
          <p>Enter your email and password</p>

          <label>Email address</label>
          <input type="email" placeholder="Enter your email address" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <a href="/home" className="forgot-link">Forgot Password?</a>

          <button type="submit" className="sign-in-btn">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

