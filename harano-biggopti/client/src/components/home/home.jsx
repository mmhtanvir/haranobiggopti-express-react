  
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../../assets/navigation';

const Home = () => {
  return (
    <>
      <NavigationBar />
      <div className="container mt-4 text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={4}>
            <Card className="mb-5 shadow-lg">
              <Card.Img
                variant="top"
                src="../images/logo.png"
                alt="image.jpg"
                className="rounded-md"
              />
              <Card.Body className="text-left">
                <Card.Title className="font-weight-bold">sdfgxcvgb</Card.Title>
                <div className="mb-2">
                  <a href="#" className="font-weight-bold text-decoration-none">
                    my name
                  </a>
                </div>
                <div className="mb-2">
                  <a href="/category/person" className="font-weight-bold text-decoration-none">
                    person
                  </a>
                </div>
                <Card.Text className="text-gray-800">
                  <strong>Description</strong>: <br /> rfgbfvbh
                </Card.Text>
                <Card.Text className="text-muted text-xs">
                  <strong>2025-01-17 13:15</strong>
                </Card.Text>
              </Card.Body>
                <span className="badge bg-light text-dark py-1 px-3">
                  #drfgvbtfvtgb
                </span>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;