import "../../styles/work/Schedule/CalendarAlert.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { StoreEvent } from "./CalendarGroup";
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
        targetKeys = [];
        targetKeyArrey = [];
        mockData = [];
    }, 200);
    return <div className="CalendarAlertGroup">
        <nav>
            <h6>當日排班表</h6>
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
        </div>
        <div>
            <div className="SelectBusinessGroup">
                <div className="SelectBusinessCombo">
                    <div className="SelectBusinessTitle">
                        <p>該時段上班員工</p>
                        <p>該時段休息員工</p>
                    </div>
                    <ListApp />
                </div>
                <footer className="SelectBusinessBtns">
                    <button onClick={() => {
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
                                ReactDOM.render(<div />, document.getElementsByClassName("calendarAlert")[0]);
                                document.getElementsByClassName("calendarAlert")[0].classList.remove("calendarAlertbBackground");
                                StoreEvent();
                            }
                            if (ChangeStore === true) {
                                console.log(targetKeyArrey);

                                for (let x = 0; x < ScheduleList.length; x++) {
                                    if (ScheduleList[x][0]["date"] === document.getElementsByClassName("WhatDateText")[0].textContent) {
                     
                                    }
                                }
                                setTimeout(() => { ChangeStore = false; }, 500);
                            } else {
                                // Close(); 
                            }
                        }}>確認</button>
                </footer>
            </div>
        </div>
    </div>
}

// 取得 休息員工 &&  上工的員工
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
                    if (document.getElementsByClassName("CalendarAlertSelectTime")[0].value !== "請選擇") {
                        mockData.push(data1);
                        this.setState({ mockData, targetKeys });
                    }
                }
            }
        }

        let getListAPI = async () => {
            let WhatDateText = document.getElementsByClassName("WhatDateText")[0];
            let CalendarAlertSelectTime = document.getElementsByClassName("CalendarAlertSelectTime")[0];
            for (let i = 0; i < ScheduleList.length; i++) {
                if (ScheduleList[i][0].date === WhatDateText.textContent) {
                    for (let j = 0; j < ScheduleList[i].length; j++) {
                        if (ScheduleList[i][j]["business_time"] === CalendarAlertSelectTime.value &&
                            ScheduleList[i][j]["work"] === true) {
                            let data1 = {
                                key: ScheduleList[i][j]["name"],
                                title: ScheduleList[i][j]["name"],
                            };
                            if (data1.chosen) {
                                targetKeys.push(data1.key);
                            }
                            mockData.push(data1);
                        }
                    }
                }
            }
            for (let x = 0; x < ScheduleList.length; x++) {
                if (ScheduleList[x][0].date === WhatDateText.textContent) {
                    for (let y = 0; y < ScheduleList[x].length; y++) {
                        if (ScheduleList[x][y]["business_time"] === CalendarAlertSelectTime.value &&
                            ScheduleList[x][y]["work"] === false) {
                            let data2 = {
                                key: ScheduleList[x][y]["name"],
                                title: ScheduleList[x][y]["name"],
                                chosen: x >= 0,  //被選擇
                            };
                            if (data2.chosen) {
                                targetKeys.push(data2.key);
                            }
                            mockData.push(data2);
                        }
                    }
                }
            }
            this.setState({ mockData, targetKeys });
            setTimeout(() => { CloseLoanding(); }, 200);
        }
        function changeDOM() {
            setTimeout(() => {
                targetKeys = [];
                mockData = [];
                if (document.getElementsByClassName("CalendarAlertSelectTime")[0].value !== "請選擇") {
                    CallLoanding();
                    getListAPI();
                };
            }, 100);
        }
        setTimeout(() => {
            setTimeout(() => {
                let CalendarAlertSearch = document.getElementsByClassName("CalendarAlertSearch");
                let AlertLastWeek = document.getElementsByClassName("AlertLastWeek");
                let AlertNextWeek = document.getElementsByClassName("AlertNextWeek");
                if (CalendarAlertSearch.length > 0) {
                    CalendarAlertSearch[0].addEventListener("click", changeDOM, false);
                    AlertLastWeek[0].addEventListener("click", changeDOM, false);
                    AlertNextWeek[0].addEventListener("click", changeDOM, false);
                };
            }, 300);
        }, 1000);
    };
    filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;
    handleChange = targetKeys => {
        ChangeStore = true;
        this.setState({ targetKeys });
        targetKeyArrey = [];
        for (let x = 0; x < targetKeys.length; x++) {
            targetKeyArrey.push({
                "date": document.getElementsByClassName("WhatDateText")[0].textContent,
                "name": targetKeys[x],
                "work": false,
                "business_time": document.getElementsByClassName("CalendarAlertSelectTime")[0].value
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
            render={item => item.title} />
    }
}