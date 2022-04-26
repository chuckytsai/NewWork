import "../styles/SidebarMenu.css";
// 引入Json
import { Data } from "./Json";
// 引入圖片
import { ReactComponent as Home } from "../../src/images/gif/home.svg";

// 選單模塊
export function Sidebar() {
    return <div className="navigation" onMouseLeave={() => {
        ToggleMenu("menu");
    }}>
        <ul>
            <li className="IndexIcon">
                <a href="http://localhost:3000/"><Home /></a>
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
    setTimeout(() => {
        for (let x = 0; x < Data.length; x++) {
            if (Data[x]["id"] === window.location.href.split("/")[3]) {
                document.getElementsByClassName("Illustrate")[0].textContent = Data[x]["Illustrate"]
                document.getElementsByClassName("Illustrate")[1].textContent = Data[x]["Illustrate2"]
            }
        }
    }, 100);
    return <div className="IllustrateSidebar" onMouseLeave={() => {
        ToggleMenu("Illustrate");
    }}>
        <p className="IllustrateTitle">說明</p>
        <h6 className="Illustrate">
        </h6>
        <br />
        <h6 className="Illustrate">
        </h6>
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