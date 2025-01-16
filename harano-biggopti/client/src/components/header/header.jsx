import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = () => {
return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className='justify-content-end'>
            <Nav className="mx-5">
                <Nav.Link href="/" className="text-white"><b>Home</b></Nav.Link>
                <Nav.Link href="/" className="text-white"><b>About</b></Nav.Link>
                <Nav.Link href="/create_posts" className="text-white"><b>Posts</b></Nav.Link>
                <Nav.Link href="/logout" className="text-white"><b>Logout</b></Nav.Link>
                <Nav.Link href="/login" className="text-white"><b>Login/Signup</b></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;