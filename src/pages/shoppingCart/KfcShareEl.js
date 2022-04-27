import React, { useState } from "react";
import { CartMenuGroup } from "./KfcEl";
// ======引入圖片=====
// 2-4人歡聚餐
import 宅宅快樂餐 from "../../images/jpg/KFC/Share24/宅宅快樂餐.jpg";
import 歡聚樂享餐 from "../../images/jpg/KFC/Share24/歡聚樂享餐.jpg";
import 派對B餐6塊雞 from "../../images/jpg/KFC/Share24/派對B餐-6塊雞.jpg";
import 派對B餐8塊雞 from "../../images/jpg/KFC/Share24/派對B餐-8塊雞.jpg";
import 派對狂饗烤全雞餐 from "../../images/jpg/KFC/Share24/派對狂饗烤全雞餐.jpg";
import 經典A餐6塊雞桶 from "../../images/jpg/KFC/Share24/經典A餐-6塊雞桶.jpg";
import 經典A餐8塊雞桶 from "../../images/jpg/KFC/Share24/經典A餐-8塊雞桶.jpg";
import 青花椒香麻脆雞雙人餐 from "../../images/jpg/KFC/Share24/青花椒香麻脆雞雙人餐.jpg";
import 青花椒麻脆雞歡聚餐 from "../../images/jpg/KFC/Share24/青花椒麻脆雞歡聚餐.jpg";
// 5-7人歡聚餐
import 經典A餐10塊雞桶 from "../../images/jpg/KFC/Share57/經典A餐-10塊雞桶.jpg";
import 派對B餐10塊雞 from "../../images/jpg/KFC/Share57/派對B餐-10塊雞.jpg";
import 義式香草紙包雞同饗餐 from "../../images/jpg/KFC/Share57/義式香草紙包雞同饗餐.jpg";
import 超人氣同樂餐 from "../../images/jpg/KFC/Share57/超人氣同樂餐.jpg";
import 好食雞同樂餐 from "../../images/jpg/KFC/Share57/好食雞同樂餐.jpg";

// 2-4人歡聚餐
export function Share24Group() {
    let [Share24GroupData] = useState([
        {
            "name": "宅宅快樂餐",
            "price": 548,
            "img": 宅宅快樂餐,
            "url": "HappyHouseParty"
        },
        {
            "name": "歡聚樂享餐",
            "price": 548,
            "img": 歡聚樂享餐,
            "url": "HappyShareParty"
        },
        {
            "name": "經典A餐-6塊雞桶",
            "price": 317,
            "img": 經典A餐6塊雞桶,
            "url": "ClassicA6Party"
        },
        {
            "name": "經典A餐-8塊雞桶",
            "price": 419,
            "img": 經典A餐8塊雞桶,
            "url": "ClassicA8Party"
        },
        {
            "name": "派對B餐-6塊雞",
            "price": 427,
            "img": 派對B餐6塊雞,
            "url": "ClassicB6Party"
        },
        {
            "name": "派對B餐-8塊雞",
            "price": 559,
            "img": 派對B餐8塊雞,
            "url": "ClassicB8Party"
        },
        {
            "name": "派對狂饗烤全雞餐",
            "price": 639,
            "img": 派對狂饗烤全雞餐,
            "url": "RoastChickenParty"
        },
        {
            "name": "青花椒香麻脆雞雙人餐",
            "price": 320,
            "img": 青花椒香麻脆雞雙人餐,
            "url": "QingPepperChickenDoubleParty"
        },
        {
            "name": "青花椒麻脆雞歡聚餐",
            "price": 530,
            "img": 青花椒麻脆雞歡聚餐,
            "url": "QingPepperChickenParty"
        }
    ])
    return <>
        {Share24GroupData.map((item, x) => (
            <CartMenuGroup
                key={x}
                img={item.img}
                name={item.name}
                cost={item.url}
                price={item.price} />
        ))}
    </>
}
// 5-7人歡聚餐
export function Share57Group() {
    let [Share57GroupData] = useState([
        {
            "name": "經典A餐-10塊雞桶",
            "price": 509,
            "img": 經典A餐10塊雞桶,
            "url": "ClassicA10Party"
        },
        {
            "name": "派對B餐-10塊雞",
            "price": 679,
            "img": 派對B餐10塊雞,
            "url": "ClassicB10Party"
        },
        {
            "name": "義式香草紙包雞同饗餐",
            "price": 838,
            "img": 義式香草紙包雞同饗餐,
            "url": "ChickenWrappedInPaperParty"
        },
        {
            "name": "超人氣同樂餐",
            "price": 828,
            "img": 超人氣同樂餐,
            "url": "SuperPopularParty"
        },
        {
            "name": "好食雞同樂餐",
            "price": 1058,
            "img": 好食雞同樂餐,
            "url": "NiceChickenParty"
        }
    ])
    return <>
        {Share57GroupData.map((item, x) => (
            <CartMenuGroup
                key={x}
                img={item.img}
                name={item.name}
                cost={item.url}
                price={item.price} />
        ))}
    </>
}