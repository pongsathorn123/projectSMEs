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

class addInves extends Component {
    constructor(props) {
        super(props);
        
        }
      
      componentDidMount(){
        this.props.allProjectStore.showdetail();
      }
    
      showData = (event) => {
    
      }

      selectedMonth(e) {
        this.props.addinvesStore.month = e.target.value;
        console.log(e);
      }
      selectedYear(e) {
        this.props.addinvesStore.year = e.target.value;
        console.log(e);
      }

      invescountChange(e) {
        this.props.addinvesStore.investercount = e.target.value;
    }
    
    async buttonClick() {
        this.props.addinvesStore.addinvescount();
    } 
   
  render() {
    return (
      <div>
          {(cookies.get('userType') == "owner") ? <Nav_owner /> : ''}
            {(cookies.get('userType') == "inves") ? <Nav_inves /> : ''}
            {(cookies.get('userType') == "admin") ? <Nav_Admin /> : ''}
        <Container style={{ width:800}}>
            <h3 className="text-center" style={{ marginTop: 80 }}>เพิ่มจำนวนนักลงทุน</h3>
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
                                                value={this.props.allProjectStore.title} />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                                            <Form.Label >เลือกปี/เดือนที่ต้องการเพิ่มจำนวนนักลงทุน</Form.Label>
                                            <Row>
                                                <Col>
                                                <Form.Control as="select"  placeholder="เลือกเดือน" style={{width:250}} onChange={this.selectedMonth.bind(this)}>
                                                <option value="0" disabled selected>เลือกเดือน</option>
                                                <option value="Jan">เดือนมกราคม</option>
                                                <option value="Feb">เดือนกุมภาพันธ์</option>
                                                <option value="Mar">เดือนมีนาคม</option>
                                                <option value="Apr">เดือนเมษายน</option>
                                                <option value="May">เดือนพฤษภาคม</option>
                                                <option value="Jun">เดือนมิถุนายน</option>
                                                <option value="Jul">เดือนกรกฎาคม</option>
                                                <option value="Aug">เดือนสิงหาคม</option>
                                                <option value="Sep">เดือนกันยายน</option>
                                                <option value="Oct">เดือนตุลาคม</option>
                                                <option value="Nov">เดือนพฤศจิกายน</option>
                                                <option value="Dece">เดือนธันวาคม</option>
                                            </Form.Control>
                                                </Col>
                                                <Col style={{marginTop:10}}>
                                                <Form.Control as="select"  placeholder="เลือกปี" style={{width:250}} onChange={this.selectedYear.bind(this)}>
                                                <option value="0" disabled selected>ปี</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                            </Form.Control>
                                                </Col>
                                            </Row>
                                            
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label >ใส่จำนวนนักลงทุน</Form.Label>
                                            <Input type="number" min="0" style={{width:250}} onChange={this.invescountChange.bind(this)}></Input>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label >ใส่จำนวนเงินลงทุน</Form.Label>
                                            <Input type="number" min="0" style={{width:250}} ></Input>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            <Form.Group>
                                <Form.Label style={{marginLeft: 50, marginRight: 50, marginTop:20 }}>กรุณาส่งหลักฐานจำนวนนักลงทุนมาที่ pongsathorn.smes@gmail.com โดยมีเลขบัตรประชาชน และ ชื่อ-นามสกุลของนักลงทุนเพื่อให้แอดมินทำการตรวจสอบความถูกต้อง</Form.Label>
                            </Form.Group>
                            <center>
                                <Form.Label style={{ color: "red" }}>{this.props.addinvesStore.message}</Form.Label>  <br/>
                                <Button  style={{margin:2 ,marginTop:20, marginBottom :20}} onClick={this.buttonClick.bind(this)}>ยืนยัน</Button>
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





export default inject('allProjectStore', 'addinvesStore')(observer(addInves));
