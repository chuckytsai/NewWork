// ======滾動滑鼠======
export function ScrollBody(index){
    window.addEventListener("scroll", () => {
        let bodyTop = 0;
        if (typeof window.pageYOffset !== "undefined") {
                bodyTop = window.pageYOffset;
    
        }
        else if (typeof document.compatMode !== "undefined" && document.compatMode !== "BackCompat") {
                bodyTop = document.documentElement.scrollTop;
        }
        else if (typeof document.body !== "undefined") {
                bodyTop = document.body.scrollTop;
        }
        /*捲動後的高度值*/
        localStorage.setItem(index, bodyTop) //將Y座標位置紀錄
    
    });
}
// 網頁卷軸
export function MoveScol(index) {
    let scrollo_y = index;
    if (scrollo_y !== null) {
            window.scrollTo(100, scrollo_y);
    }
}