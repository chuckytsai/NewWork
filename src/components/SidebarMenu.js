import "../styles/SidebarMenu.css";
// 引入Json
import { Data } from "../components/Json/index.json";

// 選單模塊
export function Sidebar() {
    return <div className="navigation" onMouseLeave={() => { ToggleMenu(); }}>
        <ul>
            <li className="IndexIcon">
                <a href="./">首頁</a>
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

// 選單滑動出來效果
export function ToggleMenu() {
    let navigation = document.querySelector(".navigation");
    navigation.classList.toggle("activeNav");
}