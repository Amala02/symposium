import { ReactDOM } from "react";
import React from "react";
import "./App.css";
import image from "./web-img.jpg";
import { styled } from "@mui/material/styles";

import Home from ".";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <div class="header">
        <div id="logo">logo</div>
        <div id="head">LICET</div>
        <div id="icon-contact">icon</div>
      </div>

      <div class="left">
        <img src={image} />
      </div>
      <div class="info">
        <h1>TechZar</h1>
        <p>
          "Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit,
          <br></br>sed do eiusmod tempor<br></br> incididunt ut labore et{" "}
          <br></br>
        </p>
        <div>
          <Link to="http://localhost:3000">
            <button>EVENTS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
