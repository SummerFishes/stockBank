import React from 'react'
import {render} from "react-dom"
import '../../css/style.css'
export default function TraNLP(){
    function handler(evt){
        const tradeTypeE1 = evt.target  //点击事件获取的target
        const tradeTypeE2 = evt.currentTarget  //获取父元素的target
        const activeE1 = tradeTypeE2.querySelector('.trade-type-item.active') //获取动态组件的value
        if(activeE1){
            if(tradeTypeE1.dataset.value===activeE1.dataset.value){//如果本就是动态组件，不做任何处理
                
            } else {
                activeE1.classList.remove('active')//如果点击的是非动态组件，那么就将动态情况互换
                tradeTypeE1.classList.add('active')
            }
        }
    }
    return <div class="trade-type" onClick={handler}>
    <div data-value="tra" class="trade-type-item  active" id="trbtn">Traditionnal Trade</div>
    <div data-value="nlp" class="trade-type-item" id="nlpbtn">NLP Trade</div>
    </div>
}
// function init(){
//     const containerE1=document.querySelector('#container')
//     render(<FreGroup />,containerE1)
// }
// init()