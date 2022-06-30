import React from "react";

export default function TradeInputItem(props){
    return <div className="trade-input-item">
        <div className="trade-input-title">{props.name}</div>
        <input className="trade-input" placeholder="text input"/>
    </div>
}