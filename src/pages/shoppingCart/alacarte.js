import React, { useState } from "react";
import { CartMenuGroup } from "./KfcEl";
// ======引入圖片=====
// 單點主餐
import 上校薄皮嫩雞 from "../../images/jpg/KFC/Alacarte/上校薄皮嫩雞.jpg";
import 上校薄脆雞 from "../../images/jpg/KFC/Alacarte/上校薄脆雞.jpg";
import 上校雞塊8塊 from "../../images/jpg/KFC/Alacarte/上校雞塊8塊.jpg";
import 原味起司燻雞捲 from "../../images/jpg/KFC/Alacarte/原味起司燻雞捲.jpg";
import 咔啦脆雞 from "../../images/jpg/KFC/Alacarte/咔啦脆雞.jpg";
import 咔啦雞腿堡 from "../../images/jpg/KFC/Alacarte/咔啦雞腿堡.jpg";
import 紐奧良烤全雞 from "../../images/jpg/KFC/Alacarte/紐奧良烤全雞.jpg";
import 紐奧良烤雞腿堡 from "../../images/jpg/KFC/Alacarte/紐奧良烤雞腿堡.jpg";
import 義式香草紙包雞 from "../../images/jpg/KFC/Alacarte/義式香草紙包雞.jpg";
import 花生培根咔啦雞腿堡 from "../../images/jpg/KFC/Alacarte/花生培根咔啦雞腿堡.jpg";
import 花生熔岩啦雞腿堡單點 from "../../images/jpg/KFC/Alacarte/花生熔岩-啦雞腿堡-單點-200306.jpg";
import 花生起司雞柳捲 from "../../images/jpg/KFC/Alacarte/花生起司雞柳捲.jpg";
import 莎莎霸王捲 from "../../images/jpg/KFC/Alacarte/莎莎霸王捲(不適用外送)-210927.jpg";
import 青花椒香麻脆雞單點 from "../../images/jpg/KFC/Alacarte/青花椒香麻脆雞單點.jpg";
// 蛋塔
import 原味蛋撻 from "../../images/jpg/KFC/EggTart/原味蛋撻.jpg";
import 原味蛋撻禮盒 from "../../images/jpg/KFC/EggTart/原味蛋撻禮盒.jpg";
import 芋見好時光套餐 from "../../images/jpg/KFC/EggTart/芋見好時光套餐.jpg";
import 芋見雲朵蛋撻 from "../../images/jpg/KFC/EggTart/芋見雲朵蛋撻.jpg";
import 芋見雲朵蛋撻雙色禮盒 from "../../images/jpg/KFC/EggTart/芋見雲朵蛋撻雙色禮盒.jpg";
import 芋見雲朵蛋撻禮盒 from "../../images/jpg/KFC/EggTart/芋見雲朵蛋撻禮盒.jpg";
import 熟客卡 from "../../images/jpg/KFC/EggTart/熟客卡.jpg";
// 附餐&甜點
import ABC輕鬆選套餐A from "../../images/jpg/KFC/Snack/ABC輕鬆選套餐A.jpg";
import ABC輕鬆選套餐B from "../../images/jpg/KFC/Snack/ABC輕鬆選套餐B.jpg";
import ABC輕鬆選套餐C from "../../images/jpg/KFC/Snack/ABC輕鬆選套餐C.jpg";
import K酥雞翅 from "../../images/jpg/KFC/Snack/K酥雞翅(2支).jpg";
import 上校雞塊4塊 from "../../images/jpg/KFC/Snack/上校雞塊4塊.jpg";
import 上校雞塊分享盒 from "../../images/jpg/KFC/Snack/上校雞塊分享盒.jpg";
import 享樂星球拼盤 from "../../images/jpg/KFC/Snack/享樂星球拼盤.jpg";
import 分享拼盤 from "../../images/jpg/KFC/Snack/分享拼盤.jpg";
import 派對拼盤 from "../../images/jpg/KFC/Snack/派對拼盤.jpg";
import 經典拼盤 from "../../images/jpg/KFC/Snack/經典拼盤.jpg";
import 經典玉米 from "../../images/jpg/KFC/Snack/經典玉米.jpg";
import 草莓起司冰淇淋大福 from "../../images/jpg/KFC/Snack/草莓起司冰淇淋大福.jpg";
import 草莓起司冰淇淋大福禮盒 from "../../images/jpg/KFC/Snack/草莓起司冰淇淋大福禮盒.jpg";
import 雙色轉轉QQ球 from "../../images/jpg/KFC/Snack/雙色轉轉QQ球.jpg";
import 雞汁風味飯 from "../../images/jpg/KFC/Snack/雞汁風味飯.jpg";
import 香酥洋蔥圈 from "../../images/jpg/KFC/Snack/香酥洋蔥圈.jpg";
import 香酥脆薯小 from "../../images/jpg/KFC/Snack/香酥脆薯(小).jpg";
import 香酥脆薯中 from "../../images/jpg/KFC/Snack/香酥脆薯(中).jpg";
import 香酥脆薯大 from "../../images/jpg/KFC/Snack/香酥脆薯(大).jpg";
import 鮮蔬沙拉 from "../../images/jpg/KFC/Snack/鮮蔬沙拉(千島醬).jpg";
import 點心盒 from "../../images/jpg/KFC/Snack/點心盒-上校雞塊+香酥脆薯(小).jpg";
// 飲品
import 七喜小 from "../../images/jpg/KFC/Drinks/七喜(小).jpg";
import 七喜中 from "../../images/jpg/KFC/Drinks/七喜(中).jpg";
import 冰無糖茉莉綠茶小 from "../../images/jpg/KFC/Drinks/冰無糖茉莉綠茶(小).jpg";
import 冰無糖茉莉綠茶中 from "../../images/jpg/KFC/Drinks/冰無糖茉莉綠茶(中).jpg";
import 瓶裝可樂 from "../../images/jpg/KFC/Drinks/瓶裝可樂.jpg";
import 冰義式拿鐵 from "../../images/jpg/KFC/Drinks/冰義式拿鐵.jpg";
import 熱義式拿鐵 from "../../images/jpg/KFC/Drinks/熱義式拿鐵.jpg";
import 柳橙汁 from "../../images/jpg/KFC/Drinks/柳橙汁.jpg";
import 檸檬紅茶小 from "../../images/jpg/KFC/Drinks/檸檬紅茶(小).jpg";
import 檸檬紅茶中 from "../../images/jpg/KFC/Drinks/檸檬紅茶(中).jpg";
import 熱紅茶 from "../../images/jpg/KFC/Drinks/熱紅茶.jpg";
import 熱義式卡布奇諾 from "../../images/jpg/KFC/Drinks/熱義式卡布奇諾.jpg";
import 冰義式咖啡 from "../../images/jpg/KFC/Drinks/冰義式咖啡.jpg";
import 熱義式咖啡小 from "../../images/jpg/KFC/Drinks/熱義式咖啡(小).jpg";
import 熱義式咖啡大 from "../../images/jpg/KFC/Drinks/熱義式咖啡(大).jpg";
import 玉米濃湯小 from "../../images/jpg/KFC/Drinks/玉米濃湯(小).jpg";
import 玉米濃湯大 from "../../images/jpg/KFC/Drinks/玉米濃湯(大).jpg";
import 百事可樂小 from "../../images/jpg/KFC/Drinks/百事可樂(小).jpg";
import 百事可樂中 from "../../images/jpg/KFC/Drinks/百事可樂(中).jpg";
import 經典冰奶茶中 from "../../images/jpg/KFC/Drinks/經典冰奶茶(中).jpg";
import 經典熱奶茶小 from "../../images/jpg/KFC/Drinks/經典熱奶茶(小).jpg";
import 經典熱奶茶中 from "../../images/jpg/KFC/Drinks/經典熱奶茶(中).jpg";


// 單點主餐
export function AlacarteGroup() {
    let [AlacarteGroupData] = useState([
        {
            "name": "青花椒香麻脆雞(辣)",
            "price": 66,
            "img": 青花椒香麻脆雞單點,
            "url": "QingPepperChickenHot"
        },
        {
            "name": "紐奧良烤全雞",
            "price": 419,
            "img": 紐奧良烤全雞,
            "url": "NewOrleansRoastChicken"
        },
        {
            "name": "咔啦脆雞(辣)",
            "price": 63,
            "img": 咔啦脆雞,
            "url": "KaraChickenHot"

        },
        {
            "name": "花生起司雞柳捲",
            "price": 90,
            "img": 花生起司雞柳捲,
            "url": "PeanutCheeseChickenwicker"
        },
        {
            "name": "原味起司燻雞捲",
            "price": 90,
            "img": 原味起司燻雞捲,
            "url": "CheeseChickenwicker"
        },
        {
            "name": "上校薄皮嫩雞(不辣)",
            "price": 63,
            "img": 上校薄皮嫩雞,
            "url": "ThinSkinSoftChicken"
        },
        {
            "name": "上校薄脆雞(不辣)",
            "price": 63,
            "img": 上校薄脆雞,
            "url": "ThinSkinCrispChicken"
        },
        {
            "name": "義式香草紙包雞",
            "price": 126,
            "img": 義式香草紙包雞,
            "url": "ChickenWrappedInPaper"
        },
        {
            "name": "咔啦雞腿堡(辣)",
            "price": 109,
            "img": 咔啦雞腿堡,
            "url": "KaraDrumstickHot"
        },
        {
            "name": "花生熔岩啦雞腿堡(辣)",
            "price": 129,
            "img": 花生熔岩啦雞腿堡單點,
            "url": "PeanutSauceGroupKaraDrumstickHot"
        },
        {
            "name": "紐奧良烤雞腿堡(辣)",
            "price": 109,
            "img": 紐奧良烤雞腿堡,
            "url": "NewOrleansDrumstickHot"
        },
        {
            "name": "上校雞塊8塊",
            "price": 90,
            "img": 上校雞塊8塊,
            "url": "ChickenNuggets8"
        },
        {
            "name": "花生培根咔啦雞腿堡(蠟)",
            "price": 119,
            "img": 花生培根咔啦雞腿堡,
            "url": "PeanutBaconKaraDrumstickHot"
        },
        {
            "name": "墨西哥莎莎霸王捲(辣)",
            "price": 119,
            "img": 莎莎霸王捲,
            "url": "TacoHot"
        }
    ])
    return <>
        {AlacarteGroupData.map((item, x) => (
            <CartMenuGroup
                key={x}
                img={item.img}
                name={item.name}
                cost={item.url}
                price={item.price} />
        ))}
    </>
}
// 蛋塔
export function EggTart() {
    let [EggTartData] = useState([
        {
            "name": "原味蛋撻",
            "price": 39,
            "img": 原味蛋撻,
            "url": "EggTart"
        },
        {
            "name": "原味蛋撻禮盒",
            "price": 210,
            "img": 原味蛋撻禮盒,
            "url": "EggTartGiftBox"
        },
        {
            "name": "芋見好時光套餐",
            "price": 115,
            "img": 芋見好時光套餐,
            "url": "TaroEggTartGroup"
        },
        {
            "name": "芋見雲朵蛋撻",
            "price": 46,
            "img": 芋見雲朵蛋撻,
            "url": "TaroCloudEggTart"
        },
        {
            "name": "芋見雲朵蛋撻雙色禮盒",
            "price": 229,
            "img": 芋見雲朵蛋撻雙色禮盒,
            "url": "TaroCloudEggTartGroup"
        },
        {
            "name": "芋見雲朵蛋撻禮盒",
            "price": 249,
            "img": 芋見雲朵蛋撻禮盒,
            "url": "TaroCloudEggTartGiftBox"
        },
        {
            "name": "熟客卡",
            "price": 570,
            "img": 熟客卡,
            "url": "RegularCustomerCard"
        }
    ])
    return <>
        {EggTartData.map((item, x) => (
            <CartMenuGroup
                key={x}
                img={item.img}
                name={item.name}
                cost={item.url}
                price={item.price} />
        ))}
    </>
}
// 附餐&甜點
export function SnackGroup() {
    let [SnackData] = useState([
        {
            "name": "ABC輕鬆選套餐A",
            "price": 59,
            "img": ABC輕鬆選套餐A,
            "url": "ABC_AGroup"
        },
        {
            "name": "ABC輕鬆選套餐B",
            "price": 59,
            "img": ABC輕鬆選套餐B,
            "url": "ABC_BGroup"
        },
        {
            "name": "ABC輕鬆選套餐C",
            "price": 59,
            "img": ABC輕鬆選套餐C,
            "url": "ABC_CGroup"
        },
        {
            "name": "K酥雞翅(2支)",
            "price": 49,
            "img": K酥雞翅,
            "url": "ChickenWings2"
        },
        {
            "name": "上校雞塊4塊",
            "price": 45,
            "img": 上校雞塊4塊,
            "url": "ChickenNuggets4"
        },
        {
            "name": "上校雞塊分享盒",
            "price": 179,
            "img": 上校雞塊分享盒,
            "url": "ChickenNuggetsShare"
        },
        {
            "name": "享樂星球拼盤",
            "price": 165,
            "img": 享樂星球拼盤,
            "url": "EnjoyPlatter"
        },
        {
            "name": "分享拼盤",
            "price": 199,
            "img": 分享拼盤,
            "url": "SharePlatter"
        },
        {
            "name": "派對拼盤",
            "price": 220,
            "img": 派對拼盤,
            "url": "PartyPlatter"
        },
        {
            "name": "經典拼盤",
            "price": 299,
            "img": 經典拼盤,
            "url": "ClassicPlatter"
        },
        {
            "name": "經典玉米",
            "price": 29,
            "img": 經典玉米,
            "url": "Corn"
        },
        {
            "name": "草莓起司冰淇淋大福",
            "price": 49,
            "img": 草莓起司冰淇淋大福,
            "url": "StrawberryCheeseIceCreamDaifuku"
        },
        {
            "name": "草莓起司冰淇淋大福禮盒",
            "price": 390,
            "img": 草莓起司冰淇淋大福禮盒,
            "url": "StrawberryCheeseIceCreamDaifukuGiftBox"
        },
        {
            "name": "雙色轉轉QQ球",
            "price": 49,
            "img": 雙色轉轉QQ球,
            "url": "QqBall"
        },
        {
            "name": "雞汁風味飯",
            "price": 39,
            "img": 雞汁風味飯,
            "url": "ChickenJuiceRice"
        },
        {
            "name": "香酥洋蔥圈",
            "price": 48,
            "img": 香酥洋蔥圈,
            "url": "OnionRings"
        },
        {
            "name": "香酥脆薯小",
            "price": 29,
            "img": 香酥脆薯小,
            "url": "CrispyPotatoSmall"
        },
        {
            "name": "香酥脆薯中",
            "price": 43,
            "img": 香酥脆薯中,
            "url": "CrispyPotatoMiddle"
        },
        {
            "name": "香酥脆薯大",
            "price": 53,
            "img": 香酥脆薯大,
            "url": "CrispyPotatoBig"
        },
        {
            "name": "鮮蔬沙拉(千島醬)",
            "price": 40,
            "img": 鮮蔬沙拉,
            "url": "ThousandIslandSauceSara"
        },
        {
            "name": "點心盒-上校雞塊+香酥脆薯(小)",
            "price": 49,
            "img": 點心盒,
            "url": "SnackBox"
        }
    ])
    return <>
        {SnackData.map((item, x) => (
            <CartMenuGroup
                key={x}
                img={item.img}
                name={item.name}
                cost={item.url}
                price={item.price} />
        ))}
    </>
}

// 附餐&甜點
export function DrinksGroup() {
    let [DrinksData] = useState([
        {
            "name": "七喜(小)",
            "price": 27,
            "img": 七喜小,
            "url": "7upSmall"
        },
        {
            "name": "七喜(中)",
            "price": 32,
            "img": 七喜中,
            "url": "7upMiddle"
        },
        {
            "name": "冰無糖茉莉綠茶(小)",
            "price": 27,
            "img": 冰無糖茉莉綠茶小,
            "url": "JasmineGreenTeaIceSmall"
        },
        {
            "name": "冰無糖茉莉綠茶(中)",
            "price": 32,
            "img": 冰無糖茉莉綠茶中,
            "url": "JasmineGreenTeaIceMiddle"
        },
        {
            "name": "瓶裝百事可樂",
            "price": 40,
            "img": 瓶裝可樂,
            "url": "PepsiBottle"
        },
        {
            "name": "冰義式拿鐵",
            "price": 80,
            "img": 冰義式拿鐵,
            "url": "LatteIce"
        },
        {
            "name": "熱義式拿鐵",
            "price": 65,
            "img": 熱義式拿鐵,
            "url": "LatteHot"
        },
        {
            "name": "100%柳橙汁",
            "price": 38,
            "img": 柳橙汁,
            "url": "OrangeJuice"
        },
        {
            "name": "立頓檸檬風味紅茶(小)",
            "price": 27,
            "img": 檸檬紅茶小,
            "url": "LemonRedTeaSmall"
        },
        {
            "name": "立頓檸檬風味紅茶(中)",
            "price": 32,
            "img": 檸檬紅茶中,
            "url": "LemonRedTeaMiddle"
        },
        {
            "name": "熱紅茶",
            "price": 30,
            "img": 熱紅茶,
            "url": "RedTeaHot"
        },
        {
            "name": "熱義式卡布奇諾",
            "price": 65,
            "img": 熱義式卡布奇諾,
            "url": "CappuccinoHot"
        },
        {
            "name": "冰義式咖啡",
            "price": 60,
            "img": 冰義式咖啡,
            "url": "CoffeeIce"
        },
        {
            "name": "熱義式咖啡(小)",
            "price": 35,
            "img": 熱義式咖啡小,
            "url": "CoffeeHotSmall"
        },
        {
            "name": "熱義式咖啡(大)",
            "price": 45,
            "img": 熱義式咖啡大,
            "url": "CoffeeHotBig"
        },
        {
            "name": "玉米濃湯(小)",
            "price": 40,
            "img": 玉米濃湯小,
            "url": "CornChowderSmall"
        },
        {
            "name": "玉米濃湯(大)",
            "price": 52,
            "img": 玉米濃湯大,
            "url": "CornChowderBig"
        },
        {
            "name": "百事可樂(小)",
            "price": 27,
            "img": 百事可樂小,
            "url": "PepsiSmall"
        },
        {
            "name": "百事可樂(中)",
            "price": 32,
            "img": 百事可樂中,
            "url": "PepsiMiddle"
        },
        {
            "name": "經典冰奶茶",
            "price": 35,
            "img": 經典冰奶茶中,
            "url": "MilkTeaIce"
        },
        {
            "name": "經典熱奶茶(小)",
            "price": 30,
            "img": 經典熱奶茶小,
            "url": "MilkTeaHotSmall"
        },
        {
            "name": "經典熱奶茶(中)",
            "price": 35,
            "img": 經典熱奶茶中,
            "url": "MilkTeaHotMiddle"
        }
    ])
    return <>
        {DrinksData.map((item, x) => (
            <CartMenuGroup
                key={x}
                img={item.img}
                name={item.name}
                price={item.price} />
        ))}
    </>
}