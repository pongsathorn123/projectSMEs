import React, { Component } from 'react';
import {Form, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { observer, inject } from "mobx-react";
import cookies from "../cookies/cookie";
import Nav_owner from '../components/Nav_owner';
import Nav_inves from '../components/Nav_inves';
import Nav_Admin from '../components/Nav_Admin';

class editAccount extends Component {

    componentDidMount(){
        this.props.loginStore.getInfo();
        // console.log(this.props.loginStore.info);
      }
    passwordChange(e) {
        this.props.loginStore.password = e.target.value;
    }
    nameChange(e) {
        this.props.loginStore.name = e.target.value;
    }
    emailChange(e) {
        this.props.loginStore.email = e.target.value;
    }
    telChange(e) {
        this.props.loginStore.tel = e.target.value;
    }
    addressChange(e) {
        this.props.loginStore.address = e.target.value;
    }
    
    
    

    async buttonClick() {
        this.props.loginStore.edit();
        // console.log(this.props.loginStore.id);
        // console.log(this.props.loginStore.username);
        // console.log(this.props.loginStore.password);
        // console.log(this.props.loginStore.name);
        // console.log(this.props.loginStore.tel);
        // console.log(this.props.loginStore.citizen_id);
        // // console.log(this.props.loginStore.room);
        // this.props.loginStore.username = "";
        // this.props.loginStore.password = "";
        // this.props.loginStore.name = "";
        // this.props.loginStore.email = "";
        // this.props.loginStore.tel = "";
        // this.props.loginStore.address = "";
    }

  render() {
    return (
      <div>
          {(cookies.get('userType') == "owner") ? <Nav_owner /> : ''}
            {(cookies.get('userType') == "inves") ? <Nav_inves /> : ''}
            {(cookies.get('userType') == "admin") ? <Nav_Admin /> : ''}
        <center>
        <h1 style={{marginRight:80,marginTop:50}}>แก้ไขบัญชี </h1>
        <Container style={{marginLeft:900,marginTop:20, width:300}}>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>ชื่อผู้ใช้</Form.Label>
                <Form.Control type="text" placeholder="ชื่อผู้ใช้"
                  value={this.props.loginStore.username}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>รหัสผ่าน</Form.Label>
                <Form.Control type="password" placeholder="รหัสผ่าน" 
                  onChange={this.passwordChange.bind(this)} 
                  value={this.props.loginStore.password}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>ชื่อ</Form.Label>
                <Form.Control type="text" placeholder="ชื่อ" 
                  onChange={this.nameChange.bind(this)} 
                  value={this.props.loginStore.name}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="text" placeholder="เลขบัตรประชาชน" 
                  onChange={this.emailChange.bind(this)} 
                  value={this.props.loginStore.email}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>เบอร์</Form.Label>
                <Form.Control type="text" placeholder="เบอร์" 
                  onChange={this.telChange.bind(this)} 
                  value={this.props.loginStore.tel}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>ที่อยู่</Form.Label>
                <Form.Control type="text" placeholder="เบอร์" 
                  onChange={this.addressChange.bind(this)} 
                  value={this.props.loginStore.address}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>ประเภทผู้ใช้</Form.Label>
                <Form.Control type="text" placeholder="ชื่อผู้ใช้"
                  value={this.props.loginStore.userType}/>
            </Form.Group>
            <Form.Label style={{ color: "red" }}>{this.props.loginStore.message2}</Form.Label>  <br/>
            <Button variant="primary" type="button"
               onClick={this.buttonClick.bind(this)}>Submit</Button>
        </Form>
        </Container>
        </center>
      </div>
    )
  }
}

export default inject('loginStore')(observer(editAccount));
