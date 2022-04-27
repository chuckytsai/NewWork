import { NavSidebar } from "../../components/Nav";
import { Sidebar, IllustrateSidebar, CloseMenu } from "../../components/SidebarMenu";
import { CloseLoanding } from "../../components/Loading";
// 引入樣式
import "../../styles/work/ShoppingCart/meun.css";
// 引入圖片
import KFC from "../../images/svg/KFC/大logo.svg";
// 引入物件
import { CreatKfcMenuOption } from "./ShoppingCatFunction";
import { XLGroup } from "./KfcIndivdualEl";  //個人餐

export function ShoppingCart() {
    setTimeout(() => {
        CloseLoanding();
        CreatKfcMenuOption("Indivdual");
    }, 200);
    return <>
        <NavSidebar />
        <Sidebar />
        <IllustrateSidebar />
        <div className="ShoppingCart" onClick={() => { CloseMenu("all"); }}>
            <nav><img alt="" src={KFC}></img></nav>
            <div className="KfcMenuOptions">
                <div>
                    <button className="KfcMenuOption KfcMenuOptionAction" onClick={() => { CreatKfcMenuOption("Indivdual"); }}>個人餐</button>
                    <button className="KfcMenuOption" onClick={() => { CreatKfcMenuOption("Share"); }}>多人餐</button>
                    <button className="KfcMenuOption" onClick={() => { CreatKfcMenuOption("BreakFast"); }}>早餐</button>
                    <button className="KfcMenuOption" onClick={() => { CreatKfcMenuOption("Alacarte"); }}>單點</button>
                </div>
                <div className="KfcMenuOptionChilds">
                </div>
            </div>
            <div className="MenuKfcGroup">
                <div className="MenuKFC"><XLGroup /></div>
            </div>
            <div className="GoShopping">
                <button>前往購物車結算</button>
            </div>
        </div>
    </>
}