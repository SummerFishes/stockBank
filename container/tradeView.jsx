import React from "react"
import TradeType from '../component/tradeType'
import TraditionalTrade from '../component/traditionalTrade'
import NLPTrade from '../component/nlpTrade'

export default function TradeView(props){
    function switchType(pre,cur) {
        if(pre) {
            document.querySelector(`.trade-${pre}`).style.display = 'none'
        }

        document.querySelector(`.trade-${cur}`).style.display = 'flex'

        if(props.selectType) {
            props.selectType(pre,cur)
        }
    }

    return <section>
        <TradeType selectType={switchType}/>
        <TraditionalTrade fre={props.fre} selectFre={props.selectFre}/>
        <NLPTrade />
        <div className="sperate-line"></div>
    </section>
}