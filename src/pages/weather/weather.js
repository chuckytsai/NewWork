import ReactDOM from 'react-dom';
// import Parallax  from 'react-parallax';
import dayjs from 'dayjs';
import { WeatherApi } from "../../api/api";
import { TaiwanCitys } from "./weatherEl";
import "../../styles/work/weather.css";

import "../../styles/Obj/Nature/cloud.css";
import { WhatDates, WeatherEffect } from "./weatherFunction";
import { SvgWave } from "../../components/Objs/Nature/waveSVG";
import mountains from "../../images/png/el/101.png";

let Today = new Date();  //今天日期
let TimeFrom = dayjs(Today).format('YYYY-MM-DD') + "T06:00:00"; //開始時間
let TimeTo = dayjs(Today).format('YYYY-MM-DD') + "T18:00:00"; //結束時間

// 中央氣象API每天區分為8小時的時間給API時段
export function Day12Hrs(day) {
    if (dayjs(day).format('HH') === "00" && dayjs(day).format('DD') !== dayjs(Today).format('DD')) {
        TimeFrom = dayjs(day).format('YYYY-MM-DD') + "T06:00:00";
        TimeTo = dayjs(day).format('YYYY-MM-DD') + "T18:00:00";
        WeatherMap();
    }
    else if (dayjs(day).format('DD') === dayjs(Today).format('DD')) {
        if (dayjs(Today).format('HH') < "17") {
            TimeFrom = dayjs(Today).format('YYYY-MM-DD') + "T06:00:00";
            TimeTo = dayjs(Today).format('YYYY-MM-DD') + "T18:00:00";
        }
        else if (dayjs(Today).format('HH') >= "17") {
            TimeFrom = dayjs(Today).format('YYYY-MM-DD') + "T18:00:00";
            TimeTo = dayjs(Today).add(1, 'day').format('YYYY-MM-DD') + "T06:00:00";
        }
        WeatherMap();
    }
    else {
        if (dayjs(day).format('HH') < "17") {
            TimeFrom = dayjs(day).format('YYYY-MM-DD') + "T06:00:00";
            TimeTo = dayjs(day).format('YYYY-MM-DD') + "T18:00:00";
        }
        else if (dayjs(day).format('HH') >= "17") {
            TimeFrom = dayjs(day).format('YYYY-MM-DD') + "T18:00:00";
            TimeTo = dayjs(day).add(1, 'day').format('YYYY-MM-DD') + "T06:00:00";
        }
        WeatherMap();
    }
    console.log(TimeFrom, TimeTo)
}
// ==============天氣氣象局API渲染資料======================
let WeatherMap = async () => {
    let SelectArea = document.getElementsByClassName("SelectArea")[0];
    try {
        let Item = await WeatherApi(document.getElementsByClassName("SelectCitys")[0].value, TimeFrom, TimeTo);
        let Citys = Item.data.records.locations[0].location.map((item, i) =>
            <option key={i} value={i}>{item.locationName}</option>);
        ReactDOM.render(<>{Citys}</>, SelectArea);
        setTimeout(() => {
            let MaxATs = Item.data.records.locations[0].location[SelectArea.value].weatherElement[5].time.map((item, i) =>
                <div key={i} value={i}>
                    <h6>最高溫度:</h6><h5>{item.elementValue[0].value} 度</h5>
                </div>);
            ReactDOM.render(<>{MaxATs}</>, document.getElementsByClassName("MaxAT")[0]);
            let MinTs = Item.data.records.locations[0].location[SelectArea.value].weatherElement[8].time.map((item, i) =>
                <div key={i} value={i}>
                    <h6>最低溫度:</h6><h5>{item.elementValue[0].value} 度</h5>
                </div>);
            ReactDOM.render(<>{MinTs}</>, document.getElementsByClassName("MinT")[0]);
            if (Item.data.records.locations[0].location[SelectArea.value].weatherElement[0].time.length > 0) {
                let POPs = Item.data.records.locations[0].location[SelectArea.value].weatherElement[0].time.map((item, i) =>
                    <div key={i} value={i}>
                        <h6>降雨機率:</h6><h5>{item.elementValue[0].value} %</h5>
                    </div>);
                ReactDOM.render(<>{POPs}</>, document.getElementsByClassName("POP")[0]);
            }
            if (Item.data.records.locations[0].location[SelectArea.value].weatherElement[9].time.length > 0) {
                let UVIs = Item.data.records.locations[0].location[SelectArea.value].weatherElement[9].time.map((item, i) =>
                    <div key={i} value={i}>
                        <h6>紫外線指數:</h6><h5>{item.elementValue[0].value}</h5>
                    </div>);
                document.getElementsByClassName("UVI")[0].style.display = "flex";
                ReactDOM.render(<>{UVIs}</>, document.getElementsByClassName("UVI")[0]);
            } else {
                document.getElementsByClassName("UVI")[0].style.display = "none";
            }
            let Wxs = Item.data.records.locations[0].location[SelectArea.value].weatherElement[6].time.map((item, i) =>
                <div key={i} value={i}>
                    <h6>天氣狀況:</h6><h5>{item.elementValue[0].value}</h5>
                </div>);
            ReactDOM.render(<>{Wxs}</>, document.getElementsByClassName("Wx")[0]);
            if (Item.data.records.locations[0].location[SelectArea.value].weatherElement[6].time.length > 0) {
                WeatherEffect(TimeFrom.split("T")[1].split(":")[0], Item.data.records.locations[0].location[SelectArea.value].weatherElement[6].time[0].elementValue[0].value);
            }
            else {
                TimeFrom = dayjs(Today).add(1, 'day').format('YYYY-MM-DD') + "T18:00:00";
                TimeTo = dayjs(Today).add(2, 'day').format('YYYY-MM-DD') + "T06:00:00";
                setTimeout(() => {
                    WeatherMap();
                }, 100);
            }
        }, 500);
    } catch (error) {
        console.log("異常", error);
    }
}

export function Weather() {
    setTimeout(() => { Day12Hrs(Today); }, 100);
    return <section className="WeatherBackground">
        <div className="WeatherContainer">
            <div id="scene">
                <div className="layer"><img alt="" src={mountains} /></div>
                <div className="layer"></div>
                <div className="layer">
                    <div className="WeatherTexts">
                        <div>
                            <div className="WeatherSelectGroups">
                                <TaiwanCitys onChange={() => { WeatherMap(); }} />
                                <select className="SelectArea" onChange={() => { WeatherMap(); }}></select>
                            </div>
                            <div className="WeatherSelectGroups">
                                <button onClick={() => {
                                    if (dayjs(document.getElementsByClassName("dates")[0].textContent).format('YYYY-MM-DD') !== dayjs(Today).format('YYYY-MM-DD')) {
                                        WhatDates("Y");
                                        setTimeout(() => {
                                            Day12Hrs(dayjs(document.getElementsByClassName("dates")[0].textContent).format('YYYY-MM-DD'));
                                        }, 500);
                                    }
                                }}></button>
                                <div className="dates WeatherText">{dayjs(Today).format("YYYY-MM-DD")}</div>
                                <button className="NextDay" onClick={() => {
                                    if (dayjs(document.getElementsByClassName("dates")[0].textContent).format('YYYY-MM-DD') !== dayjs(Today).add(6, 'day').format('YYYY-MM-DD')) {
                                        WhatDates("T");
                                        setTimeout(() => {
                                            Day12Hrs(dayjs(document.getElementsByClassName("dates")[0].textContent).format('YYYY-MM-DD'));
                                        }, 500);
                                    }
                                }}></button>
                            </div>
                            <div className="MaxAT WeatherText"></div>
                            <div className="MinT WeatherText"></div>
                            <div className="POP WeatherText"></div>
                            <div className="Wx WeatherText"></div>
                            <div className="UVI WeatherText"></div>
                        </div>
                    </div>
                </div>
            </div>
            <SvgWave />
        </div>
    </section>
}