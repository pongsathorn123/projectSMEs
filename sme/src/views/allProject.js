import React, { Component } from 'react';
import Nav_owner from '../components/Nav_owner';
import Nav_inves from '../components/Nav_inves';
import Nav_Admin from '../components/Nav_Admin';
import Nav_notlogin from '../components/Nav_notlogin';
import Nav_sidebar from '../components/Nav_sidebar';
import cookies from "../cookies/cookie";
import { Card, Col, Row, Button, Table, CardColumns, CardDeck, Container } from 'react-bootstrap';
import { observer, inject } from "mobx-react";
import { IoIosPeople } from "react-icons/io";
import './createProject.css';

class AllProject extends Component{

  constructor(props) {
    super(props);
    
    }
  

  componentDidMount(){
    this.props.allProjectStore.show();

  }

  showData = (event) => {

  }

  async buttonClick(smesId) {
    cookies.set("smesId",smesId, { path: "/", maxAge: 86400 })
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
                <Container style ={{margin:"auto", width:1200, marginTop:50 }}>
              <Row > 
                <Col xs="3" md="3" sm="3" style ={{padding: 10,}}>
              <Nav_sidebar />
              </Col>
                  <Col xs="9" md={{ span: 6, offset: 1 }} sm="9">
                  <Row>
                    {
                    this.props.allProjectStore.showList.map((element, index) => {
                        return (
                          <CardDeck style ={{marginLeft:10, padding: 10, width:800}}>          
                            <Card >
                                  <Card.Body>
                                    <Row>
                                      <Col xs="6" md="4" sm="6" className="icon-size" >
                                        <IoIosPeople style ={{marginLeft:25}}/>
                                      </Col>
                                      <Col xs="6" md="5" sm="6">
                                        <Card.Text style={{fontWeight: "bold"}}>{element.title}</Card.Text>
                                        <Card.Text>{element.smesType}</Card.Text>
                                      </Col>
                                      <Col xs="12" md="3" sm="12">
                                        <button type="button" class="btn btn-success btn-sm" style={{marginTop:25}}
                                                onClick={() => { this.buttonClick(element.smesId)}}>Lead more</button>
                                      </Col>
                                    </Row>
                                  </Card.Body>
                                
                            </Card>
                          </CardDeck> 
                        );
                      })
                    }
                    </Row>
                    </Col>
                  </Row>
                  </Container>
              </div>
        </div>
      );
    }
  }

export default inject('allProjectStore')(observer(AllProject))
