import React, {useEffect, useMemo, useState} from "react"
import TradeView from './tradeView'
import TableView from "./tableView"


export default function App(props){
    const [fre, setFre] = useState('1D')
    const [tableData, setTableData] = useState({value: []})
    //const [chartData, setChartData] =useState({})

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
    }, [fre])

    function selectFre(fre) {
        setFre(fre)
    }

    return <>
        {/* <TradeView /> */}
        <TableView selectFre={selectFre} tableData={tableData}/>
    </>
}