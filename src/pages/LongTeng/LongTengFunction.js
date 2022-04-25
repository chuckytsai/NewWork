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