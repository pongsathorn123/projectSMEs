import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Nav_owner from './components/Nav_owner';
import Nav_notlogin from './components/Nav_notlogin';
import Nav_inves from './components/Nav_inves';
import cookies from "./cookies/cookie";
import { Container, Col, Row, Form ,Button} from 'react-bootstrap'
import sme1 from '../image/sme1.png';


class createProject extends Component{

render(){
        return(
          <div>
             
            {(cookies.get('type') == "owner") ? <Nav_owner /> : <Nav_inves />}
            <div>
                 <center> <h1>Home</h1> </center>
                 <Card style={{ width: '18rem' ,marginLeft : 50 }}>
                  <Card.Img variant="top" src="sme1/100px180" />
                      <Card.Body>
                          <Card.Title>Project 1</Card.Title>
                          <Card.Text>
                          The company deals with the export of food.
                          Foreign country       
                          </Card.Text>
                        <Button variant="primary"> Lead more</Button>
                    </Card.Body>
                  </Card>
         </div>
        </div>


         );
        
    
    
    }
}

export default createProject;
