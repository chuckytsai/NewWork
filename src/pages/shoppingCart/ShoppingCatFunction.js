import ReactDOM from 'react-dom';
// 引入物件
import { XLGroup, IndivdualGroup, SalaGroup } from "./KfcIndivdualEl";  //個人餐
import { Share24Group, Share57Group } from "./KfcShareEl";  //分享餐
import { KfcBreakFastGroup, KfcBreakFast } from "./KfcBreakFastEl";  //早餐
import { AlacarteGroup, EggTart, SnackGroup, DrinksGroup } from "./alacarte"; //單點

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
}