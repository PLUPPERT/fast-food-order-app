import React, { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import { menuData } from "./resources/data";
import { Container } from "react-bootstrap";
import MenuList from "./components/MenuList";
import Footer from "./components/Footer";

function App() {
  const [order, setOrder] = useState({
    "Burger Deluxe Meal": 0,
    "Taco Terrific": 0,
    "Fries-on-tha-GO": 0,
    "Gluttony Meal": 0,
    "Hot-Burger-Dog Meal": 0,
    "Imposter Hot Dog": 0,
  });

  const [totalPrice, setTotalPrice] = useState(0.0);

  const updateOrder = (meal, changeTotalWith, action) => {
    if (order[meal] === 0 && !action) {
      return;
    }

    let updatedTotalPrice = action
      ? totalPrice + changeTotalWith
      : totalPrice - changeTotalWith;

    let updatedOrderList = { ...order };

    let updatedAmount = order[meal];

    updatedAmount = action ? updatedAmount + 1 : updatedAmount - 1;

    updatedOrderList[meal](updatedAmount);

    setOrder(updatedOrderList);
    setTotalPrice(updatedTotalPrice);
  };

  const resetOrder = (submitOrReset) => {
    if (submitOrReset) {
      alert(order + "\n\n Total: " + totalPrice + " SEK");
    }

    setOrder({
      "Burger Deluxe Meal": 0,
      "Taco Terrific": 0,
      "Fries-on-tha-GO": 0,
      "Gluttony Meal": 0,
      "Hot-Burger-Dog Meal": 0,
      "Imposter Hot Dog": 0,
    });

    setTotalPrice(0.0);
  };

  const prices = [
    menuData[0].price,
    menuData[1].price,
    menuData[2].price,
    menuData[3].price,
    menuData[4].price,
    menuData[5].price,
  ];

  const logo = "logo.png";

  return (
    <Container fluid className="main-container">
      <NavBar logo={logo} />
      <MenuList data={menuData} show={3} />
      <Footer
        updateOrder={updateOrder}
        resetOrder={resetOrder}
        totalPrice={totalPrice}
        orderList={order}
        prices={prices}
      />
    </Container>
  );
}

export default App;
