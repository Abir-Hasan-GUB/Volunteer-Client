import React from 'react';
import './Register.css';
import logo from '../Images/logos/Logo.png';
import { Button } from 'react-bootstrap';

const Register = () => {
   
        return (
            <div className="container">
                <div className="login-logo">
                    <img src={logo} alt="" />
                </div>

                <div className="register-panel">
                    <h4>Register as a Volunteer</h4>
                    <input type="text" placeholder="Full Name" name="fullName" id="" />
                    <input type="email" placeholder="User Name or Email" name="email" id="" />
                    <input type="date" name="date"/>
                    <input type="text" placeholder="Description" name="description" id="" />
                    <input type="text" placeholder="Organize books at the library." name="libraryName" id="" />
                    <Button className="registrationBtn">Registration</Button>
                </div>
            </div>
        );
    };

    export default Register;