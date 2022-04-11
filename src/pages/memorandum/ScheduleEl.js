export function OpenCloseElements(props) {
    return <div className={props.className}>
        <button className="EditDateListChild FakeBtn" value={props.value}>
            {props.BtnText}
        </button>
        {props.text}
    </div>
}