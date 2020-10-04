import { Link } from '@material-ui/core';
import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import logo from '../Images/logos/Logo.png';
import './MenuSecond.css';

const MenuSecond = () => {
    return (
        <Navbar className="container menubar" expand="lg">
  <Navbar.Brand href="/">
            <img className="logo" src={logo} alt="logo"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#link">Donation</Nav.Link>
      <Nav.Link href="#home">Event</Nav.Link>
      <Nav.Link href="#link">Blog</Nav.Link>
     <p className = "activeUser">Active User Name</p>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default MenuSecond;