import React from "react";
import {Button, Col, Container, Navbar, Row} from 'react-bootstrap';
import '../styles/landing.css';
import logo from '../images/landing_logo.svg';
import secondSectionImg from '../images/second_section.svg';
import thirdSectionImg from '../images/third_section.svg';

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
                        <Col xs={12} lg={7} className={`details`}>
                            <Row className={`title justify-content-center justify-content-lg-start`} noGutters>
                                <span>Збери для себе ідеальну страву!</span>
                            </Row>
                            <Row className={`text justify-content-center`} noGutters>
                                <span>Сервіс, що запропонує найсмачніше поєднання того, що під рукою!</span>
                            </Row>
                            <Button className={`button`}>
                                <div>Сформувати страву</div>
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
                                        <span>Оберіть наявні чи улюблені продукти</span>
                                    </Row>
                                    <Row noGutters className={`text justify-content-center justify-content-lg-start`}>
                                        <span>Хочеш об’єднати буряк з медом чи авокадо з мандарином? Перевір, чи сподобається!</span>
                                    </Row>
                                    <Button className={`button`}>Обрати інгредієнти</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={`section third_section`} noGutters>
                <Col xs={12}>
                    <Row className={`justify-content-center align-items-center`}>
                        <Col xs={{order: 2, span: 12}} lg={{order: 1, span: 4}}>
                            <Row noGutters className={`justify-content-start`}>
                                 <Col className={`details`}>
                                    <Row noGutters className={`title justify-content-center justify-content-lg-start`}>
                                        <span>Переглянь цікаві рецепти користувачів</span>
                                    </Row>
                                    <Row noGutters className={`text justify-content-center justify-content-lg-start`}>
                                        <span>Переглянь цікаві рецепти користувачів</span>
                                    </Row>
                                    <Button className={`button`}>Дивитись рецепти</Button>
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
            <Row className={`section fourth_section`} noGutters>
                44
            </Row>
        </Container>
    );
}

export default LandingPage;