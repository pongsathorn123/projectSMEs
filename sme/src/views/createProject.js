import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Nav_owner from '../components/Nav_owner';
import Nav_inves from '../components/Nav_inves';
import Nav_Admin from '../components/Nav_Admin';
import { observer, inject } from "mobx-react";
import cookies from "../cookies/cookie";
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import smesStore from '../store/smesStore';
import './createProject.css';
import '../views/Setpage.css';
import { CardBody, CardHeader, Input, Label } from 'reactstrap';

class CreateProject extends Component {

  selectedSmestype(e) {
    this.props.smesStore.smesType = e.target.value;
  }

  titleChange(e) {
    this.props.smesStore.title = e.target.value;
  }

  descriptionChange(e) {
    this.props.smesStore.description = e.target.value;
  }

  async btnClick() {
    this.props.smesStore.smes();
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
              <h3>สร้างโปรเจค</h3>
            </CardHeader>
            <CardBody>
              <Form style={{ margin: 20, marginLeft: 50, marginRight: 50 }}>
                <Form.Label>เริ่มแรก ! คุณต้องกำหนดประเภทธุรกิจของคุณ ประเภทธุรกิจสามารถเปลี่ยนในภายหลังได้</Form.Label>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                  <Form.Label>ประเภทธุรกิจ</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>

                  <Form.Control style={{ borderRadius: 12 }} as="select" size="md" custom onChange={this.selectedSmestype.bind(this)}>
                    <option value="1" disabled selected>เลือกประเภทธุรกิจ</option>
                    <option value="ธุรกิจด้านการผลิต">ธุรกิจด้านการผลิต</option>
                    <option value="ธุรกิจด้านการผลิต">ธุรกิจการค้า</option>
                    <option value="ธุรกิจด้านการผลิต">ธุรกิจด้านการบริการ</option>
                  </Form.Control>

                </Form.Group>
                <Form.Group>
                  <Form.Label>ชื่อธุรกิจ</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                  <Form.Control placeholder="ชื่อธุรกิจ"
                    onChange={this.titleChange.bind(this)}
                    value={this.props.smesStore.title} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>คำอธิบายโดยย่อ</Form.Label><Form.Label style={{color:"red"}}>*</Form.Label>
                  <Form.Control placeholder="อธิบาย..."
                    onChange={this.descriptionChange.bind(this)}
                    value={this.props.smesStore.description} />
                </Form.Group>
                <Form.Label>กรุณากรอกข้อมูลที่มีเครื่องหมาย</Form.Label><Form.Label style={{color:"red", padding:5}}>*</Form.Label><Form.Label> ให้ครบ</Form.Label>
                <Row>
                  <Col style={{marginTop:20}}><center>
                  <Form.Label style={{ color: "red" }}>{this.props.smesStore.message}</Form.Label>  <br/>
                    <Button variant="primary" style={{}} onClick={this.btnClick.bind(this)}>ต่อไป</Button>{' '}
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

export default inject('smesStore')(observer(CreateProject));
