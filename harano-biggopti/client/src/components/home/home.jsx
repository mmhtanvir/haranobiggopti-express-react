import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Axios from 'axios';
import NavigationBar from '../../assets/navigation';

function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:2000/')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <>
      <NavigationBar />
      <Container className="mt-4">
        <Row className="justify-content-center d-flex flex-column align-items-center">
          {posts.length === 0 ? (
            <p>No posts found</p>
          ) : (
            posts.map((post) => (
              <Col xs={12} md={6} lg={4} key={post.id} className="mb-4">
                <Card className="shadow-lg">
                  <Card.Img
                    variant="top"
                    src={`http://localhost:2000/uploads/${post.image}`}
                    alt="Post Image"
                    className="rounded-md"
                  />
                  <Card.Body className="text-left">
                    <Card.Title className="font-weight-bold">{post.title}</Card.Title>
                    <div className="mb-2">
                      <a href="#" className="font-weight-bold text-decoration-none">
                        {post.person_name || 'Anonymous'}
                      </a>
                    </div>
                    <div className="mb-2">
                      <a href={`/category/${post.category}`} className="font-weight-bold text-decoration-none">
                        {post.category}
                      </a>
                    </div>
                    <Card.Text className="text-gray-800">
                      <strong>Description</strong>: <br /> {post.description}
                    </Card.Text>
                    <Card.Text className="text-muted text-xs">
                      <strong>{new Date(post.created_at).toLocaleString()}</strong>
                    </Card.Text>
                  </Card.Body>
                  <span className="badge bg-light text-dark py-1 px-3">
                    {post.tags || 'No tags'}
                  </span>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
}

export default Home;
