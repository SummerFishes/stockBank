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