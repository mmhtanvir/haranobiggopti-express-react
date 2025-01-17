import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="mx-auto">
        <Navbar.Brand href="/">
          <img src="../images/logo.png" alt="Logo" width="150px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="/" active>
                <b>Home</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                <b>About</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/create_posts">
                <b>Posts</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/logout">
                <b>Logout</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">
                <b>Login/Signup</b>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
