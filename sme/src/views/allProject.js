import React, { Component } from 'react';
import Nav_owner from '../components/Nav_owner';
import Nav_inves from '../components/Nav_inves';
import Nav_Admin from '../components/Nav_Admin';
import Nav_notlogin from '../components/Nav_notlogin';
import cookies from "../cookies/cookie";
import { Card, Col, Row, Button, Table, CardColumns, CardDeck, Container, Form } from 'react-bootstrap';
import { observer, inject } from "mobx-react";
import { IoIosPeople } from "react-icons/io";
import './createProject.css';


class AllProject extends Component{

  constructor(props) {
    super(props);
    
    }
  

  
  allProject(){
    window.location.href = "/allProject1";
  }
  commercial(){
    window.location.href = "/allProject2";
  }
  service(){
    window.location.href = "/allProject3";
  }
  manufacturing(){
    window.location.href = "/allProject4";
  }
  
 
  showData = (event) => {

  }

  async buttonClick(smesId) {
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
              <Row style={{margin:"auto",padding:50,marginTop:70, width:1200}}>
                <Col style={{padding:20}}>
                <Card  className="text-center" onClick={this.allProject.bind(this)}>
                    <Card.Body>
                      <Card.Text>
                        ธุรกิจทั้งหมด
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="text-center" style={{marginTop:20}} onClick={this.manufacturing.bind(this)}>
                    <Card.Body>
                        <Card.Text>
                          ธุรกิจด้านการผลิต
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col style={{padding:20}} >
                <Card className="text-center" onClick={this.commercial.bind(this)}>
                    <Card.Body>
                      <Card.Text>
                        ธุรกิจด้านการค้า
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{marginTop:20}} className="text-center" onClick={this.service.bind(this)}>
                    <Card.Body>
                        <Card.Text>
                          ธุรกิจด้านการบริการ
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
        </div>
      );
    }
  }

export default inject('allProjectStore')(observer(AllProject))
