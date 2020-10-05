import React from 'react';
import './UserActivity.css';
import { Button } from 'react-bootstrap';

const UserActivity = (props) => {
    console.log(props)
    return (
        <div className="container row">
            <div className="col-md-5 activityDetails row">
                <div className="col-md-4 activityImg">
                    <img src={props.img} alt="" />
                </div>
                <div className="col-md-8 activityText">
                    <h3>{props.name}</h3>
                    <p>{props.date}</p>
                    <Button variant="secondary" className="cancelBtn">Cancel</Button>
                </div>
            </div>
        </div>
    );
};

export default UserActivity;