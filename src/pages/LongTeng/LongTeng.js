import { CloseLoanding } from "../../components/Loading";
import { NavSidebar } from "../../components/Nav";
import { Sidebar, IllustrateSidebar, CloseMenu } from "../../components/SidebarMenu";
import "../../styles/work/LongTeng.css";
import { AddLongTengEl, DotImgClick, LongTengNavMenu } from "./LongTengFunction";
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
import dot1 from "../../images/png/LongTeng/dot1.png";
import dot2 from "../../images/png/LongTeng/dot3.png";
import dot3 from "../../images/png/LongTeng/dot7.png";
import Menu from "../../images/png/LongTeng/fi_menu.png";

export function LongTeng() {
    setTimeout(() => {
        AddLongTengEl();
        CloseLoanding();
    }, 20);
    return <>
        <NavSidebar />
        <Sidebar />
        <IllustrateSidebar />
        <div className="LongTengGroup" onClick={() => { CloseMenu("all"); }}>
            <nav className="LongTengNav">
                <div className="LongTengNavText">
                    <h2 className="LongTengNavTextLogo">龍騰文化 </h2>
                    <div onClick={LongTengNavMenu} className="LongTengMenu">
                        <img alt="" src={Menu} />
                    </div>
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
            <div className="NewsDots">
                <div>最新消息查看</div>
                <img onClick={() => { DotImgClick(0) }} alt="" src={dot1} />
                <img onClick={() => { DotImgClick(1) }} alt="" src={dot2} />
                <img onClick={() => { DotImgClick(2) }} alt="" src={dot3} />
            </div>
            {/* 活動緣起 */}
            <div className="ActivityOrigin">
            </div>
            {/* 活動時程 */}
            <div className="LongTengActivitySchedule">
            </div>
        </div>
    </>
}