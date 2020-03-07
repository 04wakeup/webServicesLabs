import React from 'react';  
import Card from 'react-bootstrap/Card'; 
import Form from 'react-bootstrap/Form'; 
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import { Formik } from 'formik'; 

// Model
const schema = yup.object({
  name: yup
  .string()
  .trim()
  .min(2, 'Your name must be at least 2 characters!')
  .max(10, 'Your name cannot be more than 10 characters.')
  .matches(/[A-za-z]{2,}/, 'Invalid name. Use Upper or Lowercase letters only.')
  .required('Your name is required.'),
  msg: yup
  .string() 
  .trim()
  .min(3, 'Your message must be at least 3 characters!')
  .max(20, 'Your message must be no more than 20 characters.')
  .required('A message is required.')
  });

  // 신규 입력된 값을 부모한테 전달해서 형제한테 전달해줄 수 있어야 한다. 

 
// Form (not Form Component which is this whole file)
class AddMessage extends React.Component {
  constructor(props){
    super(props);
    this.state = {values:[]};
    this.newMessageCallback = this.props.newMessageCallback.bind(this);
}
  
   handleFormData = (values, actions) => {   // doesn't need const at the beginning, as it is located in a class
      

      this.newMessageCallback(values);
      actions.setSubmitting(false);    
}
    render() { 
                return (  /// {this.......for all?? no only for local function }
                  <Formik validationSchema={schema} onSubmit={this.handleFormData} initialValues={{ name: '', msg: ''}}>
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
                                <Card.Title>Add a Message:</Card.Title>  
                                <Form.Row className="align-items-center">
                                  <Form.Group as={Col} controlId="name"> 
                                      <Form.Label>Enter Name:</Form.Label>
                                      <Form.Control placeholder="Your name" 
                                                    value={values.name} 
                                                    onChange={handleChange} 
                                                    onBlur={handleBlur}
                                                    isValid={touched.name && !errors.name}
                                                    isInvalid={touched.name && errors.name} /> 
                                      <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                      </Form.Control.Feedback>
                                  </Form.Group>

                                  <Form.Group as={Col} md={6} controlId="msg"> 
                                      <Form.Label>Enter Message:</Form.Label>
                                      <Form.Control placeholder="Your message" 
                                                    value={values.msg} 
                                                    onChange={handleChange} 
                                                    onBlur={handleBlur}
                                                    isValid={touched.name && !errors.msg}
                                                    isInvalid={touched.name && errors.msg} /> 
                                      <Form.Control.Feedback type="invalid">
                                        {errors.msg}
                                      </Form.Control.Feedback>
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
export default AddMessage;
