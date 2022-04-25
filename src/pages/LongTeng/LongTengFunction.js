export function AddLongTengEl() {
    window.addEventListener("scroll", () => {
        let scrollable = document.documentElement.scrollHeight - window.innerHeight;
        let scrolled = window.scrollY;
        console.log(scrollable - scrolled)
        if ((scrolled - scrollable) < 50) {
            console.log(Math.abs(scrolled - scrollable),"快到底囉")

        }
    }
    )
}