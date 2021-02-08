import React, { Component } from 'react';
import user from '../image/user.png';
import cookies from '../cookies/cookie';
import { Card, Nav, Navbar } from 'react-bootstrap';

class Nav_inves extends Component{
    logout() {
        cookies.remove('user_id');
        cookies.remove('name');
        cookies.remove('type');
      }  
    


render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="#home">Web Name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#features">All Project</Nav.Link>
                        <Nav.Link href="#pricing">How To</Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav className="mr-auto" style={{ marginTop: 5 }}></Nav>
                            <img src={user} height="25" width="25"/>
                            <usntxt style={{marginLeft: 8}}>{cookies.get("name")}</usntxt >
                            <Nav.Link href="/" onClick={this.logout.bind(this)}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
         </div>
         );
        
    
    
    }
}

export default Nav_inves;
