import ReactDOM from 'react-dom';
import { WeatherApi } from "../../src/api/api";

// ===============  氣象紀錄 ==================
// 晴時多雲 多雲時陰短暫雨 陰有雨
// 稍有寒意至舒適 寒冷

// ==============天氣區塊======================
let WeatherMap = async () => {
    try {
        let Item = await WeatherApi();
        let Groups = [];
        for (let x = 0; x < Item.data.records.location[0].weatherElement.length; x++) {
            let TestText = Item.data.records.location[0].weatherElement[x].time.map((item, i) =>
                <div key={i}>
                    <h6>{item["startTime"]}</h6>
                    <h6>{item["endTime"]}</h6>
                    <h6>{item["parameter"]["parameterName"]}</h6>
                </div>
            )
            Groups.push(TestText)
        }
        ReactDOM.render(
            <>{Groups}</>, document.getElementsByClassName("WeatherGroup")[0]
        );
    } catch (error) {
        console.log("異常", error);
    }
}

export function Weather() {
    setTimeout(() => {
        WeatherMap();
    }, 100);
    return <div className="WeatherGroup"></div>

}