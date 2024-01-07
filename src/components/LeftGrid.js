//Left grid and right grid are quadrants in the grid.
//consisting of the columns: diode, unmask, RU# and the list of cores.
//left grid and right grid are mirror images.

import React from "react";
import { useState } from "react";
import { colorsMap, whiteColorList } from "../utilities/colorsMap";
import "./LeftGrid.css";
import { Row, Col } from "reactstrap";

const LeftGrid = (props) => {
  const { gridNumber, color, cores, unmaskClicked, handleUnmaskClick } = props;
  //RU#
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
                  {/* diode column */}
                  <Col
                    style={{
                      width: "25px",
                      backgroundColor: diodeClicked.has(i) ? "#0902ff" : "#fff",
                    }}
                    className="p-0 cursor ru-border-right ru-border-bottom"
                    xs="1"
                    onClick={(e) => handleDiodeClicked(e, i)}
                  />
                  {/* unmask column */}
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
                  {/* RU# */}
                  <Col
                    style={{ width: "25px" }}
                    className="p-0 ru-border-right ru-border-bottom"
                    xs="1"
                  >
                    {startIndex + i}
                  </Col>
                  {/* change color of cores font based on background color */}
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
