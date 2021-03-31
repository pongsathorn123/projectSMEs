import React, { Component } from 'react';
import '../App';
import '../views/Setpage.css';
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
        <Container style={{ marginTop: 80 }} >
          <Card class="card" style={{ borderRadius: 12}}>
            <Card.Header as="h3" className="text-center">Login</Card.Header>

            <Card.Body><center>

              <Row style={{margin:50}}>
                <Form.Label style={{marginLeft:50}}>Username</Form.Label>
                <Form.Control type="text" name="username" ref='username'
                  placeholder="   Username" bsSize="lg "
                  style={{marginLeft:50,marginRight:50,marginTop:10 ,  borderRadius: 12 }}
                  onChange={this.usernameChange.bind(this)}
                  value={this.props.loginStore.username} />
                <Form.Label style={{marginTop:40, marginLeft:50}}>Password</Form.Label>
                <Form.Control type="password" name="password" ref='password'
                  placeholder="   Password" bsSize="lg "
                  style={{marginTop:10 ,  borderRadius: 12 ,marginLeft:50,marginRight:50 }}
                  onChange={this.passwordChange.bind(this)}
                  value={this.props.loginStore.password} />
                <Col>
                  <center>
                    <br /><Form.Label style={{ color: "red" }}>{this.props.loginStore.message}</Form.Label><br />
                    <ButtonToggle color="primary" size="sm" style={{ marginTop: 5 }}
                      onClick={this.buttonClick.bind(this)}>เข้าสู่ระบบ</ButtonToggle>
                    <ButtonToggle color="secondary" size="sm" style={{ marginTop: 5, marginLeft: 10 }}
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
