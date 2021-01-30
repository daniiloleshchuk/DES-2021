import React from "react";
import {Button, Col, Container, Navbar, Row} from 'react-bootstrap';
import '../styles/landing.css';
import logo from '../images/landing_logo.svg';

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

            <Row className={`section second_section`} noGutters>
                22
            </Row>
            <Row className={`section third_section`} noGutters>
                33
            </Row>
        </Container>
    );
}

export default LandingPage;