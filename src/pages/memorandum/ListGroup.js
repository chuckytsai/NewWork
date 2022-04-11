import { ItemTop, ItemDown, WhatListCost } from "./ScheduleFunction";
import { CalendarAlerts } from "./CalendarAlert"
// import { CallLoanding, CloseLoanding } from "../../../components/ReactElement/Loading";
// import { ChickCheckdate } from "../../../components/Function/SwalWarn";
import dayjs from 'dayjs';
// 引入元件
import ReactDOM from 'react-dom';
import { ReactComponent as CilArrowTop } from "../../images/svg/cil-arrow-top.svg";
import { ReactComponent as CilArrowBottom } from "../../images/svg/cil-arrow-bottom.svg";
// 選擇的週期
let Today = new Date();
let SelectDay = dayjs(Today).day(0).format('YYYY/MM/DD');;
let SunDay = dayjs(SelectDay).day(0).format('YYYY/MM/DD');
let MonDay = dayjs(SelectDay).day(1).format('YYYY/MM/DD');
let TuesdDay = dayjs(SelectDay).day(2).format('YYYY/MM/DD');
let WednesDay = dayjs(SelectDay).day(3).format('YYYY/MM/DD');
let ThursDay = dayjs(SelectDay).day(4).format('YYYY/MM/DD');
let FriDay = dayjs(SelectDay).day(5).format('YYYY/MM/DD');
let SaturDay = dayjs(SelectDay).day(6).format('YYYY/MM/DD');

// 選擇其他星期
export function SelectOtherWeek(value) {
    SelectDay = dayjs(value).format('YYYY/MM/DD');
    SunDay = dayjs(SelectDay).day(0).format('YYYY/MM/DD');
    MonDay = dayjs(SelectDay).day(1).format('YYYY/MM/DD');
    TuesdDay = dayjs(SelectDay).day(2).format('YYYY/MM/DD');
    WednesDay = dayjs(SelectDay).day(3).format('YYYY/MM/DD');
    ThursDay = dayjs(SelectDay).day(4).format('YYYY/MM/DD');
    FriDay = dayjs(SelectDay).day(5).format('YYYY/MM/DD');
    SaturDay = dayjs(SelectDay).day(6).format('YYYY/MM/DD');
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
                    WhatDateText.textContent = dayjs(WhatDateText.textContent).subtract(1, 'day').format('YYYY/MM/DD');
                }}
                NextClick={() => {
                    let WhatDateText = document.getElementsByClassName("WhatDateText")[0];
                    WhatDateText.textContent = dayjs(WhatDateText.textContent).add(1, 'day').format('YYYY/MM/DD');
                }}
                todayClick={() => {
                    let WhatDateText = document.getElementsByClassName("WhatDateText")[0];
                    let ToDay = new Date();
                    WhatDateText.textContent = dayjs(ToDay).format('YYYY/MM/DD');
                }}
                time={dayjs(value).format('YYYY/MM/DD')} />,
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
                <span className="BusinessTime">
                    {props.time}
                </span>
                <span className="CompanyBusiness">
                    <p className={"period"}></p>
                    <div className={"periodIndex  time" + props.timeIcon}>O </div>
                    {props.company}{"-"}{props.store}
                </span>
                <div className="ListGroupBtns">
                    <div className="ListGroupTop"
                        onClick={props.TopClick}
                    ><CilArrowTop height="10px" /></div>
                    <div className="ListGroupDown"
                        onClick={props.DownClick}
                    ><CilArrowBottom height="10px" /></div>
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
    SelectOtherWeek(SelectDay);
    setTimeout(() => {
        let LastWeek = document.getElementsByClassName("LastWeek")[0];
        let NextWeek = document.getElementsByClassName("NextWeek")[0];
        let todayButton = document.getElementsByClassName("todayButton")[0];
        let listContainer = document.getElementById("listContainer");
        let searchBtn = document.getElementsByClassName("searchBtn")[0];
        // LastWeek.addEventListener("click", SelectLastWeek, false);
        // NextWeek.addEventListener("click", SelectNextWeek, false);
        // todayButton.addEventListener("click", TodaysWeek, false);
        // searchBtn.addEventListener("click", searchWeek, false);
        function searchWeek() {
            if (listContainer.style.display === "block") {
                // CallLoanding();
                SelectOtherWeek(SelectDay);
                // getWeekListsAPI();
            }
        }
        function SelectLastWeek() {
            // CallLoanding();
            SelectOtherWeek(dayjs(document.getElementsByClassName("WeekStart")[0].textContent).subtract(6, 'day').format('YYYY/MM/DD'));
            // getWeekListsAPI();
        }
        function SelectNextWeek() {
            // CallLoanding();
            SelectOtherWeek(dayjs(document.getElementsByClassName("WeekEnd")[0].textContent).add(6, 'day').format('YYYY/MM/DD'));
            // getWeekListsAPI();
        }
        function TodaysWeek() {
            let Today = new Date();
            // CallLoanding();
            SelectOtherWeek(new Date(Today.getFullYear(), Today.getMonth(), Today.getDate()));
            // getWeekListsAPI();
        }
    }, 800)
    GetWeekListAPI();
    return <span className="ListGroupList"></span>
}
// 清單API
// let getWeekListsAPI = async () => {
//     try {
//         let WeekLists = await ListWeekApi(
//             {
//                 "start_date": dayjs(SunDay).format('YYYY-MM-DD'),
//                 "end_date": dayjs(SaturDay).format('YYYY-MM-DD'),
//                 "machine_id": document.getElementsByClassName("storeToMachine")[0].value,
//                 "machine_business_time": document.getElementsByClassName("businessTime")[0].value
//             }
//         );
//         if (WeekLists.data.data.length !== 0) {
//             MachineName(document.getElementsByClassName("storeToMachine")[0].value);
//             // =====星期日=====
//             let SundayList = WeekLists.data.data["sunday"].map((item, i) =>
//                 <StoresListGroups key={i}
//                     group={"StoresListGroup StoresListGroup0"} GroupMove={() => { PositionIndex(0); }}
//                     FakeBtn={"FakeBtn ListBtn0"} classNameD={"PositionMon Position0"}
//                     classNameH={"Group0"} value={item["store_id"]}
//                     time={item["business_time"]} timeIcon={item["business_time"].split(":")[0]}
//                     company={item["name"]} store={Machine}
//                     TopClick={() => { ItemTop(0); }} DownClick={() => { ItemDown(0); }} />
//             )
//             // =====星期一=====
//             let MondayList = WeekLists.data.data["monday"].map((item, i) =>
//                 <StoresListGroups key={i}
//                     group={"StoresListGroup StoresListGroup1"} GroupMove={() => { PositionIndex(1); }}
//                     FakeBtn={"FakeBtn ListBtn1"} classNameD={"PositionMon Position1"}
//                     classNameH={"Group1"} value={item["store_id"]}
//                     time={item["business_time"]} timeIcon={item["business_time"].split(":")[0]}
//                     company={item["name"]} store={Machine}
//                     TopClick={() => { ItemTop(1); }} DownClick={() => { ItemDown(1); }} />
//             )
//             // =====星期二=====
//             let TuesdayList = WeekLists.data.data["tuesday"].map((item, i) =>
//                 <StoresListGroups key={i}
//                     GroupMove={() => { PositionIndex(2); }} group={"StoresListGroup StoresListGroup2"}
//                     FakeBtn={"FakeBtn ListBtn2"} classNameD={"PositionMon Position2"}
//                     classNameH={"Group2"} value={item["store_id"]}
//                     time={item["business_time"]} timeIcon={item["business_time"].split(":")[0]}
//                     company={item["name"]} store={Machine}
//                     TopClick={() => { ItemTop(2); }} DownClick={() => { ItemDown(2); }} />
//             )
//             // =====星期三=====
//             let WednesdayList = WeekLists.data.data["wednesday"].map((item, i) =>
//                 <StoresListGroups key={i}
//                     GroupMove={() => { PositionIndex(3); }} group={"StoresListGroup StoresListGroup3"}
//                     FakeBtn={"FakeBtn ListBtn3"} classNameD={"PositionMon Position3"}
//                     classNameH={"Group3"} value={item["store_id"]}
//                     time={item["business_time"]} timeIcon={item["business_time"].split(":")[0]}
//                     company={item["name"]} store={Machine}
//                     TopClick={() => { ItemTop(3); }} DownClick={() => { ItemDown(3); }} />
//             )
//             // =====星期四=====
//             let ThursdayList = WeekLists.data.data["thursday"].map((item, i) =>
//                 <StoresListGroups key={i}
//                     MouseDown={(event) => {
//                         ListDropMove = true;
//                         LastDrops(4, event);
//                     }}
//                     MouseUp={(event) => {
//                         ListDropMove = false;
//                         LastDrops(4, event);
//                     }}
//                     GroupMove={() => { PositionIndex(4); }}
//                     GroupLeave={(event) => {
//                         // ListDropMove = false;
//                         LastDrops(4, event);
//                     }}
//                     group={"StoresListGroup StoresListGroup4"} FakeBtn={"FakeBtn ListBtn4"}
//                     classNameD={"PositionMon Position4"} classNameH={"Group4"} value={item["store_id"]}
//                     time={item["business_time"]} timeIcon={item["business_time"].split(":")[0]}
//                     company={item["name"]} store={Machine}
//                     TopClick={() => { ItemTop(4); }} DownClick={() => { ItemDown(4); }} />
//             )
//             // =====星期五=====
//             let FridayList = WeekLists.data.data["friday"].map((item, i) =>
//                 <StoresListGroups key={i}
//                     GroupMove={() => { PositionIndex(5); }} group={"StoresListGroup StoresListGroup5"}
//                     FakeBtn={"FakeBtn ListBtn5"} classNameD={"PositionMon Position5"}
//                     classNameH={"Group5"} value={item["store_id"]}
//                     time={item["business_time"]} timeIcon={item["business_time"].split(":")[0]}
//                     company={item["name"]} store={Machine}
//                     TopClick={() => { ItemTop(5); }} DownClick={() => { ItemDown(5); }} />
//             )
//             // =====星期六=====
//             let SaturdayList = WeekLists.data.data["saturday"].map((item, i) =>
//                 <StoresListGroups key={i}
//                     GroupMove={() => { PositionIndex(6); }} group={"StoresListGroup StoresListGroup6"}
//                     FakeBtn={"FakeBtn ListBtn6"} classNameD={"PositionMon Position6"}
//                     classNameH={"Group6"} value={item["store_id"]}
//                     time={item["business_time"]} timeIcon={item["business_time"].split(":")[0]}
//                     company={item["name"]} store={Machine}
//                     TopClick={() => { ItemTop(6); }} DownClick={() => { ItemDown(6) }} />
//             )
//             ReactDOM.render(
//                 <>
//                     <ListGroups date={SunDay} week="星期日" />
//                     {SundayList}
//                     <ListGroups date={MonDay} week="星期一" />
//                     {MondayList}
//                     <ListGroups date={TuesdDay} week="星期二" />
//                     {TuesdayList}
//                     <ListGroups date={WednesDay} week="星期三" />
//                     {WednesdayList}
//                     <ListGroups date={ThursDay} week="星期四" />
//                     {ThursdayList}
//                     <ListGroups date={FriDay} week="星期五" />
//                     {FridayList}
//                     <ListGroups date={SaturDay} week="星期六" />
//                     {SaturdayList}
//                 </>,
//                 document.getElementsByClassName("ListGroupList")[0]
//             );
//         }
//         setTimeout(() => {
//             CloseLoanding();
//         }, 1000);
//     } catch (error) {
//         CloseLoanding();
//         console.log(error);
//         // ChickCheckdate("更新狀態異常", error, "error");
//     }
// }

export function GetWeekListAPI() {
    // getWeekListsAPI();
}