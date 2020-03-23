import React, {Component} from 'react';
import {Form,FormGroup,Label,Col,Row,Button}from 'reactstrap'
import Input from "reactstrap/es/Input.js";

class RegistrationScreen extends Component {
    render() {
        const style = {
            textAlign:"left",
        };
        return (
            <div className={"container"} style={style}>
                Register your facility for ventilator supply
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={"name"}>Facility Name </Label>
                            <Input type="text" name={"name"} placeholder={"Random Name XYZ"} />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Label for={"location"}>City / State / Country </Label>
                            <Input type="text" name={"location"} placeholder={"New York / New York / USA"} />
                        </FormGroup>
                    </Col>
                </Row>

                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={"contact-name"}>Contact Name </Label>
                            <Input type="text" name={"contact-name"} placeholder={"Jane Doe M.D"} />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Label for={"email"}>Contact email address </Label>
                            <Input type="email" name={"email"} placeholder={"Jane.Doe@randomname.com"} />
                        </FormGroup>
                    </Col>
                </Row>

                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for={"contact-name"}>Estimated Number Of Required Ventilators </Label>
                            <Input type="number" name={"contact-name"} placeholder={"32"} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup check>
                            <Input type="checkbox" name={"check-dire"} placeholder={"Jane Doe M.D"} />
                            <Label for={"check-dire"}>Current Demand will outlast official efforts </Label>
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup check>
                            <Input type="checkbox" name={"check-auth"} placeholder={"Jane Doe M.D"} />
                            <Label for={"check-auth"}>I am authorized to request supplies for this facility </Label>
                        </FormGroup>
                    </Col>
                </Row>

                <Row form>
                    <Col md={6}>
                        <FormGroup check>
                            <Button size={"block"} color={"primary"}> Register Need </Button>
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        After Registration a volunteer will get in touch with you to verify your identity.
                        Check <u>Current Offers</u> while waiting to be contacted.
                    </Col>
                </Row>

            </Form>

            </div>
        );
    }
}

export default RegistrationScreen;