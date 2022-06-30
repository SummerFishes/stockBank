export default function changeTrade(evt){
    const freGroup = evt.currentTarget
    const activeEl = freGroup.querySelector('.fre-item.active')
    if (activeEl) {     // 修改点击前激活的按钮A
        activeEl.classList.remove('active')
    }

    const freEl = evt.target      
    freEl.classList.add('active')
    return freEl.dataset.value
}

//done