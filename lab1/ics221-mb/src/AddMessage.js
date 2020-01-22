import React from 'react';  
import Card from 'react-bootstrap/Card'; 
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class AddMessage extends React.Component {
  
    render() { 
      return (
        <Form>
          <Card className="mb-4">  
          <Card.Body> 
              <Card.Title>Add a Message:</Card.Title>  
              <Form.Row className="align-items-center">
                <Form.Group as={Col} controlId="name"> 
                    <Form.Label>Enter Name:</Form.Label>
                    <Form.Control placeholder="Your name" /> 
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="name"> 
                    <Form.Label>Enter Message:</Form.Label>
                    <Form.Control placeholder="Your message" /> 
                </Form.Group>

                <Col className="mt-3">
                  <Button variant="primary" type="submit">Submit</Button>
                </Col>
              </Form.Row>
            </Card.Body>
          </Card>
        </Form>
      );
    }
  }  
export default AddMessage;
