import React from "react"

export default function TradeItem(props) {
    let cls = 'trade-type-item'
    //console.log(props.value,props.active)
    if(props.active){
        cls += ' active'
        
    }

    return <div data-value={props.value} className={cls}>{props.label}</div>
}