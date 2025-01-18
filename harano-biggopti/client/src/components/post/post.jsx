import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../../assets/navigation';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LostAndFoundForm() {
  const [category, setCategory] = useState('');
  const [animal, setAnimal] = useState('');
  const [govtPaperType, setGovtPaperType] = useState('');
  const [certificateType, setCertificateType] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState('');

  const navigate = useNavigate();

  const toggleFields = (e) => {
    setCategory(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitForm = (event) => {
    event.preventDefault();

    // Create FormData instance to send multipart data including image
    const formData = new FormData();
    formData.append('category', category);
    formData.append('animal', animal);
    formData.append('govtPaperType', govtPaperType);
    formData.append('certificateType', certificateType);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('status', status);
    formData.append('securityQuestion', securityQuestion);
    formData.append('securityAnswer', securityAnswer);
    formData.append('image', image);
    formData.append('tags', tags);

    Axios.post('http://localhost:2000/create_posts', formData, {
    })
      .then((response) => {
        console.log('Form submitted successfully:', response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <>
      <NavigationBar />
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg p-4">
              <Card.Body>
                <h2 className="text-center mb-4">Lost and Found Form</h2>
                <Form onSubmit={submitForm} encType="multipart/form-data">
                  <Form.Group controlId="title" className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter a title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="category" className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      as="select"
                      value={category}
                      onChange={toggleFields}
                    >
                      <option value="">Select a category</option>
                      <option value="person">Person</option>
                      <option value="pet">Pet</option>
                      <option value="govt_paper_type">Government Papers</option>
                      <option value="certificate_type">Certificate</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="description" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Row>
                      <Col>
                        <Form.Check
                          type="radio"
                          label="Found"
                          name="status"
                          value="found"
                          onChange={(e) => setStatus(e.target.value)}
                        />
                      </Col>
                      <Col>
                        <Form.Check
                          type="radio"
                          label="Lost"
                          name="status"
                          value="lost"
                          onChange={(e) => setStatus(e.target.value)}
                        />
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group controlId="security_question" className="mb-3">
                    <Form.Label>Security Question</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Create a security question"
                      value={securityQuestion}
                      onChange={(e) => setSecurityQuestion(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="security_answer" className="mb-3">
                    <Form.Label>Answer of your question</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the answer"
                      value={securityAnswer}
                      onChange={(e) => setSecurityAnswer(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="image" className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="file"
                      name="pic"
                      onChange={handleImageChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="tags" className="mb-3">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter tags (comma-separated)"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </Form.Group>

                  {/* Conditional Fields for "person" category */}
                  {category === 'person' && (
                    <>
                      <Form.Group controlId="person_name" className="mb-3">
                        <Form.Label>Person's Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter person's name"
                        />
                      </Form.Group>

                      <Form.Group controlId="person_age" className="mb-3">
                        <Form.Label>Person's Age</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter person's age"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Gender</Form.Label>
                        <Row>
                          <Col>
                            <Form.Check
                              type="radio"
                              label="Male"
                              name="gender"
                              value="Male"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              type="radio"
                              label="Female"
                              name="gender"
                              value="Female"
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                    </>
                  )}

                  {/* Conditional Fields for "pet" category */}
                  {category === 'pet' && (
                    <Form.Group controlId="animal" className="mb-3">
                      <Form.Label>What kind of animal?</Form.Label>
                      <Form.Control
                        as="select"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                      >
                        <option value="">Select an animal</option>
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                        <option value="Parrot">Parrot</option>
                        <option value="others">Others</option>
                      </Form.Control>
                    </Form.Group>
                  )}

                  {/* Conditional Fields for "govt_paper_type" category */}
                  {category === 'govt_paper_type' && (
                    <Form.Group controlId="govt_paper_type" className="mb-3">
                      <Form.Label>Select type of Government paper</Form.Label>
                      <Form.Control
                        as="select"
                        value={govtPaperType}
                        onChange={(e) => setGovtPaperType(e.target.value)}
                      >
                        <option value="">Select a category</option>
                        <option value="NID">NID</option>
                        <option value="Land Deed">Land Deed</option>
                        <option value="Other's type of Deed">Other's type of Deed</option>
                      </Form.Control>
                    </Form.Group>
                  )}

                  {/* Conditional Fields for "certificate_type" category */}
                  {category === 'certificate_type' && (
                    <Form.Group controlId="certificate_type" className="mb-3">
                      <Form.Label>Select type of certificate_type</Form.Label>
                      <Form.Control
                        as="select"
                        value={certificateType}
                        onChange={(e) => setCertificateType(e.target.value)}
                      >
                        <option value="">Select a category</option>
                        <option value="P.S.C">P.S.C</option>
                        <option value="J.S.C">J.S.C</option>
                        <option value="S.S.C">S.S.C</option>
                        <option value="H.S.C">H.S.C</option>
                        <option value="Diploma">Diploma</option>
                        <option value="B.Sc">B.Sc</option>
                        <option value="M.Sc">M.Sc</option>
                        <option value="BBA">BBA</option>
                        <option value="Honours">Honours</option>
                        <option value="Masters">Masters</option>
                      </Form.Control>
                    </Form.Group>
                  )}

                  <Button type="submit" variant="primary" className="w-100 shadow-sm mt-3">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LostAndFoundForm;
