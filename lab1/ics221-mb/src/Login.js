import React from 'react';  
import Card from 'react-bootstrap/Card'; 
import Form from 'react-bootstrap/Form'; 
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 
import { Formik } from 'formik'; 
 
 
// Form (not Form Component which is this whole file)
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {values:[]};
    this.loginCallback = this.props.loginCallback.bind(this);
}
  // doesn't need const at the beginning, as it is located in a class
   handleFormData = (values, actions) => {   
      this.loginCallback(values);
      actions.setSubmitting(false);    
}
    render() { 
                return (  /// {this.......for all?? no only for local function }
                  <Formik  onSubmit={this.handleFormData} initialValues={{ username: '', password: ''}}>
                      { // Your Form is passed to Formik as a function
                        ({
                          handleSubmit,
                          handleChange,
                          handleBlur,
                          values,
                          touched,
                          errors,
                        }) => (
                          <Form noValidate onSubmit={handleSubmit}>
                            <Card className="mb-4">  
                            <Card.Body> 
                                <Card.Title>Login:</Card.Title>  
                                <Form.Row className="align-items-center">
                                  <Form.Group as={Col} controlId="username"> 
                                      <Form.Label>Username:</Form.Label>
                                      <Form.Control placeholder="Your ID" 
                                                    value={values.username} 
                                                    onChange={handleChange} 
                                                    onBlur={handleBlur} />  
                                  </Form.Group>

                                  <Form.Group as={Col} md={6} controlId="password"> 
                                      <Form.Label>Password:</Form.Label>
                                      <Form.Control placeholder="Your Password" 
                                                    value={values.password} 
                                                    onChange={handleChange} 
                                                    onBlur={handleBlur}  />  
                                  </Form.Group>

                                  <Col className="mt-3">
                                    <Button variant="primary" type="submit">Submit</Button>
                                  </Col>
                                </Form.Row>
                              </Card.Body>
                            </Card>
                          </Form>
                        )
                      }
                  </Formik>  
                );
    }
  }  
export default Login;
