import React from "react";
import { Button, Card, CardTitle, Col, Container, Row } from "react-bootstrap";

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
            <Col md={5}>Taco Terrific x {orderList["Taco Terrific"]}</Col>
            <Col md={2} className="amount-buttons text-center">
              <Button className="minus-btn">-</Button>
              <Button className="plus-btn">+</Button>
            </Col>
            <Col md={5} className="text-end">
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
