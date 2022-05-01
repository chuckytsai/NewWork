import ReactDOM from 'react-dom';
// 引入物件
import { XLGroup, IndivdualGroup, SalaGroup } from "./KfcIndivdualEl";  //個人餐
import { Share24Group, Share57Group } from "./KfcShareEl";  //分享餐
import { KfcBreakFastGroup, KfcBreakFast } from "./KfcBreakFastEl";  //早餐
import { AlacarteGroup, EggTart, SnackGroup, DrinksGroup } from "./alacarte"; //單點
import { ChickCheckdate } from "../../components/Objs/SwalWarn";

// ======各分類菜單願望清單(預設都為空的)=====
let WantMenuList = [];
// 瀏覽器有儲存則會灌入清單
export function WantMenuListLog() {
    if (localStorage.WantMenuList !== undefined) {
        let GetMenu = localStorage.getItem("WantMenuList");
        let GetMenuArr = JSON.parse(GetMenu);
        for (let x = 0; x < GetMenuArr.length; x++) {
            WantMenuList.push(GetMenuArr[x]);
        }
    }
    setTimeout(() => {
        MenuCost()
    }, 150);
}

// 點餐加入願望清單
export function WantListAdd(menu) {
    let MenuName = WantMenuList.filter(function (item) {
        return item.name === menu["name"];
    });
    if (MenuName.length === 0) {
        WantMenuList.push(menu)
    }
    else if (MenuName.length === 1) {
        for (let x = 0; x < WantMenuList.length; x++) {
            if (WantMenuList[x].name === menu.name) {
                WantMenuList[x] = menu;
            }
        }
    }
    let WantMenuListArr = JSON.stringify(WantMenuList);
    localStorage.setItem("WantMenuList", WantMenuListArr);
}

// 選擇出現哪種菜單
export function CreatKfcMenuOption(mode) {
    let KfcMenuOptionChilds = document.getElementsByClassName("KfcMenuOptionChilds")[0];
    let KfcMenuOption = document.getElementsByClassName("KfcMenuOption");
    for (let x = 0; x < KfcMenuOption.length; x++) {
        KfcMenuOption[x].className = "KfcMenuOption";
    }
    let KfcMenuOptionChild = document.getElementsByClassName("KfcMenuOptionChild");
    for (let x = 0; x < KfcMenuOptionChild.length; x++) {
        KfcMenuOptionChild[x].className = "KfcMenuOptionChild";
    }
    if (mode === "Indivdual") {
        ReactDOM.render(<>
            <button className="KfcMenuOptionChild" onClick={() => { WhitchMunu("XLGroup"); }}>重量XL套餐</button>
            <button className="KfcMenuOptionChild" onClick={() => { WhitchMunu("IndivdualGroup"); }}>個人獨享餐</button>
            <button className="KfcMenuOptionChild" onClick={() => { WhitchMunu("SalaGroup"); }}>上校私廚沙拉</button></>, KfcMenuOptionChilds);
        KfcMenuOption[0].classList.add("KfcMenuOptionAction");
    }
    else if (mode === "Share") {
        ReactDOM.render(<>
            <button className="KfcMenuOptionChild" onClick={() => { WhitchMunu("Share24Group"); }}>2-4人歡聚餐</button>
            <button className="KfcMenuOptionChild" onClick={() => { WhitchMunu("Share57Group"); }}>5-7人歡聚餐</button></>, KfcMenuOptionChilds);
        KfcMenuOption[1].classList.add("KfcMenuOptionAction");
    }
    else if (mode === "BreakFast") {
        ReactDOM.render(<>
            <button className="KfcMenuOptionChild" onClick={() => { WhitchMunu("KfcBreakFastGroup"); }}>早餐套餐</button>
            <button className="KfcMenuOptionChild" onClick={() => { WhitchMunu("KfcBreakFast"); }}>早餐單點</button></>, KfcMenuOptionChilds);
        KfcMenuOption[2].classList.add("KfcMenuOptionAction");
    }
    else if (mode === "Alacarte") {
        ReactDOM.render(<>
            <button className="KfcMenuOptionChild" onClick={() => { WhitchMunu("AlacarteGroup"); }}>單點主餐</button>
            <button className="KfcMenuOptionChild" onClick={() => { WhitchMunu("EggTart"); }}>蛋撻</button>
            <button className="KfcMenuOptionChild" onClick={() => { WhitchMunu("SnackGroup"); }}>附餐/點心</button>
            <button className="KfcMenuOptionChild" onClick={() => { WhitchMunu("DrinksGroup"); }}>飲料/湯品</button></>, KfcMenuOptionChilds);
        KfcMenuOption[3].classList.add("KfcMenuOptionAction");
    }
}

// 渲染出哪種菜單
export function WhitchMunu(menu) {
    let MenuKFC = document.getElementsByClassName("MenuKFC")[0];
    let KfcMenuOptionChild = document.getElementsByClassName("KfcMenuOptionChild");
    for (let x = 0; x < KfcMenuOptionChild.length; x++) {
        KfcMenuOptionChild[x].className = "KfcMenuOptionChild";
    }
    if (menu === "XLGroup") {
        ReactDOM.render(<XLGroup />, MenuKFC);
        KfcMenuOptionChild[0].classList.add("KfcMenuOptionAction");
    }
    else if (menu === "IndivdualGroup") {
        ReactDOM.render(<IndivdualGroup />, MenuKFC);
        KfcMenuOptionChild[1].classList.add("KfcMenuOptionAction");
    }
    else if (menu === "SalaGroup") {
        ReactDOM.render(<SalaGroup />, MenuKFC);
        KfcMenuOptionChild[2].classList.add("KfcMenuOptionAction");
    }
    else if (menu === "Share24Group") {
        ReactDOM.render(<Share24Group />, MenuKFC);
        KfcMenuOptionChild[0].classList.add("KfcMenuOptionAction");
    }
    else if (menu === "Share57Group") {
        ReactDOM.render(<Share57Group />, MenuKFC);
        KfcMenuOptionChild[1].classList.add("KfcMenuOptionAction");
    }
    else if (menu === "KfcBreakFastGroup") {
        ReactDOM.render(<KfcBreakFastGroup />, MenuKFC);
        KfcMenuOptionChild[0].classList.add("KfcMenuOptionAction");
    }
    else if (menu === "KfcBreakFast") {
        ReactDOM.render(<KfcBreakFast />, MenuKFC);
        KfcMenuOptionChild[1].classList.add("KfcMenuOptionAction");
    }
    else if (menu === "AlacarteGroup") {
        ReactDOM.render(<AlacarteGroup />, MenuKFC);
        KfcMenuOptionChild[0].classList.add("KfcMenuOptionAction");
    }
    else if (menu === "EggTart") {
        ReactDOM.render(<EggTart />, MenuKFC);
        KfcMenuOptionChild[1].classList.add("KfcMenuOptionAction");
    }
    else if (menu === "SnackGroup") {
        ReactDOM.render(<SnackGroup />, MenuKFC);
        KfcMenuOptionChild[2].classList.add("KfcMenuOptionAction");
    }
    else if (menu === "DrinksGroup") {
        ReactDOM.render(<DrinksGroup />, MenuKFC);
        KfcMenuOptionChild[3].classList.add("KfcMenuOptionAction");
    }
    setTimeout(() => {
        MenuCost();
    }, 500);
}

// 餐點點餐數目變化
export function OrderMenu(cost, name, zh, price) {
    let MenuName = document.getElementsByClassName(name)[0];
    if (cost === "Add") {
        MenuName.textContent = parseInt(MenuName.textContent) + 1;
        setTimeout(() => {
            WantListAdd({
                "name": name,
                "cost": MenuName.textContent,
                "zh": zh,
                "price": price
            })
        }, 20);
    }
    else if (cost === "reduce") {
        if (MenuName.textContent !== "0") {
            MenuName.textContent = parseInt(MenuName.textContent) - 1;
        }
        setTimeout(() => {
            WantListAdd({
                "name": name,
                "cost": MenuName.textContent,
                "zh": zh,
                "price": price
            })
        }, 20);
    }
}

// 每一分類商品的數目渲染
export function MenuCost() {
    for (let x = 0; x < WantMenuList.length; x++) {
        if (document.getElementsByClassName(WantMenuList[x].name).length > 0) {
            document.getElementsByClassName(WantMenuList[x].name)[0].textContent = WantMenuList[x].cost;
        }
    }

}

// 購物車結算
export function CheckoutShppingCart() {
    let KfcCheckout = document.getElementsByClassName("KfcCheckout")[0];
    KfcCheckout.classList.toggle("KfcCheckoutAvtive");
    setTimeout(() => {
        let AllMenuAll = document.getElementsByClassName("AllMenuAll")[0];
        let GetMenu = localStorage.getItem("WantMenuList");
        let GetMenuArr = JSON.parse(GetMenu);
        if (localStorage.WantMenuList !== undefined) {
            let MenuList = GetMenuArr.map((item, i) => {
                if (item.cost > 0) {
                    return <li key={i}>
                        <span className="AllMenuName">{item.zh}</span>
                        <span>{item.cost}份</span>
                        <span className="AllMenuPrice">${item.cost * item.price}</span>
                    </li>
                }
            });
            ReactDOM.render(<>{MenuList}</>, AllMenuAll);
        }
    }, 20);
    setTimeout(() => {
        let AllMenuPrice = document.getElementsByClassName("AllMenuPrice");
        let MenuTotaltext = document.getElementsByClassName("MenuTotaltext")[0];
        let Total = 0;
        for (let x = 0; x < AllMenuPrice.length; x++) {
            Total = Total + parseInt(AllMenuPrice[x].textContent.split("$")[1]);
        }
        ReactDOM.render(<>${Total}</>, MenuTotaltext);
    }, 100);
}

export function WantBuy() {
    ChickCheckdate("已付款", "感謝您這次消費", "success");
    setTimeout(() => {
        let swal2Btn = document.getElementsByClassName("swal2-confirm")[0];
        swal2Btn.addEventListener("click", ReDom, false);
        localStorage.removeItem("WantMenuList");
    }, 500);
    function ReDom() {
        WantMenuList = [];
        let AllMenuAll = document.getElementsByClassName("AllMenuAll")[0];
        let ShoppingQuantity = document.getElementsByClassName("ShoppingQuantity");
        ReactDOM.render(<></>, AllMenuAll);
        CheckoutShppingCart();
        for (let i = 0; i < ShoppingQuantity.length; i ++) {
            ShoppingQuantity[i].textContent = 0;
        }
    }
}