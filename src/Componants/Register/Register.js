import React from 'react';
import './Register.css';
import logo from '../Images/logos/Logo.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = (props) => {
   console.log(props);
        return (
            <div className="container">
                <Link to="/">
                <div className="login-logo">
                    <img src={logo} alt="" />
                </div>
                </Link>

                <div className="register-panel">
                    <h4>Register as a Volunteer</h4>
                    <input type="text" placeholder="Full Name" value={props.name} name="fullName" id="" />
                    <input type="email" placeholder="User Name or Email" value={props.email} name="email" id="" />
                    <input type="date" name="date"/>
                    <input type="text" placeholder="Description" name="description" id="" />
                    <input type="text" placeholder="Organize books at the library." name="libraryName" id="" />
                    <Link to="/registerDetails">
                    <Button className="registrationBtn">Registration</Button>
                    </Link>
                </div>
            </div>
        );
    };

    export default Register;