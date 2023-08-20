//import { ReactDOM } from "react";
import React from "react";
import "./App.css";
//import image from "./web-img.jpg";
//import { styled } from "@mui/material/styles";
import Image2 from "./TechFest.jpg";
//import Home from ".";
import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <div class="header">
        <div id="logo">logo</div>
        <div id="head">LICET</div>
        <div id="icon-contact">icon</div>
      </div>

      <div class="Container">
        <div id="welcome">Welcome to Techfest 2k22.</div>
        <div id="image-box">
          <img src={Image2} alt="Techfestpic"></img>
        </div>
        <div id="text-box">
          <p>
            "Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit,
            <br></br>sed do eiusmod tempor<br></br> incididunt ut labore et{" "}
            <br></br>
          </p>
        </div>
        <div id="explore">
          <Link to="http://localhost:3000">
            <button class="btn"> Explore events</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
