import React from 'react'
import {render} from 'react-dom'

import FreGroup from './component/freGroup'
import TraNLP from './component/TraNLP'
import '../css/style.css'

function init(){
    const containerE1 = document.querySelector('#container')
    render(<TraNLP />,containerE1)
    // render(<FreGroup />,containerE1)
}

init()
if (module.hot){
    module.hot.accept()
}