import React from "react";

export default function TradeSubmitBtns(){
    return <div className="trade-submit-btns">
        <button className="trade-btn trade-buy" onClick={getAllInput}>Buy</button>
        <button className="trade-btn trade-sell" onClick={getAllInput}>Sell</button>
    </div>
}

function getAllInput(){
    const cn = document.querySelectorAll('.trade-input-items .trade-input')
    cn.forEach((a)=>{console.log(a.value)})
}