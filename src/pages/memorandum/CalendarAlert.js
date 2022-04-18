import "../../styles/work/Schedule/CalendarAlert.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { StoreEvent } from "./CalendarGroup";
// import { ChickCheckdate } from "../../../components/Function/SwalWarn"
import { CallLoanding, CloseLoanding } from "../../components/Loading";
import 'antd/dist/antd.css';
import { Transfer } from 'antd';
// 引入Json檔案
import { ScheduleList } from "../../components/Json/ScheduleList.json";

let targetKeyArrey = [];
let targetKeys = [];
let mockData = [];
let ChangeStore = false;
// 店家排程穿越框
export function CalendarAlerts(props) {
    setTimeout(() => {
        // getMachineListAPI();
        targetKeys = [];
        targetKeyArrey = [];
        mockData = [];
    }, 200)
    return <div className="CalendarAlertGroup">
        <nav>
            <h6>當日班表</h6>
            <button onClick={() => {
                ReactDOM.render(<div />, document.getElementsByClassName("calendarAlert")[0]);
                document.getElementsByClassName("calendarAlert")[0].classList.remove("calendarAlertbBackground");
                setTimeout(() => {
                    targetKeys = [];
                    targetKeyArrey = [];
                    mockData = [];
                }, 200);
            }}>X</button>
        </nav>
        <div className="CalendarAlertBusinessTime">
            <p>選擇時段</p>
            <select className="CalendarAlertSelectTime">
                <option value={null}>請選擇</option>
                <option value={"10:00~14:00"}>10:00~14:00</option>
                <option value={"14:00~18:00"}>14:00~18:00</option>
                <option value={"18:00~22:00"}>18:00~22:00</option>
            </select>
            <button className="IndigoBtn CalendarAlertSearch">搜尋</button>
        </div>
        <div className="SelectMonth">
            <span>
                <button className="AlertLastWeek" onClick={props.LastClick}>{'<'}</button>
                <button className="AlertNextWeek" onClick={props.NextClick}>{'>'}</button>
            </span>
            <h1 className="WhatDateText">{props.time}</h1>
            <button className="todayButton AlertTodayButton"
                onClick={props.todayClick}>今日</button>
        </div>
        <div>
            <div className="SelectBusinessGroup">
                <div className="SelectBusinessCombo">
                    <div className="SelectBusinessTitle">
                        <p>當日上班員工</p>
                        <p>當日休假員工</p>
                    </div>
                    <ListApp />
                </div>
                <footer className="SelectBusinessBtns">
                    <button className=" GrayBtn"
                        onClick={() => {
                            ReactDOM.render(<div />, document.getElementsByClassName("calendarAlert")[0]);
                            document.getElementsByClassName("calendarAlert")[0].classList.remove("calendarAlertbBackground");
                            setTimeout(() => {
                                targetKeys = [];
                                targetKeyArrey = [];
                                mockData = [];
                            }, 200);
                        }}>返回</button>
                    <button className=" ForestBtn CalendarAlertChick"
                        onClick={() => {
                            function Close() {
                                // CallLoanding();
                                ReactDOM.render(<div />, document.getElementsByClassName("calendarAlert")[0]);
                                document.getElementsByClassName("calendarAlert")[0].classList.remove("calendarAlertbBackground");
                                StoreEvent();
                            }
                            // let StoreNameListAPI = async () => {
                            //     try {
                            //         let UpItem = await StoreDeleteApi({
                            //             "machine_id": document.getElementsByClassName("storeToMachine")[0].value,
                            //             "date": document.getElementsByClassName("WhatDateText")[0].textContent,
                            //             "machine_business_time_id": document.getElementsByClassName("CalendarAlertSelectTime")[0].value,
                            //             "storeDetailList": targetKeyArrey
                            //         });
                            //         ChickCheckdate(UpItem.data.message, " ", "success");
                            //         setTimeout(() => {
                            //             let swal2Btn = document.getElementsByClassName("swal2-confirm")[0];
                            //             swal2Btn.addEventListener("click", Close, false);
                            //         }, 200);
                            //         setTimeout(() => {
                            //             targetKeyArrey = [];
                            //             targetKeys = [];
                            //         }, 250);
                            //     } catch (error) {
                            //         CloseLoanding();
                            //         ChickCheckdate("狀態異常", error, "error");
                            //         setTimeout(() => {
                            //             targetKeyArrey = [];
                            //             targetKeys = [];
                            //         }, 200);
                            //     }
                            // }
                            if (ChangeStore === true) {
                                // StoreNameListAPI();
                                setTimeout(() => {
                                    ChangeStore = false;
                                }, 500)
                            } else { Close(); }
                        }}
                    >確認</button>
                </footer>
            </div>
        </div>
    </div>
}

// 取得 可營業店家 && 當天營業店家 全部品項
class ListApp extends React.Component {
    state = { mockData: [], targetKeys: [] };
    componentDidMount() { this.getMock(); }
    getMock = () => {
        if (mockData.length > 0) { mockData = []; }
        let WhatDateText = document.getElementsByClassName("WhatDateText")[0].textContent
        for (let x = 0; x < ScheduleList.length; x++) {
            for (let y = 0; y < ScheduleList[x].length; y++) {
                if (ScheduleList[x][y]["date"] === WhatDateText) {
                    let data1 = {
                        key: y.toString(),
                        title: ScheduleList[x][y]["name"]
                    };
                    if (data1.chosen) {
                        targetKeys.push(data1.key);
                    }
                    mockData.push(data1);
                    this.setState({ mockData, targetKeys });
                }
            }
        }

        // let getMachineListAPI = async () => {
        //     try {
        //         let WhatDateText = document.getElementsByClassName("WhatDateText")[0].textContent.split("/");
        //         let StoreMachineNames = await StoreOpeningListApi({
        //             date: WhatDateText[0] + "-" + WhatDateText[1] + "-" + WhatDateText[2],
        //             machine_business_time_id: document.getElementsByClassName("CalendarAlertSelectTime")[0].value,
        //         })
        //         for (let i = 0; i < StoreMachineNames.data.data.length; i++) {
        //             let data1 = {
        //                 key: StoreMachineNames.data.data[i]["id"].toString(),
        //                 title: StoreMachineNames.data.data[i]["store_name"],
        //             };
        //             if (data1.chosen) {
        //                 targetKeys.push(data1.key);
        //             }
        //             mockData.push(data1);
        //         }
        //         for (let j = 0; j < StoreMachineNames.data.inSchedule.length; j++) {
        //             let data2 = {
        //                 key: StoreMachineNames.data.inSchedule[j]["store_id"].toString(),
        //                 title: StoreMachineNames.data.inSchedule[j]["name"],
        //                 chosen: j >= 0,  //被選擇
        //             };
        //             if (data2.chosen) {
        //                 targetKeys.push(data2.key);
        //             }
        //             mockData.push(data2);
        //         }
        //         this.setState({ mockData, targetKeys });
        //     } catch (error) {
        //         CloseLoanding();
        //         ChickCheckdate("狀態異常", error, "error");
        //     }
        //     setTimeout(() => { CloseLoanding(); }, 200)
        // }
        function changeDOM() {
            setTimeout(() => {
                // CallLoanding();
                targetKeys = [];
                mockData = [];
                // getMachineListAPI();
            }, 100);
        }
        setTimeout(() => {
            // getMachineListAPI();
            setTimeout(() => {
                // let CalendarAlertSearch = document.getElementsByClassName("CalendarAlertSearch")[0];
                // let AlertLastWeek = document.getElementsByClassName("AlertLastWeek")[0];
                // let AlertNextWeek = document.getElementsByClassName("AlertNextWeek")[0];
                // let todayButton = document.getElementsByClassName("AlertTodayButton")[0];
                // CalendarAlertSearch.addEventListener("click", changeDOM, false);
                // AlertLastWeek.addEventListener("click", changeDOM, false);
                // AlertNextWeek.addEventListener("click", changeDOM, false);
                // todayButton.addEventListener("click", changeDOM, false);
            }, 150);
        }, 1000);
    };
    filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;
    handleChange = targetKeys => {
        ChangeStore = true;
        this.setState({ targetKeys });
        targetKeyArrey = [];
        for (let x = 0; x < targetKeys.length; x++) {
            targetKeyArrey.push({
                "store_id": targetKeys[x],
                "sorts": x
            });
        }
    };
    handleSearch = (dir, value) => { console.log('search:', dir, value); };
    render() {
        return <Transfer
            dataSource={this.state.mockData}
            locale={({
                itemUnit: "項",
                itemsUnit: "項",
                searchPlaceholder: "請輸入搜尋內容"
            })}
            showSearch
            targetKeys={this.state.targetKeys}
            onChange={this.handleChange}
            onSearch={this.handleSearch}
            render={item => item.title}
        />
    }
}