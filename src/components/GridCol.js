//Grid column
import React from "react";
import { Col } from "reactstrap";

function GridCol({ msg, color }) {
  return (
    <Col
      style={{ backgroundColor: color, width: "25px" }}
      className="p-0 ru-border-right "
      xs="1"
    >
      <div className="d-flex h-100 align-items-center justify-content-center">
        <div className="rotate" style={{ color: "white" }}>{msg}</div>
      </div>
    </Col>
  );
}

export default GridCol;