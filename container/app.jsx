import React, {useEffect, useState} from "react"
import { useDispatch,useSelector } from "react-redux"
import TradeView from './tradeView'
import TableView from "./tableView"
import ChartView from "./chartView"

import { setFrequency } from "../reducer/freReducer"
import { fetchTableData } from "../reducer/tableReducer"
import { fetchChartData } from "../reducer/chartReducer"

export default function App(props){
    const dispatch = useDispatch()
    const fre = useSelector(state => state.frequency.value)
    const tableData = useSelector(state => state.table.data)
    const chartData = useSelector(state => state.chart.data)

    useEffect(() => {
        selectFre(fre)
    }, [])

    function selectFre(fre){
        dispatch(setFrequency(fre))
        dispatch(fetchTableData(fre))
        dispatch(fetchChartData(fre))
    }

    
    return <>
        <TradeView fre={fre} selectFre={selectFre}/> 
        <TableView fre={fre} selectFre={selectFre} tableData={tableData}/>
        <ChartView chartData={chartData}/>
    </>
}