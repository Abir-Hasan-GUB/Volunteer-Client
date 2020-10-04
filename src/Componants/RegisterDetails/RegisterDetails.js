import React from 'react';
import MenuSecond from '../MenuSecond/MenuSecond';
import UserActivity from '../RegisterUserActivity/UserActivity';

const RegisterDetails = (props) => {
    return (
        <div className="container">
            <MenuSecond name= {props.name}></MenuSecond>
            <UserActivity></UserActivity>
            
        </div>
    );
};

export default RegisterDetails;