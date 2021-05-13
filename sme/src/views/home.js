import React, { Component } from 'react';
import { Container, Col, Row, Form ,Button ,Card, Image, Carousel } from 'react-bootstrap'
import Nav_owner from '../components/Nav_owner';
import Nav_inves from '../components/Nav_inves';
import Nav_Admin from '../components/Nav_Admin';
import Nav_notlogin from '../components/Nav_notlogin';
import cookies from "../cookies/cookie";
import home3 from '../image/home3.png';
import products from '../image/products.png';
import page1 from '../image/page1.png';
import page2 from '../image/page2.png';
import page3 from '../image/page3.png';
import Commerce from '../image/Commerce.png';
import Service from '../image/Service.png';
import Iframe from 'react-iframe'





class home  extends Component {

    returnHome() {
        window.location.href = "/home2";
      }
  
    

    render() {
        
        return (
            
            <div>
                
                {(cookies.get('userType') == "owner") ? <Nav_owner /> : ''}
                {(cookies.get('userType') == "inves") ? <Nav_inves /> : ''}
                {(cookies.get('userType') == "admin") ? <Nav_Admin /> : ''}
                {(cookies.get('userType') == undefined) ? <Nav_notlogin /> : ''}        
                
                

                <Carousel>
                    <Carousel.Item>
                        <img
                        onClick={this.returnHome.bind(this)}
                        className="d-block w-100"
                        src={page1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        onClick={this.returnHome.bind(this)}
                        className="d-block w-100"
                        src={page2}
                        alt="Second slide"
                        href="/home2"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        onClick={this.returnHome.bind(this)}
                        className="d-block w-100"
                        src={page3}
                        alt="Third slide"
                        href="/home2"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </div>
        )
    }
}
export default home;
  