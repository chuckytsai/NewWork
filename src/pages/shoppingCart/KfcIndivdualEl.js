import React, { useState } from "react";
import { CartMenuGroup } from "./KfcEl";
// ======引入圖片=====
// XL套餐
import 吮指雙雞XL套餐 from "../../images/jpg/KFC/XL/吮指雙雞XL套餐.jpg";
import 咔啦雞腿堡XL套餐 from "../../images/jpg/KFC/XL/咔啦雞腿堡XL套餐.jpg";
import 花生起司雞柳捲XL餐 from "../../images/jpg/KFC/XL/花生起司雞柳捲XL餐.jpg";
import 花生培根咔啦雞腿堡XL餐 from "../../images/jpg/KFC/XL/花生培根咔啦雞腿堡XL餐.jpg";
import 花生熔岩咔啦雞腿堡XL套餐 from "../../images/jpg/KFC/XL/花生熔岩咔啦雞腿堡XL套餐.jpg";
import 青花椒香麻脆雞XL套餐 from "../../images/jpg/KFC/XL/青花椒香麻脆雞XL套餐.jpg";
import 原味起司燻雞捲XL餐 from "../../images/jpg/KFC/XL/原味起司燻雞捲XL餐.jpg";
import 紐奧良烤雞腿堡XL套餐 from "../../images/jpg/KFC/XL/紐奧良烤雞腿堡XL套餐.jpg";
import 義式香草紙包雞XL套餐 from "../../images/jpg/KFC/XL/義式香草紙包雞XL套餐.jpg";
// 個人套餐
import 八塊上校雞塊套餐 from "../../images/jpg/KFC/Indivdual/八塊上校雞塊套餐.jpg";
import 原味起司燻雞捲套餐 from "../../images/jpg/KFC/Indivdual/原味起司燻雞捲套餐.jpg";
import 吮指雙雞套餐 from "../../images/jpg/KFC/Indivdual/吮指雙雞套餐.jpg";
import 咔啦雞腿堡套餐 from "../../images/jpg/KFC/Indivdual/咔啦雞腿堡套餐.jpg";
import 紐奧良烤雞腿堡套餐 from "../../images/jpg/KFC/Indivdual/紐奧良烤雞腿堡套餐.jpg";
import 花生培根咔啦雞腿堡餐 from "../../images/jpg/KFC/Indivdual/花生培根咔啦雞腿堡餐.jpg";
import 花生熔岩咔啦雞腿堡餐 from "../../images/jpg/KFC/Indivdual/花生熔岩咔啦雞腿堡餐.jpg";
import 花生起司雞柳捲套餐 from "../../images/jpg/KFC/Indivdual/花生起司雞柳捲套餐.jpg";
import 莎莎霸王捲餐 from "../../images/jpg/KFC/Indivdual/莎莎霸王捲餐.jpg";
import 青花椒香麻脆雞個人餐 from "../../images/jpg/KFC/Indivdual/青花椒香麻脆雞個人餐.jpg";
import 香草紙包雞個人餐 from "../../images/jpg/KFC/Indivdual/香草紙包雞個人餐.jpg";
// 沙拉套餐
import 烤地瓜沙拉 from "../../images/jpg/KFC/Sala/烤地瓜沙拉.jpg";
import 烤地瓜沙拉套餐 from "../../images/jpg/KFC/Sala/烤地瓜沙拉套餐.jpg";
import 烤雞溫沙拉 from "../../images/jpg/KFC/Sala/烤雞溫沙拉.jpg";
import 烤雞溫沙拉套餐 from "../../images/jpg/KFC/Sala/烤雞溫沙拉套餐.jpg";

// XL套餐
export function XLGroup() {
    let [XLGroupData] = useState([
        {
            "name": "吮指雙雞XL套餐",
            "price": 189,
            "img": 吮指雙雞XL套餐
        },
        {
            "name": "咔啦雞腿堡XL套餐",
            "price": 185,
            "img": 咔啦雞腿堡XL套餐
        },
        {
            "name": "花生起司雞柳捲XL餐",
            "price": 175,
            "img": 花生起司雞柳捲XL餐
        },
        {
            "name": "花生培根咔啦雞腿堡XL餐",
            "price": 190,
            "img": 花生培根咔啦雞腿堡XL餐
        },
        {
            "name": "花生熔岩咔啦雞腿堡XL套餐",
            "price": 195,
            "img": 花生熔岩咔啦雞腿堡XL套餐
        },
        {
            "name": "青花椒香麻脆雞XL套餐",
            "price": 175,
            "img": 青花椒香麻脆雞XL套餐
        },
        {
            "name": "紐奧良烤雞腿堡XL套餐",
            "price": 189,
            "img": 紐奧良烤雞腿堡XL套餐
        },
        {
            "name": "原味起司燻雞捲XL餐",
            "price": 175,
            "img": 原味起司燻雞捲XL餐
        },
        {
            "name": "義式香草紙包雞XL套餐",
            "price": 189,
            "img": 義式香草紙包雞XL套餐
        }
    ])
    return <>
        {XLGroupData.map((item, x) => (
            <CartMenuGroup
                key={x}
                img={item.img}
                name={item.name}
                price={item.price} />
        ))}
    </>
}
// 個人套餐
export function IndivdualGroup() {
    let [IndivdualGroupData] = useState([
        {
            "name": "8塊上校雞塊套餐",
            "price": 99,
            "img": 八塊上校雞塊套餐
        },
        {
            "name": "原味起司燻雞捲套餐",
            "price": 99,
            "img": 原味起司燻雞捲套餐
        },
        {
            "name": "吮指雙雞套餐",
            "price": 155,
            "img": 吮指雙雞套餐
        },
        {
            "name": "咔啦雞腿堡套餐",
            "price": 135,
            "img": 咔啦雞腿堡套餐
        },
        {
            "name": "紐奧良烤雞腿堡套餐",
            "price": 139,
            "img": 紐奧良烤雞腿堡套餐
        },
        {
            "name": "花生培根咔啦雞腿堡餐",
            "price": 145,
            "img": 花生培根咔啦雞腿堡餐
        },
        {
            "name": "花生起司雞柳捲套餐",
            "price": 99,
            "img": 花生起司雞柳捲套餐
        },
        {
            "name": "花生熔岩咔啦雞腿堡餐",
            "price": 155,
            "img": 花生熔岩咔啦雞腿堡餐
        },
        {
            "name": "墨西哥莎莎霸王捲餐",
            "price": 145,
            "img": 莎莎霸王捲餐
        }
        ,
        {
            "name": "青花椒香麻脆雞個人餐",
            "price": 165,
            "img": 青花椒香麻脆雞個人餐
        },
        {
            "name": "義式香草紙包雞個人餐",
            "price": 159,
            "img": 香草紙包雞個人餐
        }
    ])
    return <>
        {IndivdualGroupData.map((item, x) => (
            <CartMenuGroup
                key={x}
                img={item.img}
                name={item.name}
                price={item.price} />
        ))}
    </>
}
// 沙拉套餐
export function SalaGroup() {
    let [SalaGroupData] = useState([
        {
            "name": "凱薩烤地瓜沙拉",
            "price": 108,
            "img": 烤地瓜沙拉
        },
        {
            "name": "凱薩烤地瓜沙拉套餐",
            "price": 139,
            "img": 烤地瓜沙拉套餐
        },
        {
            "name": "上校私廚烤雞溫沙拉",
            "price": 119,
            "img": 烤雞溫沙拉
        },
        {
            "name": "上校私廚烤雞溫沙拉套餐",
            "price": 149,
            "img": 烤雞溫沙拉套餐
        }
    ])
    return <>
        {SalaGroupData.map((item, x) => (
            <CartMenuGroup
                key={x}
                img={item.img}
                name={item.name}
                price={item.price} />
        ))}
    </>
}