import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Nav_owner from '../components/Nav_owner';
import Nav_inves from '../components/Nav_inves';
import Nav_Admin from '../components/Nav_Admin';
import { observer, inject } from "mobx-react";
import cookies from "../cookies/cookie";
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import smesStore from '../store/smesStore';
import '../views/Setpage.css';
import { CardBody, CardHeader, Input, Label } from 'reactstrap';

class UpdateSmes extends Component {

  selectedYear(e) {
    this.props.smesdataStore.year = e.target.value;
  }
  
  selectedMonth(e) {
    this.props.smesdataStore.month = e.target.value;
  }

  no1Change(e) {
    this.props.smesdataStore.no1 = e.target.value;
  }
  no2Change(e) {
    this.props.smesdataStore.no2 = e.target.value;
  }
  no3Change(e) {
    this.props.smesdataStore.no3 = e.target.value;
  }

  aseanChange(e) {
    this.props.smesdataStore.asean = e.target.value;
  }
  chinaChange(e) {
    this.props.smesdataStore.china = e.target.value;
  }
  usaChange(e) {
    this.props.smesdataStore.usa = e.target.value;
  }
  japanChange(e) {
    this.props.smesdataStore.japan = e.target.value;
  }
  eu27Change(e) {
    this.props.smesdataStore.eu27 = e.target.value;
  }
 

  async btnClick() {
    this.props.smesdataStore.add();
  }

  render() {
    return (
      <div>
            {(cookies.get('userType') == "owner") ? <Nav_owner /> : ''}
            {(cookies.get('userType') == "inves") ? <Nav_inves /> : ''}
            {(cookies.get('userType') == "admin") ? <Nav_Admin /> : ''}
        <Container>
          <Card style={{ marginTop: 130 }}>
            <CardHeader className="text-center">
              <h3>อัพเดทข้อมูลธุรกิจประจำเดือน</h3>
            </CardHeader>
            <CardBody>
              <Form style={{ margin: 20, marginLeft: 50, marginRight: 50 }}>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <Row>
                    <Col>
                        <Form.Label>เลือกปี</Form.Label>
                        <Form.Control as="select"  placeholder="2021" onChange={this.selectedYear.bind(this)}>
                                        <option value="2021" disabled selected>2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                    </Form.Control>
                    </Col>
                    <Col>
                        <Form.Label>เลือกเดือน</Form.Label>
                        <Form.Control as="select"  placeholder="เลือกเดือน" onChange={this.selectedMonth.bind(this)}>
                                        <option value="Feb" disabled selected>เดือนกุมภาพันธ์</option>
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
                                        <option value="Dec">เดือนธันวาคม</option>
                                    </Form.Control>
                    </Col>
                </Row>
                </Form.Group>
                <Form.Group>
                  <Form.Label as="h5">ข้อมูลสินค้าส่งออก 3 ลำดับ</Form.Label>
                    <Form.Control style={{marginTop:10, width:500}} placeholder="สินค้าส่งออกลำดับที่1"
                        onChange={this.no1Change.bind(this)}/>
                    <Form.Control style={{marginTop:10, width:500}} placeholder="สินค้าส่งออกลำดับที่2"
                        onChange={this.no2Change.bind(this)}/>
                    <Form.Control style={{marginTop:10, width:500}} placeholder="สินค้าส่งออกลำดับที่3"
                        onChange={this.no3Change.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <Form.Label as="h5">ข้อมูลประเทศส่งออก 5 ลำดับ</Form.Label>
                    <Row>
                        <Col>
                            <Form.Label>ASEAN</Form.Label>
                            <Form.Control style={{marginTop:10}} placeholder="0.00%"
                                onChange={this.aseanChange.bind(this)}/>
                        </Col>
                        <Col>
                            <Form.Label>China</Form.Label>
                            <Form.Control style={{marginTop:10}} placeholder="0.00%"
                                onChange={this.chinaChange.bind(this)}/>
                        </Col>
                        <Col>
                            <Form.Label>USA</Form.Label>
                            <Form.Control style={{marginTop:10}} placeholder="0.00%"
                                onChange={this.usaChange.bind(this)}/>
                        </Col>
                        <Col>
                            <Form.Label>Japan</Form.Label>
                            <Form.Control style={{marginTop:10}} placeholder="0.00%"
                                onChange={this.japanChange.bind(this)}/>
                        </Col>
                        <Col>
                            <Form.Label>EU-27</Form.Label>
                            <Form.Control style={{marginTop:10}} placeholder="0.00%"
                                onChange={this.eu27Change.bind(this)}/>
                        </Col>
                    </Row>
                </Form.Group>
                <Row>
                  <Col style={{marginTop:20}}><center>
                  <Form.Label style={{ color: "red" }}>{this.props.smesdataStore.message}</Form.Label>  <br/>
                    <Button variant="primary" style={{}} onClick={this.btnClick.bind(this)}>เพิ่มข้อมูล</Button>{' '}
                    </center>
                  </Col>
                </Row>

              </Form>
            </CardBody>
          </Card>
        </Container>

      </div>


    );



  }
}

export default inject('smesdataStore')(observer(UpdateSmes));
