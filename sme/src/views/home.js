import React, { Component } from 'react';
import { Container, Col, Row, Form ,Button ,Card } from 'react-bootstrap'
import Nav_owner from '../components/Nav_owner';
import home3 from '../image/home3.png';
import home4 from '../image/home4.png';





class home  extends Component {





    render() {
        return (
            <div>
                    <Nav_owner/>
            <Container>
                  <Row>
                    <Col>
                        <Card style={{ width: '40rem' ,marginLeft : 0 ,marginTop:30}}>
                         <Card.Header style={{ backgroundColor: '#63AFF8'}}>
                             SMEs คืออะไร
                         </Card.Header>
                         <h6 style={{paddingLeft:'40px' ,marginTop:30}}>
                         ธุรกิจ SMEs เป็นองค์กรที่มีส่วนสำคัญในการพัฒนาประเทศทั้งทางด้านเศรษฐกิจและสังคม 
                        โดย SMEs ย่อมาจากคำว่า Small and Medium Enterprises หมายถึง ธุรกิจขนาดกลางและขนาดย่อม 
                         </h6>
                         <Card.Img style={{ paddingLeft: 5 , paddingRight :5  }} variant="top" src={home3} />
                        <br/>
                        <br/>
                        </Card>

                    </Col>
                    <Col xs = '4' >
                        <Card style={{ width: '30rem' ,marginLeft : 0 ,marginTop:30}}>
                        <Card.Header style={{ backgroundColor: '#63AFF8'}}>
                             ประเภทของ SMEs
                         </Card.Header>

                         <Card.Img variant="top" src={home4} />
                        </Card>
                    </Col>
                </Row>
            </Container>






              


            </div>
        )
    }
}
export default home;
  