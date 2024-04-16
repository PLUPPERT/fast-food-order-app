import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import { menuData } from "./resources/data";
import { Container } from "react-bootstrap";
import MenuList from "./components/MenuList";

function App() {
  const logo = "logo.png";

  return (
    <Container fluid>
      <NavBar logo={logo} />
      <MenuList data={menuData} />
    </Container>
  );
}

export default App;
