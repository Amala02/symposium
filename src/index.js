import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
