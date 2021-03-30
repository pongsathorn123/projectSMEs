import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Nav_owner from '../components/Nav_owner';
import { observer, inject } from "mobx-react";
import cookies from "../cookies/cookie";
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import smesStore from '../store/smesStore';
import { CardBody, CardHeader, Input, Label } from 'reactstrap';
import './createProject.css';
import '../views/Setpage.css';

class CreateProjectDetail extends Component {

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
        <div>
          {/* <Card class="card" style={{ borderRadius: 12 }}>
                    <Card.Header style={{ backgroundColor: '' ,}} >
                        รายละเอียดโปรเจค
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
                    </Card> */}

          <Container>
            <Card style={{ marginTop: 30 }}>
              <CardHeader className="text-center">
                <h3>รายละเอียดโปรเจค</h3>
              </CardHeader>
              <CardBody>
                <Form style={{ margin: 10, marginLeft: 50, marginRight: 50 }}>
                  <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label style={{fontWeight: "bold" , fontSize:"18px"}}>ระยะเวลาที่เปิดรับ</Form.Label>

                    <Row>
                      <Col>
                        <Form.Label>วันเริ่ม</Form.Label>
                        <Input type="date"></Input>
                      </Col>
                      <Col>
                        <Form.Label>วันสิ้นสุด</Form.Label>
                        <Input type="date"></Input>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label style={{fontWeight: "bold" , fontSize:"18px"}}>ยอดเงินที่สามารถร่วมลงทุน</Form.Label>

                    <Row>
                      <Col>
                        <Form.Label>น้อยสุด</Form.Label>
                        <Input type="number" placeholder="0.00"></Input>
                      </Col>
                      <Col>
                        <Form.Label>มากสุด</Form.Label>
                        <Input type="number" placeholder="0.00"></Input>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label style={{fontWeight: "bold" , fontSize:"18px"}}>รายละเอียดโปรเจคโดยละเอียด</Form.Label>
                    <Form.Control placeholder="อธิบาย..." />
                  </Form.Group>


                  <Form.Label style={{fontWeight: "bold" , fontSize:"18px"}}>ข้อมูลติดต่อ</Form.Label>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>เบอร์โทรศัพท์</Form.Label>
                        <Input type="text" placeholder="กรอกเบอร์โทรศัพท์"></Input>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                        <Input type="text" placeholder="กรอก E-mail"></Input>
                      </Form.Group>
                    </Col>

                  </Row>

                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Facebook</Form.Label>
                        <Input type="text" placeholder="กรอก Facebook"></Input>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Line Id</Form.Label>
                        <Input type="text" placeholder="กรอก Id Line"></Input>
                      </Form.Group>
                    </Col>

                  </Row>


                  <Row>
                    <Col style={{ marginTop: 20 }}><center>
                      <Button variant="primary">บันทึก</Button>{' '}
                    </center>
                    </Col>
                  </Row>

                </Form>
              </CardBody>
            </Card>
          </Container>
        </div>
      </div>


    );



  }
}

export default inject('smesStore')(observer(CreateProjectDetail));
