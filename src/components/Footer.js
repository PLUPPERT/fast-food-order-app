import React from "react";
import { Card, CardTitle, Col, Container, Row } from "react-bootstrap";

import "./Footer.css";

const Footer = (props) => {
  var { updateOrder, resetOrder, totalPrice, orderList, prices } = props;

  return (
    <div className="footer-div bg-info">
      <Container fluid className="order-container pt-1 pb-3">
        <CardTitle as={"h3"} className="pb-1 ps-2">
          Your Order:
        </CardTitle>
        <Card className="order-card py-2 px-3">
          {/* map products here */}
          <Row>
            <Col>Taco Terrific x {orderList["Taco Terrific"]}</Col>
            <Col className="text-center">Buttons</Col>
            <Col className="text-end">
              {prices[1] * orderList["Taco Terrific"]}
            </Col>
          </Row>
          <Row>
            <Col>Total:</Col>
            <Col className="text-end">SEK {totalPrice}</Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Footer;
