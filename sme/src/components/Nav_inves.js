import React, { Component } from 'react';
import user from '../image/user.png';
import cookies from '../cookies/cookie';
import { Card, Nav, Navbar, NavDropdown } from 'react-bootstrap';

class Nav_inves extends Component{
    logout() {
        cookies.remove('userId');
        cookies.remove('name');
        cookies.remove('username');
        cookies.remove('userType');
      }  
    


render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="#FFE160" variant="light" fixed="top" style={{backgroundColor : '#FFE160'}}>
                    <Navbar.Brand href="/home">SMEs~ Business</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/allProject">ธุรกิจทั้งหมด  |</Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav className="mr-auto" style={{ marginTop: 5 }}></Nav>
                            <NavDropdown style={{marginLeft: 8}} title={cookies.get("name")} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/editAccount">แก้ไขข้อมูล</NavDropdown.Item>
                            </NavDropdown>
                            {/* <Nav.Link href="/" style={{marginLeft: 8}}>{cookies.get("name")}</Nav.Link> */}
                            <Nav.Link href="/" onClick={this.logout.bind(this)}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
         </div>
         );
        
    
    
    }
}

export default Nav_inves;
