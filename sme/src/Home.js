import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Nav_owner from './components/Nav_owner';
import Nav_notlogin from './components/Nav_notlogin';
import Nav_inves from './components/Nav_inves';
import cookies from "./cookies/cookie";
import { Container, Col, Row, Form } from 'react-bootstrap'


class createProject extends Component{

render(){
        return(
          <div>
             
            {(cookies.get('type') == "owner") ? <Nav_owner /> : <Nav_inves />}
            <div>
                 <center> <h1>Home</h1> </center>
         </div>
        </div>


         );
        
    
    
    }
}

export default createProject;