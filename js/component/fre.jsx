import React from 'react'
import {render} from "react-dom"
import '../../css/style.css'
// import '../trade.js'
export default function APP(){
    return <div class="fre-group">
    <span data-value="d1" class="fre-item active">1D</span>
    <span data-value="w1" class="fre-item">1W</span>
    <span data-value="w2" class="fre-item">2W</span>
    <span data-value="m1" class="fre-item">1M</span>
    <span data-value="m3" class="fre-item">3M</span>
    <span data-value="m6" class="fre-item">6M</span>
    <span data-value="y1" class="fre-item">1Y</span>
    <span data-value="yid" class="fre-item">YID</span>
</div>
}
function init(){
    const containerE1=document.querySelector('#container')
    render(<APP />,containerE1)
}
init()