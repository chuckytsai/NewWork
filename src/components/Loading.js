import "../styles/Loading.css";

// 等待中頁面
export function Loanding() {
    return <div className="LoandingGroup">
        <div className="container">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <p>Loading ....</p>
        </div>
    </div>

}

// 呼叫等待中頁面
export function CallLoanding() {
    let LoandingGroup = document.getElementsByClassName("LoandingGroup")[0];
    LoandingGroup.style.display = "flex";
}

// 關閉等待中頁面
export function CloseLoanding() {
    let LoandingGroup = document.getElementsByClassName("LoandingGroup")[0];
    LoandingGroup.style.display = "none";
}