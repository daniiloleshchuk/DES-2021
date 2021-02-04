import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {Field, Form, Formik} from 'formik';
import algoService from "../services/algoService";
import '../styles/main_page.css';


const MainPage = (props) => {
    let [result, setResult] = useState('');
    return (
        <Row className={`justify-content-center main_page`} noGutters>
            <Col  xs={10}>
                <Formik
                    initialValues={{
                        ingredients: '',
                    }}
                    onSubmit={async (values) => {
                        console.log(values)
                        algoService.getPrediction(values)
                            .then((r) => {
                                console.log(r)
                                setResult(r.data);
                            })
                    }}
                >
                    <Form>
                        <Col>
                            <Row className={`justify-content-center title`}>
                                <span>Enter your ingredients through a coma</span>
                            </Row>
                            <Row className={`justify-content-center`}>
                                <Field
                                    as='textarea' className={`area`}
                                    id="ingredients" name="ingredients" placeholder="ingredients"
                                />
                            </Row>
                            <Row className={`justify-content-center`}>
                                <Button type={"submit"} className={'button'}>Submit</Button>
                            </Row>
                        </Col>
                    </Form>
                </Formik>
                <Row className={`justify-content-center result`}>
                    <span>{result}</span>
                </Row>
            </Col>
        </Row>
    );
}

export default MainPage;