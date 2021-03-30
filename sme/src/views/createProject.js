import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Nav_owner from '../components/Nav_owner';
import { observer, inject } from "mobx-react";
import cookies from "../cookies/cookie";
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import smesStore from '../store/smesStore';
import './createProject.css';
import '../views/Setpage.css';
import { CardBody, CardHeader, Input, Label } from 'reactstrap';

class CreateProject extends Component {

  selectedSmestype(e) {
    this.props.smesStore.smesType = e.target.value;
  }

  titleChange(e) {
    this.props.smesStore.title = e.target.value;
  }

  descriptionChange(e) {
    this.props.smesStore.description = e.target.value;
  }

  async btnClick() {
    this.props.smesStore.smes();
  }

  render() {
    return (
      <div>
        <Nav_owner />
        {/* <div>
                <Card class="card" style={{ borderRadius: 12 }}>
                    <Card.Header style={{ backgroundColor: '' ,}} >
                        สร้างโปรเจค
                        
                    </Card.Header>
                    <br/>
                      <div>                   
                        <h6 style={{ paddingLeft: 200}}>เริ่มแรก ! คุณต้องกำหนดประเภทธุรกิจของคุณ ประเภทธุรกิจสามารถเปลี่ยนในภายหลังได้</h6>

                        <Row>
                            <Col xs="12" md="3" sm="3">
                              <Form>
                                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                                  <Form.Label style={{ marginLeft: 200}} >ประเภทธุรกิจ</Form.Label>
                                    <Col xs="12" md="9" sm="9" >
                                      <Form.Control  style={{ marginTop: 0, borderRadius: 12, marginLeft: 180  }}  as="select" size="lg" custom onChange={this.selectedSmestype.bind(this)}>
                                        <option value="1" disabled selected>เลือกประเภทธุรกิจ</option>
                                        <option value="ธุรกิจด้านการผลิต">ธุรกิจด้านการผลิต</option>
                                        <option value="ธุรกิจด้านการผลิต">ธุรกิจการค้า</option>
                                        <option value="ธุรกิจด้านการผลิต">ธุรกิจด้านการบริการ</option>
                                      </Form.Control>
                                    </Col>
                                  </Form.Group>
                                </Form>
                              </Col>
                            </Row>
                          <h6 style={{ marginLeft: 200}}> 
                          ชื่อธุรกิจ
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
                            <h6 style={{ marginLeft: 200 }}> คำอธิบาย</h6>
                              <Form>
                              <Row>
                                  <Col style={{ marginLeft: 200 }}>
                                  <Form.Control  style = {{width : 550 ,height : 250}} 
                                    onChange={this.descriptionChange.bind(this)} 
                                    value={this.props.smesStore.description}/>
                                  </Col>
                                  </Row>
                          </Form>
                      <br/>
                      <Form>
                              
                                  <br/><h3 style={{color: "red"}}>{this.props.smesStore.message}</h3>
                                  <Row xs={2} md={4} lg={6}>
                                    <Col >
                                      <Button style={{marginLeft: 650 }}variant="secondary" disabledcolor >ยกเลิก</Button>{' '}
                                      </Col>
                                      <Col style={{marginLeft: 500 }} >
                                      <Button style={{ }}variant="primary" onClick={this.btnClick.bind(this)}>ต่อไป</Button>{' '}
                                    </Col>
                               </Row>
                            </Form>
                          </div>
                        <br/>
                        <br/>
                        <br/>
                    </Card>
                </div> */}
        <Container>
          <Card style={{ marginTop: 80 }}>
            <CardHeader className="text-center">
              <h3>สร้างโปรเจค</h3>
            </CardHeader>
            <CardBody>
              <Form style={{ margin: 20, marginLeft: 50, marginRight: 50 }}>
                <Form.Label>เริ่มแรก ! คุณต้องกำหนดประเภทธุรกิจของคุณ ประเภทธุรกิจสามารถเปลี่ยนในภายหลังได้</Form.Label>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                  <Form.Label>ประเภทธุรกิจ</Form.Label>

                  <Form.Control style={{ borderRadius: 12 }} as="select" size="md" custom onChange={this.selectedSmestype.bind(this)}>
                    <option value="1" disabled selected>เลือกประเภทธุรกิจ</option>
                    <option value="ธุรกิจด้านการผลิต">ธุรกิจด้านการผลิต</option>
                    <option value="ธุรกิจด้านการผลิต">ธุรกิจการค้า</option>
                    <option value="ธุรกิจด้านการผลิต">ธุรกิจด้านการบริการ</option>
                  </Form.Control>

                </Form.Group>
                <Form.Group>
                  <Form.Label>ชื่อธุรกิจ</Form.Label>
                  <Form.Control placeholder="ชื่อธุรกิจ"
                    onChange={this.titleChange.bind(this)}
                    value={this.props.smesStore.title} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>คำอธิบายโดยย่อ</Form.Label>
                  <Form.Control placeholder="อธิบาย..."
                    onChange={this.descriptionChange.bind(this)}
                    value={this.props.smesStore.description} />
                </Form.Group>

                <Row>
                  <Col style={{marginTop:20}}><center>
                    <Button variant="secondary" disabledcolor >ยกเลิก</Button>{' '}
                    <Button variant="primary" style={{ marginLeft: 40 }} onClick={this.btnClick.bind(this)}>ต่อไป</Button>{' '}
                    </center>
                  </Col>
                </Row>

              </Form>
            </CardBody>
          </Card>
        </Container>

      </div>


    );



  }
}

export default inject('smesStore')(observer(CreateProject));
