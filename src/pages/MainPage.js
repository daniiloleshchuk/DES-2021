import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {Field, Form, Formik} from 'formik';
import algoService from "../services/algoService";


const A = (props) => {
    let [result, setResult] = useState('');
    return (
        <Row className={`justify-content-center`}>
            <Col>
                <Formik
                    initialValues={{
                        ingredients: '',
                    }}
                    onSubmit={async (values) => {
                        algoService.getPrediction(values)
                            .then((r) => {
                                console.log(r)
                                setResult(r.data);
                            })
                    }}
                >
                    <Form>
                        <Col>
                            <Row className={`justify-content-center`}>
                                <label htmlFor="firstName">Ingredients</label>
                            </Row>
                            <Row className={`justify-content-center`}>
                                <Field id="ingredients" name="ingredients" placeholder="ingredients"/>
                            </Row>
                            <Row className={`justify-content-center`}>
                                <Button type={"submit"}>Submit</Button>
                            </Row>
                        </Col>
                    </Form>
                </Formik>
                <Row className={`justify-content-center`}>
                    <span>{result}</span>
                </Row>
            </Col>
        </Row>
    );
}

export default A;