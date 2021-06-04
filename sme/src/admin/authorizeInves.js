import React, { Component } from 'react';
import Nav_Admin from '../components/Nav_Admin';
import {Container, Col, Row, Overlay, OverlayTrigger, Table} from 'react-bootstrap'
import { ButtonToggle, Collapse, CardBody, Card } from 'reactstrap'
import { observer, inject } from "mobx-react";

class authorizeInves extends Component {
  constructor() {
    super();
    this.state = {
      collapse: -1
    };
    this.toggle=this.toggle.bind(this);
    //this.clickRow = this.clickRow.bind(this)
  }

  componentDidMount() {
    this.props.addinvesStore.inveslist();
    //console.log();
  }
  promote(idinvester) {
    this.props.addinvesStore.idinvester = idinvester;
    this.props.addinvesStore.promote();
    console.log("promote", idinvester);
  }

  demote(idinvester) {
    this.props.addinvesStore.idinvester = idinvester;
    this.props.addinvesStore.demote();
    console.log("demote", idinvester);
  }

  delete(idinvester) {
    this.props.addinvesStore.idinvester = idinvester;
    this.props.addinvesStore.delete();
    console.log("delete",idinvester);
  }

  
  toggle = (index) => (event) => {
    (index == this.state.collapse) ? this.setState({collapse:-1 }) : this.setState({collapse:index });
  }

  render(){
    
    return (
      <div>
        
        <Nav_Admin />
        <center><h3 style={{marginTop: 80}}>เพิ่มจำนวนนักลงทุน</h3></center>
        <Container style={{marginTop: 40}}>
          <Table striped bordered hover size="sm"  responsive="sm">
            
            <thead>
              <tr>
                <th><center>ID SMEs</center></th>
                <th><center>ปี</center></th>
                <th><center>Jan</center></th>
                <th><center>Feb</center></th>
                <th><center>Mar</center></th>
                <th><center>Apr</center></th>
                <th><center>May</center></th>
                <th><center>Jun</center></th>
                <th><center>Jul</center></th>
                <th><center>Aug</center></th>
                <th><center>Sep</center></th>
                <th><center>Oct</center></th>
                <th><center>Nov</center></th>
                <th><center>Dec</center></th>
                <th><center>จัดการ</center></th>
              </tr>
            </thead>
            <tbody>
              { 
                this.props.addinvesStore.showList.map((element, index) => {
                  return (
                    <tr key={index} >
                        <td><center>{element.smesId}</center></td>
                        <td><center>{element.year}</center></td>
                        <td><center>{element.m1}</center></td>
                        <td><center>{element.m2}</center></td>
                        <td><center>{element.m3}</center></td>
                        <td><center>{element.m4}</center></td>
                        <td><center>{element.m5}</center></td>
                        <td><center>{element.m6}</center></td>
                        <td><center>{element.m7}</center></td>
                        <td><center>{element.m8}</center></td>
                        <td><center>{element.m9}</center></td>
                        <td><center>{element.m10}</center></td>
                        <td><center>{element.m11}</center></td>
                        <td><center>{element.m12}</center></td>
                        <td><center>
                            { 
                              (element.typeinves == "verified") ? 
                              <ButtonToggle color="secondary" size="sm"
                                onClick={() => { this.demote(element.idinvester)}}>unverify</ButtonToggle> : 
                              <ButtonToggle color="success" size="sm"
                                onClick={() => { this.promote(element.idinvester)}}>verified</ButtonToggle>
                            }
                            {' '}<ButtonToggle color="danger" size="sm"
                              onClick={() => { this.delete(element.idinvester)}}>Delete</ButtonToggle>
                            </center>
                          </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default inject('authorStore','addinvesStore')(observer(authorizeInves));