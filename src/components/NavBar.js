import React from "react";
import { Col, Container, Navbar, Row, Nav } from "react-bootstrap";
import { List } from "react-bootstrap-icons";

const NavBar = (props) => {
  const { logo } = props;

  return (
    <Navbar expand="xl" style={{ paddingTop: "0px" }}>
      <Container
        fluid
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <Row
          style={{
            backgroundColor: "green",
            color: "white",
            width: "100%",
            marginLeft: "0px",
          }}
          className="pt-2 pb-3"
        >
          <Col sm={1}>
            <a className="navbar-brand" href="#Home">
              <img
                src={logo}
                width={75}
                height={65}
                alt={logo}
                className="pt-1 pb-1"
              />
            </a>
          </Col>
          <Col sm={10} className="text-center align-content-center">
            <h1>EatEatEat</h1>
          </Col>
          <Col sm={1} className="text-end align-content-center">
            <List size={30} />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
