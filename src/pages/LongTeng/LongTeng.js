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

export function LongTeng() {
    setTimeout(() => { CloseLoanding(); }, 20);
    return <>
        <NavSidebar />
        <Sidebar />
        <IllustrateSidebar />
        <div className="LongTengGroup" onClick={() => { CloseMenu("all"); }}>
            <nav className="LongTengNav">
                <div className="LongTengNavText">
                    <h2 class="LongTengNavTextLogo">龍騰文化 </h2>
                    {/* <img class="LongTengNavMenu" src="/LongTeng/img/fi_menu.png" alt=""> */}
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
                
            </div>
        </div>
    </>
}