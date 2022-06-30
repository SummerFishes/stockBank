import React from "react";
import { render } from "react-dom";


function App(){
    return <div>hello world</div>
}

function init(){
    const containerE1 = document.querySelector("#container");
    render(<App/>,containerE1)
}

init()

// 这是一个小组件