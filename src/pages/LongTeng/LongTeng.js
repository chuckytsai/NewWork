import { CloseLoanding } from "../../components/Loading";
import { NavSidebar } from "../../components/Nav";
import { Sidebar, IllustrateSidebar, CloseMenu } from "../../components/SidebarMenu";
import "../../styles/work/LongTeng.css";
// 引入圖片
import blueRoundShape from "../../images/png/LongTeng/BlueRoundShape.png";
import yellowRoundShape from "../../images/png/LongTeng/YellowRoundShape.png";
import SignUp from "../../images/png/LongTeng/報名日期.png"
import RainbowBall from "../../images/png/LongTeng/RainbowBall.png";
import people from "../../images/png/LongTeng/people.png";
import version from "../../images/png/LongTeng/粉底.png";
import instruct from "../../images/png/LongTeng/第二屆.png";
import SignUpIng from "../../images/png/LongTeng/熱烈報名中.png";
import Group from "../../images/png/LongTeng/Group.png";
import Protech from "../../images/png/LongTeng/普技高.png";
import new1 from "../../images/png/LongTeng/new1.png";
import new2 from "../../images/png/LongTeng/new2.png";
import new3 from "../../images/png/LongTeng/new3.png";
import newNews from "../../images/png/LongTeng/最新消息.png";
import Activity from "../../images/png/LongTeng/活動緣起.png";
import ActivityImg from "../../images/png/LongTeng/活動緣起圖片1.png";
import LongTengActivityBackground from "../../images/png/LongTeng/活動時程背景.png";
import AllSop from "../../images/png/LongTeng/活動流程4步驟.png";
import Sop1 from "../../images/png/LongTeng/開放報名條件.png";
import Sop2 from "../../images/png/LongTeng/入圍名單揭曉.png";
import Sop3 from "../../images/png/LongTeng/得獎名單出爐.png";
import Sop4 from "../../images/png/LongTeng/成果展.png";
import LongFooterPC from "../../images/png/LongTeng/龍騰文化頁尾.png";

export function LongTeng() {
    setTimeout(() => { CloseLoanding(); }, 20);
    return <>
        <NavSidebar />
        <Sidebar />
        <IllustrateSidebar />
        <div className="LongTengGroup" onClick={() => { CloseMenu("all"); }}>
            <nav className="LongTengNav">
                <div className="LongTengNavText">
                    <h2 className="LongTengNavTextLogo">龍騰文化 </h2>
                    <div className="LongTengNavOptionDiv">
                        <div className="LongTengNavOption">活動辦法</div>
                        <div className="LongTengNavOption">歷屆成果</div>
                        <div className="LongTengNavOption">評審介紹</div>
                        <div className="LongTengNavOption">報名繳件</div>
                        <div className="LongTengNavOption">QA</div>
                    </div>
                </div>
            </nav>
            {/* 人物與球體群組 */}
            <div className="LongTengBigBannerGroup">
                <div className="LongTengBigBanner DoubleBalls">
                    <img className="blueRoundShape" alt="" src={blueRoundShape}></img>
                    <img className="SignUp" alt="" src={SignUp}></img>
                    <img className="yellowRoundShape" alt="" src={yellowRoundShape}></img>
                </div>
                <div className="LongTengBigBanner ClolorBall">
                    <img className="RainbowBall" alt="" src={RainbowBall}></img>
                </div>
                <div className="LongTengBigBanner LongTengPeople">
                    <img className="people" alt="" src={people}></img>
                    <img className="version" alt="" src={version}></img>
                    <img className="instruct" alt="" src={instruct}></img>
                    <img className="SignUpIng" alt="" src={SignUpIng}></img>
                    <img className="Group" alt="" src={Group}></img>
                    <img className="Protech" alt="" src={Protech}></img>
                </div>
            </div>
            {/* 最新消息群組 */}
            <div className="NewsBlueBackground">
                <div className="newNewsGroup"><img className="newNews" alt="" src={newNews}></img></div>
                <div className="ShortlistedNews">
                    <div className="PinkBackGround"><img className="newImg" alt="" src={new1}></img></div>
                    <div className="PinkBackGround"><img className="newImg" alt="" src={new2}></img></div>
                    <div className="PinkBackGround"><img className="newImg" alt="" src={new3}></img></div>
                </div>
            </div>
            {/* 活動緣起 */}
            <div className="ActivityOrigin">
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
            </div>
            {/* 活動時程 */}
            <div className="LongTengActivitySchedule">
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
                            <img className="ActivityScheduleImg" src={Sop2} alt="" />
                            <img className="ActivityScheduleImg" src={Sop4} alt="" />
                        </div>
                        <div className="ActivitySchedulePillars"></div>
                        <div className="ActivityScheduleImgs ActivityScheduleRight">
                            <img className="ActivityScheduleImg" src={Sop1} alt="" />
                            <img className="ActivityScheduleImg" src={Sop3} alt="" />
                        </div>
                    </div>
                </div>
                {/* 頁尾 */}
                <footer className="LongFooter">
                    <img className="LongFooterPC" src={LongFooterPC} alt="" />
                </footer>
            </div>
        </div>
    </>
}