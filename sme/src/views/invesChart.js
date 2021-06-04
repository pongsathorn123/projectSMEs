import React, { Component } from 'react';
import {Container, Col, Row, Card, Form} from 'react-bootstrap'
import axios from 'axios';
import { observer, inject } from "mobx-react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

class invesChart extends Component {
    constructor(){
        super();
        }
        
    componentDidMount(){
        this.props.inveschartStore.info();
      }
    selectedYear(e) {
      this.props.inveschartStore.year = e.target.value;
      this.props.inveschartStore.info();
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
                    <Form.Control as="select"  placeholder="จำนวนคนลงทุนในแต่ละปี" onChange={this.selectedYear.bind(this)}>
                                        <option value="2021" disabled selected>จำนวนคนลงทุนในปี 2021</option>
                                        <option value="2020">จำนวนคนลงทุนในปี 2020</option>
                                        <option value="2021">จำนวนคนลงทุนในปี 2021</option>
                                    </Form.Control>
                </Col>
              </Row>
            </Card>
          </Container>
        </div>
        <div>
          <Container>
            <Card>
              <ResponsiveContainer width={"99%"} height={170}>
                <BarChart 
                    style={{fontSize:"0.5em"}}
                    width={20}
                    height={380}
                    data = {this.props.inveschartStore.dataChart}
                    margin={{top: 5, right:1, bottom: 5,}}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="เดือน" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="จำนวนคน" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Container>
        </div>
      </div>
    )
  }
}

export default inject('inveschartStore')(observer(invesChart))