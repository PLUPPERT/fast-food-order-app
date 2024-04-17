import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownMenu,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import "./MenuList.css";

const MenuList = (props) => {
  const { data } = props;

  return (
    <Container>
      <Row>
        {data.map((meal) => {
          const cardElement = (
            <Col sm={6} md={4}>
              <Card className="mt-2 mb-3">
                <Image
                  className="card-img-top"
                  src={meal.image}
                  alt={meal.title}
                  height={350}
                />
                <Card.Body className="pb-2">
                  <Card.Title>{meal.title}</Card.Title>
                  <Dropdown>
                    <Dropdown.Toggle>Meal Contains:</Dropdown.Toggle>
                    <Dropdown.Menu>
                      {meal.content.map((item) => {
                        const mealItem = (
                          <Dropdown.Item disabled className="text-dark">
                            <p>- {item}</p>
                          </Dropdown.Item>
                        );
                        return mealItem;
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Card.Text
                    style={{ cursor: "default" }}
                    className="text-end pe-2 fw-bold"
                  >
                    ${meal.price}
                  </Card.Text>
                  <Container
                    className="bg-light py-2 d-flex justify-content-center"
                    style={{
                      boxShadow: "0px -2px 0px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Button
                      variant="info"
                      className="text-light"
                      onClick={() => alert(meal.price)}
                    >
                      Add to Order
                    </Button>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          );
          return cardElement;
        })}
      </Row>
    </Container>
  );
};

export default MenuList;
