import ReactDOM from "react-dom";
import dayjs from "dayjs";
// 引入物件
import { Sun } from "../../components/Objs/Nature/sun";
import { Cloud } from "../../components/Objs/Nature/cloud";
import "../../styles/Obj/Nature/rain.css";

// 渲染日期
export function WhatDates(index) {
    let dates = document.getElementsByClassName("dates")[0];
    if (index === "Y") { dates.textContent = dayjs(dates.textContent).subtract(1, 'day').format('YYYY-MM-DD'); }
    if (index === "T") { dates.textContent = dayjs(dates.textContent).add(1, 'day').format('YYYY-MM-DD'); }
}

// 根據天氣狀況渲染天氣效果
export function WeatherEffect(time, index) {
    let WeatherLayer = document.getElementsByClassName("layer")[1];
    let Rain = index.split("雨").length;
    let PartlyCloudy = index.split("多雲").length;
    let Cloudyday = index.split("陰").length;
    let Thunder = index.split("雷").length;
    let Fog = index.split("霧").length;
    let Sunny = index.split("晴").length;

    // 恢復正常無天氣狀態
    ReactDOM.render(<></>, WeatherLayer);
    // ======  先決定有沒有太陽  =====
    if (time >= 18 || Rain > 1 || Sunny === 1) {   //不要太陽
        if (Rain > 1) {
            ReactDOM.render(<></>, WeatherLayer);
            CreatRains(0, 50);
            if (document.body.clientWidth > 540) {
                CreatClouds(0, 10, "Rain");
            } else if (document.body.clientWidth <= 540) {
                CreatClouds(0, 7, "Rain");
            }
        }
        else if (Cloudyday > 1) {
            ReactDOM.render(<></>, WeatherLayer);
            if (document.body.clientWidth > 540) {
                CreatClouds(0, 10, "Cloudy");
            }
            else if (document.body.clientWidth <= 540) {
                CreatClouds(0, 7, "Cloudy");
            }
        }
        else if (PartlyCloudy > 1) {
            ReactDOM.render(<></>, WeatherLayer);
            if (document.body.clientWidth > 540) {
                CreatClouds(0, 10, "PartlyCloudy");
            }
            else if (document.body.clientWidth <= 540) {
                CreatClouds(0, 7, "PartlyCloudy");
            }
        }
        if (Fog < 2) { document.getElementsByClassName("wave")[0].style.display = "none"; }
        else if (Fog > 1) { document.getElementsByClassName("wave")[0].style.display = "block"; }
    }
    else if (time < 18 || Sunny > 1) {   //要太陽
        ReactDOM.render(<><Sun /></>, document.getElementsByClassName("layer")[1]);
        CreatClouds(0, 10, "Sun");
        if (Fog < 2) { document.getElementsByClassName("wave")[0].style.display = "none"; }
        else if (Fog > 1) { document.getElementsByClassName("wave")[0].style.display = "block"; }
    }
}
// 許多雨滴的下雨效果
export function CreatRains(index, amount) {
    let WeatherLayer = document.getElementsByClassName("layer")[1];
    let buildings = document.getElementsByClassName("buildings")[0];
    buildings.classList.add("RainBackground");
    for (let x = index; x < amount; x++) {
        let drop = document.createElement("i");
        drop.className = "Rain";
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;
        if (document.body.clientWidth > 768) { drop.style.width = 0.7 * size + "px"; }
        else if (document.body.clientWidth < 768) { drop.style.width = 0.3 * size + "px"; }
        drop.style.left = posX + "px";
        drop.style.animationDelay = delay + "s";
        drop.style.animationDuration = 1 + duration + "s";
        WeatherLayer.appendChild(drop);
    }
}
// 製造出很多雲朵的效果
export function CreatClouds(index, amount, situation) {
    let WeatherLayer = document.getElementsByClassName("layer")[1];
    let buildings = document.getElementsByClassName("buildings")[0];
    buildings.className = "buildings " + situation + "Background";
    for (let x = index; x < amount; x++) {
        let clouds = document.createElement("span");
        clouds.className = "Clouds";
        let posX = x * 10;
        let posY = Math.floor(Math.random() * 150);
        if (document.body.clientWidth > 768) { clouds.style.top = (posY + 25) + "px"; }
        else if (document.body.clientWidth < 768) { clouds.style.top = (posY - 25) + "px"; }
        clouds.style.left = (posX + parseInt(Math.random() * 5)) + "%";
        WeatherLayer.appendChild(clouds);
        ReactDOM.render(<><Cloud className={"Cloud" + x + " Cloud" + situation} /></>, document.getElementsByClassName("Clouds")[x]);
    }
}