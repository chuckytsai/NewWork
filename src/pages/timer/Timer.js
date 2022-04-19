import React, { useState, useEffect } from 'react';
import "../../styles/work/timer.css";
// 引入元件
import { NavSidebar } from "../../components/Nav";
import { Sidebar, IllustrateSidebar, CloseMenu } from "../../components/SidebarMenu"
import { CloseLoanding } from "../../components/Loading";
import { FormatData } from "./TimerFuntion";
// 引入圖片
import RoseShape from "../../images/svg/RoseShape.svg";
import RoseShape2 from "../../images/svg/RoseShape2.svg";
import RoseShape3 from "../../images/svg/RoseShape3.svg";
import RoseShape4 from "../../images/svg/RoseShape4.svg";
import RoseShape5 from "../../images/svg/RoseShape5.svg";
import RoseShape6 from "../../images/svg/RoseShape6.svg";
import RoseShape7 from "../../images/svg/RoseShape7.svg";
import grass from "../../images/svg/grass.svg";
import teapot from "../../images/svg/teapot.svg";
import bottle from "../../images/svg/bottle.svg";
import Chair from "../../images/svg/Chair.svg";
import key from "../../images/svg/key.svg";

export function Timer() {
  let [currentTime, setCurrentTime] = useState(Date.now());
  let [time, setTime] = useState("");
  useEffect(() => {
    getTime();
  });
  setTimeout(() => {
    CloseLoanding();
  }, 1500);
  let getTime = () => {
    let timeID = setInterval(() => {
      setCurrentTime(Date.now());
      let result = FormatData(currentTime);
      setTime(result);
      clearInterval(timeID);
    }, 1000);
  };
  return <>
    <NavSidebar />
    <Sidebar />
    <IllustrateSidebar />
    <div className="TimmerGroup" onClick={() => { CloseMenu("all"); }}>
      <div className="TimerContainer">
        <div className="clock">
          <div className="circle" id="sc"><div className="heart"></div><i></i></div>
          <div className="circle circle2" id="mn"><div className="heart"></div><i></i></div>
          <div className="circle circle3" id="hr"><div className="heart"></div><i></i></div>
          <span className="Timer1"><b>I</b></span>
          <span className="Timer2"><b>II</b></span>
          <span className="Timer3"><b>III</b></span>
          <span className="Timer4"><b>IV</b></span>
          <span className="Timer5"><b>V</b></span>
          <span className="Timer6"><b>VI</b></span>
          <span className="Timer7"><b>VII</b></span>
          <span className="Timer8"><b>VIII</b></span>
          <span className="Timer9"><b>IX</b></span>
          <span className="Timer10"><b>X</b></span>
          <span className="Timer11"><b>XI</b></span>
          <span className="Timer12"><b>XII</b></span>
        </div>
        <div className="clcokRing">
          <span className="Flower1"><img alt="" src={RoseShape} /></span>
          <span className="Flower2"><img alt="" src={grass} /></span>
          <span className="Flower3"><img alt="" src={RoseShape6} /></span>
          <span className="Flower4"><img alt="" src={grass} /></span>
          <span className="Flower5"><img alt="" src={RoseShape2} /></span>
          <span className="Flower6"><img alt="" src={grass} /></span>
          <span className="Flower7"><img alt="" src={RoseShape3} /></span>
          <span className="Flower8"><img alt="" src={grass} /></span>
          <span className="Flower9"><img alt="" src={grass} /></span>
          <span className="Flower10"><img alt="" src={RoseShape} /></span>
          <span className="Flower11"><img alt="" src={RoseShape7} /></span>
          <span className="Flower12"><img alt="" src={grass} /></span>
          <span className="Flower13"><img alt="" src={RoseShape2} /></span>
          <span className="Flower14"><img alt="" src={RoseShape5} /></span>
          <span className="Flower15"><img alt="" src={RoseShape4} /></span>
          <span className="Flower16"><img alt="" src={grass} /></span>
          <span className="Flower17"><img alt="" src={grass} /></span>
          <span className="Flower18"><img alt="" src={RoseShape7} /></span>
          <span className="Flower19"><img alt="" src={grass} /></span>
          <span className="Flower20"><img alt="" src={RoseShape4} /></span>
          <span className="Flower21"><img alt="" src={grass} /></span>
          <span className="Flower22"><img alt="" src={grass} /></span>
          <span className="Flower23"><img alt="" src={RoseShape7} /></span>
          <span className="Flower24"><img alt="" src={grass} /></span>
        </div>

      </div>
    </div>
    <div className="DropItems">
      <img className="teapot" alt="" src={teapot} />
      <img className="bottle" alt="" src={bottle} />
      <img className="Chair" alt="" src={Chair} />
      <img className="key" alt="" src={key} />
      <div className="TimeText">{time}</div>
    </div>
  </>;
}