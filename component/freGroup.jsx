import React from "react";
import FreItem from "./freItem";

export default function FreGroup(props){

    const {selectFre} = props

    function onClickHandler(evt) {
        const freGroup = evt.currentTarget
        const freE1 = evt.target

        if(freGroup == freE1){
            return
        }

        const activeEl = freGroup.querySelector('.fre-item.active')
        if(activeEl){
            activeEl.classList.remove('active')
        }

        freE1.classList.add('active')

        if(selectFre){
            selectFre(freE1.dataset.value)
        }
    }

    return <div className="fre-group" onClick={onClickHandler}>
        {
            [{value :'1D',label :'1D',active : true},{value :'1W',label :'1W',active : false},
            {value :'2W',label :'2W',active : false},{value :'1M',label :'1M',active : false},
            {value :'3M',label :'3M',active : false},{value :'6M',label :'6M',active : false},
            {value :'1Y',label :'1Y',active : false},{value :'YTD',label :'YTD',active : false}].map(item => {
                return <FreItem value ={item.value} label ={item.label} active={item.active}/>
            })
        }

        {/* <FreItem value = '1D' label = '1D' active={true}/>
        <span data-value="1W" className="fre-item">1W</span>
        <span data-value="2W" className="fre-item">2W</span>
        <span data-value="1M" className="fre-item">1M</span>
        <span data-value="3M" className="fre-item">3M</span>
        <span data-value="6M" className="fre-item">6M</span>
        <span data-value="1Y" className="fre-item">1Y</span>
        <span data-value="YTD" className="fre-item">YTD</span> */}
    </div>

}