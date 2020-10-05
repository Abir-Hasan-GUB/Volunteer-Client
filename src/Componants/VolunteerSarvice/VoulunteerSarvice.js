import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './VolunteerSarvice.css';
import pic from '../Images/mixedImage/babySit.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const VoulunteerSarvice = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allSarviceList, setAllSarviceList] = useState([]);
    const name = "allVolunteerSarvice";
    useEffect(() => {
        fetch('http://localhost:5000/allSarvice?name='+name)
        .then((response) => response.json())
        .then(data => setAllSarviceList(data))
    },[])

    return (
        <div className="sarvices container row">
            <Link to="/register">
            {
                allSarviceList.map(sarvices =>
                <div className="sarvice-card col-md-3">
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={sarvices.img} />
                    <Card.Footer>
            <strong className="text-muted">{sarvices.sarviceName}</strong>
                    </Card.Footer>
                </Card>
               
                </div>)
            }
            </Link>
        </div>
    );
};

export default VoulunteerSarvice;