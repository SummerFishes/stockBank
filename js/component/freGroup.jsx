import React from 'react'
import {render} from "react-dom"
import '../../css/style.css'
// import '../trade.js'
export default function FreGroup(){
    function freHandler(evt){

        const tradeTypeE1 = evt.target  //点击事件获取的target
        const tradeTypeE2 = evt.currentTarget  //获取父元素的target
        const activeE1 = tradeTypeE2.querySelector('.fre-item.active') //获取动态组件的class
        if(tradeTypeE1.dataset.value===activeE1.dataset.value){//如果本就是动态组件，不做任何处理 
        } else{
            activeE1.classList.remove('active')//如果点击的是非动态组件，那么就将动态情况互换
            tradeTypeE1.classList.add('active')
            // deleteChild();
            // var table=document.getElementsByTagName("table")[0];
            //新增一行
            // add(tradeTypeE1.dataset.value);
        }

    }

    return <div className="fre-group" onClick={freHandler} >
    <span data-value="d1" className="fre-item active">1D</span>
    <span data-value="w1" className="fre-item">1W</span>
    <span data-value="w2" className="fre-item">2W</span>
    <span data-value="m1" className="fre-item">1M</span>
    <span data-value="m3" className="fre-item">3M</span>
    <span data-value="m6" className="fre-item">6M</span>
    <span data-value="y1" className="fre-item">1Y</span>
    <span data-value="yid" className="fre-item">YID</span>
</div>
}
// function init(){
//     const containerE1=document.querySelector('#container')
//     render(<FreGroup />,containerE1)
// }
// init()