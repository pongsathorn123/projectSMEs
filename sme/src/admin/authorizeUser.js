import React, { Component } from 'react';
import Nav_Admin from '../components/Nav_Admin';
import {Container, Col, Row, Overlay, OverlayTrigger, Table} from 'react-bootstrap'
import { ButtonToggle, Collapse, CardBody, Card } from 'reactstrap'
import { observer, inject } from "mobx-react";

class authorizeUser extends Component {
  constructor() {
    super();
    this.state = {
      collapse: -1
    };
    this.toggle=this.toggle.bind(this);
    //this.clickRow = this.clickRow.bind(this)
  }

  componentDidMount() {
    this.props.loginStore.list();
    //console.log();
  }

  promote(userId) {
    this.props.loginStore.userId = userId;
    this.props.loginStore.promote();
    console.log("promote", userId);
  }

  demote(userId) {
    this.props.loginStore.userId = userId;
    this.props.loginStore.demote();
    console.log("demote", userId);
  }

  delete(userId) {
    this.props.loginStore.userId = userId;
    this.props.loginStore.delete();
    console.log("delete",userId);
  }

  
  toggle = (index) => (event) => {
    (index == this.state.collapse) ? this.setState({collapse:-1 }) : this.setState({collapse:index });
  }

  render(){
    
    return (
      <div>
        
        <Nav_Admin />
        <center><h3 style={{marginTop: 80}}>ตรวจสอบบัญชีผู้ใช้</h3></center>
        <Container style={{marginTop: 40}}>
          <Table striped bordered hover size="sm"  responsive="sm">
            
            <thead>
              <tr>
                <th><center>บัตรประชาชน</center></th>
                <th><center>ชื่อ - นามสกุล</center></th>
                <th><center>อีเมล์</center></th>
                <th><center>ชื่อบัญชี</center></th>
                <th><center>จัดการ</center></th>
              </tr>
            </thead>
            <tbody>
              { 
                this.props.loginStore.showList.map((element, index) => {
                  return (
                    <tr key={index} >
                        <td><center>{element.citizenId}</center></td>
                        <td><center>{element.name}</center></td>
                        <td><center>{element.email}</center></td>
                        <td><center>{element.username}</center></td>
                        <td><center>
                            { 
                              (element.authorize == "verified") ? 
                              <ButtonToggle color="secondary" size="sm"
                                onClick={() => { this.demote(element.userId)}}>unverify</ButtonToggle> : 
                              <ButtonToggle color="success" size="sm"
                                onClick={() => { this.promote(element.userId)}}>verified</ButtonToggle>
                            }
                            </center>
                          </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default inject('loginStore')(observer(authorizeUser));