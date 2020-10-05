import React, { useContext } from 'react';
import './Register.css';
import logo from '../Images/logos/Logo.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Register = (props) => {
   
const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleRegistration = () => {
        
        const date = document.getElementById('date').value;
        const description = document.getElementById('description').value;
        const libraryName = document.getElementById('libraryName').value;
        const newRegistration = {...loggedInUser,date: date, description: description, libraryName: libraryName};

        fetch('http://localhost:5000/newRegistration',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newRegistration)
        })
        .then(response => response.json())
        .then(data =>{})

    }

        return (
            <div className="container">
                <Link to="/">
                <div className="login-logo">
                    <img src={logo} alt="" />
                </div>
                </Link>

                <div className="register-panel">
                    <h4>Register as a Volunteer</h4>
                    <form>
                    <input type="text" placeholder="Full Name" value={props.name} name="fullName"  />
                    <input type="email" placeholder="User Name or Email" value={props.email} name="email"  />
                    <input id="date" type="date" name="date" required/>
                    <input type="text" id="description" placeholder="Description" name="description" required />
                    <input type="text" placeholder="Organize books at the library." name="libraryName" id="libraryName" required />
                    <Link to="/registerDetails">
                    <Button onClick={handleRegistration} className="registrationBtn">Registration</Button>
                    </Link>
                    </form>
                </div>
            </div>
        );
    };

    export default Register;