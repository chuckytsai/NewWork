import { ItemTop, ItemDown, WhatListCost } from "./ScheduleFunction";
import { CalendarAlerts } from "./CalendarAlert"
import { CallLoanding, CloseLoanding } from "../../components/Loading";
import dayjs from 'dayjs';
// 引入Json檔案
import { ScheduleList } from "../../components/Json/ScheduleList.json";
// 引入元件
import ReactDOM from 'react-dom';
import { ReactComponent as CilArrowTop } from "../../images/svg/cil-arrow-top.svg";
import { ReactComponent as CilArrowBottom } from "../../images/svg/cil-arrow-bottom.svg";
// 選擇的週期
let Today = new Date();
let SelectDay = dayjs(Today).day(0).format('YYYY-MM-DD');;
let SunDay = dayjs(SelectDay).day(0).format('YYYY-MM-DD');
let MonDay = dayjs(SelectDay).day(1).format('YYYY-MM-DD');
let TuesdDay = dayjs(SelectDay).day(2).format('YYYY-MM-DD');
let WednesDay = dayjs(SelectDay).day(3).format('YYYY-MM-DD');
let ThursDay = dayjs(SelectDay).day(4).format('YYYY-MM-DD');
let FriDay = dayjs(SelectDay).day(5).format('YYYY-MM-DD');
let SaturDay = dayjs(SelectDay).day(6).format('YYYY-MM-DD');

// 選擇其他星期
export function SelectOtherWeek(value) {
    SelectDay = dayjs(value).format('YYYY-MM-DD');
    SunDay = dayjs(SelectDay).day(0).format('YYYY-MM-DD');
    MonDay = dayjs(SelectDay).day(1).format('YYYY-MM-DD');
    TuesdDay = dayjs(SelectDay).day(2).format('YYYY-MM-DD');
    WednesDay = dayjs(SelectDay).day(3).format('YYYY-MM-DD');
    ThursDay = dayjs(SelectDay).day(4).format('YYYY-MM-DD');
    FriDay = dayjs(SelectDay).day(5).format('YYYY-MM-DD');
    SaturDay = dayjs(SelectDay).day(6).format('YYYY-MM-DD');
    setTimeout(() => {
        let WeekStart = document.getElementsByClassName("WeekStart")[0];
        let WeekEnd = document.getElementsByClassName("WeekEnd")[0];
        WeekStart.textContent = SunDay;
        WeekEnd.textContent = SaturDay;
    }, 200);
}
// 選擇月曆上的日期  發生事件
export function onSelect(value) {
    ReactDOM.render(
        <CalendarAlerts
            LastClick={() => {
                let WhatDateText = document.getElementsByClassName("WhatDateText")[0];
                WhatDateText.textContent = dayjs(WhatDateText.textContent).subtract(1, 'day').format('YYYY-MM-DD');
            }}
            NextClick={() => {
                let WhatDateText = document.getElementsByClassName("WhatDateText")[0];
                WhatDateText.textContent = dayjs(WhatDateText.textContent).add(1, 'day').format('YYYY-MM-DD');
            }}
            todayClick={() => {
                let WhatDateText = document.getElementsByClassName("WhatDateText")[0];
                let ToDay = new Date();
                WhatDateText.textContent = dayjs(ToDay).format('YYYY-MM-DD');
            }}
            time={dayjs(value).format('YYYY-MM-DD')} />,
        document.getElementsByClassName("calendarAlert")[0]
    );
    document.getElementsByClassName("calendarAlert")[0].classList.add("calendarAlertbBackground");
    SelectOtherWeek(value);
}

// 清單移動物件前 判斷是星期幾的物件
export function ListGroups(props) {
    return <div className="ListGroup">
        <nav>
            <span>{props.week}</span>
            <span className="ChooseDates">{props.date}</span>
        </nav>
    </div>
}

export function StoresListGroups(props) {
    return <div className="StoresListGroup"
        onMouseMove={props.GroupMove}
        onMouseLeave={props.GroupLeave}
        onMouseDown={props.MouseDown}
        onMouseUp={props.MouseUp}>
        <div className={props.classNameD} >
            <h6 className={props.classNameH}>
                <button className={props.FakeBtn} value={props.value}></button>
                <span className="BusinessTime">{props.time}</span>
                <span className="CompanyBusiness">
                    <p className={"period"}></p>
                    <div className={"periodIndex  time" + props.timeIcon}>{" "}</div>
                    {props.company}
                </span>
                <div className="ListGroupBtns">
                    <div className="ListGroupTop" onClick={props.TopClick}><CilArrowTop height="10px" /></div>
                    <div className="ListGroupDown" onClick={props.DownClick}><CilArrowBottom height="10px" /></div>
                </div>
            </h6>
        </div>
    </div>
}

// 選擇到該天的 物件(參數是給星期幾)
export function PositionIndex(i) {
    let Position = document.getElementsByClassName("Position" + i);
    for (let x = 0; x < Position.length; x++) {
        Position[x].index = x;
        Position[x].addEventListener("click", changeDOM, false);
    }
    function changeDOM() {
        WhatListCost(this.index);
    }
}

export function ListGroup() {
    getWeekListsAPI();
    SelectOtherWeek(SelectDay);
    setTimeout(() => {
        let LastWeek = document.getElementsByClassName("LastWeek")[0];
        let NextWeek = document.getElementsByClassName("NextWeek")[0];
        LastWeek.addEventListener("click", SelectLastWeek, false);
        NextWeek.addEventListener("click", SelectNextWeek, false);
        function SelectLastWeek() {
            CallLoanding();
            SelectOtherWeek(dayjs(document.getElementsByClassName("WeekStart")[0].textContent).subtract(6, 'day').format('YYYY/MM/DD'));
            getWeekListsAPI();
        };
        function SelectNextWeek() {
            CallLoanding();
            SelectOtherWeek(dayjs(document.getElementsByClassName("WeekEnd")[0].textContent).add(6, 'day').format('YYYY/MM/DD'));
            getWeekListsAPI();
        };
    }, 300)
    GetWeekListAPI();
    return <span className="ListGroupList"></span>
}
// 清單API
let getWeekListsAPI = async () => {
    let SundayList = [];
    let MondayList = [];
    let TuesdayList = [];
    let WednesdayList = [];
    let ThursdayList = [];
    let FridayList = [];
    let SaturdayList = [];
    for (let x = 0; x < ScheduleList.length; x++) {
        for (let y = 0; y < ScheduleList[x].length; y++) {
            if (ScheduleList[x][y]["date"] === SunDay && ScheduleList[x][y]["work"] === true) {
                SundayList.push(<StoresListGroups key={"Sun" + y}
                    group={"StoresListGroup StoresListGroup0"} GroupMove={() => { PositionIndex(0); }}
                    FakeBtn={"FakeBtn ListBtn0"} classNameD={"PositionMon Position0"}
                    classNameH={"Group0"} value={ScheduleList[x][y]["store_id"]}
                    time={ScheduleList[x][y]["business_time"]} timeIcon={ScheduleList[x][y]["business_time"].split(":")[0]}
                    company={ScheduleList[x][y]["name"]}
                    TopClick={() => { ItemTop(0); }} DownClick={() => { ItemDown(0); }} />)
            }
            else if (ScheduleList[x][y]["date"] === MonDay && ScheduleList[x][y]["work"] === true) {
                MondayList.push(<StoresListGroups key={"Mon" + y}
                    group={"StoresListGroup StoresListGroup0"} GroupMove={() => { PositionIndex(0); }}
                    FakeBtn={"FakeBtn ListBtn0"} classNameD={"PositionMon Position0"}
                    classNameH={"Group0"} value={ScheduleList[x][y]["store_id"]}
                    time={ScheduleList[x][y]["business_time"]} timeIcon={ScheduleList[x][y]["business_time"].split(":")[0]}
                    company={ScheduleList[x][y]["name"]}
                    TopClick={() => { ItemTop(0); }} DownClick={() => { ItemDown(0); }} />)
            }
            else if (ScheduleList[x][y]["date"] === TuesdDay && ScheduleList[x][y]["work"] === true) {
                TuesdayList.push(<StoresListGroups key={"Tuesd" + y}
                    group={"StoresListGroup StoresListGroup0"} GroupMove={() => { PositionIndex(0); }}
                    FakeBtn={"FakeBtn ListBtn0"} classNameD={"PositionMon Position0"}
                    classNameH={"Group0"} value={ScheduleList[x][y]["store_id"]}
                    time={ScheduleList[x][y]["business_time"]} timeIcon={ScheduleList[x][y]["business_time"].split(":")[0]}
                    company={ScheduleList[x][y]["name"]}
                    TopClick={() => { ItemTop(0); }} DownClick={() => { ItemDown(0); }} />)
            }
            else if (ScheduleList[x][y]["date"] === WednesDay && ScheduleList[x][y]["work"] === true) {
                WednesdayList.push(<StoresListGroups key={"Wednes" + y}
                    group={"StoresListGroup StoresListGroup0"} GroupMove={() => { PositionIndex(0); }}
                    FakeBtn={"FakeBtn ListBtn0"} classNameD={"PositionMon Position0"}
                    classNameH={"Group0"} value={ScheduleList[x][y]["store_id"]}
                    time={ScheduleList[x][y]["business_time"]} timeIcon={ScheduleList[x][y]["business_time"].split(":")[0]}
                    company={ScheduleList[x][y]["name"]}
                    TopClick={() => { ItemTop(0); }} DownClick={() => { ItemDown(0); }} />)
            }
            else if (ScheduleList[x][y]["date"] === ThursDay && ScheduleList[x][y]["work"] === true) {
                ThursdayList.push(<StoresListGroups key={"Thurs" + y}
                    group={"StoresListGroup StoresListGroup0"} GroupMove={() => { PositionIndex(0); }}
                    FakeBtn={"FakeBtn ListBtn0"} classNameD={"PositionMon Position0"}
                    classNameH={"Group0"} value={ScheduleList[x][y]["store_id"]}
                    time={ScheduleList[x][y]["business_time"]} timeIcon={ScheduleList[x][y]["business_time"].split(":")[0]}
                    company={ScheduleList[x][y]["name"]}
                    TopClick={() => { ItemTop(0); }} DownClick={() => { ItemDown(0); }} />)
            }
            else if (ScheduleList[x][y]["date"] === FriDay && ScheduleList[x][y]["work"] === true) {
                FridayList.push(<StoresListGroups key={"Fri" + y}
                    group={"StoresListGroup StoresListGroup0"} GroupMove={() => { PositionIndex(0); }}
                    FakeBtn={"FakeBtn ListBtn0"} classNameD={"PositionMon Position0"}
                    classNameH={"Group0"} value={ScheduleList[x][y]["store_id"]}
                    time={ScheduleList[x][y]["business_time"]} timeIcon={ScheduleList[x][y]["business_time"].split(":")[0]}
                    company={ScheduleList[x][y]["name"]}
                    TopClick={() => { ItemTop(0); }} DownClick={() => { ItemDown(0); }} />)
            }
            else if (ScheduleList[x][y]["date"] === SaturDay && ScheduleList[x][y]["work"] === true) {
                SaturdayList.push(<StoresListGroups key={"Fri" + y}
                    group={"StoresListGroup StoresListGroup0"} GroupMove={() => { PositionIndex(0); }}
                    FakeBtn={"FakeBtn ListBtn0"} classNameD={"PositionMon Position0"}
                    classNameH={"Group0"} value={ScheduleList[x][y]["store_id"]}
                    time={ScheduleList[x][y]["business_time"]} timeIcon={ScheduleList[x][y]["business_time"].split(":")[0]}
                    company={ScheduleList[x][y]["name"]}
                    TopClick={() => { ItemTop(0); }} DownClick={() => { ItemDown(0); }} />)
            }
        }
    }
    setTimeout(() => {
        ReactDOM.render(<>
            <ListGroups date={SunDay} week="星期日" />{SundayList}
            <ListGroups date={MonDay} week="星期一" />{MondayList}
            <ListGroups date={TuesdDay} week="星期二" />{TuesdayList}
            <ListGroups date={WednesDay} week="星期三" />{WednesdayList}
            <ListGroups date={ThursDay} week="星期四" />{ThursdayList}
            <ListGroups date={FriDay} week="星期五" />{FridayList}
            <ListGroups date={SaturDay} week="星期六" />{SaturdayList}
            </>,document.getElementsByClassName("ListGroupList")[0]
        );
        CloseLoanding();
    }, 200);
}

export function GetWeekListAPI() {
    getWeekListsAPI();
}