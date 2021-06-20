import React, { Component } from 'react';
import Nav_owner from '../components/Nav_owner';
import InvesChart from '../views/invesChart';
import InvesmentChart from '../views/invesmentChart';
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
  reportClick() {
    window.location.href = "/report";
  }

render(){   
return(
          <div> 
            {(cookies.get('userType') == "owner") ? <Nav_owner /> : ''}
            {(cookies.get('userType') == "inves") ? <Nav_inves /> : ''}
            {(cookies.get('userType') == "admin") ? <Nav_Admin /> : ''}
            {(cookies.get('userType') == undefined) ? <Nav_notlogin /> : ''}
              <div>
                  <Row style ={{margin:"auto", width:1500, marginTop:150}}>
                    <Col xs="12" md="8" sm="12" >
                      <Card >
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
                              <Card.Text style={{fontWeight: "bold"}} >ระยะเวลา (ระยะเวลาเริ่มต้นถึงสิ้นสุดการรับสมัคร)</Card.Text>
                              <Card.Text>{this.props.allProjectStore.dateStart} ถึง {this.props.allProjectStore.dateEnd}</Card.Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="12" md="12" sm="12" style={{padding:20}}>
                              <Card.Text style={{fontWeight: "bold"}} >จำนวนเงินในการลงทุน</Card.Text>
                              <Card.Text>ตั้งแต่ {this.props.allProjectStore.moneyMin} บาท จนถึง {this.props.allProjectStore.moneyMax} บาท</Card.Text>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs="12" md="4" sm="12">
                      <Card >
                        <Card.Body>
                          <Row>
                            <Col xs="12" md="12" sm="12" style={{marginLeft:10, marginBottom:2}}>
                              <Card.Text style={{fontWeight: "bold"}}>ข้อมูลการติดต่อ</Card.Text>
                              <Card.Text>เบอร์โทร : {this.props.allProjectStore.tel}</Card.Text>
                              <Card.Text>อีเมล์ : {this.props.allProjectStore.email}</Card.Text>
                              <Card.Text>เฟสบุ๊ค : {this.props.allProjectStore.facebook}</Card.Text>
                              <Card.Text>ไลน์ไอดี : {this.props.allProjectStore.lineid}</Card.Text>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card>
                        <InvesChart />
                        <InvesmentChart />
                      </Card>
                    </Col>
                  </Row>
                  <center>
                    {(cookies.get('userType') == "inves") ? <button type="button" class="btn btn-danger btn-sm" onClick={this.reportClick.bind(this)}>แจ้งปัญหา</button> : ''}
                    <button type="button" class="btn btn-success btn-sm" style={{margin:25}} onClick={this.returnClick.bind(this)}>กลับหน้าหลัก</button>
                  </center>
              </div>
        </div>
      );
    }
  }

export default inject('allProjectStore')(observer(showSmesDetail))
