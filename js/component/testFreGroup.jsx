import React from "react";
import TestFreItem from "./testFreItem";

export default function testFreGroup(props){

    function clickHandler(evt){
        const curTarget = evt.curTarget
        const target = evt.target

        curTarget.querySelector('.fre-item.active')
        activeE1.classList.toggle('active')
        target.classList.toggle('active')

        if(props.selectFre){
            props.selectFre(target.dataset.value)
        }
    }

    return  <div className="fre-group" onClick={clickHandler}>
    <span className="fre-item active">1D</span>
    <TestFreItem value='1D' label='1D' active={true}/>
    <span className="fre-item">1W</span>
    <span className="fre-item">2W</span>
    <span className="fre-item">1M</span>
    <span className="fre-item">3M</span>
    <span className="fre-item">6M</span>
    <span className="fre-item">1Y</span>
    <span className="fre-item">YID</span>
</div>
}