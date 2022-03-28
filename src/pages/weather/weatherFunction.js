import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
// 引入物件
import { Sun } from "../../components/Objs/Nature/sun";
import { Cloud } from "../../components/Objs/Nature/cloud";
import "../../styles/Obj/Nature/rain.css";

// 渲染日期
export function WhatDates(index) {
    let dates = document.getElementsByClassName("dates")[0];
    if (index === "Y") {
        dates.textContent = dayjs(dates.textContent).subtract(1, 'day').format('YYYY-MM-DD');
    }
    if (index === "T") {
        dates.textContent = dayjs(dates.textContent).add(1, 'day').format('YYYY-MM-DD');
    }
}

// 根據天氣狀況渲染天氣效果
export function WeatherEffect(time, index) {
    let WeatherLayer = document.getElementsByClassName("layer")[1];
    let Rain = index.split("雨").length;
    let PartlyCloudy = index.split("多雲").length;
    let Cloudyday = index.split("陰").length;
    let Thunder = index.split("雷").length;
    let Fog = index.split("霧").length;

    // 恢復正常無天氣狀態
    ReactDOM.render(<></>, WeatherLayer);
    WeatherLayer.classList.remove("RainBackground");
    // ======  先決定有沒有太陽  =====
    if (time >= 18 || Rain > 1 || Cloudyday > 1) {
        if (Rain > 1) {
            ReactDOM.render(<><Cloud /></>, WeatherLayer);
            CreatRains(0, 50);
        }
        else if (Cloudyday > 1) {
            ReactDOM.render(<><Cloud /></>, WeatherLayer);
        }
    }
    else if (time < 18) {
        ReactDOM.render(<><Sun /><Cloud /></>, document.getElementsByClassName("layer")[1]);
    }
}

export function CreatRains(index, amount) {
    let WeatherLayer = document.getElementsByClassName("layer")[1];
    WeatherLayer.classList.add("RainBackground");
    for (let x = index; x < amount; x++) {
        let drop = document.createElement("i");
        drop.className = "Rain";
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;
        drop.style.width = 0.7 * size + "px";
        drop.style.left = posX + "px";
        drop.style.animationDelay = delay + "s";
        drop.style.animationDuration = 1 + duration + "s";
        WeatherLayer.appendChild(drop);
    }
}