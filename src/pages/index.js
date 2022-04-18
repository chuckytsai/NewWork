import React from "react";
// 引入Json
import { Data } from "../components/Json/index.json";
// 引入CSS
import "../styles/index.css";
// LONDING
import { CloseLoanding } from "../components/Loading";

// ================首頁=================
export function Index() {
  setTimeout(() => {
    CloseLoanding();
  }, 10);
  return <div className="IndexPanel">
    <div className="IllustrateGroup">
      <h6>{""}</h6>
    </div>
    <div className="WellcomeMyHome">
      <div className="HoverImgs">
        {Data.map((item, i) => (
          <a href={item["url"]} className="HoverImg" key={i}
            onMouseMove={() => { IllustrateGroupEffect("Move", item["name"]); }}
            onMouseLeave={() => { IllustrateGroupEffect("Leave", ""); }}
          >{item["name"]}</a>
        ))}
      </div>
    </div>
  </div>
}

// ===========滑鼠移入與移出選項  左邊說明區塊效果==========
export function IllustrateGroupEffect(index, item) {
  let IllustrateGroup = document.getElementsByClassName("IllustrateGroup")[0];
  if (index === "Move") { IllustrateGroup.lastElementChild.textContent = item; }
  else if (index === "Leave") { IllustrateGroup.lastElementChild.textContent = item; }
}