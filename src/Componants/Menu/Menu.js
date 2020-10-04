import React from 'react';
import { Button, Navbar, Nav} from 'react-bootstrap';
import './Menu.css';
import logo from '../Images/logos/Logo.png';

const Menu = () => {
    return (
        <Navbar className="container menubar" expand="lg">
  <Navbar.Brand href="#home">
      <img className="logo" src={logo} alt="logo"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Donation</Nav.Link>
      <Nav.Link href="#home">Event</Nav.Link>
      <Nav.Link href="#link">Blog</Nav.Link>
      <Button className="menu-btn" variant="primary">Admin</Button>
      <Button className="menu-btn" variant="dark">Register</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Menu;