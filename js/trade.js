import '../css/style.css';

//data初始值是d1的值，从接口获取
var data = [
    {
        'date': '2022.06.22', 'clientName': 'koko', 'ticker': 'Ticker',
        'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
        'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
    },
    {
        'date': '2022.06.23', 'clientName': 'lily', 'ticker': 'Ticker',
        'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
        'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Sell', 'size': '12'
    },
];
function tra_nlp(){
    // 获取点击事件的标签对象的value
    // 获取动态标签的value
    // 如果两个value值相同，不需要操作
    // 如果不同点击的是非动态标签，那么将两个active调换
    const tradeType = document.querySelector('.trade-type')
    tradeType.addEventListener('click',(evt)=>{
        const tradeTypeE1 = evt.target  //点击事件获取的target
        const tradeTypeE2 = evt.currentTarget  //获取父元素的target
        const activeE1 = tradeTypeE2.querySelector('.trade-type-item.active') //获取动态组件的value
        if(activeE1){
            if(tradeTypeE1.dataset.value===activeE1.dataset.value){//如果本就是动态组件，不做任何处理
                
            } else {
                activeE1.classList.remove('active')//如果点击的是非动态组件，那么就将动态情况互换
                tradeTypeE1.classList.add('active')
                
                console.log(tradeTypeE1.dataset.value)
                if(tradeTypeE1.dataset.value==="tra"){//如果点击事件是tra
                    document.querySelector(`.trade-tranditional`).style.display = 'flex';
                    document.querySelector(`.trade-nlp`).style.display = 'none';
                    // document.querySelector(`.trade-${type}`).style.display = 'none'
                } else  if(tradeTypeE1.dataset.value==="nlp"){//如果点击事件是nlp
                    document.querySelector(`.trade-nlp`).style.display = 'flex';
                    document.querySelector(`.trade-tranditional`).style.display = 'none';
                }
            }
        }
    })
    for(let i=0;i<data.length;i++){
        table.innerHTML+="<tr>"+"<td>"+data[i].date+"</td><td>"+data[i].clientName+"</td><td>"+data[i].clientSide+"</td><td>"+data[i].ticker+"</td><td>"
        +data[i].ric+"</td><td>"+data[i].size+"</td><td>"+data[i].price+"</td><td>"+data[i].notionalUSD+"</td><td>"+data[i].currency+"</td><td>"+data[i].issuerSector+"</td><td>"
        +data[i].salesperson+"</td><td>"+data[i].type+"</td></tr>";
    }
}
function add(tab){
    var table = document.getElementById("table");
    var trs = table.getElementsByTagName("tr");      
    for(var i = trs.length - 1; i > 0; i--) {//先删除所有的行
        table.deleteRow(i);
    }
    console.log(tab);   
    let tableData =[];
    let item={
        'date': '2022.06.22', 'clientName': 'koko', 'ticker': 'Ticker',
        'ric': 'RIC', 'price': 'Price', 'notionalUSD': '1,300.78', 'currency': 'Currency', 'issuerSector': 'Issuer Sector',
        'salesperson': 'Salesperson', 'type': 'HT', 'clientSide': 'Buy', 'size': '12'
    }
    //分标签显示，主要是tableData的数据从接口获取；然后赋值给data就好了
    if(tab==="d1"){
        tableData.push(item)
        data=tableData;
        console.log(tableData);
        for(let i=0;i<data.length;i++){
            table.innerHTML+="<tr>"+"<td>"+data[i].date+"</td><td>"+data[i].clientName+"</td><td>"+data[i].clientSide+"</td><td>"+data[i].ticker+"</td><td>"
            +data[i].ric+"</td><td>"+data[i].size+"</td><td>"+data[i].price+"</td><td>"+data[i].notionalUSD+"</td><td>"+data[i].currency+"</td><td>"+data[i].issuerSector+"</td><td>"
            +data[i].salesperson+"</td><td>"+data[i].type+"</td></tr>";
        }
    } else if(tab==="w1"){
        console.log("hahahha")
        item.date="2022-6-23";
        tableData.push(item);
        tableData.push(item);
        data=tableData;
        console.log(tableData)
        for(let i=0;i<data.length;i++){
            table.innerHTML+="<tr>"+"<td>"+data[i].date+"</td><td>"+data[i].clientName+"</td><td>"+data[i].clientSide+"</td><td>"+data[i].ticker+"</td><td>"
            +data[i].ric+"</td><td>"+data[i].size+"</td><td>"+data[i].price+"</td><td>"+data[i].notionalUSD+"</td><td>"+data[i].currency+"</td><td>"+data[i].issuerSector+"</td><td>"
            +data[i].salesperson+"</td><td>"+data[i].type+"</td></tr>";
        }
    }else if(tab==="w2"){
        console.log("hahahha")
        item.date="2022-6-23";
        tableData.push(item);
        tableData.push(item);
        tableData.push(item);
        data=tableData;
        console.log(tableData)
        for(let i=0;i<data.length;i++){
            table.innerHTML+="<tr>"+"<td>"+data[i].date+"</td><td>"+data[i].clientName+"</td><td>"+data[i].clientSide+"</td><td>"+data[i].ticker+"</td><td>"
            +data[i].ric+"</td><td>"+data[i].size+"</td><td>"+data[i].price+"</td><td>"+data[i].notionalUSD+"</td><td>"+data[i].currency+"</td><td>"+data[i].issuerSector+"</td><td>"
            +data[i].salesperson+"</td><td>"+data[i].type+"</td></tr>";
        }
    }else if(tab==="m1"){
        console.log("hahahha")
        item.date="2022-6-23";
        tableData.push(item);
        tableData.push(item);
        data=tableData;
        console.log(tableData)
        for(let i=0;i<data.length;i++){
            table.innerHTML+="<tr>"+"<td>"+data[i].date+"</td><td>"+data[i].clientName+"</td><td>"+data[i].clientSide+"</td><td>"+data[i].ticker+"</td><td>"
            +data[i].ric+"</td><td>"+data[i].size+"</td><td>"+data[i].price+"</td><td>"+data[i].notionalUSD+"</td><td>"+data[i].currency+"</td><td>"+data[i].issuerSector+"</td><td>"
            +data[i].salesperson+"</td><td>"+data[i].type+"</td></tr>";
        }
    }else if(tab==="m3"){
        console.log("hahahha")
        item.date="2022-6-23";
        tableData.push(item);
        data=tableData;
        console.log(tableData)
        for(let i=0;i<data.length;i++){
            table.innerHTML+="<tr>"+"<td>"+data[i].date+"</td><td>"+data[i].clientName+"</td><td>"+data[i].clientSide+"</td><td>"+data[i].ticker+"</td><td>"
            +data[i].ric+"</td><td>"+data[i].size+"</td><td>"+data[i].price+"</td><td>"+data[i].notionalUSD+"</td><td>"+data[i].currency+"</td><td>"+data[i].issuerSector+"</td><td>"
            +data[i].salesperson+"</td><td>"+data[i].type+"</td></tr>";
        }
    }else if(tab==="m6"){
        console.log("hahahha")
        item.date="2022-6-23";
        tableData.push(item);
        tableData.push(item);
        data=tableData;
        console.log(tableData)
        for(let i=0;i<data.length;i++){
            table.innerHTML+="<tr>"+"<td>"+data[i].date+"</td><td>"+data[i].clientName+"</td><td>"+data[i].clientSide+"</td><td>"+data[i].ticker+"</td><td>"
            +data[i].ric+"</td><td>"+data[i].size+"</td><td>"+data[i].price+"</td><td>"+data[i].notionalUSD+"</td><td>"+data[i].currency+"</td><td>"+data[i].issuerSector+"</td><td>"
            +data[i].salesperson+"</td><td>"+data[i].type+"</td></tr>";
        }
    }else if(tab==="y1"){
        console.log("hahahha")
        item.date="2022-6-23";
        tableData.push(item);
        tableData.push(item);
        tableData.push(item);
        data=tableData;
        console.log(tableData)
        for(let i=0;i<data.length;i++){
            table.innerHTML+="<tr>"+"<td>"+data[i].date+"</td><td>"+data[i].clientName+"</td><td>"+data[i].clientSide+"</td><td>"+data[i].ticker+"</td><td>"
            +data[i].ric+"</td><td>"+data[i].size+"</td><td>"+data[i].price+"</td><td>"+data[i].notionalUSD+"</td><td>"+data[i].currency+"</td><td>"+data[i].issuerSector+"</td><td>"
            +data[i].salesperson+"</td><td>"+data[i].type+"</td></tr>";
        }
    }
}

function date(){
    // 获取点击事件的value
    // 如果是动态的不做操作，如果是非动态的就将active加上，其他去掉active
    // 并把下面的表格数据换掉
    const tradeType = document.querySelector('.fre-group')
    tradeType.addEventListener('click',(evt)=>{
        const tradeTypeE1 = evt.target  //点击事件获取的target
        const tradeTypeE2 = evt.currentTarget  //获取父元素的target
        const activeE1 = tradeTypeE2.querySelector('.fre-item.active') //获取动态组件的class
        if(tradeTypeE1.dataset.value===activeE1.dataset.value){//如果本就是动态组件，不做任何处理 
        } else{
            activeE1.classList.remove('active')//如果点击的是非动态组件，那么就将动态情况互换
            tradeTypeE1.classList.add('active')
            // deleteChild();
            var table=document.getElementsByTagName("table")[0];
            //新增一行
            add(tradeTypeE1.dataset.value);
        }
    })
}
tra_nlp();
date();
$(document).ready(function() {  
    var chart = {
       type: 'column',
       backgroundColor:'#17202A',
       borderRadius: 4 ,
    };
    var title = {
       text: 'Flow Analysis' ,
       align: screenLeft,
       style:{color: 'white',fontSize: '15px' },
       margin:20,
    };   
 //    设置滚动条
     var scrollbar= {
         enabled: true
     };
    var xAxis = {
       categories: ['06/07/2022', '06/08/2022', '06/09/2022', '06/10/2022', '06/11/2022','06/12/2022','06/13/2022','06/14/2022', '06/15/2022', '06/16/2022', '06/17/2022', '06/18/2022','06/19/2022','06/20/2022' ,'06/21/2022', '06/22/2022', '06/23/2022', '06/24/2022', '06/25/2022','06/26/2022','06/27/2022'],
       className: 'axis-color',
       lineColor:'#243343',
       gridLineColor:'#243343',
       gridLineWidth:0.8,
       opposite : true,
       lineWidth: false,
     //   tickmarkPlacement:on,
     labels:{style:{color:'#96AEC5'},
      step:3,
    }
    };
    var yAxis = {
     className: 'axis-color',
     gridLineWidth: 0.8,
     gridLineColor:'#243343',
     title:{
         style:{color:'#96AEC5'}
       },
       labels:{style:{color:'#96AEC5'}}
    }
    var credits = {
       enabled: false
    };
    var legend={//设置图例的位置，但是怎么设置到图形里面
     // align:'right',
     // // verticalAlign:'top',
     // x:10,
     // y:0
     };
    var plotOptions = {//柱形图的边框去掉
        series:{
            pointPadding:0
        },
         column:{
             stacking:'normal',//堆叠类型，使两个摞到一起
             borderColor: "",//去边框
             shadow: false,		//去阴影
    //         // x轴每个点只用一个柱，则这个属性设置的是相邻的两个点的柱之间的间距。 
    //         // 如果x轴每个点有2个柱，则这个属性设置的是左侧点的右柱与右侧点的左柱之间的间距。 
    //         // 0.5的含义是，如果x轴长100px,则间距是100*0.5=50px 
    //         pointPadding : 0.05 ,
    //         // 如果x轴一个点有两个柱，则这个属性设置的是这两个柱的间距。 
    //         groupPadding : 0.5 ,
    // 　　　　 pointWidth: 20  //设置柱子宽度
         },
         
         line:{
             lineWidth:1,
             marker:{
                 symbol: 'square',
                 fillColor:'white'
                 
             },
             lineColor:'#ed8b00',
         }
     };
     // , {
     //         name: 'Jane',
     //         data: [2000, -2000, -3000, 2000, 1000, -2000, 5000]
     //     }, {
     //         name: 'Joe',
     //         data: [3000, 4000, 4000, -2000, 5000, 2000, 1000]
     //   }
    var colors =['#00B0B9'];//柱形的颜色
    var series= [{
             type:'column',
             name:'buy',
             data: [5000, 3000, 4000, 1300, 2200, 4000, 5000,2000,1000,1000,2000,6000,2000,1000,6000,2000,3000,4000,3000,1000,2000],
             color : "#00B0B9",
         },
         {
             type:'column',
             name:'sell',
             data: [-5000, -3000, -4000, -1300, -2200, -4000, -5000,-5000, -3000, -4000, -1300, -2200, -4000, -5000,-5000, -3000, -4000, -1300, -2200, -4000, -5000],
             color:'#06848D',
         },
         {
             type:'line',
             name:'Cumulative Net',
             data: [5000, 3000, 4000, 1300, 2200, 4000, 5000,5000, 3000, 4000, 1300, 2200, 4000, 5000,5000, 3000, 4000, 1300, 2200, 4000, 5000]
         }
    ];     
     var tooltip = {
     };
    var json = {};   
    json.chart = chart; 
    json.title = title; 
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.credits = credits;
    json.series = series;
    json.colors = colors;
    json.scrollbar = scrollbar;
    json.plotOptions = plotOptions;
    json.legend = legend;
    $('#container').highcharts(json);
 });