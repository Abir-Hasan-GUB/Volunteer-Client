import React from 'react';
import { Button, Navbar, Nav} from 'react-bootstrap';
import './Menu.css';
import logo from '../Images/logos/Logo.png';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <Navbar className="container menubar" expand="lg">
  <Navbar.Brand href="#">
            <img className="logo" src={logo} alt="logo"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#link">Donation</Nav.Link>
      <Nav.Link href="#home">Event</Nav.Link>
      <Nav.Link href="#link">Blog</Nav.Link>
      <Link to="/addEvent"><Button className="menu-btn" variant="primary">Admin</Button></Link>
      <Link to="/register"><Button className="menu-btn" variant="dark">Register</Button></Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Menu;