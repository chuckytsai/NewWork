import ReactDOM from 'react-dom';
import { NavSidebar } from "../../components/Nav";
import { Sidebar, IllustrateSidebar, CloseMenu } from "../../components/SidebarMenu";
import { CloseLoanding } from "../../components/Loading";
// 引入樣式
import "../../styles/work/ShoppingCart/meun.css";
// 引入圖片
import KFC from "../../images/svg/KFC/大logo.svg";
// 引入物件
import { WantMenuListLog, CreatKfcMenuOption, CheckoutShppingCart, WantBuy } from "./ShoppingCatFunction";
import { XLGroup } from "./KfcIndivdualEl";  //個人餐

export function ShoppingCart() {
    setTimeout(() => {
        CloseLoanding();
        WantMenuListLog();
        CreatKfcMenuOption("Indivdual");
        let KfcMenuOptionChild = document.getElementsByClassName("KfcMenuOptionChild");
        ReactDOM.render(<XLGroup />, document.getElementsByClassName("MenuKFC")[0]);
        KfcMenuOptionChild[0].classList.add("KfcMenuOptionAction");
    }, 100);
    return <>
        <NavSidebar />
        <Sidebar />
        <IllustrateSidebar />
        <div className="KfcCheckout">
            <div className="AllMenu">
                <nav><p>購物車清單</p><button onClick={CheckoutShppingCart}></button></nav>
                <div className="AllMenuAll">
                </div>
                <footer>
                    <div className="MenuTotal">總金額:
                        <span className="MenuTotaltext"></span>
                    </div>
                    <button onClick={WantBuy}>確認付款</button>
                </footer>
            </div>
        </div>
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
                <div className="MenuKFC"></div>
            </div>
            <div className="GoShopping">
                <button onClick={CheckoutShppingCart}>購物車結算</button>
            </div>
        </div>
    </>
}