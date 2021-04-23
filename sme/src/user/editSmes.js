import React, { Component } from 'react';
import {Form, Button, Container, Row, Col, Card, } from 'react-bootstrap'
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

class editSmes extends Component {

    componentDidMount(){
        this.props.editSmesStore.showdetail();
    }

    showData = (event) => {

    }
    
    selectedSmestype(e) {
        this.props.editSmesStore.smesType = e.target.value;
    }

    titleChange(e) {
        this.props.editSmesStore.title = e.target.value;
    }

    descriptionChange(e) {
        this.props.editSmesStore.description = e.target.value;
    } 

    dateStartChange(e) {
        this.props.editSmesStore.dateStart = e.target.value;
    }

    dateEndChange(e) {
        this.props.editSmesStore.dateEnd = e.target.value;
    }

    moneyMaxChange(e) {
        this.props.editSmesStore.moneyMax = e.target.value;
    }

    moneyMinChange(e) {
        this.props.editSmesStore.moneyMin = e.target.value;
    }

    detailChange(e) {
        this.props.editSmesStore.detail = e.target.value;
    }

    telChange(e) {
        this.props.editSmesStore.tel = e.target.value;
    }

    emailChange(e) {
        this.props.editSmesStore.email = e.target.value;
    }

    facebookChange(e) {
        this.props.editSmesStore.facebook = e.target.value;
    }

    lineidChange(e) {
        this.props.editSmesStore.lineid = e.target.value;
    }

    async buttonClick() {
      this.props.editSmesStore.editSmes();
    }

    async returnClick() {
      window.location.href = "/myProject";
    }

  render() {
    return (
      <div>
          {(cookies.get('userType') == "owner") ? <Nav_owner /> : ''}
            {(cookies.get('userType') == "inves") ? <Nav_inves /> : ''}
            {(cookies.get('userType') == "admin") ? <Nav_Admin /> : ''}
        <Container>
            <h3 className="text-center" style={{ marginTop: 80 }}>แก้ไขข้อมูลธุรกิจ</h3>
            <Row>
                <Col>
                    <Card style={{ marginTop: 30 }}>
                        <CardBody>
                            <Form style={{ margin: 20, marginLeft: 50, marginRight: 50 }}>
                                <Form.Label>เริ่มแรก ! คุณต้องกำหนดประเภทธุรกิจของคุณ ประเภทธุรกิจสามารถเปลี่ยนในภายหลังได้</Form.Label>
                                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                                <Form.Label>ประเภทธุรกิจ</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>

                                <Form.Control placeholder="ประเภทธุรกิจ" readOnly
                                value={this.props.editSmesStore.smesType} />

                                </Form.Group>
                                <Form.Group>
                                <Form.Label>ชื่อธุรกิจ</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                                <Form.Control placeholder="ชื่อธุรกิจ"
                                onChange={this.titleChange.bind(this)}
                                value={this.props.editSmesStore.title} />
                                </Form.Group>
                                <Form.Group>
                                <Form.Label>คำอธิบายโดยย่อ</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                                <Form.Control placeholder="อธิบาย..."
                                onChange={this.descriptionChange.bind(this)}
                                value={this.props.editSmesStore.description} />
                                </Form.Group>
                                <Form.Label>กรุณากรอกข้อมูลที่มีเครื่องหมาย</Form.Label><Form.Label style={{color:"red", padding:5}}>*</Form.Label><Form.Label> ให้ครบ</Form.Label>
                            </Form>
                        </CardBody>
                    </Card>
                <Card style={{ marginTop: 80 }}>
              <CardBody>
                <Form style={{ margin: 10, marginLeft: 50, marginRight: 50 }}>
                  <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label style={{fontWeight: "bold" , fontSize:"18px"}}>ระยะเวลาที่เปิดรับ</Form.Label>
                    <Row>
                      <Col>
                        <Form.Label>วันเริ่ม</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                          <Input type="date" value="2017-06-01" 
                          onChange={this.dateStartChange.bind(this)}
                          value={this.props.editSmesStore.dateStart} >
                          </Input>
                      </Col>
                      <Col>
                        <Form.Label>วันสิ้นสุด</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                            <Input type="date" value="2017-06-01"
                            onChange={this.dateEndChange.bind(this)}
                            value={this.props.editSmesStore.dateEnd} >
                            </Input>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label style={{fontWeight: "bold" , fontSize:"18px"}}>ยอดเงินที่สามารถร่วมลงทุน</Form.Label>

                    <Row>
                      <Col>
                        <Form.Label>น้อยสุด</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                          <Input type="number" placeholder="0.00"
                          onChange={this.moneyMinChange.bind(this)}
                          value={this.props.editSmesStore.moneyMin} >
                          </Input>
                      </Col>
                      <Col>
                        <Form.Label>มากสุด</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                          <Input type="number" placeholder="0.00"
                          onChange={this.moneyMaxChange.bind(this)}
                          value={this.props.editSmesStore.moneyMax} >
                          </Input>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label style={{fontWeight: "bold" , fontSize:"18px"}}>รายละเอียดโปรเจคโดยละเอียด</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                      <Form.Control placeholder="อธิบาย..."
                      onChange={this.detailChange.bind(this)}
                      value={this.props.editSmesStore.detail} >
                      </Form.Control>
                  </Form.Group>


                  <Form.Label style={{fontWeight: "bold" , fontSize:"18px"}}>ข้อมูลติดต่อ</Form.Label>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>เบอร์โทรศัพท์</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                          <Input type="text" placeholder="กรอกเบอร์โทรศัพท์" maxLength="10"
                          onChange={this.telChange.bind(this)}
                          value={this.props.editSmesStore.tel} >
                          </Input>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                          <Input type="text" placeholder="กรอก E-mail"
                          onChange={this.emailChange.bind(this)}
                          value={this.props.editSmesStore.email} >
                          </Input>
                      </Form.Group>
                    </Col>

                  </Row>

                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Facebook</Form.Label>
                          <Input type="text" placeholder="กรอก Facebook"
                          onChange={this.facebookChange.bind(this)}
                          value={this.props.editSmesStore.facebook} >
                          </Input>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Line Id</Form.Label>
                          <Input type="text" placeholder="กรอก Id Line"
                          onChange={this.lineidChange.bind(this)}
                          value={this.props.editSmesStore.lineid} >
                          </Input>
                      </Form.Group>
                    </Col>

                  </Row>

                  <Form.Label style={{marginLeft:10}}>กรุณากรอกข้อมูลที่มีเครื่องหมาย</Form.Label><Form.Label style={{color:"red", padding:5}}>*</Form.Label><Form.Label> ให้ครบ</Form.Label>
                  
                </Form>
              </CardBody>
            </Card>
                </Col>
            </Row>
            
            <center>
              <Button variant="secondary" style={{margin:2, marginTop:20, marginBottom :20}} onClick={this.returnClick.bind(this)} >ย้อนกลับ</Button>
            
              <Button  style={{margin:2 ,marginTop:20, marginBottom :20}} onClick={this.buttonClick.bind(this)} >บันทึก</Button>
            </center>
            
           
        </Container>
      </div>
    )
  }
}





export default inject('editSmesStore')(observer(editSmes));
