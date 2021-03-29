import React, { Component } from 'react';
import { Container, Col, Row, Form ,Button ,Card } from 'react-bootstrap'
import Nav_owner from '../components/Nav_owner';
import home3 from '../image/home3.png';
import home4 from '../image/home4.png';





class authorizeSme  extends Component {





    render() {
        return (
            <div>
                    <Nav_owner/>
                <Container>
                    <h2>กำลังตรวจสอบ</h2>
                    <Button variant="primary" href="/allProject"> กลับหน้าหลัก </Button>
                </Container>
            </div>
        )
    }
}
export default authorizeSme;
  