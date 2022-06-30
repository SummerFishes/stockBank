import React from "react";

export default function TradeSelectItem(){
    return <div>
        <div className="trade-input-title">HT/PT</div>
        <select className="trade-input">
            <option value="HT">HT</option>
            <option value="BT">BT</option>
        </select>
    </div>
}