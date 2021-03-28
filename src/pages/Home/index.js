import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

import DogWalking from "../../images/dog-walking.jpg"

const Home = () => {

    return (
        <Container>
            <Row className="flex-lg-row align-items-center g-5 py-5">
                <Col lg="4">
                    <h1>Looka Dog</h1>
                    <p>Dog walking for your best friend provided by dog people.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Col>
                            <Button variant="primary" size="lg">
                                Learn More
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="primary" size="lg">
                                Contact
                            </Button>
                        </Col>
                    </div>
                </Col>
                <Col>
                    <Image src={DogWalking} alt="Looka Dog Walking" fluid rounded />
                </Col>
            </Row>
        </Container>
    )
};

export default Home;
