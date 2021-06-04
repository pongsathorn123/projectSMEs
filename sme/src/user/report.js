import React, { Component } from 'react';
import {Form, Button, Container, Row, Col, Card,  } from 'react-bootstrap'
import { CardBody, CardHeader, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { observer, inject } from "mobx-react";
import cookies from "../cookies/cookie";
import Nav_owner from '../components/Nav_owner';
import Nav_inves from '../components/Nav_inves';
import Nav_Admin from '../components/Nav_Admin';
import { IoIosPeople,IoMdContact } from "react-icons/io";
import Nav_notlogin from '../components/Nav_notlogin';

class report extends Component {
    constructor(props) {
        super(props);
        
        }
        componentDidMount(){
            this.props.allProjectStore.showdetail();
        }
    
        showData = (event) => {
    
        }
        reportChange(e) {
            this.props.reportStore.report = e.target.value;
        }
        titleChange(value){
            this.props.reportStore.title = value;
        }
        async buttonClick() {
            this.props.reportStore.reportSme();
        }


  render() {
    return (
      <div>
          {(cookies.get('userType') == "owner") ? <Nav_owner /> : ''}
            {(cookies.get('userType') == "inves") ? <Nav_inves /> : ''}
            {(cookies.get('userType') == "admin") ? <Nav_Admin /> : ''}
        <Container style={{ width:800}}>
            <h3 className="text-center" style={{ marginTop: 80 }}>แจ้งปัญหา</h3>
            <Row>
                <Col>
                    <Card style={{ marginTop: 30 }}>
                        <CardBody style={{ marginTop: 20 }}>
                            <Row>
                                <Col>
                                    <Form style={{marginLeft: 50, marginRight: 50, width:250}}>
                                        <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                                            <Form.Label>ประเภทธุรกิจ</Form.Label>
                                            <Form.Control placeholder="ประเภทธุรกิจ" readOnly
                                                value={this.props.allProjectStore.smesType} />
                                            </Form.Group>
                                        <Form.Group>
                                            <Form.Label>ชื่อธุรกิจ</Form.Label>
                                            <Form.Control placeholder="ชื่อธุรกิจ" readOnly
                                                value={this.props.allProjectStore.title} onChange={this.titleChange.bind(this)}/>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label >รายละเอียด</Form.Label>
                                            <Form.Control as="textarea"  style={{width:250}} 
                                                onChange={this.reportChange.bind(this)} >
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            <Form.Group>
                            <Form.Label style={{marginLeft: 50, marginRight: 50, marginTop:20 }}>กรุณาส่งหลักฐานในการแจ้งปัญหามาที่ pongsathorn.smes@gmail.com เพื่อให้แอดมินทำการตรวจสอบและดำเนินการต่อ</Form.Label>
                            </Form.Group>
                            <center>
                                <Form.Label style={{ color: "red" }}></Form.Label>  <br/>
                                <Button  style={{margin:2 ,marginTop:20, marginBottom :20}} onClick={this.buttonClick.bind(this)} >ยืนยัน</Button>
                            </center>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}





export default inject('allProjectStore', 'reportStore')(observer(report));
