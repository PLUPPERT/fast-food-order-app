import React from "react";
import { Card, CardTitle, Col, Container, Row } from "react-bootstrap";

import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="footer-div">
      <footer className="app-footer bg-info py-3">
        <Container className="order-container mx-3 pt-1 pb-3">
          <CardTitle as={"h3"} className="pb-1">
            Your Order:
          </CardTitle>
          <Card className="order-card py-2 px-3">
            {/* map products here */}
            <Row>
              <Col>product</Col>
              <Col className="text-center">Buttons</Col>
              <Col className="text-end">Price</Col>
            </Row>
            <Row>
              <Col>Total:</Col>
              <Col className="text-end">SEK XXX.xx</Col>
            </Row>
          </Card>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
