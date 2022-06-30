import React from "react";

import TradeInputItem from "./tradeInputItem";
import TradeSelectItem from "./tradeSelectItem";

export default function TradeInputItems(){
    return <div className="trade-input-items">
        <TradeInputItem name = "Client Name"/>
        <TradeInputItem name = "Ticker"/>
        <TradeInputItem name = "RIC"/>
        <TradeInputItem name = "Size"/>
        <TradeInputItem name = "Price"/>
        <TradeInputItem name = "Currency"/>
        <TradeInputItem name = "Issuer Sector"/>
        <TradeInputItem name = "Salesperson"/>
        <TradeSelectItem/>
    </div>
}