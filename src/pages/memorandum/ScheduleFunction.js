import ReactDOM from "react-dom";
import dayjs from 'dayjs';
// 引入元件
import { StoreEvent } from "./CalendarGroup";
// import { ChickCheckdate } from "../../../components/Function/SwalWarn";
import { CallLoanding } from "../../components/Loading";
import { ListGroup } from "./ListGroup";
import { OpenCloseElements } from "./ScheduleEl";


// 月曆 & 清單  按鈕
export function ShowMonthEdit(i) {
    let ShowMonthEditLeft = document.getElementsByClassName("ShowMonthEditLeft")[0];
    let ShowMonthEditRight = document.getElementsByClassName("ShowMonthEditRight")[0];
    let calendarContainer = document.getElementById("calendarContainer");
    let listContainer = document.getElementById("listContainer");
    let SelectMonth = document.getElementsByClassName("SelectMonth")[0];
    let SelectWeek = document.getElementsByClassName("SelectWeek")[0];
    if (i === "left") {
        ShowMonthEditLeft.classList.add("ShowMonthEditAction");
        ShowMonthEditLeft.classList.remove("ShowMonthEditClose");
        ShowMonthEditRight.classList.add("ShowMonthEditClose");
        ShowMonthEditRight.classList.remove("ShowMonthEditAction");
        calendarContainer.style.display = "block";
        listContainer.style.display = "none";
        SelectMonth.style.display = "block";
        SelectWeek.style.display = "none";
        CallLoanding();
        StoreEvent();
        ReactDOM.render(<></>, document.getElementById("listContainer"));
    }
    else if (i === "right") {
        ShowMonthEditRight.classList.add("ShowMonthEditAction");
        ShowMonthEditRight.classList.remove("ShowMonthEditClose");
        ShowMonthEditLeft.classList.add("ShowMonthEditClose");
        ShowMonthEditLeft.classList.remove("ShowMonthEditAction");
        calendarContainer.style.display = "none";
        listContainer.style.display = "block";
        SelectMonth.style.display = "none";
        SelectWeek.style.display = "flex";
        CallLoanding();
        // =====生成表單========
        ReactDOM.render(
            <><ListGroup />
                <footer className="BusinessTimeInstruction">
                    <h6><div className="periodIndex periodMorning"></div>{"早上時段: 10:00 ~ 14:00"}</h6>
                    <h6><div className="periodIndex periodNoonday"></div>{"下午時段: 14:00 ~ 18:00"}</h6>
                    <h6><div className="periodIndex periodNight"></div>{"晚上時段: 18:00 ~ 22:00"}</h6>
                </footer></>,
            document.getElementById("listContainer")
        );
    }
}
// 控制清單內容最上與最下的物件不會往上或往下
let ListCost;
export function WhatListCost(index) {
    ListCost = index;
}
// 清單物件往上移
export function ItemTop(i) {
    let Group = document.getElementsByClassName("Group" + i);
    let Position = document.getElementsByClassName("Position" + i);
    let SlowlyDisappear = document.getElementsByClassName("SlowlyDisappear");
    let businessTimeOption = document.getElementsByClassName("businessTimeOption");
    let TimeValue = String();
    if (Position.length > 1 && ListCost !== 0) {
        if (Group[ListCost].getElementsByClassName("BusinessTime")[0].textContent === Position[ListCost - 1].getElementsByClassName("BusinessTime")[0].textContent) {
            if (ListCost !== 0) {
                Group[ListCost].classList.add("SlowlyDisappear");
                Position[ListCost - 1].appendChild(Group[ListCost]);
                Position[ListCost].appendChild(Group[ListCost - 1]);
                for (let x = 0; x < businessTimeOption.length; x++) {
                    if (Group[ListCost].getElementsByClassName("BusinessTime")[0].textContent === businessTimeOption[x].textContent) {
                        TimeValue = businessTimeOption[x].value;
                    }
                }
                setTimeout(() => {
                    if (SlowlyDisappear.length > 0) {
                        SlowlyDisappear[0].classList.remove("SlowlyDisappear");
                        ReadJustItems(i, TimeValue, Group[ListCost].getElementsByClassName("BusinessTime")[0].textContent);
                    }
                }, 200);
            }
        }
        else {
            // ChickCheckdate("無法變更到其他時段", " ", "error");
        }
    }
}
// 清單物件往下移
export function ItemDown(i) {
    let Group = document.getElementsByClassName("Group" + i);
    let Position = document.getElementsByClassName("Position" + i);
    let SlowlyDisappear = document.getElementsByClassName("SlowlyDisappear");
    let businessTimeOption = document.getElementsByClassName("businessTimeOption");
    let TimeValue = String();
    if (Position.length > 1 && Position.length !== (ListCost + 1)) {
        if (Group[ListCost].getElementsByClassName("BusinessTime")[0].textContent === Position[ListCost + 1].getElementsByClassName("BusinessTime")[0].textContent) {
            if (ListCost + 1 < Position.length) {
                Group[ListCost].classList.add("SlowlyDisappear");
                Position[ListCost].appendChild(Group[ListCost + 1]);
                Position[ListCost + 1].appendChild(Group[ListCost]);
                for (let x = 0; x < businessTimeOption.length; x++) {
                    if (Group[ListCost].getElementsByClassName("BusinessTime")[0].textContent === businessTimeOption[x].textContent) {
                        TimeValue = businessTimeOption[x].value;
                    }
                }
                setTimeout(() => {
                    if (SlowlyDisappear.length > 0) {
                        SlowlyDisappear[0].classList.remove("SlowlyDisappear");
                        ReadJustItems(i, TimeValue, Group[ListCost].getElementsByClassName("BusinessTime")[0].textContent);
                    }
                }, 200);
            }
        }
        else {
            // ChickCheckdate("無法變更到其他時段", " ", "error");
        }
    }
}
// 調整物件順序
export function ReadJustItems(i, TimeValue, time) {
    let targetKeyArrey = [];
    let Group = document.getElementsByClassName("Group" + i);
    let ListBtnValue = document.getElementsByClassName("ListBtn" + i);
    for (let x = 0; x < Group.length; x++) {
        if (Group[x].getElementsByClassName("BusinessTime")[0].textContent === time) {
            targetKeyArrey.push({
                "sorts": x,
                "store_id": ListBtnValue[x].value
            });
        }
    }
    // let StoreNameListAPI = async () => {
    //     try {
    //         let UpItem = await StoreDeleteApi({
    //             "machine_id": document.getElementsByClassName("storeToMachine")[0].value,
    //             "date": dayjs(ChooseDates).format('YYYY-MM-DD'),
    //             "machine_business_time_id": TimeValue,
    //             "storeDetailList": targetKeyArrey
    //         });
    //         return UpItem;
    //     } catch (error) {
    //         ChickCheckdate("更新狀態異常", error, "error");
    //         GetWeekListAPI();
    //         setTimeout(() => { GetWeekListAPI(); }, 500);
    //     }
    // }
    // StoreNameListAPI();
}
// 顯示這個月  鎖住其他月份
export function ThisMonthOnly() {
    let neighboringMonth = document.getElementsByClassName("react-calendar__month-view__days__day--neighboringMonth");
    let reactCalendarTile = document.getElementsByClassName("react-calendar__tile react-calendar__month-view__days__day");
    let dataText = document.getElementsByClassName("react-calendar__navigation__label")[0];
    setTimeout(() => {
        for (let x = 0; x < reactCalendarTile.length; x++) {
            reactCalendarTile[x].disabled = false;
        }
        for (let x = 0; x < neighboringMonth.length; x++) {
            neighboringMonth[x].disabled = true;
        }
    }, 500);
    dataText.onclick = (event) => {
        event.stopPropagation();
    }
}
// 編輯選擇Open 或是Close
export function StoresOpenClose(value) {
    let i = (parseInt(dayjs(value).format('D') - 1))
    let EditDateList = document.getElementsByClassName("EditDateList");
    if (EditDateList[i].lastChild === null) {
        ReactDOM.render(<OpenCloseElements className="OpenStores" value={1} BtnText={dayjs(value).format('YYYY/MM/DD')} text="OPEN" />,
            document.getElementsByClassName("EditDateList")[i]);
    }
    else if (EditDateList[i].lastChild !== null) {
        if (EditDateList[i].getElementsByTagName("button")[0].value === "1") {
            ReactDOM.render(<></>, document.getElementsByClassName("EditDateList")[i]);
            ReactDOM.render(<OpenCloseElements className="CloseStores" value={2} BtnText={dayjs(value).format('YYYY/MM/DD')} text="Close" />,
                document.getElementsByClassName("EditDateList")[i]);
        }
        else if (EditDateList[i].getElementsByTagName("button")[0].value === "2") {
            ReactDOM.render(<></>, document.getElementsByClassName("EditDateList")[i]);
            ReactDOM.render(<OpenCloseElements className="OpenStores" value={1} BtnText={dayjs(value).format('YYYY/MM/DD')} text="OPEN" />,
                document.getElementsByClassName("EditDateList")[i]);
        }
    }
}