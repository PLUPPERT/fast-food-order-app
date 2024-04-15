import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { menuData } from "./resources/data";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
    </div>
  );
}

export default App;
