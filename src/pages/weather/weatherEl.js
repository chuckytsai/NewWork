// 引入Json
import { Data } from "../../components/Json/TaiwanCtiys.json";

// =======選擇城市名稱選項=====
export function TaiwanCitys(props) {
    return <select className="SelectCitys" onChange={props.onChange}>
        {Data.map((item, i) =>
            <option value={item.weatherValue} key={i}>{item.name}</option>
        )}
    </select>
}