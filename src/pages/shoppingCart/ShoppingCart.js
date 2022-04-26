import { NavSidebar } from "../../components/Nav";
import { Sidebar, IllustrateSidebar, CloseMenu } from "../../components/SidebarMenu";
import { CloseLoanding } from "../../components/Loading";
// 引入樣式
import "../../styles/work/ShoppingCart/meun.css";
// 引入圖片
import KFC from "../../images/svg/KFC/大logo.svg";
// 引入物件
import { XLGroup, IndivdualGroup, SalaGroup } from "./KfcIndivdualEl";  //個人餐
import { Share24Group, Share57Group } from "./KfcShareEl";  //分享餐
import { KfcBreakFastGroup, KfcBreakFast } from "./KfcBreakFastEl";  //早餐
import { AlacarteGroup, EggTart, SnackGroup, DrinksGroup } from "./alacarte"; //單點

export function ShoppingCart() {
    setTimeout(() => { CloseLoanding(); }, 20);
    return <>
        <NavSidebar />
        <Sidebar />
        <IllustrateSidebar />
        <div className="ShoppingCart" onClick={() => { CloseMenu("all"); }}>
            <nav><img alt="" src={KFC}></img></nav>
            <div className="KfcMenuOptions">
                <div>
                    <button>個人餐</button>
                    <button>多人餐</button>
                    <button>早餐</button>
                    <button>單點</button>
                </div>
                <div className="KfcMenuOptionChilds">
                    <button>個人餐</button>
                    <button>多人餐</button>
                    <button>早餐</button>
                    {/* <button>單點</button> */}
                </div>
            </div>
            <div className="MenuKfcGroup">
                {/* <div className="MenuKFC">
                    <XLGroup />
                </div> */}
                {/* <div className="MenuKFC">
                    <IndivdualGroup />
                </div> */}
                {/* <div className="MenuKFC">
                    <SalaGroup />
                </div> */}
                {/* <div className="MenuKFC">
                    <Share24Group />
                </div> */}
                {/* <div className="MenuKFC">
                    <Share57Group />
                </div> */}
                {/* <div className="MenuKFC">
                    <KfcBreakFastGroup />
                </div> */}
                {/* <div className="MenuKFC">
                    <KfcBreakFast />
                </div> */}
                {/* <div className="MenuKFC">
                    <AlacarteGroup />
                </div> */}
                {/* <div className="MenuKFC">
                    <EggTart />
                </div> */}
                <div className="MenuKFC">
                    <SnackGroup />
                </div>
                {/* <div className="MenuKFC">
                    <DrinksGroup />
                </div> */}
            </div>
        </div>
    </>
}