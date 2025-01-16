import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
return (
<footer className="bg-dark text-white py-4 mt-5">
    <Row>
        <Col md={6}>
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        </Col>
        <Col md={6} className="text-md-right">
        <p>Follow us on:
            <a href="https://www.facebook.com" className="text-white ml-2">Facebook</a> | 
            <a href="https://www.twitter.com" className="text-white ml-2">Twitter</a> | 
            <a href="https://www.instagram.com" className="text-white ml-2">Instagram</a>
        </p>
        </Col>
    </Row>
</footer>
);
};

export default Footer;