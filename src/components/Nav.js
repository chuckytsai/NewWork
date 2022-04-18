import { ToggleMenu, CloseMenu } from "./SidebarMenu";
import "../styles/Nav.css";

export function NavSidebar() {
    return <nav className="NavSidebar">
        <div className="NavButtons">
            <button onClick={() => {
                CloseMenu("Illustrate");
                ToggleMenu("Illustrate");
            }}>說明</button>
            <button onClick={() => {
                CloseMenu("menu");
                ToggleMenu("menu");
            }}>選單</button>
        </div>
    </nav>
}