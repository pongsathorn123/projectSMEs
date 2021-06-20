import React, { Component } from 'react';
import {Container, Col, Row, Card, Form} from 'react-bootstrap'
import axios from 'axios';
import { observer, inject } from "mobx-react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList} from 'recharts';

class invesmentChart extends Component {
    constructor(){
        super();
        }
        
    componentDidMount(){
        this.props.invesmentchartStore.info();
      }
    selectedYear(e) {
      this.props.invesmentchartStore.year = e.target.value;
      this.props.invesmentchartStore.info();
      console.log(e);
    }
    

  render(){
    return (
      <div style ={{marginTop:10, marginBottom:14}}>
        <div>
          <Container>
            <Card>
              <Row>
                <Col>
                    <Form.Control as="select"  placeholder="จำนวนเงินลงทุนในแต่ละปี" onChange={this.selectedYear.bind(this)}>
                                        <option value="2021" disabled selected>จำนวนเงินลงทุนในปี 2021</option>
                                        <option value="2020">จำนวนเงินลงทุนในปี 2020</option>
                                        <option value="2021">จำนวนเงินลงทุนในปี 2021</option>
                                    </Form.Control>
                </Col>
              </Row>
            </Card>
          </Container>
        </div>
        <div>
          <Container>
            <Card>
              <ResponsiveContainer width={"99%"} height={150}>
                <BarChart 
                    style={{fontSize:"0.5em"}}
                    width={20}
                    height={380}
                    data = {this.props.invesmentchartStore.dataChart}
                    margin={{top: 15, right:1, bottom: 5,}}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="เดือน" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="จำนวนเงิน" fill="#00FF66" >
                    <LabelList dataKey="จำนวนเงิน" position="top" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Container>
        </div>
      </div>
    )
  }
}

export default inject('invesmentchartStore')(observer(invesmentChart))