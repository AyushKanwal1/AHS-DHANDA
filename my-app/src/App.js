import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to react bitches.</p>

        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          class="glow-on-hover"
        >
          69
        </a>
      </header>
    </div>
  );
}

export default App;
