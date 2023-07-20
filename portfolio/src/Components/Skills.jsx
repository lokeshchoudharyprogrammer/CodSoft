import React from 'react'
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiCss3, DiHtml5, DiGithubBadge
} from "react-icons/di";

import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,

    SiVercel,
} from "react-icons/si";

import {

    SiFirebase
} from "react-icons/si";
import express from "../Assets/pngwing.com.png"

const Skills = () => {
    return (
        <div>
            <h1 className="project-heading" id='skills' style={{ color: ' #c110ef', paddingLeft: "39px" }}>
                Professional <strong className="purple">Skillset </strong>
            </h1>
            <Row style={{ display: "flex", justifyContent: "center", paddingBottom: "50px", flexWrap: 'wrap' }}>

                <Col xs={4} md={2} className="tech-icons">
                    <DiHtml5 />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiJavascript1 />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiCss3 />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiNodejs />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiReact />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiMongodb />
                </Col>

                <Col xs={4} md={2} className="tech-icons">
                    <DiGit />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiFirebase />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiGithubBadge />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <img width={"120px"} src={express} alt="" />
                </Col>

            </Row>

            <h1 className="project-heading" style={{ color: ' #c110ef', paddingLeft: "39px" }}>
                <strong className="purple">Tools</strong> I use
            </h1>

            <Row style={{ display: "flex", justifyContent: "center", paddingBottom: "50px", flexWrap: 'wrap' }}>
                <Col xs={4} md={2} className="tech-icons">
                    <SiLinux />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiVisualstudiocode />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiPostman />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiVercel />
                </Col>

            </Row>
        </div>
    )
}

export default Skills
