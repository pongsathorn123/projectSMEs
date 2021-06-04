import React, { Component } from 'react';
import Nav_Admin from '../components/Nav_Admin';
import {Container, Col, Row, Overlay, OverlayTrigger, Table} from 'react-bootstrap'
import { ButtonToggle, Collapse, CardBody, Card } from 'reactstrap'
import { observer, inject } from "mobx-react";
import cookies from "../cookies/cookie";

class authorizeReport extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    this.props.reportStore.show();
    //console.log();
  }

  demote(smesId) {
    this.props.reportStore.smesId = smesId;
    this.props.reportStore.demote();
    console.log("demote", smesId);
  }

  promote(smesId) {
    this.props.reportStore.smesId = smesId;
    this.props.reportStore.promote();
    console.log("promote", smesId);
  }


  async infoClick(smesId) {
    cookies.set("smesId",smesId, { path: "/", maxAge: 86400 })
    window.location.href = "/reportdetail";
  }
  

  render(){
    
    return (
      <div>
        
        <Nav_Admin />
        <center><h3 style={{marginTop: 80}}>รายงานธุรกิจ</h3></center>
        <Container style={{marginTop: 40}}>
          <Table striped bordered hover size="sm"  responsive="sm">
            
            <thead>
              <tr>
                <th><center>รหัสธุรกิจ</center></th>
                <th><center>ธุรกิจ</center></th>
                <th><center>จำนวนการรายงาน</center></th>
                <th><center>จัดการ</center></th>
              </tr>
            </thead>
            <tbody>
              { 
                this.props.reportStore.showList.map((element, index) => {
                  return (
                    <tr key={index} >
                        <td><center>{element.smesId}</center></td>
                        <td><center>{element.title}</center></td>
                        <td><center>{element.count}</center></td>
                        <td><center>
                            { 
                              (element.authorize == "verified") ? 
                              <ButtonToggle color="success" size="sm"
                                onClick={() => { this.demote(element.smesId)}}>unreport</ButtonToggle> : 
                              <ButtonToggle color="secondary" size="sm"
                                onClick={() => { this.promote(element.smesId)}}>reported</ButtonToggle>
                            }
                            <ButtonToggle color="info" size="sm" style={{margin:3}}  onClick={() => { this.infoClick(element.smesId)}}>Info</ButtonToggle>
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

export default inject('reportStore','authorStore')(observer(authorizeReport));