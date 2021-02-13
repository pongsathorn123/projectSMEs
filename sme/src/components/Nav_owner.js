import React, { Component } from 'react';
import user from '../image/user.png';
import cookies from '../cookies/cookie';
import { Card, Nav, Navbar } from 'react-bootstrap';

class Nav_owner extends Component{
    logout() {
        cookies.remove('user_id');
        cookies.remove('name');
        cookies.remove('type');
      }  
    


render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="#FFE160" variant="light"  style={{backgroundColor : '#FFE160'}}>
                    <Navbar.Brand href="#home">SMEs~ Business</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#features">โปรเจคทั้งหมด  |</Nav.Link>
                        <Nav.Link href="#pricing">สร้างโปรเจค   |</Nav.Link>
                        <Nav.Link href="#pricing">ติดต่อเรา   |</Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav className="mr-auto" style={{ marginTop: 5 }}></Nav>
                            <usntxt style={{marginLeft: 8, marginTop: 5}}>{cookies.get("name")}</usntxt >
                            <Nav.Link href="/" onClick={this.logout.bind(this)}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
         </div>
         );
        
    
    
    }
}

export default Nav_owner;
