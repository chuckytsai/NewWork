import { OrderMenu } from "./ShoppingCatFunction";

// KFC 菜單中每個選項
export function CartMenuGroup(props) {
    return <div className="cartMenuGroup">
        <div className="cartMenu">
            <img alt="" src={props.img}></img>
        </div>
        <h6 className="cartMenuName">{props.name}</h6>
        <h6 className="cartMenuPrice">${props.price}
            <span className="AddShopping">
                <button className="ShoppingDot" onClick={() => {
                    OrderMenu("reduce", props.cost, props.name, props.price)
                }}><h6>-</h6></button>
                <div className={props.cost + " ShoppingQuantity"}>0</div>
                <button className="ShoppingDot" onClick={() => {
                    OrderMenu("Add", props.cost, props.name, props.price)
                }}><h6>+</h6></button>
            </span>
        </h6>
    </div>
}