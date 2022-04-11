
import React from "react";
import "moment/locale/zh-tw";
import ReactDOM from 'react-dom';
import 'react-calendar/dist/Calendar.css';
// 引入元件
import { ShowMonthEdit, ThisMonthOnly } from "./ScheduleFunction";
import { CalenderGroup, ChangeMonths, StoreEvent } from "./CalendarGroup"
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
        if (window.location.href.split("/")[4] === "date") { ShowMonthEdit("left"); }
        else if (window.location.href.split("/")[4] === "list") { ShowMonthEdit("right"); }
    }, 400);
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
                    <a href="/memorandum/date">
                        <button className="ShowMonthEditLeft ShowMonthEditAction">月</button>
                    </a>
                    <a href="/memorandum/list">
                        <button className="ShowMonthEditRight ShowMonthEditClose">清單</button>
                    </a>
                </span>
            </div>
        </nav>
        <div className="calendarAlert"></div>
        <div id="calendarContainer"></div>
        <div id="listContainer"></div>
    </div>
}