import React, { Component } from 'react';
import { Container, Col, Row, Form ,Button ,Card } from 'react-bootstrap'
import Nav_owner from '../components/Nav_owner';
import home1 from '../image/home1.png';
import home2 from '../image/home2.png';




class home  extends Component {





    render() {
        return (
            <div>
                    <Nav_owner/>
            <Container>
                  <Row>
                    <Col>
                        <Card style={{ width: '30rem' ,marginLeft : 80 ,marginTop:30}}>
                    
                         <Card.Img variant="top" src={home1} />

                        </Card>
                    </Col>
                    <Col xs = '4' >
                    <h5 style={{marginTop: 30}}> อยากเป็นนักธุรกิจ SMEs ต้องเตรียมตัวอย่างไรบ้างมาดูกัน</h5>
                        <Card style={{ width: '30rem' ,marginLeft : 0 ,marginTop:40}}>
                         <Card.Img variant="top" src={home2} />
                        </Card>
                    </Col>
                </Row>
            </Container>






              


            </div>
        )
    }
}
export default home;
  