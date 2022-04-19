import dayjs from "dayjs";

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
    return `${date} ${Time}`;
  };