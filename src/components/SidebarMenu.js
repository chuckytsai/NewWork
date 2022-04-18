import "../styles/SidebarMenu.css";
// 引入Json
import { Data } from "../components/Json/index.json";

// 選單模塊
export function Sidebar() {
    return <div className="navigation" onMouseLeave={() => {
        ToggleMenu("menu");
    }}>
        <ul>
            <li className="IndexIcon">
                <a href="http://localhost:3000/">首頁</a>
            </li>
            {Data.map((item, i) => (<li className="navigationLi" key={"option" + i}>
                <a href={item.url}>
                    <span className="icon"></span>
                    <span className="title">{item.name}</span>
                </a>
            </li>))}
        </ul>
    </div>
}

export function IllustrateSidebar() {
    return <div className="IllustrateSidebar" onMouseLeave={() => {
        ToggleMenu("Illustrate");
    }}>
        說明
    </div>
}

// 選單滑動出來效果
export function ToggleMenu(index) {
    let navigation = document.querySelector(".navigation");
    let IllustrateSidebar = document.querySelector(".IllustrateSidebar");
    if (index === "menu") {
        navigation.classList.toggle("activeNav");
    } else if (index === "Illustrate") {
        IllustrateSidebar.classList.toggle("activeNav");
    }
}

// 關閉選單或是說明的滑動
export function CloseMenu(index) {
    let navigation = document.getElementsByClassName("navigation");
    let IllustrateSidebar = document.getElementsByClassName("IllustrateSidebar");
    if (navigation.length > 0 && index === "Illustrate") {
        navigation[0].className = "navigation";
    }
    else if (IllustrateSidebar.length > 0 && index === "menu") {
        IllustrateSidebar[0].className = "IllustrateSidebar";
    }
    else if (IllustrateSidebar.length > 0 && navigation.length > 0 && index === "all") {
        navigation[0].className = "navigation";
        IllustrateSidebar[0].className = "IllustrateSidebar";
    }
}