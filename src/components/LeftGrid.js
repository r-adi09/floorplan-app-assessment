import React from "react";
import { useState } from "react";
import { colorsMap, whiteColorList } from "../utilities/colorsMap";
import "./LeftGrid.css";
import { Row, Col } from "reactstrap";

const LeftGrid = (props) => {
  const { gridNumber, color, cores, unmaskClicked, handleUnmaskClick } = props;
  const startIndex = (gridNumber - 1) * 20;
  const [diodeClicked, setDiodeClicked] = useState(new Set());

  const handleDiodeClicked = (e, i) => {
    e.preventDefault();
    setDiodeClicked(new Set([...diodeClicked, i]));
  };

  return (
    <div style={{ display: "block" }}>
      {cores &&
        cores.map((product, i) => {
          return (
            <Row key={i} className="left-grid m-0">
              <Col>
                <Row>
                  <Col
                    style={{
                      width: "25px",
                      backgroundColor: diodeClicked.has(i) ? "#0902ff" : "#fff",
                    }}
                    className="p-0 cursor ru-border-right ru-border-bottom"
                    xs="1"
                    onClick={(e) => handleDiodeClicked(e, i)}
                  />
                  <Col
                    style={{
                      width: "25px",
                      backgroundColor: unmaskClicked.has(
                        product.name.split(" ")[1]
                      )
                        ? "#ffff00"
                        : "#fff",
                    }}
                    className="p-0 cursor ru-border-right ru-border-bottom"
                    xs="1"
                    onClick={(e) => handleUnmaskClick(e, product)}
                  />
                  <Col
                    style={{ width: "25px" }}
                    className="p-0 ru-border-right ru-border-bottom"
                    xs="1"
                  >
                    {startIndex + i}
                  </Col>
                  <Col
                    className="p-0 ru-border-bottom"
                    style={{
                      backgroundColor: colorsMap[product.name],
                      color: whiteColorList.includes(product.name)
                        ? "white"
                        : "black",
                    }}
                  >
                    {product.name}
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
    </div>
  );
};

export default LeftGrid;
