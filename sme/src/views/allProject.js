import React, { Component } from 'react';
import { Card, CardBody  } from 'react-bootstrap';
import Nav_owner from '../components/Nav_owner';
import Nav_inves from '../components/Nav_inves';
import cookies from "../cookies/cookie";
import { Container, Col, Row, Button, Table } from 'react-bootstrap';
import sme1 from '../image/sme1.png';
import sme2 from '../image/sme2.png';
import sme3 from '../image/sme3.png';
import { observer, inject } from "mobx-react";

class AllProject extends Component{

  constructor(props) {
    super(props);
    
    }
  
  componentDidMount(){
    this.props.allProjectStore.show();
    console.log();
  }

  showData = (event) => {

  }

render(){   
return(
          <div> 
            {(cookies.get('userType') == "owner") ? <Nav_owner /> : <Nav_inves />}
              <div>
              <Row > 
              {
              this.props.allProjectStore.showList.map((element, index) => {
                  return (
                    <Col xs="12" md="4" sm="12" style ={{marginTop:10}}>             
                        <Card   border="primary" style={{ width: '30rem' ,marginLeft : 50 ,marginTop:10}}>
                            <Card.Img variant="top" src={sme1} />
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>
                                <Card.Text>{element.smesType}</Card.Text>
                               <Button variant="primary"> Lead more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                  );
                })
              }
                </Row>
              </div>
        </div>
      );
    }
  }

export default inject('allProjectStore')(observer(AllProject))
