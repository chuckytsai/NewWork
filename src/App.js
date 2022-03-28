import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// ==========引用web 的js=============
import { Index } from "./pages";
import { Weather } from "./pages/weather/weather"
//===========引用樣式==============
import "./styles/App.css";
// ===========引用物件===============

function App() {
  return <Router>
    <Switch>

      {/* ===============首頁================= */}
      <Router exact path="/">
        <Index />
      </Router>
      
      {/* ===============天氣預測================= */}
      <Router path="/weather">
        <Weather />
      </Router>
      
    </Switch>
  </Router>
}
export default App;
