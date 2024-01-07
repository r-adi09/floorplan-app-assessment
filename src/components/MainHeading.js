import React from "react";
import "./MainHeading.css";
import { Row, Col } from "reactstrap";

const MainHeading = () => {
  return (
    <>
      <Row>
        <Col className="bg-color ru-border p-2">TAPE-IN DB VIEW</Col>
      </Row>
      <Row>
        <Col className="vertical-heading bg-color ru-border" xs="1">
          <Row className="rotate">GRID</Row>
        </Col>
        <Col className="vertical-heading bg-color ru-border" xs="1">
          <Row className="rotate">Diode</Row>
        </Col>
        <Col className="vertical-heading bg-color ru-border" xs="1">
          <Row className="rotate">Unmask</Row>
        </Col>
        <Col className="vertical-heading bg-color ru-border" xs="1">
          <Row className="rotate">RU#</Row>
        </Col>
        <Col className="horizontal-heading bg-color ru-border p-2">
          <Row style={{ display: "block" }}>Seat UUID</Row>
        </Col>
        <Col className="vertical-heading bg-color ru-border" xs="1">
          <Row className="rotate">RU#</Row>
        </Col>
        <Col className="vertical-heading bg-color ru-border" xs="1">
          <Row className="rotate">Unmask</Row>
        </Col>
        <Col className="vertical-heading bg-color ru-border" xs="1">
          <Row className="rotate">Diode</Row>
        </Col>
        <Col className="vertical-heading bg-color ru-border" xs="1">
          <Row className="rotate">GRID</Row>
        </Col>
      </Row>
    </>
  );
};

export default MainHeading;
