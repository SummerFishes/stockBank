import React from "react"
import {render} from "react-dom"
import App from './container/app'
import './css/pratice.css'

function init(){
    const containerE1 = document.querySelector('#container')
    render(<App />, containerE1)
}

init()

if(module.hot){
    module.hot.accept()
}