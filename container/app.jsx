import React, {useEffect, useMemo, useState} from "react"
import TradeView from './tradeView'
import TableView from "./tableView"
import ChartView from "./chartView"

export default function App(props){
    const [fre, setFre] = useState('1D')
    const [tableData, setTableData] = useState({value: []})
    const [chartData, setChartData] =useState({})

    //const a = useMemo(() => {return 1 + fre}, [fre])

    useEffect(() => {
        fetch(`/pratice/data/${fre}.json`).then(res => {
            if(res.ok){
                return res.json()
            }
            return {value:[]}
        }).then(data => {
            setTableData(data)
        })

        //window.onresize = (evt) => {}

        // const func = () => {}
        // window.addEventListener('reszie', func)
        // return () => {
        //     //每次执行前，执行前一次return出来的东西
        //     window.removeEventListener('resize', func)
        // }
    }, [fre])

    useEffect(() => {
        fetch(`/pratice/data/${fre}.json`).then(res => {
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
        <ChartView data={chartData}/>
    </>
}