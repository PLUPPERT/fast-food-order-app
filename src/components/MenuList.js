import React, { useState, useEffect } from "react";
import { Button, Card, Container, Dropdown, Image } from "react-bootstrap";
import "./MenuList.css";

const MenuListCarousel = (props) => {
  var { data, show } = props;

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(data.length);

  useEffect(() => {
    setLength(data && data.length);
    const handleWindowResize = () => {
      setWindowSize(getWindowSize);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [data]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  var carouselCountDisplay;

  if (windowSize.innerWidth >= 731 && windowSize.innerWidth > 730) {
    show = 3;
    carouselCountDisplay = `show-${show}`;
  } else if (windowSize.innerWidth <= 730 && windowSize.innerWidth > 0) {
    show = 2;
    carouselCountDisplay = `show-${show}`;
  } else {
    carouselCountDisplay = `show-${show}`;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}
        <div className="carousel-content-wrapper">
          <div
            className={`carousel-content ${carouselCountDisplay}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {data.map((meal) => {
              const cardElement = (
                <div>
                  <Card className="mt-2 mb-3 mx-2">
                    <Image
                      className="card-img-top"
                      src={meal.image}
                      alt={meal.title}
                      height={350}
                    />
                    <Card.Body className="pb-2">
                      <Card.Title className="text-center">
                        {meal.title}
                      </Card.Title>
                      <Dropdown className="text-center" drop="down-centered">
                        <Dropdown.Toggle>Meal Contains:</Dropdown.Toggle>
                        <Dropdown.Menu flip={true}>
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
                </div>
              );
              return cardElement;
            })}
          </div>
        </div>
        {currentIndex < length - show && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuListCarousel;

export const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};
