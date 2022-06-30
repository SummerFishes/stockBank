import React from "react";

export default function TradeType(){
    return <div class="trade-type" onClick={changeTrade}>
        <div data-value="traditional" className="trade-type-item active">Traditional Trade</div>
        <div data-value="nlp" className="trade-type-item">NLP Trade</div>
    </div>
}


function changeTrade(evt){
    const tradeTypeEl = evt.currentTarget
    const activeEl = tradeTypeEl.querySelector('.trade-type-item.active')
    if (activeEl) {     // 修改点击前激活的按钮A
        activeEl.classList.remove('active') //将A中的active类去除
        const type = activeEl.dataset.value //获取以“data”开头的属性值（即定义的data-value值）
        document.querySelector(`.trade-${type}`).style.display= 'none' //设置好data-value，就能将对应的div的display样式设为none(不显示)
    }
    // 修改点击的按钮B
    const itemEl = evt.target      
    itemEl.classList.add('active')  // 想B的类族中加入active
    const type = itemEl.dataset.value
    document.querySelector(`.trade-${type}`).style.display= 'flex' //显示点击B后需要显示的div
}