import React, { useState } from "react";
import "moment/locale/zh-tw";
import ReactDOM from 'react-dom';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
// 引入元件
import { Sidebar } from "../../../components/ReactElement/Sidebar";
import { CalendarEditAlerts } from "./CalendarEditAlerts";
import Breadcurmb from "../../../components/ReactElement/Breadcrumb";
import Header from "../../../components/ReactElement/Header";
// import { ListGroup, MachineName } from "./ListGroup";
import { ListGroup, MachineName } from "./ListGroup";
import { ShowMonthEdit, GetMachineList, ThisMonthOnly } from "./ScheduleFunction";
import { StoreScheduleInput } from "../../../components/ReactElement/InputCombo";
import { CalenderGroup, ChangeMonths, CompanySelect, StoreEvent } from "./CalendarGroup"
// import { CallLoanding } from "../../../components/ReactElement/Loading";
// 引入樣式
import "../../../styles/Schedule/StoreSchedule.css"

// ========月曆========
export function StoreSchedule() {
    let [sideBarOnOff, setSideBarOnOff] = useState(true);
    setTimeout(() => {
        GetMachineList();
        ReactDOM.render(<CalenderGroup />, document.getElementById('calendarContainer'));
    }, 200)
    setTimeout(() => {
        CompanySelect();
        ChangeMonths();
        ThisMonthOnly();
    }, 400)
    return <div className="container1 d-flex">
        {sideBarOnOff && (<div className="leftSideBar"><Sidebar /></div>)}
        <div className="context">
            <Header
                titleText="店家排程"
                sideBarOnOff={sideBarOnOff}
                setSideBarOnOff={setSideBarOnOff} />
            <Breadcurmb />
            <StoreScheduleInput
                MachineSelect={() => {
                    ReactDOM.render(<option value={null}>請選擇</option>, document.getElementsByClassName("businessTime")[0]);
                    GetMachineList();
                }}
                onClick={() => {
                    let calendarContainer = document.getElementById("calendarContainer");
                    MachineName(document.getElementsByClassName("storeToMachine")[0].value);
                    if (calendarContainer.style.display !== "none") {
                        CallLoanding();
                        StoreEvent();
                    };
                }} />
            <div className="DateGroup">
                <nav className="DateHeader">
                    <div className="SelectWeek">
                        <button className="LastWeek">{"<"}</button>
                        <button className="NextWeek">{">"}</button>
                        <button className="todayButton NormalBtn">今日</button>
                        <span>
                            <h1 className="WeekStart">
                            </h1>
                            <h1>-</h1>
                            <h1 className="WeekEnd">
                            </h1>
                        </span>
                    </div>
                    <div className="SelectMonth">
                        <a href="/stores-schedule/index/"><button className="todayButton NormalBtn">今日</button></a>
                    </div>
                    <div className="ShowMonthEdit">
                        <span>
                            <button className="ShowMonthEditLeft ShowMonthEditAction"
                                onClick={() => {
                                    ShowMonthEdit("left");
                                    ReactDOM.render(<></>, document.getElementById("listContainer"));
                                }}>月</button>
                            <button className="ShowMonthEditRight ShowMonthEditClose"
                                onClick={(e) => {
                                    ShowMonthEdit("right");
                                    // =====生成表單========
                                    ReactDOM.render(
                                        <><ListGroup />
                                            <footer className="BusinessTimeInstruction">
                                                <h6><div className="periodIndex periodMorning"></div>{"早餐時段: 00:00 ~ 10:30"}</h6>
                                                <h6><div className="periodIndex periodNoonday"></div>{"午餐時段: 10:30 ~ 15:30"}</h6>
                                                <h6><div className="periodIndex periodNight"></div>{"晚餐時段: 15:30 ~ 00:00"}</h6>
                                            </footer></>,
                                        document.getElementById("listContainer")
                                    );
                                }}>
                                清單</button>
                        </span>
                        <button className="NormalBtn IndigoBtn"
                            onClick={() => {
                                let YearsMoons = document.getElementsByClassName("react-calendar__navigation__label__labelText--from")[0].textContent;
                                ReactDOM.render(
                                    <CalendarEditAlerts
                                        LastClick={() => {
                                            let WhatMoonText = document.getElementsByClassName("WhatMoonText")[0];
                                            WhatMoonText.textContent = dayjs(WhatMoonText.textContent).subtract(1, 'month').format('YYYY/MM')
                                        }}
                                        NextClick={() => {
                                            let WhatMoonText = document.getElementsByClassName("WhatMoonText")[0];
                                            WhatMoonText.textContent = dayjs(WhatMoonText.textContent).add(1, 'month').format('YYYY/MM');
                                        }}
                                        todayClick={() => {
                                            let WhatMoonText = document.getElementsByClassName("WhatMoonText")[0];
                                            console.log(WhatMoonText)
                                        }}
                                        time={dayjs(YearsMoons).format('YYYY/MM')} />, document.getElementsByClassName("calendarAlert")[0]
                                );
                                document.getElementsByClassName("calendarAlert")[0].classList.add("calendarAlertbBackground");
                            }}
                        >編輯</button>
                    </div>
                </nav>
                <div className="calendarAlert"></div>
                <div id="calendarContainer"></div>
                <div id="listContainer"></div>
            </div>
        </div>
    </div>
}