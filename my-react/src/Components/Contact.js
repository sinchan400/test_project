import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Section 1: Contact Information
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>
                You can reach us at <strong>contact@example.com</strong>.
              </p>
              <p>
                Our phone number is <strong>(123) 456-7890</strong>.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Section 2: Location
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>We are located at:</p>
              <address>
                <strong>123 Main Street</strong>
                <br />
                <span>City, State ZIP Code</span>
                <br />
                <span>Country</span>
              </address>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        
      </Accordion>
    </div>
  );
};

export default Contact;
