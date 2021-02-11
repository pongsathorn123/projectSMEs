import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Nav_owner from './components/Nav_owner';
import Nav_inves from './components/Nav_inves';
import cookies from "./cookies/cookie";
import { Container, Col, Row, Button } from 'react-bootstrap';
import sme1 from './image/sme1.png';
import sme2 from './image/sme2.png';
import sme3 from './image/sme3.png';


class createProject extends Component{

render(){
        return(
          <div>
             
            {(cookies.get('userType') == "owner") ? <Nav_owner /> : <Nav_inves />}
            <div>
                 <center> <h1>SMES Project</h1> </center>
                <h6 style= {{ marginLeft: 80 , marginRight:50 } }>
                    Finding Project for investment and all project in FundingChain was proof by
                  blockchain technology,It make your invest better and easier. Let's fund
                  Finding Project for investment and all 
                  project in FundingChain was proof by
                  blockchain technology,It make your 
                  invest better and easier. Let's fund
                  Finding Project for investment and all project in FundingChain was proof by
                  blockchain technology,It make your 
                  invest better and easier. Let's fund
                  Finding Project for investment and all project in FundingChain was proof by
                  blockchain technology,It make your invest better and easier. Let's fund
                  Finding Project for investment and all project in FundingChain was proof by
                  blockchain technology,It make your invest better and easier. Let's fund
                </h6>

                <br/>
                <br/>

                <Container>
                  <Row>
                    <Col>
                        <Card   border="primary" style={{ width: '18rem' ,marginLeft : 50 ,marginTop:10}}>
                            <Card.Img variant="top" src={sme1} />
                            <Card.Body>
                            <Card.Title>Project 1</Card.Title>
                            <Card.Text>
                          The company deals with the export of food.
                          Foreign country       
                          </Card.Text>
                        <Button variant="primary"> Lead more</Button>
                        </Card.Body>
                         </Card>
                     </Col>

                <Col xs={3}>
                  <Card  border="primary" style={{ width: '18rem' ,marginLeft : 0, marginTop:10 }}>
                  <Card.Img variant="top" src={sme2} />
                      <Card.Body>
                          <Card.Title>Project 2</Card.Title>
                          <Card.Text>
                          The company deals with the export of food.
                          Foreign country       
                          </Card.Text>
                        <Button variant="primary"> Lead more</Button>
                    </Card.Body>
                  </Card>
                </Col>

                  <Col>
                  <Card  border="primary" style={{ width: '18rem' ,marginLeft : 100, marginTop:10 }}>
                  <Card.Img variant="top" src={sme3} />
                      <Card.Body>
                          <Card.Title>Project 3</Card.Title>
                          <Card.Text>
                          The company deals with the export of food.
                          Foreign country    
                          </Card.Text>
                        <Button variant="primary"> Lead more</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <br/>
              <Row>
                    <Col>
                        <Card   border="primary" style={{ width: '18rem' ,marginLeft : 50 ,marginTop:10}}>
                            <Card.Img variant="top" src="sme1/100px180" />
                            <Card.Body>
                            <Card.Title>Project 1</Card.Title>
                            <Card.Text>
                          The company deals with the export of food.
                          Foreign country       
                          </Card.Text>
                        <Button variant="primary"> Lead more</Button>
                        </Card.Body>
                         </Card>
                     </Col>

                <Col xs={3}>
                  <Card  border="primary" style={{ width: '18rem' ,marginLeft : 0, marginTop:10 }}>
                  <Card.Img variant="top" src="sme1/100px180" />
                      <Card.Body>
                          <Card.Title>Project 2</Card.Title>
                          <Card.Text>
                          The company deals with the export of food.
                          Foreign country       
                          </Card.Text>
                        <Button variant="primary"> Lead more</Button>
                    </Card.Body>
                  </Card>
                </Col>

                  <Col>
                  <Card  border="primary" style={{ width: '18rem' ,marginLeft : 100, marginTop:10 }}>
                  <Card.Img variant="top" src="sme1/100px180" />
                      <Card.Body>
                          <Card.Title>Project 3</Card.Title>
                          <Card.Text>
                          The company deals with the export of food.
                          Foreign country    
                          </Card.Text>
                        <Button variant="primary"> Lead more</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <br/>
              <Row>
                    <Col>
                        <Card   border="primary" style={{ width: '18rem' ,marginLeft : 50 ,marginTop:10}}>
                            <Card.Img variant="top" src="sme1/100px180" />
                            <Card.Body>
                            <Card.Title>Project 1</Card.Title>
                            <Card.Text>
                          The company deals with the export of food.
                          Foreign country       
                          </Card.Text>
                        <Button variant="primary"> Lead more</Button>
                        </Card.Body>
                         </Card>
                     </Col>

                <Col xs={3}>
                  <Card  border="primary" style={{ width: '18rem' ,marginLeft : 0, marginTop:10 }}>
                  <Card.Img variant="top" src="sme1/100px180" />
                      <Card.Body>
                          <Card.Title>Project 2</Card.Title>
                          <Card.Text>
                          The company deals with the export of food.
                          Foreign country       
                          </Card.Text>
                        <Button variant="primary"> Lead more</Button>
                    </Card.Body>
                  </Card>
                </Col>

                  <Col>
                  <Card  border="primary" style={{ width: '18rem' ,marginLeft : 100, marginTop:10 }}>
                  <Card.Img variant="top" src="sme1/100px180" />
                      <Card.Body>
                          <Card.Title>Project 3</Card.Title>
                          <Card.Text>
                          The company deals with the export of food.
                          Foreign country    
                          </Card.Text>
                        <Button variant="primary"> Lead more</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <br/>
              <Row>
                    <Col>
                        <Card   border="primary" style={{ width: '18rem' ,marginLeft : 50 ,marginTop:10}}>
                            <Card.Img variant="top" src="sme1/100px180" />
                            <Card.Body>
                            <Card.Title>Project 1</Card.Title>
                            <Card.Text>
                          The company deals with the export of food.
                          Foreign country       
                          </Card.Text>
                        <Button variant="primary"> Lead more</Button>
                        </Card.Body>
                         </Card>
                     </Col>

                <Col xs={3}>
                  <Card  border="primary" style={{ width: '18rem' ,marginLeft : 0, marginTop:10 }}>
                  <Card.Img variant="top" src="sme1/100px180" />
                      <Card.Body>
                          <Card.Title>Project 2</Card.Title>
                          <Card.Text>
                          The company deals with the export of food.
                          Foreign country       
                          </Card.Text>
                        <Button variant="primary"> Lead more</Button>
                    </Card.Body>
                  </Card>
                </Col>

                  <Col>
                  <Card  border="primary" style={{ width: '18rem' ,marginLeft : 100, marginTop:10 }}>
                  <Card.Img variant="top" src="sme1/100px180" />
                      <Card.Body>
                          <Card.Title>Project 3</Card.Title>
                          <Card.Text>
                          The company deals with the export of food.
                          Foreign country    
                          </Card.Text>
                        <Button variant="primary"> Lead more</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <br/>
              <br/>
            </Container>
         </div>
        </div>


         );
        
    
    
    }
}

export default createProject;