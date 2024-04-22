import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import { menuData } from "./resources/data";
import { Container } from "react-bootstrap";
import MenuList from "./components/MenuList";
import Footer from "./components/Footer";

function App() {
  const logo = "logo.png";

  return (
    <Container fluid>
      <NavBar logo={logo} />
      <MenuList data={menuData} show={3} />
      <Footer />
    </Container>
  );
}

export default App;
