import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Nav_owner from '../components/Nav_owner';
import { observer, inject } from "mobx-react";
import cookies from "../cookies/cookie";
import { Container, Col, Row, Form ,Button } from 'react-bootstrap'
import smesStore from '../store/smesStore';
import './createProject.css';


class CreateProject extends Component{

  selectedSmestype(e) {
    this.props.smesStore.smesType = e.target.value;
  }

  titleChange(e){
    this.props.smesStore.title = e.target.value;
  }

  descriptionChange(e){
    this.props.smesStore.description = e.target.value;
  }

  async btnClick() {
    this.props.smesStore.smes();
  }

render(){
        return(
          <div>
            <Nav_owner /> 
            <div>
                <Card style ={{ backgroundColor: '#f0fbff'}}>
                    <Card.Header style={{ backgroundColor: '#72d1e9'}}>
                        CREATE PROJECT
                        
                    </Card.Header>
                    <br/>
                      <div>
                        <Row>
                            <Col xs="12" md="3" sm="3">
                              <Form>
                                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                                  <Form.Label style={{ marginLeft: 200}} >SMEs Type</Form.Label>
                                    <Col xs="12" md="9" sm="9" >
                                      <Form.Control  style={{ marginTop: 0, borderRadius: 12, marginLeft: 180  }}  as="select" size="lg" custom onChange={this.selectedSmestype.bind(this)}>
                                        <option value="1" disabled selected>เลือกประเภทธุรกิจ</option>
                                        <option value="s001">ธุรกิจด้านการผลิต</option>
                                        <option value="s002">ธุรกิจการค้า</option>
                                        <option value="s003">ธุรกิจด้านการบริการ</option>
                                      </Form.Control>
                                    </Col>
                                  </Form.Group>
                                </Form>
                              </Col>
                            </Row>
                          <h6 style={{ marginLeft: 200}}> 
                          First, let’s get you set up.
                          Pick a project category to connect with a specific community. You can always update this later.
                          </h6>             
                          
                          <Form>
                              <Row>
                                  <Col  xs="12" md="9" sm="9" style={{ marginLeft:200 }}>
                                  <Form.Control placeholder="First " 
                                    onChange={this.titleChange.bind(this)} 
                                    value={this.props.smesStore.title}/>
                                  </Col>
                              </Row>
                          </Form>
                          <br/>
                          
                          <h6 style={{ marginLeft: 200 }}>
                          Describe what you’ll be creating.
                          And don’t worry, you can edit this later, too.
                          </h6>
                          <Form>
                              <Row>
                                  <Col  xs="12" md="9" sm="9" style={{ marginLeft: 200 }}>
                                  <Form.Control  style = {{width : 550 ,height : 250}} 
                                    onChange={this.descriptionChange.bind(this)} 
                                    value={this.props.smesStore.description}/>
                                  </Col>
                              </Row>
                          </Form>
                      <br/>
                      <h6 style={{marginLeft: 200}}>
                      Finally, let’s confirm your eligibility.
                      Tell us where you’re based and confirm a few other details before we proceed.
                      </h6>
                      <Form>
                              {[ 'radio'].map((type) => (
                                  <div key={`custom-inline-${type}`} className="mb-3">
                                  <Form.Check style={{marginLeft: 200}} 
                                      custom
                                      inline
                                      label="I am at least 18 years old.
                                      "
                                      type={type}
                                      id={`custom-inline-${type}-1`}
                                  />
                                  <br/>
                                  <Form.Check style={{marginLeft: 200}}
                                      custom
                                      inline
                                      label=" I can verify a bank account and government-issued ID."
                                      type={type}
                                      id={`custom-inline-${type}-2`}
                                  />
                                  <br/>
                                  <br/>
                                  <br/><h3 style={{color: "red"}}>{this.props.smesStore.message}</h3>
                                   <Button style={{marginLeft: 750}}variant="outline-success" onClick={this.btnClick.bind(this)}>Next</Button>{' '}
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

export default inject('smesStore')(observer(CreateProject));
