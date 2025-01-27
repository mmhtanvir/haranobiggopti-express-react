import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import Axios from 'axios';

const AlertDismissible = ({ message, variant = 'danger' }) => {
  const [show, setShow] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (message) {
      setAlertMessage(message);
      getAlert(message);
    }
  }, [message]);

  const getAlert = (alertMessage) => {
    Axios.post('http://localhost:2000/', {
      message: alertMessage,
    })
    .then(response => {
      console.log('Alert sent to server:', response);
    })
    .catch(error => {
      console.error('Error sending alert:', error);
    });
  }

  if (show && alertMessage) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible className="mb-4">
        <Alert.Heading>{alertMessage}</Alert.Heading>
      </Alert>
    );
  }
  
  return null;
};

export default AlertDismissible;
