import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Nav_owner from './components/Nav_owner';
import Nav_notlogin from './components/Nav_notlogin';
import Nav_inves from './components/Nav_inves';
import cookies from "./cookies/cookie";
import { Container, Col, Row, Form } from 'react-bootstrap'



class createProject extends Component{

render(){
        return(
          <div>
            <Nav_owner /> 
            <div>
                <Card>
                    <Card.Header>
                        Create Project
                    </Card.Header>
                    <br/>
                      <div>
                        <Row>
                            <Col xs="12" md="3" sm="3">
                              <Form>
                                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                                  <Form.Label style={{ marginLeft: 25 }} >SMEs Type</Form.Label>
                                    <Col xs="12" md="9" sm="9" >
                                      <Form.Control  style={{ marginTop: 0, borderRadius: 12, marginLeft: 150  }}  as="select" size="lg" custom>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                      </Form.Control>
                                    </Col>
                                  </Form.Group>
                                </Form>
                              </Col>
                            </Row>
                          <h6 style={{ marginLeft: 25 }}> 
                          First, let’s get you set up.
                          Pick a project category to connect with a specific community. You can always update this later.
                          </h6>             
                          
                          <Form>
                              <Row>
                                  <Col  xs="12" md="9" sm="9" style={{ marginLeft: 25 }}>
                                  <Form.Control placeholder="First " />
                                  </Col>
                              </Row>
                          </Form>
                          <br/>
                          
                          <h6 style={{ marginLeft: 25 }}>
                          Describe what you’ll be creating.
                          And don’t worry, you can edit this later, too.
                          </h6>
                          <Form>
                              <Row>
                                  <Col  xs="12" md="9" sm="9" style={{ marginLeft: 25 }}>
                                  <Form.Control placeholder="Describe " />
                                  </Col>
                              </Row>
                          </Form>
                      <br/>
                      <h6 style={{marginLeft: 25}}>
                      Finally, let’s confirm your eligibility.
                      Tell us where you’re based and confirm a few other details before we proceed.
                      </h6>
                      <Form>
                              {[ 'radio'].map((type) => (
                                  <div key={`custom-inline-${type}`} className="mb-3">
                                  <Form.Check style={{marginLeft: 25}} 
                                      custom
                                      inline
                                      label="I am at least 18 years old.
                                      "
                                      type={type}
                                      id={`custom-inline-${type}-1`}
                                  />
                                  <Form.Check style={{marginLeft: 25}}
                                      custom
                                      inline
                                      label=" I can verify a bank account and government-issued ID."
                                      type={type}
                                      id={`custom-inline-${type}-2`}
                                  />
                                  
                                  </div>
                              ))}
                      </Form>
                          </div>
                    <br/>
                </Card>
         </div>
        </div>


         );
        
    
    
    }
}

export default createProject;
