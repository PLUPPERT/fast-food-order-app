import React from "react";
import "./NavBar.css";

import { Col, Container, Dropdown, Navbar, Row } from "react-bootstrap";
import { List } from "react-bootstrap-icons";

const NavBar = (props) => {
  const { logo } = props;

  return (
    <Navbar>
      <Container fluid className="bg-info">
        <Row className="pt-2 pb-3">
          <Col md={2} sm={4}>
            <a href="#Home">
              <img
                src={logo}
                width={75}
                height={65}
                alt={logo}
                className="ms-3"
              />
            </a>
          </Col>
          <Col md={8} sm={4} className="text-center align-content-center">
            <h1 className="main-title">EatEatEat</h1>
          </Col>
          <Col md={2} sm={4} className="text-end align-content-center">
            <Dropdown>
              <Dropdown.Toggle
                as={List}
                size={35}
                className="dropdown-toggler text-end"
              />
              <Dropdown.Menu className="dropdown-menu bg-secondary">
                <Dropdown.Item
                  href="#/action-1"
                  className="light-dropdown-item bg-light"
                >
                  Light Mode
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  className="dark-dropdown-item bg-dark text-light"
                >
                  Dark Mode
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
