import changeTrade from "./tradeType.js"
import selectWindow from "./tradeWindow.js"
// import getChartData from "./tradeChart.js"
import getTableData from "./tradeTable.js"

const tradeType = document.querySelector('.trade-type')
tradeType.addEventListener("click", (evt) => {changeTrade(evt)});

const freGroup = document.querySelector('.fre-group')
freGroup.addEventListener("click", (evt) => {
    const v = selectWindow(evt)
    getTableData(v)
    // getChartData(v)
})

const buy = document.querySelector('.trade-btn.trade-buy')
buy.addEventListener("click", ()=>{
    const cn = document.querySelectorAll('.trade-input-items .trade-input')
    cn.forEach((a)=>{console.log(a.value)})
})

const sell = document.querySelector('.trade-btn.trade-sell')
sell.addEventListener("click", ()=>{
    const cn = document.querySelectorAll('.trade-input-items .trade-input')
    cn.forEach((a)=>{console.log(a.value)})
})

function init(){
    getTableData('1D')
}

init()
