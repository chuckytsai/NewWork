import dayjs from "dayjs";

// 根據目前時間顯示時鐘的指針效果 
export function FormatData(str) {
    let hr = document.querySelector('#hr');
    let mn = document.querySelector('#mn');
    let sc = document.querySelector('#sc');
    let newstr = new Date(str);
    let date = dayjs(newstr).format('YYYY-MM-DD')
    let Time = dayjs(newstr).format('HH:mm:ss')
    let hh = newstr.getHours() * 30;
    let mm = newstr.getMinutes() * 6;
    let ss = newstr.getSeconds() * 6;
    hr.style.transform = "rotateZ(" + (hh + (mm / 12)) + "deg)";
    mn.style.transform = "rotateZ(" + mm + "deg)";
    sc.style.transform = "rotateZ(" + ss + "deg)";
    HelloTimeUp(Time)
    return `${date} ${Time}`;
};

let Events = String(); //提醒事件陣列
// 選取提醒事項
export function EventsTime(time) {
    Events = dayjs(time).format("HH:mm:ss");
}

// 提醒事件通知
export function HelloTimeUp(time) {
    let TimmerGroup = document.getElementsByClassName("TimmerGroup")[0];
    let DropItems = document.getElementsByClassName("DropItems")[0];
    if (Events !== "Invalid Date" && Events.length > 0) {
        if (Events <= time) {
            TimmerGroup.classList.add("TimeUpGroup");
            DropItems.classList.add("TimeUpGroup")
            DropItems.classList.add("DropSoon");
        }
    } else if (Events === "Invalid Date" || Events.length === 0) {
        TimmerGroup.className = "TimmerGroup";
        DropItems.className = "DropItems";
    }
}