import React,{useState} from "react";
import FreItem from "./freItem";

const ITEMS = [
    {value :'1D',label :'1D',active : true},
    {value :'1W',label :'1W',active : false},
    {value :'2W',label :'2W',active : false},
    {value :'1M',label :'1M',active : false},
    {value :'3M',label :'3M',active : false},
    {value :'6M',label :'6M',active : false},
    {value :'1Y',label :'1Y',active : false},
    {value :'YTD',label :'YTD',active : false}]

export default function FreGroup(props){

    const {selectFre, fre} = props
    //ITEMS[fre].active = true
    const [list, setList] = useState(ITEMS)

    function onClickHandler(evt) {
        const freE1 = evt.target

        const selectedVal = freE1.dataset.value

        ITEMS.forEach(item => {
            item.active =false
            if(item.value === selectedVal){
                item.active = true
            }
        })
        // ITEMS[fre].active = false
        // ITEMS[selectedVal].active = true        
        // setList(JSON.parse(JSON.stringify(ITEMS)))
        setList(ITEMS)


        if(selectFre){
            selectFre(freE1.dataset.value)
        }
    }

    return <div className="fre-group" onClick={onClickHandler}>
        {
            list.map(item => {
                return <FreItem key={item.value} {...item}/>
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