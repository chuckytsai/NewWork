import React, { useState, useEffect } from 'react';
import { CloseLoanding } from "../components/Loading";

export let formatData = (str) => {
  let newstr = new Date(str);
  let y = newstr.getFullYear();
  let m = newstr.getMonth() + 1;
  let d = newstr.getDate();
  let h = newstr.getHours();
  let min = newstr.getMinutes();
  let s = newstr.getSeconds();
  return `${y}-${m}-${d} ${h}:${min}:${s}`;
};

function Timer() {
  setTimeout(() => {CloseLoanding();}, 20);
  let [currentTime, setCurrentTime] = useState(Date.now());
  let [time, setTime] = useState("");
  useEffect(() => {
    getTime();
  }, [time]);
  let getTime = () => {
    let timeID = setInterval(() => {
      setCurrentTime(Date.now());
      let result = formatData(currentTime);
      console.log(result);
      setTime(result);
      clearInterval(timeID);
    }, 1000);
  };
  return <div className="header">{time}</div>;
}
export default Timer