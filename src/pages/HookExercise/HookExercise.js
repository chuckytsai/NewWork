import React, { useState } from 'react';
// 引入元件
import { CloseLoanding } from "../../components/Loading";

export function HookExercise() {
    let [day, setState] = useState("");
    let [checked, setStateChecked] = useState(false);
    setTimeout(CloseLoanding, 100);
    return <div>
        <p>You clicked {day} times</p>
        <button
            value={checked ? true : false}
            onClick={() => {
                let call = String();
                if (checked === true) {
                    call = "Hello";
                }
                else if (checked === false) {
                    call = "Hi";
                }
                setState(call)
                setStateChecked(!checked)
            }}
        >Click me</button>
    </div >
}