import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../../assets/navigation';
import AlertDismissible from '../../assets/alert';

const Login = () => {
  return (
    <>
      <NavigationBar />

      <Container className="d-flex align-items-center justify-content-center min-vh-10">
        <Row className="justify-content-center w-75">
          <Col xl={6} md={8} lg={6}>
            <div className="bg-white p-4 rounded shadow">
              {/* Alert above the form */}
              <AlertDismissible />

              <h1 className="text-center mb-4">Login</h1>
              <Form action="/login" method="post">
                <Form.Group className="mb-3">
                  <Form.Label>নাম্বার</Form.Label>
                  <Form.Control
                    type="text"
                    id="number"
                    name="number"
                    placeholder="আপনার মোবাইল নম্বর"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>পাসওয়ার্ড</Form.Label>
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
                  লগইন
                </Button>
              </Form>

              <br />
              <p className="text-center text-muted">
                পূর্বে কোনো একাউন্ট নেই? তাহলে <a href="/signup"><b>খুলে ফেলুন!</b></a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;