import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos, SiWindows, SiGithub, SiJetbrains, SiNetlify, SiFigma, SiRender,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJetbrains />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVercel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiRender />
        </Col>
    </Row>
  );
}

export default Toolstack;
