import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../../assets/navigation';

const Signup = () => {
  return (
    <>
    <NavigationBar />

    <Container className="d-flex align-items-center justify-content-center min-vh-10">
      <Row className="justify-content-center">
        <Col xl={12} md={6} lg={4}>
          <div className="bg-white p-4 rounded shadow">
            <h1 className="text-center mb-4">Signup</h1>
            <Form action="/signup" method="post">
              <Form.Group className="mb-3">
                <Form.Label>নাম</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  placeholder="আপনার নাম লিখুন"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>নাম্বার</Form.Label>
                <Form.Control
                  type="text"
                  id="number"
                  name="number"
                  placeholder="মোবাইল নম্বর লিখুন"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>জিমেইল</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  placeholder="আপনার ইমেইল লিখুন"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>পাসওয়ার্ড তৈরী করুন</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  placeholder="পাসওয়ার্ড লিখুন"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="w-100"
              >
                সাইন আপ
              </Button>
            </Form>
            <br />
            <p className="text-center text-muted">
              আপনার পূর্বে কোনো একাউন্ট ছিল? তাহলে <a href="/login" className="text-green-900"><b>লগইন করুন!</b></a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Signup;
