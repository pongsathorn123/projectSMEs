import React, { Component } from 'react';
import { Container, Col, Row, Form ,Button ,Card, Image, Table,   } from 'react-bootstrap'
import Nav_owner from '../components/Nav_owner';
import Nav_inves from '../components/Nav_inves';
import Nav_Admin from '../components/Nav_Admin';
import Nav_notlogin from '../components/Nav_notlogin';
import cookies from "../cookies/cookie";
import Tarang from '../image/tarang.jpg';
import products from '../image/products.png';
import page4 from '../image/page4.png';
import page2 from '../image/page2.png';
import page3 from '../image/page3.png';
import Commerce from '../image/Commerce.png';
import Service from '../image/Service.png';
import { observer, inject } from "mobx-react";
import { CardBody, ButtonToggle, Label,} from 'reactstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';





class home2  extends Component {

    state = {
        value: 'http://app.morningstyle.xyz/user/smesData/info',
        copied: false,
      };

    componentDidMount(){
        this.props.smesdataStore.info();
        this.props.smesdataStore.show();
    }
    selectedYear(e) {
        this.props.smesdataStore.year = e.target.value;
        console.log(e);
      }

    selectedMonth(e) {
        this.props.smesdataStore.month = e.target.value;
        console.log(e);
      }

    async btnClick() {
    this.props.smesdataStore.info();
    }

    render() {
        
        return (
            
            <div>
                
                {(cookies.get('userType') == "owner") ? <Nav_owner /> : ''}
                {(cookies.get('userType') == "inves") ? <Nav_inves /> : ''}
                {(cookies.get('userType') == "admin") ? <Nav_Admin /> : ''}
                {(cookies.get('userType') == undefined) ? <Nav_notlogin /> : ''}
                    <Row>
                        <Col>
                            <Card style={{marginLeft:80,width:1200}}>
                                <img src={page4} style={{width:1200}}/>
                                    <CardBody style={{marginTop:90}}>
                                        <div style={{marginLeft:30, marginRight:30}}>
                                        
                                        <h1 style={{marginTop:20}}>SMEs คืออะไร มีกี่ประเภท งานบัญชีภาษีที่ SMEs จำเป็นต้องจัดทำ</h1>
                                        <h6 style={{marginTop:40}}>ธุรกิจ SMEs เป็นองค์กรที่มีส่วนสำคัญในการพัฒนาประเทศทั้งทางด้านเศรษฐกิจและสังคม โดย SMEs ย่อมาจากคำว่า Small and Medium Enterprises หมายถึง ธุรกิจขนาดกลางและขนาดย่อม ประกอบกิจการ 3 ประเภทดังต่อไปนี้</h6>
                                        <h2 style={{marginTop:40}}>ประเภทของธุรกิจ SMEs ประกอบด้วย</h2>
                                        <h4 style={{marginTop:40}}>1. กิจการการผลิต</h4>
                                        <h6 style={{marginTop:20}}>หมายถึง กิจการที่นำวัตถุดิบมาแปรรูปให้เป็นสินค้าสำเร็จรูป โดยใช้แรงงานและค่าใช้จ่ายในการผลิตในภาคเกษตรกรรม ภาคอุตสาหกรรม เหมืองแร่ เช่น โรงงานผลิตกระดาษ โรงงานผลิตอาหารกระป๋อง โรงงานผลิตเครื่องดื่ม เป็นต้น</h6>
                                        <h4 style={{marginTop:40}}>2. กิจการการค้า</h4>
                                        <h6 style={{marginTop:20}}>หมายถึง กิจการที่ไม่ได้ผลิตสินค้าเอง หรือคือการซื้อสินค้าสำเร็จรูปมาเพื่อจัดจำหน่าย มีทั้งกิจการค้าส่ง และกิจการค้าปลีก เช่น กิจการห้างสรรพสินค้า กิจการขายเสื้อผ้าสำเร็จรูป กิจการขายเครื่องกีฬา เป็นต้น</h6>
                                        <h4 style={{marginTop:40}}>3. กิจการบริการ</h4>
                                        <h6 style={{marginTop:20}}>หมายถึง ธุรกิจที่เน้นการให้บริการหรือขายบริการ ไม่ได้จำหน่ายสินค้า เช่น กิจการประกันภัย ธุรกิจโรงแรม ร้านเสริมสวย โรงภาพยนตร์ กิจการรับทำบัญชี เป็นต้น</h6>
                                        <h5 style={{marginTop:40}}>โดยตามประกาศสำนักงานส่งเสริมวิสาหกิจขนาดกลางและขนาดย่อม ได้กำหนดลักษณะของวิสาหกิจขนาดกลางและขนาดย่อมลงวันที่ 21 มกราคม 2563 ไว้ดังนี้</h5>
                                        <center><img src={Tarang} style={{marginTop:20}} /></center>
                                        <h2 style={{marginTop:40}}>ปัญหาของธุรกิจ SMEs ประกอบด้วย</h2>
                                        <h4 style={{marginTop:40}}>1. ปัญหาด้านเงินลงทุน</h4>
                                        <h6 style={{marginTop:20}}>เมื่อพูดถึงปัญหาที่พบเป็นอันดับต้นๆ ของผู้ประกอบการ SMEs มักประสบปัญหาในด้านเงินทุน เนื่องจากยังไม่มีการจัดทำบัญชีอย่างเป็นระบบ หรือขาดหลักทรัพย์ในการค้ำประกันเงินกู้อย่างสินเชื่อ SMEs หรือในบางกิจการอาจเป็นช่วงเริ่มต้น ทำให้ยังลงทุนได้ไม่มากพอ</h6>
                                        <h4 style={{marginTop:40}}>2. ปัญหาด้านการตลาด</h4>
                                        <h6 style={{marginTop:20}}>ผู้ประกอบการ SMEs มักต้องดูแลหลายอย่างพร้อมกัน การตลาดสมัยนี้เปลี่ยนไปเร็วเนื่องจากการเปลี่ยนแปลงของเทคโนโลยีอย่างรวดเร็ว ทำให้ผู้ประกอบการต้องปรับตัวให้ทันในเรื่องการตลาด และการเปิดเสรี ทางการค้าตลอดจนความสะดวกรวดเร็วในการขนส่ง ทำให้มีสินค้าจากต่างประเทศเข้ามาแข่งขันกับสินค้าในท้องถิ่นมากขึ้น</h6>
                                        <h4 style={{marginTop:40}}>3. ปัญหาด้านการบริหารจัดการ</h4>
                                        <h6 style={{marginTop:20}}>ผู้ประกอบการ SMEs ส่วนใหญ่ขาดประสบการณ์ในการจัดการและการบริหารงานอย่างเป็นระบบ ส่วนใหญ่ดำเนินธุรกิจครอบครัว ซึ่งเป็นอุปสรรคต่อการแข่งขันทางธุรกิจในยุคที่ต้องมีการปรับตัวอย่างรวดเร็ว และมีข้อจำกัดในการปรับระบบการทำงานเมื่อกิจการมีการขยายตัว</h6>
                                        <h4 style={{marginTop:40}}>4. ปัญหาด้านแรงงาน</h4>
                                        <h6 style={{marginTop:20}}>การขาดแคลนแรงงานที่มีความชำนาญและมีฝีมือ เนื่องจากธุรกิจ SMEs เป็นธุรกิจที่มีขนาดเล็ก การค้นหา หรือประกาศรับสมัครงานอาจไม่ไปถึงคนที่มีความชำนาญในการทำงาน แต่หากมีการประกาศในแหล่งที่มีกลุ่มคนที่มีความชำนาญ ก็ช่วยให้ได้คนที่มีฝีมือมาร่วมงานได้ หรือหาคนที่มีความเชี่ยวชาญเฉพาะด้าน ก็ช่วยลดปัญหาข้อนี้ได้</h6>
                                        <h4 style={{marginTop:40}}>5. ปัญหาทางด้านบัญชี</h4>
                                        <h6 style={{marginTop:20}}>งานบัญชี นอกจากมีความจำเป็นในการจัดการภาษีแล้ว ยังทำให้ผู้ประกอบการทราบสถานการณ์ทางธุรกิจที่แท้จริง การทำบัญชีผิดพลาด หรือไม่ทำบัญชีเลย จะทำให้เห็นภาพรวมกระแสเงินเข้า-ออกของบริษัทไม่ชัดเจร และอาจเกิดความขัดแย้งกันภายในองค์กรระหว่างหุ้นส่วนได้</h6>
                                        <h6 style={{marginTop:20}}>จากปัญหาของ SMEs ดังกล่าว การวางแผนในการบริหารด้านบัญชีและภาษีเป็นสิ่งสำคัญ</h6>
                                        <h2 style={{marginTop:40}}>งานบัญชีและภาษีที่ธุรกิจ SMEs จำเป็นต้องทำมีดังนี้</h2>
                                        <h6 style={{marginTop:20}}>1. การจดทะเบียนธุรกิจไม่ว่าจะอยุ่ในรูปบุคคลธรรมดาหรือนิติบุคคล ซึ่งมีผลต่อรูปแบบการเสียภาษี</h6>
                                        <h6 style={{marginTop:20}}>2. การรวบรวมเอกสารที่ใช้ในการบันทึกรายการบัญชีให้ครบถ้วน ไม่ว่าจะเป็นใบเสร็จรับเงิน ใบส่งสินค้า ใบรับสินค้า ใบแจ้งหนี้ เป็นต้น ซึ่งเป็นแหล่งข้อมูลที่จะใช้ในการบันทึกรายการบัญชี</h6>
                                        <h6 style={{marginTop:20}}>3. ในกรณีที่กิจการจดทะเบียนในรูปนิติบุคคล ต้องจัดให้มีผู้ทำบัญชีและผู้สอบบัญชี เจ้าของธุรกิจควรจัดทำบัญชีเดียว หรือการจัดทำบัญชีเพียงชุดเดียวเพื่อให้ผู้ประกอบการรู้สถานะของกิจการและสามารถวางแผนธุรกิจได้อย่างถูกต้อง จัดทำบัญชีและงบการเงินให้สอดคล้องกับสภาพที่แท้จริงของกิจการ</h6>
                                        <h6 style={{marginTop:20}}>4 ภาระภาษีของธุรกิจSMEs ได้แก่</h6>
                                        <h6 style={{marginTop:20, marginLeft:5}}>4.1 ผู้ประกอบการSMEs ที่เป็นบุคคลธรรมดา</h6>
                                        <h6 style={{marginTop:20, marginLeft:15}}>รายได้จากการประกอบกิจการถิอเป็นเงินได้พึงประเมินตามมาตรา40(8) แห่งประมวลรัษฎากร ซึ่งสามารถหักค่าใช้จ่ายเป็นการเหมาหรือหักค่าใช้จ่ายตามความจำเป็นและสมควร และเมื่อหักค่าลดหย่อนแล้วนำไปคำนวณภาษีเงินได้ในอัตราก้าวหน้า</h6>
                                        <h6 style={{marginTop:20, marginLeft:5}}>4.2 ผู้ประกอบการSMEs ที่เป็นนิติบุคคล</h6>
                                        <h6 style={{marginTop:20, marginLeft:15}}>เสียภาษีจากฐานกำไรสุทธิ โดยกิจการSMEs ที่มีกำไรสุทธิไม่เกิน 300,000บาท ได้รับยกเว้นภาษี  และสามารถหักค่าใช้จ่าย ค่าจดทะเบียนตั้งบริษัท ค่าสอบบัญชี ค่าทำบัญชีได้เป็น 2 เท่า</h6>
                                        <h6 style={{marginTop:40, marginBottom:50}}>ขอขอบคุณข้อมูลจากเว็บ peakaccount.com</h6>
                                        </div>
                                    </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="position-fixed" style={{width:400, marginTop:50}}>
                                <Card.Header as="h5" className="text-center">ตารางการส่งออก</Card.Header>
                                <CardBody>
                                    <Row>
                                    <Form.Control as="select"  placeholder="2021" style={{width:100}} onChange={this.selectedYear.bind(this)}>
                                        <option value="2021" disabled selected>2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                    </Form.Control>
                                    <Form.Control as="select"  placeholder="เลือกเดือน" style={{width:200}} onChange={this.selectedMonth.bind(this)}>
                                        <option value="Feb" disabled selected>เดือนกุมภาพันธ์</option>
                                        <option value="Jan">เดือนมกราคม</option>
                                        <option value="Feb">เดือนกุมภาพันธ์</option>
                                        <option value="Mar">เดือนมีนาคม</option>
                                        <option value="Apr">เดือนเมษายน</option>
                                        <option value="May">เดือนพฤษภาคม</option>
                                        <option value="Jun">เดือนมิถุนายน</option>
                                        <option value="Jul">เดือนกรกฎาคม</option>
                                        <option value="Aug">เดือนสิงหาคม</option>
                                        <option value="Sep">เดือนกันยายน</option>
                                        <option value="Oct">เดือนตุลาคม</option>
                                        <option value="Nov">เดือนพฤศจิกายน</option>
                                        <option value="Dec">เดือนธันวาคม</option>
                                    </Form.Control>
                                    <center><ButtonToggle color="primary" size="md"  onClick={this.btnClick.bind(this)} >
                                        ตกลง
                                    </ButtonToggle></center>
                                    </Row>
                                    
                                </CardBody>
                            {/* </Card>
                            <Card className="position-fixed" style={{width:400, marginTop:50}}> */}
                                <Card.Header as="h5">สินค้าส่งออกสำคัญ</Card.Header>
                                <CardBody >
                                    <h7>ลำดับ 1. {this.props.smesdataStore.no1}</h7><br/>
                                    <h7>ลำดับ 2. {this.props.smesdataStore.no2}</h7><br/>
                                    <h7>ลำดับ 3. {this.props.smesdataStore.no3}</h7><br/>
                                
                                <Table striped   size="sm"style={{marginTop:10}} ><center>
                                    <thead >
                                        <tr>
                                        <th>กลุ่มประเทศ</th>
                                        <th>อัตตราการส่งออก ( % )</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>ASEAN</td>
                                        <td>{this.props.smesdataStore.asean}</td>
                                        </tr>
                                        <tr>
                                        <td>China</td>
                                        <td>{this.props.smesdataStore.china}</td>
                                        </tr>
                                        <tr>
                                        <td>USA</td>
                                        <td>{this.props.smesdataStore.usa}</td>
                                        </tr>
                                        <tr>
                                        <td>Japan</td>
                                        <td>{this.props.smesdataStore.japan}</td>
                                        </tr>
                                        <tr>
                                        <td>EU-27</td>
                                        <td>{this.props.smesdataStore.eu27}</td>
                                        </tr>
                                    </tbody>
                                    </center>
                                    </Table>
                                </CardBody>
                                <CardBody>
                                    <div >
                                        <Label >API สำหรับดูข้อมูลการส่งออกย้อนหลัง</Label>
                                        <Label >{this.state.value}</Label>

                                        <CopyToClipboard text={this.state.value}
                                        onCopy={() => this.setState({copied: true})}>
                                        <Button size="sm" variant="outline-success">COPY FOR API </Button>
                                        </CopyToClipboard>
                                        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                                    </div>
                                </CardBody>
                                <Card.Header as="h5">ธุรกิจที่น่าสนใจ 3 อันดับ</Card.Header>
                                <CardBody >
                                
                                    <Table striped bordered hover size="sm"  responsive="sm">
                                        <thead>
                                        <tr>
                                            <th><center>ชื่อธุรกิจ</center></th>
                                            <th><center>จำนวนนักลงทุน (คน)</center></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        { 
                                            this.props.smesdataStore.showList.map((element, index) => {
                                            return (
                                                <tr key={index} >
                                                    <td><center>{element.title}</center></td>
                                                    <td><center>{element.count}</center></td>
                                                </tr>
                                            );
                                            })
                                        }
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                
                    

            </div>
        )
    }
}
export default inject('smesdataStore')(observer(home2))
  