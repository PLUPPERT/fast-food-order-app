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
          <Row>
            <Col md={2} className="product-title">
              Product:
            </Col>
            <Col md={{ span: 1, offset: 6 }} className="price-title text-end">
              Price:
            </Col>
            <Col md={{ span: 1, offset: 1 }} className="total-title text-end">
              Total:
            </Col>
          </Row>
          {/* map products here */}
          <Row>
            <Col md={4}>Taco Terrific</Col>
            <Col md={4} className="amount-buttons">
              <Button className="minus-btn">-</Button>
              <p className="item-amount">{orderList["Taco Terrific"]}</p>
              <Button className="plus-btn">+</Button>
            </Col>
            <Col md={1} className="text-end">
              {prices[1]}
            </Col>
            <Col md={{ span: 1, offset: 1 }} className="text-end">
              {prices[1] * orderList["Taco Terrific"]}
            </Col>
            <Col md={1} className="text-center">
              X
            </Col>
          </Row>
          <Row className="mt-1">
            <Col md={11} className="order-total-sum text-end">
              SEK {totalPrice}
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Footer;
