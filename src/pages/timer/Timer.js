import React, { useState, useEffect } from 'react';
import "../../styles/work/timer.css";
import dayjs from "dayjs";
// 引入元件
import { NavSidebar } from "../../components/Nav";
import { Sidebar, IllustrateSidebar, CloseMenu } from "../../components/SidebarMenu"
import { CloseLoanding } from "../../components/Loading";


export let formatData = (str) => {
  let hr = document.querySelector('#hr');
  let mn = document.querySelector('#mn');
  let sc = document.querySelector('#sc');
  let newstr = new Date(str);
  let date = dayjs(newstr).format('YYYY-MM-DD')
  let Time = dayjs(newstr).format('HH:mm:ss')
  let hh = newstr.getHours() * 30;
  let mm = newstr.getMinutes() * 6;
  let ss = newstr.getSeconds() * 6;
  hr.style.transform = "rotateZ(" + (hh + (mm / 12)) + "deg)";
  mn.style.transform = "rotateZ(" + mm + "deg)";
  sc.style.transform = "rotateZ(" + ss + "deg)";
  return `${date} ${Time}`;
};

export function Timer() {
  let [currentTime, setCurrentTime] = useState(Date.now());
  let [time, setTime] = useState("");
  useEffect(() => {
    CloseLoanding();
    getTime();
  });
  let getTime = () => {
    let timeID = setInterval(() => {
      setCurrentTime(Date.now());
      let result = formatData(currentTime);
      // console.log(result);
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
          <div className="circle" id="sc"><i></i></div>
          <div className="circle circle2" id="mn"><i></i></div>
          <div className="circle circle3" id="hr"><i></i></div>
          <span className="Timer1"><b>1</b></span>
          <span className="Timer2"><b>2</b></span>
          <span className="Timer3"><b>3</b></span>
          <span className="Timer4"><b>4</b></span>
          <span className="Timer5"><b>5</b></span>
          <span className="Timer6"><b>6</b></span>
          <span className="Timer7"><b>7</b></span>
          <span className="Timer8"><b>8</b></span>
          <span className="Timer9"><b>9</b></span>
          <span className="Timer10"><b>10</b></span>
          <span className="Timer11"><b>11</b></span>
          <span className="Timer12"><b>12</b></span>
        </div>
      </div>
      <div className="TimeText">{time}</div>
    </div>
  </>;
}