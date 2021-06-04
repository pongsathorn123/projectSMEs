import React, { Component } from 'react';
import Nav_Admin from '../components/Nav_Admin';
import {Container, Col, Row, Overlay, OverlayTrigger, Table, Button} from 'react-bootstrap'
import { ButtonToggle, Collapse, CardBody, Card } from 'reactstrap'
import { observer, inject } from "mobx-react";

class reportDetail extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    this.props.reportStore.show2();
    //console.log();
  }

  

  render(){
    
    return (
      <div>
        
        <Nav_Admin />
        <center><h3 style={{marginTop: 80}}>รายละเอียดการรายงานธุรกิจ</h3></center>
        <Container style={{marginTop: 40}}>
          <Table striped bordered hover size="sm"  responsive="sm">
            
            <thead>
              <tr>
                <th><center>ชื่อผู้ใช้</center></th>
                <th><center>รายละเอียดการรายงาน</center></th>
              </tr>
            </thead>
            <tbody>
              { 
                this.props.reportStore.showList2.map((element, index) => {
                  return (
                    <tr key={index} >
                        <td><center>{element.username}</center></td>
                        <td><center>{element.report}</center></td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
          <center><ButtonToggle color="primary" size="sm"  href="/authorizeReportAdmin" style={{marginTop:10}}> ย้อนกลับ </ButtonToggle></center>
        </Container>
      </div>
    );
  }
}

export default inject('reportStore')(observer(reportDetail));