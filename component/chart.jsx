import React from "react"
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

export default function Chart(props){
    const chartData = props.chartData || []
    const options = {
        chart: {
            type: 'column',
            backgroundColor: '#17202A',
            borderRadius: 4 ,
            zoomType: 'x',
            style: {
                fontFamily: "sans-serif",
                fontSize: '12px'
            }
        },
        title: {
            text: 'Flow Analysis',
            align:"screenLeft",
            style: {
                fontSize: '15px',
                color:'white',               
            }
        },
        xAxis: {
            gridLineWidth: 0.8,
            gridLineColor:'#243343',
            opposite : true,
            lineWidth: false,
            // tickmarkPlacement: 'on',
            labels:{style:{color:'#96AEC5'}},
            //数据1
            categories: chartData.chartDate,
        },
        yAxis: {
            gridLineWidth: 0.8,
            gridLineColor:'#243343',
            title:{
                style:{color:'#96AEC5'},
                text: ''
            },
            labels:{
                style:{color:'#96AEC5'},
                formatter: function() {
                    return this.value
                }
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            borderWidth: 1,
            borderColor: '#AAA',
            crosshairs: true,
            shared: true
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            x: -100,
            style: {
                color: 'white'
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
                shadow: false,		//去阴影
                pointWidth: 50,  //设置柱子宽度
                dataLabels: {
                    //enabled: true,
                    // color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
                        textOutline: '1px 1px black',
                        fontFamily: "sans-serif",
                    }
                }
            },
            line:{
                lineWidth:1,
                marker:{
                    symbol: 'square',
                    fillColor:'white'
                    
                },
                lineColor:'#ed8b00',
            }
        },
        series: [
            {
                name: 'Buy',
                //数据2
                data: chartData.chartBuy,
                color:"#00B0B9",
                showInLegend: false
            },
            {
                name: 'Sell',
                //数据3
                data: chartData.chartSell,
                color:"#06848D",
                showInLegend: false
            },
            {
                name: 'Cumulative Net',
                type : 'line',
                //数据4
                data: chartData.chartTotal,
                color:"rgb(248, 140, 0)",
                showInLegend: true
            }
        ]
    }

    return <HighchartsReact
        highcharts={Highcharts}
        constructorType={'chart'}
        options={options}
        allowChartUpdate={true}
    />
}
