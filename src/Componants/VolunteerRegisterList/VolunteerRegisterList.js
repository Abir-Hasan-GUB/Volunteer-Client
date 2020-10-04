import React from 'react';
import './VolunteerRegisterList.css';
import logo from '../Images/logos/Logo.png';
import ActivityUserList from '../ActivityUserList/ActivityUserList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends,faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const userIcon = <FontAwesomeIcon icon={faUserFriends} />
const plusIcon = <FontAwesomeIcon icon={faPlus} />

const VolunteerRegisterList = () => {
    return (
        <div className="container volunteerFullDiv">
            <div className="row">
            <div className="col-md-3 volunteerLeft">
                <div className="Secondlogo divCenter">
                <Link to="/"><img className ="registerLogo" src={logo} alt="logo"/></Link>
                <div className="registerLink">
    <Link className = "link" to="/VolunteerRegisterList"><h4><span className="userIcon">{userIcon}</span> Volunteer register list</h4></Link>
    <Link className = "link" to="/addEvent"><h5><span>{plusIcon}</span> Add event</h5></Link>
                </div>
                </div>
            </div>
            <div className="col-md-9 volunteerRight">
                <div className="registerListText">
                    <h3>Volunteer register list</h3>
                </div>
                <div className="listDiv">
                    <div className="coloumnName">
                        <div className="row">
                            <div className="col-md-3">
                                <span>Name</span>
                            </div>
                            <div className="col-md-3">
                                <span>Email ID</span>
                            </div>
                            <div className="col-md-2">
                                <span>Reg. Date</span>
                            </div>
                            <div className="col-md-3">
                                <span>Volunteer List</span>
                            </div>
                            <div className="col-md-1">
                                <span className ="action">Action</span>
                            </div>
                        </div>
                        <div className="allList">
                            <ActivityUserList></ActivityUserList>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default VolunteerRegisterList;