import React, { Component } from 'react';
import '../App.css';
import './Setpage.css';
import { Container, Col, Row, Card, Form, } from 'react-bootstrap'
import { ButtonToggle } from 'reactstrap'
import { observer, inject } from "mobx-react";
import Nav_notlogin from '../components/Nav_notlogin';
import registerStore from '../store/registerStore';

class userRegister extends Component {
  
  usernameChange(e) {
    this.props.registerStore.username = e.target.value;
  }

  passwordChange(e) {
    this.props.registerStore.password = e.target.value;
  }

  repasswordChange(e) {
    this.props.registerStore.repassword = e.target.value;
  }

  nameChange(e) {
    this.props.registerStore.name = e.target.value;
  }

  emailChange(e) {
    this.props.registerStore.email = e.target.value;
  }

  telChange(e) {
    this.props.registerStore.tel = e.target.value;
  }
  citizen_idChange(e) {
    this.props.registerStore.citizenId = e.target.value;
  }
  selectedUsertype(e) {
    this.props.registerStore.userType = e.target.value;
  }

  async btnClick() {
    this.props.registerStore.register();
  }

  render() {
    return (
      <div>
        <Nav_notlogin />
        <Container style={{ marginTop: 90 }} >
          <Card class="card" style={{ borderRadius: 12 }}>
            <Card.Header as="h3" className="text-center">สมัครสมาชิก</Card.Header>
            <Card.Body><center>
              <Row>
                <Col xs="12" md="3" sm="3">
                    <Form.Label style={{ marginTop: 15 }}>เลือกประเภทสมาชิก</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                </Col>
                <Col>
                  <Form.Control  style={{ marginTop: 10, borderRadius: 12, height:40  }}as="select" size="md" custom onChange={this.selectedUsertype.bind(this)}>
                                        <option value="" disabled selected>ประเภทสมาชิก</option>
                                        <option value="owner">เจ้าของธุรกิจ</option>
                                        <option value="inves">นักลงทุน</option>
                  </Form.Control>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="3" sm="3">
                  <Form.Label style={{ marginTop: 15 }}>ชื่อบัญชีผู้ใช้</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                </Col>
                <Col xs="12" md="9" sm="9" >
                  <Form.Control type="text" name="username" ref='username'
                    placeholder="   ชื่อบัญชีผู้ใช้" 
                    style={{ marginTop: 10, borderRadius: 12, height:40  }} 
                    onChange={this.usernameChange.bind(this)}/>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="3" sm="3">
                  <Form.Label style={{ marginTop: 15 }}>รหัสผ่าน</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                </Col>
                <Col xs="12" md="9" sm="9">
                  <Form.Control type="password" name="password" ref='password'
                    placeholder="   รหัสผ่าน"
                    style={{ marginTop: 10, borderRadius: 12, height:40  }} 
                    onChange={this.passwordChange.bind(this)}/>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="3" sm="3">
                  <Form.Label style={{ marginTop: 15 }}>ยืนยันรหัสผ่าน</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                </Col>
                <Col xs="12" md="9" sm="9">
                  <Form.Control type="password" name="re-password" ref='re-password'
                    placeholder="   ยืนยันรหัสผ่าน" 
                    style={{ marginTop: 10, borderRadius: 12, height:40  }} 
                    onChange={this.repasswordChange.bind(this)}/>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="3" sm="3">
                  <Form.Label style={{ marginTop: 15 }}>ชื่อ-นามสกุล</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                </Col>
                <Col xs="12" md="9" sm="9" >
                  <Form.Control type="text" name="name" ref='name'
                    placeholder="   ชื่อ-นามสกุล" 
                    style={{ marginTop: 10, borderRadius: 12, height:40 }} 
                    onChange={this.nameChange.bind(this)}/>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="3" sm="3">
                  <Form.Label style={{ marginTop: 15 }}>อีเมล์</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                </Col>
                <Col xs="12" md="9" sm="9">
                  <Form.Control type="text" name="email" ref='email'
                    placeholder="   อีเมล์" 
                    style={{ marginTop: 10, borderRadius: 12, height:40  }} 
                    onChange={this.emailChange.bind(this)}/>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="3" sm="3">
                  <Form.Label style={{ marginTop: 15 }}>เลขบัตรประชาชน</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                </Col>
                <Col xs="12" md="9" sm="9">
                  <Form.Control type="text" name="citizen_id" ref='citizen_id' maxlength="13"
                    placeholder="   เลขบัตรประชาชน" 
                    style={{ marginTop: 10, borderRadius: 12, height:40  }} 
                    onChange={this.citizen_idChange.bind(this)}/>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="3" sm="3">
                  <Form.Label style={{ marginTop: 15 }}>เบอร์โทรศัพท์</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                </Col>
                <Col xs="12" md="9" sm="9">
                  <Form.Control type="text" name="tel" ref='tel' maxlength="10"
                    placeholder="   เบอร์โทรศัพท์" 
                    style={{ marginTop: 10, borderRadius: 12, height:40  }} 
                    onChange={this.telChange.bind(this)}/>
                </Col>
              </Row>
              <Form.Label>กรุณากรอกข้อมูลที่มีเครื่องหมาย</Form.Label><Form.Label style={{color:"red", padding:5}}>*</Form.Label><Form.Label> ให้ครบ</Form.Label>
              <Row>
                <Col>
                  <center/>
                    <br/><h3 style={{color: "red"}}>{this.props.registerStore.message}</h3>

                    <ButtonToggle color="primary" size="md" style={{ marginTop: 15 }}
                    
                      onClick={this.btnClick.bind(this)}>ยืนยัน</ButtonToggle>
                </Col>
              </Row> </center>
            </Card.Body>
          </Card>
        </Container>
      </div>
    )
  }
}

export default inject('registerStore')(observer(userRegister));
