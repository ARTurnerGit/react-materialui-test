import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;
