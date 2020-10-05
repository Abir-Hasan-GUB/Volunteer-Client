import React, { useContext } from 'react';
import logo from '../Images/logos/Logo.png';
import './AddEvent.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';

const userIcon = <FontAwesomeIcon icon={faUserFriends} />
const plusIcon = <FontAwesomeIcon icon={faPlus} />
const AddEvent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleAddEvent = () => {
        var date = document.getElementById('date').value;
        var title = document.getElementById('title').value;
        var textArea = document.getElementById('textArea').value;
        var imgLink = document.getElementById('imgLink').value;
        const newEvent = {name:"allVolunteerSarvice",date: date, sarviceName: title, description: textArea, img: imgLink};

        fetch('http://localhost:5000/addEvent',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newEvent)
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
        })

        date = document.getElementById('date').value = "";
        title = document.getElementById('title').value  = "";
        textArea = document.getElementById('textArea').value  = "";
        imgLink = document.getElementById('imgLink').value  = "";
    }


    return (
        <div className="container volunteerFullDiv">
            <div className="row">
                <div className="col-md-3 volunteerLeft">
                    <div className="Secondlogo divCenter">
                        <Link to="/"><img className="registerLogo" src={logo} alt="logo" /></Link>
                        <div className="registerLink">
                            <Link className="link" to="/VolunteerRegisterList"><h4><span className="userIcon">{userIcon}</span> Volunteer register list</h4></Link>
                            <Link className="link" to="/addEvent"><h5><span>{plusIcon}</span> Add event</h5></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 volunteerRight">
                    <div className="registerListText">
                        <h3>Volunteer register list</h3>
                    </div>
                    <div className="listDivTwo">
                        <div className="row">
                           
                            <div className="col-md-6 fromLeft">
                                <h5>Event Title</h5>
                                <input type="text" placeholder="Enter Title" name="eventTitle" id="title" />
                                <h5>Description</h5>
                                <textarea placeholder="Enter Designation" class="form-control" id="textArea" rows="3"></textarea>
                            </div>
                            <div className="col-md-6 eventRight fromLeft">
                                <h5>Event Date</h5>
                                <input id="date" type="date" name="date" />
                                <h4>image Link</h4>
                                <input type="text" placeholder="Enter Link of IMG" name="" id="imgLink" />
                                
                                <Link to="/addEvent"><Button onClick = {handleAddEvent} className="submitBtn" variant="primary">Submit</Button></Link>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;