import ReactDOM from 'react-dom';
import { ActivityOriginEl, LongTengActivityScheduleEl } from "./LongTengEl";


export function AddLongTengEl() {
    window.addEventListener("scroll", () => {
        let scrollable = document.documentElement.scrollHeight - window.innerHeight;
        let scrolled = window.scrollY;
        let ActivityOrigin = document.getElementsByClassName("ActivityOrigin");
        let LongTengActivitySchedule = document.getElementsByClassName("LongTengActivitySchedule");
        if (Math.abs(scrolled - scrollable) < 50) {
            if (LongTengActivitySchedule[0].lastChild === null && ActivityOrigin[0].lastChild !== null) {
                ReactDOM.render(<><LongTengActivityScheduleEl /></>, LongTengActivitySchedule[0]);
            }
            if (ActivityOrigin[0].lastChild === null) {
                ReactDOM.render(<><ActivityOriginEl /></>, ActivityOrigin[0]);
            }
        }
    });
}

// 顯示卡一個最新消息圖片
export function DotImgClick(index) {
    let PinkBackGround = document.getElementsByClassName("PinkBackGround");
    for (let i = 0; i < PinkBackGround.length; i++) {
        PinkBackGround[i].style.display = "none";
    }
    PinkBackGround[index].style.display = "block";
}

// 手機模式Nav漢堡顯示
export function LongTengNavMenu(){
    let LongTengNavOptionDiv=document.getElementsByClassName("LongTengNavOptionDiv")[0];
    LongTengNavOptionDiv.classList.toggle("LongTengNavOptionDivActive");
}