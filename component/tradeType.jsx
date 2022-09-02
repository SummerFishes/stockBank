import React,{useState,useEffect} from "react"
import TradeItem from "./tradeItem"

const ITEMS = [
    {value : 'traditional',label : 'Traditional Trade',active: true},
    {value : 'nlp',label : 'NLP Trade',active: false}
]

export default function TradeType(props){
    const {selectType} = props
    const [list, setList] = useState(ITEMS)
    
    function onClickHandler(evt){
        const tradeE1 = evt.target
        const cur = tradeE1.dataset.value
        const arr = ITEMS.map(item => {
            item.active = false
            if(item.value === cur){
                item.active = true
            }
            return item
        })
        let pre = ''
        if(ITEMS[0].value === cur) pre = ITEMS[1].value
        else pre = ITEMS[0].value 
        setList(arr)    
        if(selectType){
            selectType(pre,cur)
        }
    }

    return <div className = "trade-type" onClick={onClickHandler}>
        {
            list.map(item => {
                return <TradeItem key={item.value} {...item}/>
            })
        }
    </div>
 
    // function onClickHandler(evt){
    //     const curTarget = evt.currentTarget
    //     const target = evt.target

    //     const activeE1 = curTarget.querySelector('.trade-type-item.active')
    //     activeE1.classList.toggle('active')
    //     target.classList.toggle('active')
    //     props.selectType && props.selectType(activeE1.dataset.value,target.dataset.value)
    // }

    // return <div className="trade-type" onClick={onClickHandler}>
    //         <div data-value='traditional' className='trade-type-item active'>Traditional Trade</div>
    //         <div data-value='nlp'  className='trade-type-item'>NLP Trade</div>
    // </div>
}