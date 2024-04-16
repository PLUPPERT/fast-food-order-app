import React from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import "./MenuList.css";

const MenuList = (props) => {
  const { data } = props;

  return (
    <Container>
      <Card className="mb-3">
        <Image
          className="card-img-top"
          src={data[0].image}
          alt={data[0].title}
          height={350}
        />
        <Card.Body style={{ paddingBottom: "0px" }}>
          <Card.Title>{data[0].title}</Card.Title>
          <Card.Text>{data[0].content}</Card.Text>
          <Card.Text
            onClick={() => alert(data[0].price)}
            style={{ cursor: "pointer" }}
          >
            {data[0].price}
          </Card.Text>
          <Container
            className="bg-light py-2 mb-1 d-flex justify-content-center"
            style={{
              boxShadow: "0px -2px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Button
              variant="info"
              className="text-light"
              onClick={() => alert(data[0].price)}
            >
              Add to Order
            </Button>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MenuList;
