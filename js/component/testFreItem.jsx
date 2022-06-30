import React from "react";
import testFreGroup from "./testFreGroup";

export default function TestFreItem(props){

    let cls = 'fre-item'
    if(props.active){
        cls += ' active'
    }

    return <span data-value={props.value} className="fre-item">{props.label}</span>

}