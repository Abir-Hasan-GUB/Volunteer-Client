import React from 'react';
import './UserActivity.css';
import testImg from '../Images/mixedImage/babySit.png';

const UserActivity = () => {
    return (
        <div className="container row">
            <div className="col-md-6 activityDetails row">
                <div className="col-md-4 activityImg">
                    <img src= {testImg} alt=""/>
                </div>
                <div className="col-md-8 activityText">
                    <h3>Humanity More</h3>
                    <p>29 sep, 2020</p>
                </div>
            </div>
        </div>
    );
};

export default UserActivity;