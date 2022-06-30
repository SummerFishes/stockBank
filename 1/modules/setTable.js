export default function setTableData(data){
    const dataTableEl = document.querySelector('.data-table')
    let content = ''
    console.log("data.value="+data.value)
    
    let totalBuy=0, totalSell=0, netQuantity=0, totalBuyNotional=0, totalSellNotional=0, notionalQUantity=0
    data.value.forEach(d => {
        content += `<tr>
                        <td>${d.date}</td>
                        <td>${d.clientName}</td>
                        <td>${d.clientSide}</td>
                        <td>${d.ticker}</td>
                        <td>${d.ric}</td>
                        <td>${d.size}</td>
                        <td>${d.price}</td>
                        <td>${d.notional}</td>
                        <td>${d.currency}</td>
                        <td>${d.sector}</td>
                        <td>${d.salesperson}</td>
                        <td>${d.hp}</td>
                    </tr>`
        const price = parseFloat(d.price.replace(/,/g, ""))
        const size = parseFloat(d.size)
        const notional = parseFloat(d.notional.replace(/,/g, ""))
        if (d.clientSide=="Buy"){
            totalBuy += price * size
            totalBuyNotional += notional * size
        }else{
            totalSell += price * size
            totalSellNotional += notional * size
        }
    })
    console.log(content)
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = content

    netQuantity = totalBuy - totalSell
    notionalQUantity = totalBuyNotional - totalSellNotional
    const summaryItems = document.querySelector('.summary-items')
    summaryItems.innerHTML = `
        <span>
            <label class="total-buy">Total Buy:</label>
            ${totalBuy}
        </span>
        <span>
            <label class="total-sell">Total Sell:</label>
            ${totalSell}
        </span>
        <span>
            <label class="net-quantity">Net Quantity:</label>
            ${netQuantity}
        </span>
        <span>
            <label class="total-buy-notional">Total Buy Notional:</label>
            ${totalBuyNotional}
        </span>
        <span>
            <label class="total-sell-notional">Total Sell Notional:</label>
            ${totalSellNotional}
        </span>
        <span>
            <label class="net-notional">Net Notional:</label>
            ${notionalQUantity}
        </span>
        <span class="records">
            <label>Records:</label>
            ${data.value.length}
        </span>
    `
    // console.log('totalBuy = '+ totalBuy)
    // summaryItems.children[0].outerText = `Total Buy: ${totalBuy}`
    // summaryItems.children[1].outerText = `Total Sell: ${totalSell}`
    // summaryItems.children[2].outerText = `Net Quantity: ${totalBuy-totalSell}`
    // summaryItems.children[3].outerText = `Total Buy Notional: ${totalBuyNotional}`
    // summaryItems.children[4].outerText = `Total Sell Notional: ${totalSellNotional}`
    // summaryItems.children[5].outerText = `Net Notional: ${totalBuyNotional-totalSellNotional}`
    // summaryItems.children[6].outerText = `Records: ${data.value.length}`
}