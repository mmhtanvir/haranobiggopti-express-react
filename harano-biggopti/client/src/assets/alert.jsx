import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible({ message }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible className="mb-4">
        <Alert.Heading>{message}hehe!</Alert.Heading>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)} variant="primary">Show Alert</Button>;
}

export default AlertDismissible;