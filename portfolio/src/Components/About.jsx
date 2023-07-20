import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/lokesh.png";
import Particle from "./Particle";

const About = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row style={{ display: 'flex', justifyContent: "space-evenly" }} >
                        <Col md={7} className="home-header" >
                            <h1 style={{ paddingBottom: 15, color: "black" }} className="heading" >
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name" style={{ color: "black" }}>
                                I'M
                                <strong className="main-name"> 𝐿𝑜𝓀𝑒𝓈𝒽 𝒞𝒽𝑜𝓊𝒹𝒽𝒶𝓇𝓎</strong>
                            </h1>
                            <h1 style={{ color: "black", paddingLeft: "30px", paddingTop: '15px', fontWeight: '600' }}>
                                I am a skilled web developer with expertise in HTML, CSS, JavaScript, React, Node.js, <br /> Express.js, MongoDB and
                                TypeScript, capable of building dynamic and feature-rich web applications.
                            </h1>



                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "218px", borderRadius: "17px", paddingLeft: '161px' }}
                            />
                        </Col>

                    </Row>
                </Container>
            </Container>

        </section >
    )
}

export default About
