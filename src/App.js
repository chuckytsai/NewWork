import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// ==========引用web 的js=============
import { Index } from "./pages";
import { Weather } from "./pages/weather/Weather";
import { Memorandum } from "./pages/memorandum/Memorandum";
import { Timer } from "./pages/timer/Timer";
import { Questionnaire } from "./pages/questionnaire/Questionnaire";
import { LongTeng } from "./pages/LongTeng/LongTeng";
import { ShoppingCart } from "./pages/shoppingCart/ShoppingCart";
import { Loanding } from "./components/Loading";
import { Login } from "./pages/login/Login";

//===========引用樣式==============
import "./styles/App.css";

function App() {
  return <Router>
    <Loanding />
    <Switch>

      {/* ===============首頁================= */}
      <Router exact path="/"><Index /></Router>

      {/* ===============登入================= */}
      <Router path="/login"><Login /></Router>

      {/* ===============天氣預測================= */}
      <Router path="/weather"><Weather /></Router>

      {/* ===============排班表(月曆+清單)================= */}
      <Router path="/Memorandum"><Memorandum /></Router>

      {/* ===============夢遊仙境鬧鐘================= */}
      <Router path="/timer"><Timer /></Router>

      {/* ===============問卷調查表================= */}
      <Router path="/questionnaire"><Questionnaire /></Router>

      {/* ===============龍騰文化活動宣傳網頁================= */}
      <Router path="/LongTeng"><LongTeng /></Router>

      {/* ===============購物車(購物車)================= */}
      <Router path="/shoppingCart"><ShoppingCart /></Router>

    </Switch>
  </Router>
}
export default App;
