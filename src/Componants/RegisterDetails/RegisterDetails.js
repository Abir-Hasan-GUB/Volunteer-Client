import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import MenuSecond from '../MenuSecond/MenuSecond';
import UserActivity from '../RegisterUserActivity/UserActivity';

const RegisterDetails = (props) => {
    const [allRegisteredData,setAllRegisteredData] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [imge,setImage] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allRegistration?email='+loggedInUser.email)
        .then(response => response.json())
        .then(data => setAllRegisteredData(data))
    },[])

//get image
// const name = "sarviceName";
//     useEffect(() => {
//         fetch('http://localhost:5000/allVolunteerSarvice?name='+name)
//         .then(response => response.json())
//         .then(data => setImage(data))
//     },[])

//     console.log(imge[0].img)
    
    return (
        <div className="container">
            <MenuSecond name= {props.name}></MenuSecond>
    <h1>Booking Length: {allRegisteredData.length}</h1>
            {
                allRegisteredData.map((data) =><UserActivity name = {data.name} date = {data.date}></UserActivity>)
            }
            
        </div>
    );
};

export default RegisterDetails;