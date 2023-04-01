import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGitlab,
  SiVisualstudiocode,
  SiPostman,
  SiPnpm,
  SiTypescript,
  SiPm2
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPm2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPnpm />
      </Col>
    </Row>
  );
}

export default Toolstack;
