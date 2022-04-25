import Activity from "../../images/png/LongTeng/活動緣起.png";
import ActivityImg from "../../images/png/LongTeng/活動緣起圖片1.png";
import LongTengActivityBackground from "../../images/png/LongTeng/活動時程背景.png";
import AllSop from "../../images/png/LongTeng/活動流程4步驟.png";
import Sop1 from "../../images/png/LongTeng/開放報名條件.png";
import Sop2 from "../../images/png/LongTeng/入圍名單揭曉.png";
import Sop3 from "../../images/png/LongTeng/得獎名單出爐.png";
import Sop4 from "../../images/png/LongTeng/成果展.png";
import LongFooterPC from "../../images/png/LongTeng/龍騰文化頁尾.png";
import newNews from "../../images/png/LongTeng/最新消息.png";

// 活動緣起
export function ActivityOriginEl() {
    return <span>
        <div className="ActivityOriginHr"><img src={Activity} alt="" /></div>
        <div className="ActivityOriginCarousel">
            <img className="ActivityOriginCarouselImg" src={ActivityImg} alt="" />
            <div>
                <h3 className="ActivityOriginCarouselText">
                    2020年龍騰舉辦了第一屆全國高中職英文素養成果大賞，收到將近500件學生作品，並從中獲得許多感動。我們看見了學生的創意思考與精采表現，更看見了素養的無限可能！龍騰相信，只要給予學生舞台，就有機會「看見‧最美的課堂風景」。
                    第二屆活動，從英文科擴展到全科；從素養教學延伸到探究實作與自主學習成果。</h3>
                <h3 className="ActivityOriginCarouselText">不僅如此，更將「聯合國永續發展目標（SDGs）」的概念融入這次的活動之中。
                    龍騰相信，好的理念可以被延續，藉由龍騰的拋磚引玉，讓更多創意可以被看見，讓永續目標可以被實踐！</h3>
            </div>
        </div>
    </span>
}

// 活動時程
export function LongTengActivityScheduleEl() {
    return <span>
        <div className="LongTengSchedule"><img className="newNews" alt="" src={newNews}></img></div>
        <div className="LongTengActivityBackground"><img alt="" src={LongTengActivityBackground}></img></div>
        <div className="PinkPillar">
            <div className="PinkPillars"></div>
            <div className="PinkPillars"></div>
            <div className="PinkPillars"></div>
            <div className="PinkPillars"></div>
            <div className="PinkPillars"></div>
            <div className="PinkPillars"></div>
        </div>
        {/* 活動時程排成活動 */}
        <div className="LongTengActivityScheduleSchedule">
            <img className="AllSop" src={AllSop} alt="" />
            <div className="ActivityScheduleImgGroup">
                <div className="ActivityScheduleImgs ActivityScheduleLeft">
                    <img className="ActivityScheduleImg Sop2" src={Sop2} alt="" />
                    <img className="ActivityScheduleImg Sop4" src={Sop4} alt="" />
                </div>
                <div className="ActivitySchedulePillars"></div>
                <div className="ActivityScheduleImgs ActivityScheduleRight">
                    <img className="ActivityScheduleImg Sop1" src={Sop1} alt="" />
                    <img className="ActivityScheduleImg Sop3" src={Sop3} alt="" />
                </div>
            </div>
        </div>
        {/* 頁尾 */}
        <footer className="LongFooter">
            <img className="LongFooterPC" src={LongFooterPC} alt="" />
        </footer>
    </span>
}