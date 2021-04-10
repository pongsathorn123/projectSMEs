import React, { Component } from 'react';
import '../App';
import '../views/Setpage.css';
import Nav_notlogin from '../components/Nav_notlogin';
import { Container, Col, Row, Card, Form } from 'react-bootstrap'
import { ButtonToggle } from 'reactstrap'
import { observer, inject } from "mobx-react";
import bgLogin from '../image/bgLogin.jpg';

//import loginStore from './store/loginStore'

class userLogin extends Component {

  usernameChange(e) {
    this.props.loginStore.username = e.target.value;
  }

  passwordChange(e) {
    this.props.loginStore.password = e.target.value;
  }

  async buttonClick() {
    this.props.loginStore.login();
    this.props.loginStore.username = "";
    this.props.loginStore.password = "";
  }

  registerClick() {
    window.location.href = "/userRegister";
  }

  render() {
    return (
      
      <div class="body-login">
        <Nav_notlogin />
        <Container style={{ marginTop: 80, width:700 }} >
          <Card class="card" style={{ borderRadius: 12}}>
            <Card.Header as="h3" className="text-center">Login</Card.Header>

            <Card.Body><center>

              <Row style={{margin:50}}>
                <Col xs="12" md="4" sm="4">
                  <Form.Label style={{ marginTop: 15 }}>Username</Form.Label>
                </Col>
                <Col xs="12" md="8" sm="8">
                  <Form.Control type="text" name="username" ref='username'
                    placeholder="   Username" bsSize="lg "
                    style={{borderRadius: 12, marginTop: 10 }}
                    onChange={this.usernameChange.bind(this)}
                    value={this.props.loginStore.username} />
                </Col>
                <Col xs="12" md="4" sm="4">
                  <Form.Label style={{ marginTop: 15 }}>Password</Form.Label>
                </Col>
                <Col xs="12" md="8" sm="8">
                  <Form.Control type="password" name="password" ref='password'
                    placeholder="   Password" bsSize="lg "
                    style={{borderRadius: 12, marginTop: 15 }}
                    onChange={this.passwordChange.bind(this)}
                    value={this.props.loginStore.password} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <center>
                  <Form.Label style={{ color: "red" }}>{this.props.loginStore.message}</Form.Label>  <br/>
                    <ButtonToggle color="primary" size="sm" 
                      onClick={this.buttonClick.bind(this)}>เข้าสู่ระบบ</ButtonToggle>
                    <ButtonToggle color="secondary" size="sm" style={{  marginLeft: 10 }}
                      onClick={this.registerClick.bind(this)}>สมัครสมาชิก</ButtonToggle>
                  </center>
                </Col>
              </Row> </center>
            </Card.Body>
          </Card>
        </Container>
      </div>
    )
  }
}

export default inject('loginStore')(observer(userLogin));
