// 目前还是假数据
import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        zoomType: 'xy',
        backgroundColor: 'rgb(23, 32, 42)',
    },
    title: {
        text: 'Flow Analysis',
        align:'left',
        style:{'color': 'white'}
    },
    xAxis: [{ // x轴
        categories: ['01/12/2018', '', '', '01/15/2018', '', '','01/18/2018', '', 
                    '', '01/21/2018', '', '','01/24/2018','','','01/27/2018',
                    '','','01/30/2018'],
        crosshair: true,
        opposite:true,
        gridLineWidth:0.2,  // 
        tickInterval: 3,   // 显示间距
        labels: {
    style: {
    color: 'rgba(255,255,255,0.7)'
    }
    },
    }],
    yAxis: [{ // y轴(上)
        max:8000,
        min:-8000,
        tickInterval:1000,
        gridLineWidth:0.2,  // 
        labels: {
            // format: '{value}°C',
            step:1,
            style: {
                color: 'rgba(255,255,255,0.7)'
            }
        },
        title: {
            enabled:false,
        }
    }, { // y轴(下)
        max:8000,
        min:-8000,
        tickInterval:1000,
        labels: {
            // format: '{value}°C',
            step:1,
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            enabled:false,
        },
        visible:false
    }],
    tooltip: {
        shared: true        //柱状图和折线图共享一个悬浮框显示数据
    },
    plotOptions:{           //图的样式
        series:{
            marker:{        //点
                fillColor:'white',
                symbol:'square',
                radius:3
            },
            stacking: 'normal'  // 让正负柱状图没有间距
        },
        column:{
            // pointInterval: -1
            pointPadding:-0.2    // 柱间距
        }
    },
    legend: {               // 图例
        layout: 'horizontal',  //两个图例并列
        align: 'center',       //横向基位置
        verticalAlign: 'bottom', //纵向基位置
        x: 0,                 // x位置
        y: 0,               // y位置
        itemDistance: 100,
        floating: true,
        itemStyle:{'color':'rgba(255,255,255,0.7)', 'fontSize':'10px'},
        backgroundColor: 'rgba(23, 32, 42, 0.1)',
    },
    series: [{               //图的数据
        name: 'Buy',
        type: 'column',
        yAxis: 1,
        borderColor:'black',
        color: 'rgba(0, 176, 185, 1)',
        data: [2000, 1000, 500, 5000, 6000, 2000, 1000, 500, 5000, 6000, 2000, 1000, 500, 5000, 6000, 2000, 1000, 500, 5000, 6000],
        tooltip: {
            valueSuffix: ' mm'	//悬浮在柱上显示的数据格式
        },
    },{
        name: 'Sell',
        type: 'column',
        yAxis: 1,
        borderColor:'black',
        color: 'rgba(0, 176, 185, 0.5)',
        data: [-3000, -2000, -100, -4000, -4000, -3000, -2000, -100, -4000, -4000, -3000, -2000, -100, -4000, -4000, -3000, -2000, -100, -4000, -4000],
        tooltip: {
            valueSuffix: ' mm'	//悬浮在柱上显示的数据格式
        },
    },{
        name: 'Cumulative Net',
        type: 'line',
        color: 'rgba(173, 107, 11, 0.5)',
        data: [-1000, -1000, 400, 1000, -1000, -1000, 400, 1000, -1000, -1000, 400, 1000, -1000, -1000, 400, 1000, -1000, -1000, 400, 1000],
        tooltip: {
            valueSuffix: '°'
        }
    }]
}

export default function ChartView(){
    return <div id = "data-chart">
        <HighchartsReact 
          highcharts={Highcharts}
          options={options}
        />
    </div>
}