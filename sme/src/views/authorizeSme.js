import React, { Component } from 'react';
import { Container, Col, Row, Form, Button, Card, Jumbotron } from 'react-bootstrap'
import Nav_owner from '../components/Nav_owner';
import home3 from '../image/home3.png';
import home4 from '../image/home4.png';





class authorizeSme extends Component {





    render() {
        return (
            <div>
                <Nav_owner />
                <Container >
                    <Card  style={{marginLeft:"auto" ,marginRight:"auto", marginTop:80 , width:700 , height:400}}>
                        <Card.Body>
                            <h2>กำลังตรวจสอบ</h2>
                            <Button variant="primary" href="/allProject"> กลับหน้าหลัก </Button>
                        </Card.Body>
                    </Card>

                </Container>
            // </div>
            // <div>
            //     <Nav_owner />
            //     <Jumbotron>
            //         <h1>กำลังตรวจสอบ...</h1>
            //         <p>
            //             กรุณารอการตรวจสอบ ใช้เวลาตรวจสอบประมาณ 2-3 วัน
            //         </p>
            //         <p>
            //             <Button variant="primary">กลับหน้าหลัก</Button>
            //         </p>
            //     </Jumbotron>
            // </div>

        )
    }
}
export default authorizeSme;
