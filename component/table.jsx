import React, { useEffect, useState } from "react"
import SummaryItem from './summaryItem'
import {CaretDownOutlined,SearchOutlined} from '@ant-design/icons'

export default function Table(props) {
    let i = 0
    let data =props.tableData.value || []
    const [tableData,setData] = useState(data)
    const setVal = props.setVal
    let summary = props.tableData || {}
    useEffect(() => {
        setData(data)
    },[data])
    function clickHandler(evt){
        console.log(evt.currentTarget)
        const label = evt.currentTarget.getAttribute('label')
        const type = evt.currentTarget.getAttribute('type')
        if(type === 'asc')
            evt.currentTarget.setAttribute('type','desc')
        else
            evt.currentTarget.setAttribute('type','asc')
        console.log(type)
        const tablePost = {
            'gap' : props.fre,
            'type': label,
            'sortType': type
        }
        fetch(`/trade/showTable`,{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(tablePost)
            }).then(res => {
                if(res.ok){
                    return res.json()
                }
                return {value:[]}
            }).then(data => {
                console.log("data",data)
                setData(data.value)
                setVal(data.value)
            })
    }


    return <div className="data-table">
        <table>
            <thead>
                    <tr>
                        <th>Date <CaretDownOutlined type="asc" label="trade_time" onClick={e => clickHandler(e)}/></th>                       
                        <th>Client Name </th>
                        <th>Client Side <CaretDownOutlined type="asc" label="trade_type" onClick={e => clickHandler(e)}/></th>
                        <th>Ticker </th>
                        <th>RIC </th>
                        <th>Size <CaretDownOutlined type="asc" label="trade_size" onClick={e => clickHandler(e)}/></th>
                        <th>Price <CaretDownOutlined type="asc" label="trade_per_price" onClick={e => clickHandler(e)}/></th>
                        <th>Notional USD </th>
                        <th>Currency </th>
                        <th>Issuer </th>
                        <th>Salesperson </th>
                        <th>HT/PT <CaretDownOutlined type="asc" label="trade_method" onClick={e => clickHandler(e)}/></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item,index) => {
                            return <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.clientName}</td>
                                <td>{item.clientSide}</td>
                                <td>{item.ticker}</td>
                                <td>{item.ric}</td>
                                <td>{item.size}</td>
                                <td>{item.price}</td>
                                <td>{item.notional} USD</td>
                                <td>{item.currency}</td>
                                <td>{item.sector}</td>
                                <td>{item.salesperson}</td>
                                <td>{item.hp}</td>
                            </tr>
                        })
                    }
                </tbody>
        </table>
        <div className="data-summary">
            <div className="summary-items">
                <SummaryItem label="Total Buy" value={summary.totalBuy} className='total-buy'/>
                <SummaryItem label="Total Sell" value={summary.totalSell} className='total-sell'/>
                <SummaryItem label="Net Quantity" value={summary.quantity} className='net-quantity'/>
                <SummaryItem label="Total Buy Notional" value={summary.buyNotional} className='total-buy-notional'/>
                <SummaryItem label="Total Sell Notional" value={summary.sellNotional} className='total-sell-notional'/>
                <SummaryItem label="Net Notional" value={summary.netNotional} className='net-notional'/>   
                <SummaryItem label="Total Records" value={summary.records} className='records'/>        
            </div>
              
        </div>
    </div>
}
