import React, {useEffect, useState} from "react"
import TradeView from './tradeView'
import TableView from "./tableView"
import ChartView from "./chartView"

export default function App(props){
    const [fre, setFre] = useState('1D')
    const [tableData, setTableData] = useState({value: []})
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        fetch(`./data/${fre}.json`).then(res => {
            if(res.ok){
                return res.json()
            }
            return {value:[]}
        }).then(data => {
            setTableData(data)
        })
    }, [fre])

    // const tablePost = {
    //     'gap' : fre
    // }

    // useEffect(() => {
    //     fetch(`http://localhost:8081/trade/filter`,{
    //         method: 'POST',
    //         headers: new Headers({
    //             'Content-Type': 'application/json'
    //         }),
    //         body: JSON.stringify(tablePost)
    //     }).then(res => {
    //         if(res.ok){
    //             return res.json()
    //         }
    //         return {value:[]}
    //     }).then(data => {
    //         setTableData(data)
    //         console.log(data)
    //     })
    // }, [fre])

    useEffect(() => {
        fetch(`./data/${fre}.json`).then(res => {
            if(res.ok){
                return res.json()
            }
            return {value:[]}
        }).then(data => {
            setChartData(data)
        })
    }, [fre])

    function selectFre(fre) {
        setFre(fre)
    }

    return <>
        <TradeView /> 
        <TableView fre={fre} selectFre={selectFre} tableData={tableData}/>
        <ChartView chartData={chartData}/>
    </>
}