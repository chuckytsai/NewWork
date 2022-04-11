
import React, { useState } from "react";
import "moment/locale/zh-tw";
import ReactDOM from 'react-dom';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
// 引入元件
// import { Sidebar } from "../../../components/ReactElement/Sidebar";
// import { ListGroup, MachineName } from "./ListGroup";
import { ListGroup } from "./ListGroup";
import { ShowMonthEdit, ThisMonthOnly } from "./ScheduleFunction";
// import { StoreScheduleInput } from "../../../components/ReactElement/InputCombo";
import { CalenderGroup, ChangeMonths, StoreEvent } from "./CalendarGroup"
// import { CallLoanding } from "../../../components/ReactElement/Loading";
// 引入樣式
import "../../styles/work/Schedule/StoreSchedule.css"

// ========月曆========
export function Memorandum() {
    setTimeout(() => {
        ReactDOM.render(<CalenderGroup />, document.getElementById('calendarContainer'));
        StoreEvent();
    }, 200)
    setTimeout(() => {
        ChangeMonths();
        ThisMonthOnly();
    }, 400)
    return <div className="DateGroup">
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
                        }}>清單</button>
                </span>
            </div>
        </nav>
        <div className="calendarAlert"></div>
        <div id="calendarContainer"></div>
        <div id="listContainer"></div>
    </div>
}