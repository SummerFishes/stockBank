import React from "react"
import Chart from '../component/chart'

export default function ChartView(props){
    return <>
        <Chart chartData={props.chartData}/>
    </>
}
