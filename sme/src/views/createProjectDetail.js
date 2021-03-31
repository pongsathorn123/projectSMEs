import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Nav_owner from '../components/Nav_owner';
import { observer, inject } from "mobx-react";
import cookies from "../cookies/cookie";
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import smesdetailStore from '../store/smesdetailStore';
import { CardBody, CardHeader, Input, Label } from 'reactstrap';
import './createProject.css';
import '../views/Setpage.css';

class CreateProjectDetail extends Component {
  

  dateStartChange(e) {
    this.props.smesdetailStore.dateStart = e.target.value;
  }
  dateEndChange(e) {
    this.props.smesdetailStore.dateEnd = e.target.value;
  }
  moneyMaxChange(e) {
    this.props.smesdetailStore.moneyMax = e.target.value;
  }
  moneyMinChange(e) {
    this.props.smesdetailStore.moneyMin = e.target.value;
  }
  detailChange(e) {
    this.props.smesdetailStore.detail = e.target.value;
  }
  telChange(e) {
    this.props.smesdetailStore.tel = e.target.value;
  }
  emailChange(e) {
    this.props.smesdetailStore.email = e.target.value;
  }
  facebookChange(e) {
    this.props.smesdetailStore.facebook = e.target.value;
  }
  lineidChange(e) {
    this.props.smesdetailStore.lineid = e.target.value;
  }



  async btnClick() {
    this.props.smesdetailStore.addsmesdetail();
  }

  render() {
    return (
      <div>
        <Nav_owner />
        <div>
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
                          <Input type="date" value="2017-06-01" 
                            onChange={this.dateStartChange.bind(this)}
                            value={this.props.smesdetailStore.dateStart} >
                          </Input>
                      </Col>
                      <Col>
                        <Form.Label>วันสิ้นสุด</Form.Label>
                        <Input type="date" value="2017-06-01"
                          onChange={this.dateEndChange.bind(this)}
                          value={this.props.smesdetailStore.dateEnd} >
                        </Input>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label style={{fontWeight: "bold" , fontSize:"18px"}}>ยอดเงินที่สามารถร่วมลงทุน</Form.Label>

                    <Row>
                      <Col>
                        <Form.Label>น้อยสุด</Form.Label>
                          <Input type="number" placeholder="0.00" 
                            onChange={this.moneyMinChange.bind(this)}
                            value={this.props.smesdetailStore.moneyMin} >
                          </Input>
                      </Col>
                      <Col>
                        <Form.Label>มากสุด</Form.Label>
                          <Input type="number" placeholder="0.00" 
                            onChange={this.moneyMaxChange.bind(this)}
                            value={this.props.smesdetailStore.moneyMax} >
                           </Input>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label style={{fontWeight: "bold" , fontSize:"18px"}}>รายละเอียดโปรเจคโดยละเอียด</Form.Label>
                      <Form.Control placeholder="อธิบาย..." 
                        onChange={this.detailChange.bind(this)}
                        value={this.props.smesdetailStore.detail} >
                      </Form.Control>
                  </Form.Group>


                  <Form.Label style={{fontWeight: "bold" , fontSize:"18px"}}>ข้อมูลติดต่อ</Form.Label>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>เบอร์โทรศัพท์</Form.Label>
                          <Input type="text" placeholder="กรอกเบอร์โทรศัพท์" 
                            onChange={this.telChange.bind(this)}
                            value={this.props.smesdetailStore.tel} >
                          </Input>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                          <Input type="text" placeholder="กรอก E-mail"
                            onChange={this.emailChange.bind(this)}
                            value={this.props.smesdetailStore.email} >
                          </Input>
                      </Form.Group>
                    </Col>

                  </Row>

                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Facebook</Form.Label>
                          <Input type="text" placeholder="กรอก Facebook"
                            onChange={this.facebookChange.bind(this)}
                            value={this.props.smesdetailStore.facebook} >
                          </Input>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Line Id</Form.Label>
                          <Input type="text" placeholder="กรอก Id Line"
                            onChange={this.lineidChange.bind(this)}
                            value={this.props.smesdetailStore.lineid} >
                          </Input>
                      </Form.Group>
                    </Col>

                  </Row>


                  <Row>
                    <Col style={{ marginTop: 20 }}><center>
                      <Button variant="primary" onClick={this.btnClick.bind(this)}>บันทึก</Button>{' '}
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

export default inject('smesdetailStore')(observer(CreateProjectDetail));
