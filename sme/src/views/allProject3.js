import React, { Component } from 'react';
import Nav_owner from '../components/Nav_owner';
import Nav_inves from '../components/Nav_inves';
import Nav_Admin from '../components/Nav_Admin';
import Nav_notlogin from '../components/Nav_notlogin';
import cookies from "../cookies/cookie";
import { Card, Col, Row, Button, Table, CardColumns, CardDeck, Container, Form } from 'react-bootstrap';
import { observer, inject } from "mobx-react";
import { IoIosPeople } from "react-icons/io";
import HorizontalScroll from 'react-horizontal-scrolling'
import './createProject.css';


class AllProject3 extends Component{

  constructor(props) {
    super(props);
    
    }
    componentDidMount(){
        this.props.allProjectStore.showservice();
    
      }  
  
  showData = (event) => {

  }

  selectedcategory(e) {
    this.props.allProjectStore.category = e.target.value;
    console.log(e);
    this.props.allProjectStore.show5();
  }

  async buttonClick(smesId) {
    debugger
    cookies.set("smesId",smesId, { path: "/", maxAge: 86400 })
    console.log(cookies.get('smesId'))
    window.location.href = "/showSmesDetail";
    
  }

render(){   
return(
  
          <div> 
            {(cookies.get('userType') == "owner") ? <Nav_owner /> : ''}
            {(cookies.get('userType') == "inves") ? <Nav_inves /> : ''}
            {(cookies.get('userType') == "admin") ? <Nav_Admin /> : ''}
            {(cookies.get('userType') == undefined) ? <Nav_notlogin /> : ''}  
            
              <div>
                <Row style ={{marginTop:100}} > 
                  <Col xs="3" md="3" sm="3" >
                      <Card style ={{width:300, marginLeft:300}}>
                        <Form.Control as="select"  placeholder="หมวดหมู่ธุรกิจ" onChange={this.selectedcategory.bind(this)} >
                            <option value="1" disabled selected>หมวดหมู่ธุรกิจ</option>
                            <option value="ธุรกิจทั้งหมด">ธุรกิจทั้งหมด</option>
                            <option value="ยานพาหนะ 2 ล้อ">เกี่ยวกับยานพาหนะ 2 ล้อ</option>
                            <option value="ยานพาหนะ 4 ล้อ">เกี่ยวกับยานพาหนะ 4 ล้อขึ้นไป</option>
                            <option value="อาหาร">เกี่ยวกับอาหาร</option>
                            <option value="เครื่องดื่ม">เกี่ยวกับเครื่องดื่ม</option>
                            <option value="ตู้จำหน่ายอัตโนมัติ">เกี่ยวกับตู้จำหน่ายอัตโนมัติ</option>
                            <option value="สวน">เกี่ยวกับสวน</option>
                        </Form.Control>
                      </Card>
                      </Col>
                    <Col>
                    <Container >
                    <Table striped bordered hover size="sm"  responsive="sm" style ={{marginRight:100}}>
                
                    <thead style={{margin:10}}>
                        <tr>
                          <th><center>ชื่อธุรกิจ</center></th>
                          <th><center>จำนวนเงินลงทุนรวม</center></th>
                          <th><center>จำนวนนักลงทุนปัจจุบัน</center></th>
                          <th><center>เจ้าของธุรกิจ</center></th>
                          <th><center>รายละเอียด</center></th>
                        </tr>
                      </thead>
                      <tbody >
                        { 
                          this.props.allProjectStore.showList.map((element, index) => {
                            return (
                              <tr key={index} >
                                  <td style={{margin:15}}><center>{element.title}</center></td>
                                  <td style={{margin:15}}><center>{element.countinvesment} บาท</center></td>
                                  <td style={{margin:15}}><center>{element.countinvester} คน</center></td>
                                  <th style={{margin:15}}><center>{element.name}</center></th>
                                  <td style={{margin:10}}><center>
                                        <button type="button" class="btn btn-success btn-sm" style={{margin:10}}
                                                          onClick={() => { this.buttonClick(element.smesId)}}>ดูเพิ่มเติม</button>
                                      </center>
                                    </td>
                              </tr>
                            );
                          })
                        }
                      </tbody>
                  </Table>
                </Container>
              </Col>
             </Row>
          </div> 
        </div>
      );
    }
  }

export default inject('allProjectStore')(observer(AllProject3))
