import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import Menu from '../Menu/Menu';
import VoulunteerSarvice from '../VolunteerSarvice/VoulunteerSarvice';
import './Home.css';

const Home = () => {
    return (
        <div className="home container">
            <Menu></Menu>
            <h1 className="home-title">I grow by helping people in need.</h1>
            <div className="home-from">
            <Form inline>
      <FormControl type="text" placeholder="Search..." className="mr-sm-2 home-search" />
      <Button className="search-btn">Search</Button>
    </Form>
            </div>
            <div className="sarvices">
                <VoulunteerSarvice></VoulunteerSarvice> 
            </div>
            
        </div>
    );
};

export default Home;