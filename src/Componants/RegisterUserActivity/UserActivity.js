import React from 'react';
import './UserActivity.css';
import { Button } from 'react-bootstrap';
import extraVolunteersImg from '../Images/mixedImage/extraVolunteer.png';

const UserActivity = (props) => {

const deleteButton = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(result => {
        console.log("Deleted Successfully !")
    })
}
    console.log(props)
    return (
        <div className="container ">
            <div className="col-md-5 activityDetails row">
                <div className="col-md-4 activityImg">
                    <img src={extraVolunteersImg} alt="" />
                </div>
                <div className="col-md-8 activityText">
                    <h3>{props.name}</h3>
                    <p>{props.date}</p>
                    <Button onClick = {()=>deleteButton(props.id)} variant="secondary" className="cancelBtn">Cancel</Button>
                </div>
            </div>
        </div>
    );
};

export default UserActivity;