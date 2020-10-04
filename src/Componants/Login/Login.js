import React from 'react';
import './Login.css';
import logo from '../Images/logos/Logo.png';
import google from '../Images/logos/google.png';

const Login = () => {
    return (
        <div className="container">
            <div className="login-logo">
            <img src= {logo} alt=""/>
            </div>
            
            <div className="login-panel">
                <div className="login-content">
                    <h4>Login With</h4>
                    <div className="google">
                        <img src= { google } alt="google icon"/>
                        <span className = "googleText">Continue with Google</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;