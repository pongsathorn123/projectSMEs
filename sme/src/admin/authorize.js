import React, { Component } from 'react';
import Nav_Admin from '../components/Nav_Admin';
import {Container, Col, Row, Overlay, OverlayTrigger, Table} from 'react-bootstrap'
import { ButtonToggle, Collapse, CardBody, Card } from 'reactstrap'
import { observer, inject } from "mobx-react";

class authorize extends Component {
  constructor() {
    super();
    this.state = {
      collapse: -1
    };
    this.toggle=this.toggle.bind(this);
    //this.clickRow = this.clickRow.bind(this)
  }

  componentDidMount() {
    this.props.authorStore.list();
    //console.log();
  }

  promote(smesId) {
    this.props.authorStore.smesId = smesId;
    this.props.authorStore.promote();
    console.log("promote", smesId);
  }

  demote(smesId) {
    this.props.authorStore.smesId = smesId;
    this.props.authorStore.demote();
    console.log("demote", smesId);
  }

  delete(smesId) {
    this.props.authorStore.smesId = smesId;
    this.props.authorStore.delete();
    console.log("delete",smesId);
  }

  
  toggle = (index) => (event) => {
    (index == this.state.collapse) ? this.setState({collapse:-1 }) : this.setState({collapse:index });
  }

  render(){
    
    return (
      <div>
        
        <Nav_Admin />
        <Container style={{marginTop: 30}}>
          <Table striped bordered hover size="sm"  responsive="sm">
            
            <thead>
              <tr>
                <th><center>ชื่อบัญชี</center></th>
                <th><center>ชื่อธุรกิจ</center></th>
                <th><center>จัดการ</center></th>
              </tr>
            </thead>
            <tbody>
              { 
                this.props.authorStore.showList.map((element, index) => {
                  return (
                    <tr key={index} >
                        <td><center>{element.username}</center></td>
                        <td><center>{element.title}</center></td>
                        <td><center>
                            { 
                              (element.authorize == "verified") ? 
                              <ButtonToggle color="secondary" size="sm"
                                onClick={() => { this.demote(element.smesId)}}>unverify</ButtonToggle> : 
                              <ButtonToggle color="success" size="sm"
                                onClick={() => { this.promote(element.smesId)}}>verified</ButtonToggle>
                            }
                            {' '}<ButtonToggle color="danger" size="sm"
                              onClick={() => { this.delete(element.smesId)}}>Delete</ButtonToggle>
                            {' '}<ButtonToggle color="info" size="sm" onClick={this.toggle(index)}>Info</ButtonToggle>
                                <Collapse isOpen={ (this.state.collapse == index) ? true:false}>
                                  <Card style={{marginTop:5, color:"black", fontSize:"0.7em", padding:"5px 0px 5px 10px"}}>
                                      ชื่อบัญชี: {element.username}<br/>
                                      ชื่อผู้ใช้: {element.name}<br/>
                                      ชื่อธุรกิจ: {element.title}<br/>
                                      ประเภทธุรกิจ: {element.smesType}<br/>
                                      รายละเอียดธุรกิจ: {element.description}
                                  </Card>
                                </Collapse>
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

export default inject('authorStore')(observer(authorize));