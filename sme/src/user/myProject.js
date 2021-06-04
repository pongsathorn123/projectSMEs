import React, { Component } from 'react';
import Nav_owner from '../components/Nav_owner';
import Nav_inves from '../components/Nav_inves';
import Nav_Admin from '../components/Nav_Admin';
import Nav_notlogin from '../components/Nav_notlogin';
import cookies from "../cookies/cookie";
import { Card, Col, Row, Button, Table, CardColumns, CardDeck, Container, Form } from 'react-bootstrap';
import { observer, inject } from "mobx-react";
import { IoIosPeople } from "react-icons/io";


class myProject extends Component{

  constructor(props) {
    super(props);
    
    }
  

  componentDidMount(){
    this.props.myProjectStore.show();

  }
 
  showData = (event) => {

  }

  async detailClick(smesId) {
    cookies.set("smesId",smesId, { path: "/", maxAge: 86400 })
    window.location.href = "/myProjectDetail";
    
  }
  async editClick(smesId) {
    cookies.set("smesId",smesId, { path: "/", maxAge: 86400 })
    window.location.href = "/editSmes";
    
  }
  async deleteClick(smesId) {
    var txt;
    if (window.confirm("คุณต้องการลบใช่ หรือไม่")) {
        this.props.authorStore.smesId = smesId;
        this.props.authorStore.delete();
        window.location.href = "/myProject";
    } else {
        window.location.href = "/myProject";
    }
  }
    async addinvesClick(smesId) {
      cookies.set("smesId",smesId, { path: "/", maxAge: 86400 })
          window.location.href = "/addInves";
      }
    
  


render(){   
return(
  
          <div> 
            {(cookies.get('userType') == "owner") ? <Nav_owner /> : ''}
            {(cookies.get('userType') == "inves") ? <Nav_inves /> : ''}
            {(cookies.get('userType') == "admin") ? <Nav_Admin /> : ''}
            {(cookies.get('userType') == undefined) ? <Nav_notlogin /> : ''}  
            
              <div>
                <Container style ={{marginLeft:500, width:1200, marginTop:80 }}>
              
                  <Row xs="12" md="12" sm="12">
                    {
                    this.props.myProjectStore.showList.map((element, index) => {
                        return (
                          <CardDeck style ={{marginLeft:10, padding: 10, width:800}}>          
                            <Card >
                                  <Card.Body>
                                    <Row>
                                      <Col xs="4" md="4" sm="4" className="icon-size" >
                                        <IoIosPeople style ={{marginLeft:25}}/>
                                      </Col>
                                      <Col xs="4" md="4" sm="4" style={{marginTop:10}}>
                                        <Card.Text style={{fontWeight: "bold"}}>{element.title}</Card.Text>
                                        <Card.Text>{element.smesType}</Card.Text>
                                      </Col>
                                        <Col xs="4" md="4" sm="4" >
                                              <button type="button" class="btn btn-success btn-sm" style={{marginTop:10, marginRight:5}}
                                              onClick={() => { this.detailClick(element.smesId)}}>ดูเพิ่มเติม</button>
                                              <button type="button" class="btn btn-info btn-sm" style={{marginTop:10, marginRight:5}}
                                              onClick={() => { this.editClick(element.smesId)}}>แก้ไข</button>
                                              <button type="button" class="btn btn-danger btn-sm" style={{marginTop:10, marginRight:5}}
                                              onClick={() => { this.deleteClick(element.smesId)}}>ลบ</button>
                                               <button type="button" class="btn btn-secondary btn-sm" style={{marginTop:10, width:163}}
                                              onClick={() => { this.addinvesClick(element.smesId)}}>เพิ่มจำนวนนักลงทุน</button>
                                        </Col>
                                    </Row>
                                  </Card.Body>
                                
                            </Card>
                          </CardDeck> 
                        );
                      })
                    }
                    
                  </Row>
                  </Container>
              </div>
        </div>
      );
    }
  }

export default inject('myProjectStore','authorStore')(observer(myProject))
