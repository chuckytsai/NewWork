import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// ==========引用web 的js=============
import { Index } from "./pages";
import { Weather } from "./pages/weather/Weather";
import { Memorandum } from "./pages/memorandum/Memorandum";
import { Loanding } from "./components/Loading";
import { Citys } from "./components/Citys";
//===========引用樣式==============
import "./styles/App.css";

function App() {
  return <Router>
    <Loanding />
    <Switch>

      {/* ===============首頁================= */}
      <Router exact path="/"><Index /></Router>

      {/* ===============天氣預測================= */}
      <Router path="/weather"><Weather /></Router>

      {/* ===============排班表(月曆+清單)================= */}
      <Router path="/Memorandum"><Memorandum /></Router>

      {/* ===============沒有img的城市================= */}
      <Router path="/Citys"><Citys /></Router>

    </Switch>
  </Router>
}
export default App;
