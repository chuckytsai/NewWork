// KFC 菜單中每個選項
export function CartMenuGroup(props) {
    return <div className="cartMenuGroup">
        <div className="cartMenu">
            <img alt="" src={props.img}></img>
        </div>
        <h6 className="cartMenuName">{props.name}</h6>
        <h6 className="cartMenuPrice">${props.price}<span></span></h6>
    </div>
}