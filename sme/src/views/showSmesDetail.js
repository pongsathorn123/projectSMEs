import React, { Component } from 'react';
import Nav_owner from '../components/Nav_owner';
import Nav_inves from '../components/Nav_inves';
import Nav_Admin from '../components/Nav_Admin';
import Nav_notlogin from '../components/Nav_notlogin';
import cookies from "../cookies/cookie";
import { Card, Col, Row, Button, Table, Container } from 'react-bootstrap';
import { observer, inject } from "mobx-react";
import { IoIosPeople,IoMdContact } from "react-icons/io";

class showSmesDetail extends Component{

  constructor(props) {
    super(props);
    
    }
  
  componentDidMount(){
    this.props.allProjectStore.showdetail();
  }

  showData = (event) => {

  }

  returnClick() {
    window.location.href = "/allProject";
  }

render(){   
return(
          <div> 
            {(cookies.get('userType') == "owner") ? <Nav_owner /> : ''}
            {(cookies.get('userType') == "inves") ? <Nav_inves /> : ''}
            {(cookies.get('userType') == "admin") ? <Nav_Admin /> : ''}
            {(cookies.get('userType') == undefined) ? <Nav_notlogin /> : ''}
              <div>
                <Container style ={{margin:"auto", width:1200, marginTop:50 }}>
                  <Row>
                    <Col xs="12" md="8" sm="12">
                      <Card>
                        <Card.Body>
                          <Row>
                            <Col xs="12" md="2" sm="12" className="icon-size">
                            <IoIosPeople style ={{marginLeft:25}}/>
                            </Col>
                            <Col xs="12" md="8" sm="12" style={{marginTop:15}}>
                              <Card.Text style={{fontWeight: "bold"}}>{this.props.allProjectStore.title}</Card.Text>
                              <Row>
                              <IoMdContact style={{margin:3}} />
                              <Card.Text> โพสโดย : {this.props.allProjectStore.name}</Card.Text>
                              </Row>
                            </Col>
                          </Row>
                          <hr/>
                          <Row>
                            <Col xs="12" md="12" sm="12" style={{padding:20}}>
                              <Card.Text style={{fontWeight: "bold"}} >รายละเอียด</Card.Text>
                              <Card.Text>{this.props.allProjectStore.detail}</Card.Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="12" md="12" sm="12" style={{padding:20}}>
                              <Card.Text style={{fontWeight: "bold"}} >ระยะเวลา</Card.Text>
                              <Card.Text>{this.props.allProjectStore.dateStart} - {this.props.allProjectStore.dateEnd}</Card.Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="12" md="12" sm="12" style={{padding:20}}>
                              <Card.Text style={{fontWeight: "bold"}} >จำนวนเงินในการลงทุน</Card.Text>
                              <Card.Text>{this.props.allProjectStore.moneyMin} - {this.props.allProjectStore.moneyMax}</Card.Text>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs="12" md="4" sm="12">
                      <Card>
                        <Card.Body>
                          <Row>
                            <Col xs="12" md="12" sm="12" style={{padding:10,marginLeft:10, marginBottom:10}}>
                              <Card.Text style={{fontWeight: "bold"}}>ข้อมูลการติดต่อ</Card.Text>
                              <Card.Text>เบอร์โททร : {this.props.allProjectStore.tel}</Card.Text>
                              <Card.Text>อีเมล์ : {this.props.allProjectStore.email}</Card.Text>
                              <Card.Text>เฟสบุ๊ค : {this.props.allProjectStore.facebook}</Card.Text>
                              <Card.Text>ไลน์ไอดี : {this.props.allProjectStore.lineid}</Card.Text>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <center><button type="button" class="btn btn-success btn-sm" style={{marginTop:25}} onClick={this.returnClick.bind(this)}>กลับหน้าหลัก</button></center>
                </Container>
              </div>
        </div>
      );
    }
  }

export default inject('allProjectStore')(observer(showSmesDetail))
