import { ToggleMenu } from "./SidebarMenu";
import "../styles/Nav.css";

export function NavSidebar() {
    return <nav className="NavSidebar">
        <div className="NavButtons">
            <button>說明</button>
            <button onClick={() => {ToggleMenu();}}>選單</button>
        </div>
    </nav>
}