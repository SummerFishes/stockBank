import React from "react";

import TradeType from "../component/tradeType";
import TradeNlp from "../component/tradeNlp";
import TradeTraditional from "../component/tradeTraditional";

export default function TradeView(props){
    return  <div>
                <TradeType/>
                <TradeNlp/>
                <TradeTraditional/> 
                <div className="seprate-line"></div>
            </div>
}