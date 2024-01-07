import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import PopulateCores from "./constraints/PopulateCores";
import MainHeading from "./components/MainHeading";
import LeftGrid from "./components/LeftGrid";
import RightGrid from "./components/RightGrid";
import GridCol from "./components/GridCol";

//4 colors for 4 corners of grid
const gridColors = {
  1: "#002b00",
  2: "#588c00",
  3: "#465a00",
  4: "#3794e2",
};

function App() {
  const [cores, setCores] = useState([]);
  const [unmaskClicked, setUnmaskClicked] = useState(new Set());

  const handleUnmaskClick = (e, prod) => {
    e.preventDefault();
    setUnmaskClicked(new Set([...unmaskClicked, prod.name.split(" ")[1]]));
  };

  useEffect(() => {
    setCores(PopulateCores());
  }, []);

  return (
    <Container className="app p-0">
      {/* Populate Data */}

      <Row>
        <Col md="11">
          <MainHeading />
          <Row>
            <GridCol msg="1" color={gridColors["1"]} />
            <Col className="ru-border p-0">
              <LeftGrid
                gridNumber={1}
                color={gridColors[1]}
                cores={cores[0]}
                unmaskClicked={unmaskClicked}
                handleUnmaskClick={handleUnmaskClick}
              />
            </Col>
            <Col className="ru-block ru-border" xs="1"></Col>
            <Col className="ru-border p-0">
              <RightGrid
                gridNumber={3}
                color={gridColors[2]}
                cores={cores[1]}
                unmaskClicked={unmaskClicked}
                handleUnmaskClick={handleUnmaskClick}
              />
            </Col>
            <GridCol msg="2" color={gridColors["2"]} />
          </Row>
          <Row className="ru-border ru-row">MIDHALF</Row>
          <Row>
          <GridCol msg="3" color={gridColors["3"]} />
            <Col className="ru-border p-0">
              <LeftGrid
                gridNumber={2}
                color={gridColors[3]}
                cores={cores[2]}
                unmaskClicked={unmaskClicked}
                handleUnmaskClick={handleUnmaskClick}
              />
            </Col>
            <Col className="ru-block ru-border" xs="1"></Col>
            <Col className="ru-border p-0">
              <RightGrid
                gridNumber={4}
                color={gridColors[4]}
                cores={cores[3]}
                unmaskClicked={unmaskClicked}
                handleUnmaskClick={handleUnmaskClick}
              />
            </Col>
            <GridCol msg="4" color={gridColors["4"]} />
          </Row>
          <Row className="ru-border ru-row">MISC Block</Row>
        </Col>
        <Col md="1 p-0 align-items-center">
          {/* Content for the second column */}
          <div
            style={{
              padding: "20px",
              height: "100%",
            }}
          >
            <div
              className="align-items-center justify-content-center"
              style={{
                marginTop: "100px",
                display: "flex",
                border: "2px solid black",
                height: "calc(100% - 100px)",
              }}
            >
              <p>I/Os</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
