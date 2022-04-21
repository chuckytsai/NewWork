import { ChickCheckdate } from "../../components/Objs/SwalWarn";
let TopicState = true; //題目依序狀態鎖定

let point = 0; //預設每個問題都是0分
// 選擇勾選答案後 取消其他選項勾選
export function CheckboxValue(i, j) {
    let answerbox = document.getElementsByClassName("answerbox" + i);
    let QuestionBtn = document.getElementsByClassName("QuestionBtn" + i)[0];
    for (let x = 0; x < answerbox.length; x++) {
        answerbox[x].checked = false;
    }
    if (parseInt(QuestionBtn.value) === point) {
        answerbox[j].checked = false;
        QuestionBtn.value = null;
    } else {
        answerbox[j].checked = true;
        if (j === 0) { point = 4; }
        else if (j === 1) { point = 3; }
        else if (j === 2) { point = 2; }
        else if (j === 3) { point = 1; }
        QuestionBtn.value = point;
    }
    setTimeout(() => { TotalAn(); }, 20);
}
let pastAn = [];
let yetAn = [];
// 結算回答幾個問題了
export function TotalAn() {
    TopicState = true;
    let FakeBtn = document.getElementsByClassName("FakeBtn");
    let CloorPercentageChild = document.getElementsByClassName("CloorPercentageChild")[0];
    pastAn = [];
    yetAn = [];
    for (let i = 0; i < FakeBtn.length; i++) {
        if (FakeBtn[i].value.length === 0 || FakeBtn[i].value === "null") {
            yetAn.push(FakeBtn[i].value);
        }
        else if (FakeBtn[i].value.length > 0) {
            pastAn.push(FakeBtn[i].value);
        }
    }
    CloorPercentageChild.style.height = ((pastAn.length / FakeBtn.length) * 100) + "%";
}


// 結算分數
export function TotalQuestion() {
    let FakeBtn = document.getElementsByClassName("FakeBtn");
    if (FakeBtn.length !== pastAn.length) {
        let whitch = String();
        for (let x = 0; x < FakeBtn.length; x++) {
            if (FakeBtn[x].value.length === 0 || FakeBtn[x].value === "null") {
                if (TopicState === true) {
                    whitch = x + 1;
                    TopicState = false;
                }
            }
        }
        ChickCheckdate("未填寫完畢 !", "請填寫問題 " + whitch, "error")
    }
    else {
        let Sum = 0;
        for (let x = 0; x < FakeBtn.length; x++) {
            Sum = Sum + parseInt(FakeBtn[x].value)
        }
        ChickCheckdate("感謝您給我們的總分 : ", Sum + " 分", "success")
    }
}