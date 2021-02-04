import React from "react";
import {Button, Col, Container, Navbar, Row} from 'react-bootstrap';
import '../styles/landing.css';
import logo from '../images/landing_logo.svg';
import logoDark from '../images/landing_logo_dark.svg';
import secondSectionImg from '../images/second_section.svg';
import thirdSectionImg from '../images/third_section.svg';
import {Link} from "react-router-dom";

const LandingPage = (props) => {
    return (
        <Container fluid className={`landing_container`}>
            <Row className={`section first_section`} noGutters>
                <Col xs={12}>
                    <Row noGutters>
                        <Col xs={12} className={`navbar_container`}>
                            <Navbar className={`justify-content-end`}>
                                <Navbar.Brand href="">
                                    <img
                                        alt=""
                                        src={logo}
                                        width="70"
                                        height="70"
                                        className="d-inline-block align-top"
                                    />
                                </Navbar.Brand>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row className={`justify-content-center justify-content-lg-end`} noGutters>
                        <Col xs={12} lg={7} className={`details align-items-center`}>
                            <Row className={`title justify-content-xl-start justify-content-center `} noGutters>
                                <span>Collect the perfect dish for yourself!</span>
                            </Row>
                            <Row className={`text justify-content-center`} noGutters>
                                <span>A service that will offer the most delicious combination of what is at hand!</span>
                            </Row>
                            <Button onClick={() => {
                                window.location.href = `/predict`
                            }} className={`button`}>
                                <div>Form a dish</div>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={`section second_section align-items-center`} noGutters>
                <Col xs={12} className={``}>
                    <Row className={`justify-content-center align-items-center`}>
                        <Col xs={12} lg={6}>
                            <Row noGutters className={`justify-content-start`}>
                                <img src={secondSectionImg} className={`img`} alt=""/>
                            </Row>
                        </Col>
                        <Col xs={12} lg={4}>
                            <Row noGutters className={`justify-content-end`}>
                                <Col className={`details`}>
                                    <Row noGutters className={`title justify-content-center justify-content-lg-start`}>
                                        <span>Choose existing or favorite products</span>
                                    </Row>
                                    <Row noGutters className={`text justify-content-center justify-content-lg-start`}>
                                        <span>Do you want to combine beets with honey or avocados with tangerines? Check if you like it!</span>
                                    </Row>
                                    <Button className={`button`} onClick={() => {
                                        window.location.href = `/predict`
                                    }}>Choose ingredients</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={`section third_section align-items-center`} noGutters>
                <Col xs={12}>
                    <Row className={`justify-content-center align-items-center`}>
                        <Col xs={{order: 2, span: 12}} lg={{order: 1, span: 4}}>
                            <Row noGutters className={`justify-content-start`}>
                                <Col className={`details`}>
                                    <Row noGutters className={`title justify-content-center justify-content-lg-start`}>
                                        <span>See interesting recipes of users</span>
                                    </Row>
                                    <Row noGutters className={`text justify-content-center justify-content-lg-start`}>
                                        <span>The experience can be delicious!</span>
                                    </Row>
                                    <Button className={`button`} onClick={() => {
                                        window.location.href = `/predict`
                                    }}>See recipes</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={{order: 1, span: 12}} lg={{order: 2, span: 6}}>
                            <Row noGutters className={`justify-content-end`}>
                                <img src={thirdSectionImg} className={`img`} alt=""/>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={`fourth_section justify-content-center align-items-center`} noGutters>
                <Col xs={10}>
                    <Row noGutters className={`align-items-center justify-content-center`}>
                        <Col xs={{order: 3, span: 12}} lg={{order: 1, span: 2}}>
                            <Row noGutters className={`justify-content-center align-items-center`}>
                                <img src={logoDark} className={`logo`} alt=""/>
                            </Row>
                        </Col>
                        <Col xs={{order: 2, span: 12}} lg={{order: 2, span: 5}}>
                            <Row className={`justify-content-center text`} noGutters>
                                <Link to={'/'}>
                                    <div>Privacy <br/> policy</div>
                                </Link>
                            </Row>
                        </Col>
                        <Col xs={{order: 1, span: 12}} lg={{order: 3, span: 5}}>
                            <Row className={`justify-content-center text`} noGutters>
                                <div>I agree to the<br/>
                                    <Link to={`/`}>
                                        <span className={`data`}>processing of personal data</span>
                                    </Link>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default LandingPage;