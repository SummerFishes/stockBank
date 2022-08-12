import React from "react"
import TradeInput from "./tradeInput"

export default function TraditionalTrade(props){
    return <div className="trade-traditional">
        <div className="trade-input-items">
            <TradeInput type="input" label="Client Name"/>
            <TradeInput type="input" label="Ticker"/>
            <TradeInput type="input" label="RIC"/>
            <TradeInput type="input" label="Size"/>
            <TradeInput type="input" label="Price"/>
            <TradeInput type="input" label="Currency"/>
            <TradeInput type="input" label="Issue Sector"/>
            <TradeInput type="input" label="Salesperson"/>
            <TradeInput type="select" label="HT/PT" options={["HT","PT"]}/>
        </div>
        <div className="trade-submit-btns">
            <button className="trade-btn trade-buy">Buy</button>
            <button className="trade-btn trade-sell">Sell</button>
        </div>
    </div>
}