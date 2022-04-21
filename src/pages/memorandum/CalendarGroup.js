import React from "react";
import "moment/locale/zh-tw";
import ReactDOM from 'react-dom';
import { Calendar } from 'react-calendar';
import dayjs from 'dayjs';
import { onSelect } from "./ListGroup";
import { ThisMonthOnly } from "./ScheduleFunction";
import { CallLoanding, CloseLoanding } from "../../components/Loading";
import { DataCompent } from "../../components/Json/Holiday.json";
// 引入Json檔案
import { ScheduleList } from "../../components/Json/ScheduleList.json";

let ThisMonth = new Date().getMonth();
let ThisYear = new Date().getFullYear();
let dateCost = 0;
let tileContent = ({ date, view }) =>
    view ===
        'month' && date.getMonth() === ThisMonth ?
        <span value={dateCost++} className="DateList"></span> : <p className="NoDateList"></p>

function nextThisMon() {
    CallLoanding();
    if (ThisMonth < 11) {
        ThisMonth = ThisMonth + 1;
    }
    else {
        ThisMonth = 0;
    }
    ReactDOM.render(<CalenderGroup />, document.getElementById('calendarContainer'));
    setTimeout(() => {
        StoreEvents();
        ThisMonthOnly();
    }, 250);
}
function prevThisMon() {
    CallLoanding();
    if (ThisMonth === 0) {
        ThisMonth = 11;
    }
    else {
        ThisMonth = ThisMonth - 1;
    }
    ReactDOM.render(<CalenderGroup />, document.getElementById('calendarContainer'));
    setTimeout(() => {
        StoreEvents();
        ThisMonthOnly();
    }, 200);
}
// 變更月份改變事件
export function ChangeMonths() {
    document.getElementsByClassName("react-calendar__navigation__next-button")[0].addEventListener("click", nextThisMon, false);
    document.getElementsByClassName("react-calendar__navigation__prev-button")[0].addEventListener("click", prevThisMon, false);
}
// 月曆上的物件(事件)
export function CalenderGroup() {
    setTimeout(() => {
        let DateList = document.getElementsByClassName("DateList");
        if (document.body.clientWidth > 820) {
            for (let x = 0; x < DateList.length; x++) {
                
                DateList[x].index = x;
                DateList[x].addEventListener("mousemove", addClass, false);
                DateList[x].addEventListener("mouseout", delClass, false);
            }
        }
        function addClass() {
            if (DateList[this.index].lastElementChild !== null) {
                if (DateList[this.index].lastElementChild.className === "BusinessMachine") {
                    DateList[this.index].classList.add("DateListHover");
                }
            }
        }
        function delClass() {
            if (DateList[this.index].lastElementChild !== null) {
                DateList[this.index].classList.remove("DateListHover");
            }
        }
    }, 500);
    return <>
        <Calendar
            locale={("zh-TW")}
            defaultView={("month")}
            formatDay={(locale, date) => dayjs(date).format('D')}
            formatMonthYear={(locale, date) => dayjs(date).format('YYYY - MM')}
            formatShortWeekday={(locale, date) => dayjs(date).format('ddd')}
            calendarType={("US")}
            tileContent={tileContent}
            onClickDay={(value, event) => onSelect(value)}
        /><footer className="BusinessTimeInstruction">
            <h6><div className="periodIndex periodMorning"></div>{"早上時段: 10:00 ~ 14:00"}</h6>
            <h6><div className="periodIndex periodNoonday"></div>{"下午時段: 14:00 ~ 18:00"}</h6>
            <h6><div className="periodIndex periodNight"></div>{"晚上時段: 18:00 ~ 22:00"}</h6>
        </footer></>
}
// =====渲染假日=====
export function HolidayDates(props) {
    return <div className="HolidayDates">{props.text}</div>
}
export function HolidayEvents() {
    let DateList = document.getElementsByClassName("DateList");
    for (let x = 0; x < DateList.length; x++) {
        for (let y = 0; y < DataCompent.length; y++) {
            if (parseInt(DataCompent[y].date.split("-")[1]) === (ThisMonth + 1)) {
                ReactDOM.render(<HolidayDates text={DataCompent[y].name} />,
                DateList[parseInt(DataCompent[y].date.split("-")[2]) - 1])
            }
        }
    }
}
// =====店家周期排程=====
let StoreEvents = async () => {
    let DateList = document.getElementsByClassName("DateList");
    for (let x = 0; x < DateList.length; x++) {
        ReactDOM.render(<>{" "}</>, document.getElementsByClassName("DateList")[x])
    }
    let StoreMonth = ThisMonth + 1;
    if (StoreMonth < 10) {
        StoreMonth = "0" + StoreMonth
    }
    setTimeout(() => {
        for (let x = 0; x < DateList.length; x++) {
            for (let y = 0; y < ScheduleList.length; y++) {
                if (ScheduleList[y][0]["date"].split("-")[0] === String(ThisYear) && ScheduleList[y][0]["date"].split("-")[1] === StoreMonth) {
                    ReactDOM.render(<div className="BusinessMachine"></div>,
                        document.getElementsByClassName("DateList")[parseInt(ScheduleList[y][0].date.split("-")[2]) - 1])
                }
            }
        }
        let BusinessMachine = document.getElementsByClassName("BusinessMachine");
        for (let x = 0; x < BusinessMachine.length; x++) {
            let BusinessMachines = ScheduleList[x].map((item, y) => (
                <div className={"BusinessMachines BusinessMachines" + item.work} key={y}>
                    <div className={"periodIndex  time" + item.business_time.split(":")[0]}>O </div>
                    {item.name}
                </div>
            ))
            ReactDOM.render(<>{BusinessMachines}</>, document.getElementsByClassName("BusinessMachine")[x])
        }
        HolidayEvents();
        CloseLoanding();
    }, 200);

};
export function StoreEvent() {
    ThisMonthOnly();
    StoreEvents();
}