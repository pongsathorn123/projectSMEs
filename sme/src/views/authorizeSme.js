import React, { Component } from 'react';
import { Container, Col, Row, Form, Button, Card, Jumbotron } from 'react-bootstrap'
import Nav_owner from '../components/Nav_owner';
import Nav_inves from '../components/Nav_inves';
import Nav_Admin from '../components/Nav_Admin';
import cookies from "../cookies/cookie";


class authorizeSme extends Component {

    render() {
        return (
            <div>
                {(cookies.get('userType') == "owner") ? <Nav_owner /> : ''}
                {(cookies.get('userType') == "inves") ? <Nav_inves /> : ''}
                {(cookies.get('userType') == "admin") ? <Nav_Admin /> : ''} 
                <Container >
                    <Card  style={{marginLeft:"auto" ,marginRight:"auto", marginTop:80 , width:700 , height:400}}>
                        <Card.Body>
                            <h2>กำลังตรวจสอบ</h2>
                            <Button variant="primary" href="/allProject"> กลับหน้าหลัก </Button>
                        </Card.Body>
                    </Card>

                </Container>
            </div>

        )
    }
}
export default authorizeSme;
