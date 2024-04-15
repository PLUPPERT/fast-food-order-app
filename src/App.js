import React from "react";

import NavBar from "./components/NavBar";
import { menuData } from "./resources/data";

function App() {
  const logo = "logo.png";

  return (
    <div
      className="App"
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 0,
        bottom: 0,
        margin: 0,
        padding: 0,
      }}
    >
      <NavBar logo={logo} />
    </div>
  );
}

export default App;
