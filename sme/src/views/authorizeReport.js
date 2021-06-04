import React, { Component } from 'react';
import { Container, Col, Row, Form, Button, Card, Jumbotron } from 'react-bootstrap'
import Nav_owner from '../components/Nav_owner';
import Nav_inves from '../components/Nav_inves';
import Nav_Admin from '../components/Nav_Admin';
import cookies from "../cookies/cookie";
import { IoHourglassOutline } from "react-icons/io5";


class authorizeReport extends Component {

    render() {
        return (
            <div>
                {(cookies.get('userType') == "owner") ? <Nav_owner /> : ''}
                {(cookies.get('userType') == "inves") ? <Nav_inves /> : ''}
                {(cookies.get('userType') == "admin") ? <Nav_Admin /> : ''} 
                <Container >
                    <Card  style={{marginLeft:"auto" ,marginRight:"auto", marginTop:150 , width:700 , height:400}}>
                        <Card.Body className="text-center" style={{marginTop:60}} >
                            <div className="icon-size">
                                <IoHourglassOutline />
                            </div>
                            <h2 style={{marginTop:20}}>กำลังตรวจสอบ</h2>
                            <h6>แอดมินกำลังตรวจสอบข้อมูล</h6>
                            <Button variant="primary" href="/allProject" style={{marginTop:20}}> ตกลง </Button>
                        </Card.Body>
                    </Card>

                </Container>
            </div>

        )
    }
}
export default authorizeReport;
