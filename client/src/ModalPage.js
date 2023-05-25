import React, {useState} from 'react';
import {Button, Col, Dropdown, Form, FormControl, InputGroup, Modal, Row} from "react-bootstrap";
import {InputLabel, MenuItem, Select} from "@mui/material";

const ModalPage = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const [age, setAge] = useState('');




    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Title Form</Modal.Title>
                </Modal.Header>




                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3 p-2">
                        <Row>
                        <Form.Group as={Col} md="12"  controlId="validationCustom01">
                            <Form.Label></Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First Name*"
                                defaultValue=""
                            />
                        </Form.Group>
                        </Row>

                        <Row>
                        <Form.Group as={Col} md="12"  controlId="validationCustom02">
                            <Form.Label></Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last Name*"
                                defaultValue=""
                            />
                        </Form.Group>

                            <Form.Group className="mb-3" controlId="name@gmail.com">
                                <Form.Label></Form.Label>
                                <Form.Control  required type="email" placeholder="user@gmail.com" />
                            </Form.Group>
                        </Row>


                        <Row>
                            <Col md={7}> Additinal feature for $100 </Col>
                            <Col md={3}>  </Col>
                            <Col md={1}>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                />

                            </Form>
                            </Col>
                        </Row>


                        <Row>
                            <Col md={7}> Additinal feature for $100 </Col>
                            <Col md={3}>  </Col>
                            <Col md={1}>
                                <Form>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                    />

                                </Form>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label></Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                    </Row>



                    <Button type="submit">Send form</Button>

                </Form>


            </Modal.Dialog>


        </div>
    );
};

export default ModalPage;